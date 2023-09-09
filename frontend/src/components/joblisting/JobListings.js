import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoLocation } from 'react-icons/go';
import { RiBuilding2Fill } from 'react-icons/ri';
import JobListing from './JobListing';
import "../../components/sample.css"

const JobListings = ({ jobs }) => {
  const navigate = useNavigate();
  const [selectedJob, setSelectedJob] = useState(null);

  const handleTakeInterview = (jobId) => {
    navigate(`/interview/${jobId}`);
  };

  const handleMoreDetails = (job) => {
    setSelectedJob(job);
  };

  const closeDetails = () => {
    setSelectedJob(null);
  };

  return (
    <div className="bg-gray-200 min-h-screen p-4">
      {/* <h1 className="text-3xl text-center mb-4 font-bold">Job Listings</h1> */}
      <div className="mx-auto "> 
      {/* flex flex-wrap justify-center */}
        {jobs.map((job, index) => (
          <div className='JobListingsCon  bg-white w-[90%] shadow-lg rounded-lg overflow-hidden m-4 JobListingsCon1'>
            <div key={index} className="JobListingsCon1">
              <div className="px-6 py-4">
                <div className="font-bold text-3xl mb-2 p-5">{job.title}</div>
                <div className="gap-3 font-semibold pl-8">
                  <p className="text-gray-700 flex gap-3 text-base">
                    <GoLocation />
                    {job.location}
                  </p>
                  <p className="text-gray-700 flex gap-3 text-base">
                    <RiBuilding2Fill /> {job.company}
                  </p>
                </div>
              </div>
              <div className="px-6 py-4">
                <button
                  onClick={() => handleTakeInterview(job.id)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mr-4"
                >
                  Take Interview
                </button>
                <button
                  onClick={() => handleMoreDetails(job)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full"
                >
                  More Details
                </button>
              </div>
            </div>
            <img className='px-6 py-4 my-auto JobListingsConImage' src={job.url}></img>


          </div>
          
        ))}
      </div>
      {selectedJob && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-[60%] shadow-lg rounded-lg overflow-hidden relative">
            <div className="px-6 py-4">
              <div className="font-bold text-2xl mb-2 flex justify-center items-center mb-10">{selectedJob.title} Details</div>
              <div className="text-base text-gray-700">
                <p>
                  <strong>Requirements:</strong>
                </p>
                <ul>
                  {selectedJob.requirements.map((requirement, index) => (
                    <li key={index}>{requirement}</li>
                  ))}
                </ul>
                <p>
                  <strong>Qualifications:</strong>
                </p>
                <ul>
                  {selectedJob.qualifications.map((qualification, index) => (
                    <li key={index}>{qualification}</li>
                  ))}
                </ul>
                <p>
                  <strong>Salary:</strong> {selectedJob.salary}
                </p>
                <p>
                  <strong>Description:</strong> {selectedJob.description}
                </p>
              </div>
            </div>
            <div className="px-6 py-4 flex justify-center items-center">
              <button
                onClick={closeDetails}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full "
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobListings;
