// JobListing.js

import React from 'react';
import { useNavigate } from 'react-router-dom';


const JobListing = ({ job }) => {
  const navigate=useNavigate()
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{job.jobTitle}</div>
        <p className="text-gray-700 text-base">{job.location}</p>
        <p className="text-gray-700 text-base">{job.salary}</p>
        <p className="text-gray-800 text-base mt-4">{job.description}</p>
        <ul className="list-disc ml-6 mt-2 text-gray-800">
          {job.requirements.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>
      </div>
      <div className="px-6 py-4">
        <button onClick={()=>navigate('/interview')} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
          Take Interview
        </button>
      </div>
    </div>
  );
};

export default JobListing;
