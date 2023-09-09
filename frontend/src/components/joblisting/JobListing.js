  // JobListing.js

  import React from 'react';
  import { useNavigate } from 'react-router-dom';
  import {GoLocation} from "react-icons/go"
  import {RiBuilding2Fill} from "react-icons/ri"

  // {
  //   "id": 1,
  //   "title": "Frontend Developer",
  //   "location": "San Francisco, CA",
  //   "company": "Tech Solutions Inc.",
  //   "requirements": [
  //     "Bachelor's degree in Computer Science or related field",
  //     "Strong experience with React.js or Vue.js",
  //     "Familiarity with responsive web design",
  //     "Excellent problem-solving skills"
  //   ],
  //   "qualifications": [
  //     "2+ years of frontend development experience",
  //     "Proficiency in HTML, CSS, and JavaScript",
  //     "Experience with version control systems (e.g., Git)"
  //   ],
  //   "salary": "$80,000 - $100,000 per year",
  //   "description": "Join our team as a skilled Frontend Developer responsible for developing user interfaces and implementing interactive web features."
  // }
  const JobListing = ({ job }) => {
    const navigate = useNavigate()
    return (
      <div className="bg-white w-[80%] shadow-lg rounded-lg overflow-hidden m-4">
        <div className="px-6 py-4">
          <div className="font-bold text-3xl mb-2 p-5">{job.title}</div>
          <div className=' gap-3 font-semibold pl-8'>
            <p className="text-gray-700 flex gap-3  text-base"><GoLocation/>{job.location}</p>
            <p className="text-gray-700 flex gap-3 text-base"><RiBuilding2Fill/> {job.company}</p>
          </div>
        </div>
        <div className="px-6 py-4">
          <button onClick={() => navigate('/interview/' + job.id)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
            Take Interview
          </button>
        </div>
      </div>
    );
  };

  export default JobListing;
