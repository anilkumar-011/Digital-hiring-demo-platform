// src/components/VideoInterviewPage.js

import React, { useState } from 'react';



const VideoInterviewPage = () => {
  const [isVideoOn, setIsVideoOn] = useState(false);
  const [isAudioOn, setIsAudioOn] = useState(false);

  const toggleVideo = () => {
    setIsVideoOn((prevState) => !prevState);
  };

  const toggleAudio = () => {
    setIsAudioOn((prevState) => !prevState);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="mb-4">
        <h1 className="text-2xl font-semibold mb-2">Video Interview Room</h1>
        <p className="text-gray-500">Join the interview session</p>
      </div>

      <div className="mb-4">
        <div className="w-96 h-64 border border-gray-300 rounded-lg relative">
          {isVideoOn && (
            <video
              className="w-full h-full object-cover rounded-lg"
              autoPlay
              muted
            ></video>
          )}
          {!isVideoOn && (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">Video is turned off</p>
            </div>
          )}
        </div>
        <button
          onClick={toggleVideo}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          {isVideoOn ? 'Turn Off Video' : 'Turn On Video'}
        </button>
      </div>

      <div className="mb-4">
        <div className="w-96 h-16 border border-gray-300 rounded-lg relative">
          {isAudioOn && (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">Audio is on</p>
            </div>
          )}
          {!isAudioOn && (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">Audio is muted</p>
            </div>
          )}
        </div>
        <button
          onClick={toggleAudio}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          {isAudioOn ? 'Mute Audio' : 'Unmute Audio'}
        </button>
      </div>

      <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
        End Interview
      </button>
    </div>
  );
};

export default VideoInterviewPage;
