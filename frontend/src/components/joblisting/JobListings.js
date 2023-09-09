// JobListings.js

import React from 'react';
import JobListing from './JobListing' 

const JobListings = ({ jobs }) => {
  return (
    <div className="bg-gray-200 min-h-screen p-4">
      <h1 className="text-2xl font-semibold text-center mb-4">Job Listings</h1>
      <div className="flex flex-wrap justify-center">
        {jobs.map((job, index) => (
          <JobListing key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobListings;
