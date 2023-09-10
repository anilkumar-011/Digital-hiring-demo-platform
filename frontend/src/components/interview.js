import React, { useEffect, useState } from 'react';
import axios from 'axios';



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
  const [jobIndex, setJobIndex] = useState(0)
  useEffect(() => {
    const jobUrl = window.location.href.split('/');
    setJobIndex(jobUrl[jobUrl.length - 1]);
    setJob(jobs[jobIndex]);

  })
  //  resume upload
  const [resume, setResume] = useState(null);
  const [uploadResume, setUploadResume] = useState(true)

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };

  const handleUploadClick = () => {
    if (!resume) {
      alert("Please upload a resume before proceeding.");
    } else {
      // Perform your upload logic here
      setUploadResume(false);
    }
  };

  // video upload
  const [video, setVideo] = useState(null);
  const [uploadVideo, setUploadVideo] = useState(false);

  const handleVideoUpload = (e) => {
    const selectedVideo = e.target.files[0];
    setVideo(selectedVideo);
  };

  const handleVideoUploadClick = async () => {
    if (!video) {
      alert("Please upload a video before proceeding.");
    } else {
      // Perform your upload logic here

      try {
        const formData = new FormData();
        formData.append("video", video);

        // Replace with your API endpoint
        const response = await axios.post("http://127.0.0.1:8000/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            
          },
        });

        if (response.status === 200) {
          console.log("Video uploaded successfully:", response.data);
          setUploadVideo(true);
        } else {
          console.error("Failed to upload video.");
        }
      } catch (error) {
        console.error("Error uploading video:", error);
      }
      setUploadVideo(true);
    }
  };




  return (
    <>
      {
        uploadResume && (
          <div className="min-h-screen text-center bg-gray-200 p-4">
            <div className="bg-stone-200 container mx-auto p-4 mt-8 border-2 border-gray-400 shadow-xl w-[60%] h-96 rounded-2xl">
              <h2 className="text-2xl font-semibold text-center mb-4">
                Upload Your Resume
              </h2>
              <div className="flex flex-col w-[40%] mx-auto my-10">
                <img
                  src="https://img.freepik.com/free-vector/modern-resume-template_23-2147836674.jpg?size=626&ext=jpg&ga=GA1.2.1807596171.1678537696&semt=ais"
                  alt="Resume upload"
                  className="w-40 h-40 rounded-full mx-auto mb-4"
                />
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleResumeUpload}
                  className="border p-2 rounded-md"
                />
                {resume && (
                  <p className="mt-4">Uploaded Resume: {resume.name}</p>
                )}

                <button
                  className="w-80 text-xl bg-blue-400 p-4 mt-28 mb-10 rounded-xl"
                  onClick={handleUploadClick}
                >
                  Upload Resume and Next
                </button>

              </div>
              {console.log(resume)}
            </div>
          </div>
        )
      }
      {
        !uploadResume && (
          <div className="min-h-screen bg-gray-200 p-4">
            <div className="bg-stone-200 container mx-auto p-4 mt-8 border-2 border-gray-400 shadow-xl w-[60%] h-96 rounded-2xl">
              <h2 className="text-2xl font-semibold text-center mb-4">
                Upload Your Video
              </h2>
            <img
              src="https://img.freepik.com/free-vector/image-upload-concept-illustration_114360-996.jpg?size=626&ext=jpg&ga=GA1.2.1807596171.1678537696&semt=ais"
              alt="Resume upload"
              className="w-40 h-40 rounded-full mx-auto mb-4"
            />
              <div className="flex flex-col w-[40%] mx-auto my-10">
                <input
                  type="file"
                  accept=".mp4,.mov,.avi"
                  onChange={handleVideoUpload}
                  className="border p-2 rounded-md"
                />
                {video && (
                  <p className="mt-4">Uploaded Video: {video.name}</p>
                )}

                <button
                  className="w-80 text-xl bg-blue-400 p-4 my-4 rounded-xl"
                  onClick={handleVideoUploadClick}
                >
                  Upload Video and Next
                </button>
                {!video && uploadVideo && (
                  <p className="text-red-500">Please upload a video.</p>
                )}
              </div>
              {console.log(video)}
            </div>
          </div>
        )
      }

    </>
  )
}
export default Interview;
