import React, { useState, useRef, useEffect } from "react";
import RecordRTC from "recordrtc";

const VideoRecorder = () => {
  const [recording, setRecording] = useState(false);
  const [videoSrc, setVideoSrc] = useState(null);
  const [recorder, setRecorder] = useState(null);
  const [showControls, setShowControls] = useState(false);
  const [jobIndex, setJobIndex] = useState(false);
  const videoElement = useRef(null);

  useEffect(() => {
    const jobUrl = window.location.href.split('/');
    setJobIndex(jobUrl[jobUrl.length - 1]);

  })
  console.log(jobIndex)
  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });

    const newRecorder = new RecordRTC(stream, {
      type: "video",
      mimeType: "video/webm",
    });

    newRecorder.startRecording();

    setRecording(true);
    setRecorder(newRecorder);
    setShowControls(false);

    // Set the video stream as the source for the live preview
    videoElement.current.srcObject = stream;
  };

  const stopRecording = () => {
    if (recorder) {
      recorder.stopRecording(() => {
        const videoBlob = recorder.getBlob();
        const videoUrl = URL.createObjectURL(videoBlob);
        setVideoSrc(videoUrl);
        setRecording(false);
        setShowControls(true);
      });
    }
  };

  const saveRecording = async () => {
    if (recorder) {
      try {
        const blob = await recorder.getBlob();
        const formData = new FormData();
        formData.append("video", blob, localStorage.getItem('email')+'-'+jobIndex+".mp4");

        const response = await fetch("http://127.0.0.1:8000/upload", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          console.log("Video sent to the server successfully.");
        } else {
          console.error("Failed to send video to the server.");
        }
      } catch (error) {
        console.error("Error sending video to the server:", error);
      }
    }
  };

  const retakeRecording = () => {
    if (recorder) {
      recorder.reset();
      setVideoSrc(null);
      setShowControls(false);
    }
  };

  return (
    <div className=" mx-auto my-auto w-[80%] p-2">
      <video
        ref={videoElement}
        src={videoSrc}
        className="border rounded-lg mx-auto w-[50%] h-[30%]"
        controls
      />
      <div className="mt-4 mx-auto flex justify-center">
        {recording ? (
          <button
            onClick={stopRecording}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg mr-2"
          >
            Stop Recording
          </button>
        ) : (
          <button
            onClick={startRecording}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Start Recording
          </button>
        )}
        {showControls && (
          <>
            <button
              onClick={retakeRecording}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg ml-2"
            >
              Retake
            </button>
            <button
              onClick={saveRecording}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg ml-2"
            >
              Save Recording
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default VideoRecorder;
