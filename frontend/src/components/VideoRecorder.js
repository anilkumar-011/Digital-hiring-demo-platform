// src/components/VideoRecorder.js

import React, { Component } from "react";
import RecordRTC from "recordrtc";


class VideoRecorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recording: false,
      videoSrc: null,
      recorder: null,
      showControls: false,
    };
    this.videoElement = React.createRef();
  }

  startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });

    const recorder = new RecordRTC(stream, {
      type: "video",
      mimeType: "video/webm",
    });

    recorder.startRecording();

    this.setState({
      recording: true,
      recorder,
      showControls: false,
    });
  };

  stopRecording = () => {
    const { recorder } = this.state;
    recorder.stopRecording(() => {
      const videoBlob = recorder.getBlob();
      const videoUrl = URL.createObjectURL(videoBlob);
      this.setState({
        recording: false,
        videoSrc: videoUrl,
        showControls: true,
      });
    });
  };

  SaveRecording = async () => {
    const { recorder } = this.state;

    try {
      const blob = await recorder.getBlob(); // Get the video blob from the recorder
      const formData = new FormData();
      formData.append("video", blob,'video.mp4');

      const response = await fetch("http://127.0.0.1:8000/upload", {
        method: "POST",
        body: formData,
      }).catch((err)=>{
        console.log(err)
      })

      if (response.ok) {
        console.log("Video sent to the server successfully.");
      } else {
        console.error("Failed to send video to the server.");
      }
    } catch (error) {
      console.error("Error sending video to the server:", error);
    }
  };

  retakeRecording = () => {
    this.state.recorder.reset();
    this.setState({
      videoSrc: null,
      showControls: false,
    });
  };

  replayRecording = () => {
    this.videoElement.current.play();
  };

  render() {
    const { recording, videoSrc, showControls } = this.state;

    return (
      <div className="p-4 min-h-screen flex flex-col items-center justify-center">
        <div className="mb-4">
          <h1 className="text-2xl font-semibold mb-2">Video Interview Room</h1>
          <p className="text-gray-500">Join the interview session</p>
        </div>
        <video
          ref={this.videoElement}
          src={videoSrc}
          className="border rounded-lg"
          controls
        />
        <div className="mt-4">
          {recording ? (
            <button
              onClick={this.stopRecording}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg mr-2"
            >
              Stop Recording
            </button>
          ) : (
            <button
              onClick={this.startRecording}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Start Recording
            </button>
          )}
          {showControls && (
            <>
              <button
                onClick={this.retakeRecording}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg ml-2"
              >
                Retake
              </button>
              <button
                onClick={this.replayRecording}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg ml-2"
              >
                Replay
              </button>
              <button
                onClick={this.SaveRecording}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg ml-2"
              >
                Save Recording
              </button>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default VideoRecorder;
