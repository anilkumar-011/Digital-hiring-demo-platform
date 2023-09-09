import React, { useEffect, useState } from 'react';
import VideoRecorder from './VideoRecorder';


function Interview(jobs) {
  const [job, setJob] = useState(
    {
    "id": 0,
    "jobTitle": "Frontend Developer",
    "location": "San Francisco, CA",
    "salary": "$80,000 - $100,000 per year",
    "description": "We are looking for a skilled Frontend Developer to join our team. You will be responsible for developing user interfaces and implementing interactive web features. Proficiency in HTML, CSS, and JavaScript is required.",
    "requirements": [
      "Bachelor's degree in Computer Science or related field",
      "Strong experience with React.js or Vue.js",
      "Familiarity with responsive web design",
      "Excellent problem-solving skills"
    ]
  }
  )
  useEffect(() => {
    const jobUrl = window.location.href.split('/');
    const jobIndex = jobUrl[jobUrl.length - 1];
    setJob(jobs[jobIndex]);

  })
  //  resume upload
  const [resume, setResume] = useState(null);
  const [uploadResume, setUploadResume] = useState(true)

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };

  // video upload
  const [isVideoOn, setIsVideoOn] = useState(false);

  const toggleVideo = () => {
    setIsVideoOn((prevState) => !prevState);
  };

  return (
    <>
      {
        uploadResume && (
          <div className="min-h-screen bg-gray-200 p-4">
            
            <div className="container mx-auto p-4 mt-8">
              <h2 className="text-xl font-semibold mb-4">Upload Your Resume</h2>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleResumeUpload}
                className="border p-2 rounded-md"
              />
              {resume && (
                <p className="mt-4">
                  Uploaded Resume: {resume.name}
                </p>
              )}

              <button onClick={() => { setUploadResume(false) }}> Upload Resume and Next</button>

              {console.log(resume)}
            </div>
          </div>
        )
      }

      {
        !uploadResume && (
          <div className="min-h-screen flex flex-col items-center justify-center p-10">
            <div className="mb-4 text-center">
              <h1 className="text-3xl font-semibold mb-2">Video Interview Room</h1>
              <p className="text-gray-500">Join the interview session</p>
            </div>
            <div className="mb-4 w-[80%]">
              {!isVideoOn ? (
                <div className="h-64 flex items-center justify-center border border-gray-300 rounded-lg">
                  <p className="text-3xl text-gray-600">All The Best</p>
                </div>
              ) : (
                <div className=" border border-gray-3 rounded-lg relative">
                  <VideoRecorder />
                </div>
              )}
            </div>
            <button
              onClick={toggleVideo}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              {isVideoOn ? 'Turn Off Video' : 'Turn On Video'}
            </button>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              End Interview
            </button>
          </div>
        )
      }

    </>
  )
}
export default Interview;
