import React, { useEffect, useState } from 'react';
import VideoRecorder from './VideoRecorder';

const JobDescriptionPage = ({ job }) => {
  const [resume, setResume] = useState(null);

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };

  return (
    <div className="min-h-screen bg-gray-200 p-4">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">{job.jobTitle}</h1>
        <p className="text-gray-600">{job.location}</p>
        <p className="text-gray-600">{job.salary}</p>
        <p className="mt-4">{job.description}</p>
        <h2 className="text-xl font-semibold mt-4">Requirements:</h2>
        <ul className="list-disc list-inside mt-2">
          {job.requirements.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>
      </div>
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
      </div>
    </div>
  );
};

const VideoInterviewPage = ({ jobs }) => {
  const [isVideoOn, setIsVideoOn] = useState(false);

  const toggleVideo = () => {
    setIsVideoOn((prevState) => !prevState);
  };

  useEffect(() => {
    let job_url = window.location.href.split('/');
    let job_index = job_url[job_url.length - 1];
    let job = jobs[job_index];
    console.log(job, job.jobTitle);
  }, [jobs]);

  return (
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
  );
};


function Interview(jobs){
  return(
    <>
    <JobDescriptionPage/>
    </>
  )
}
export default Interview;
