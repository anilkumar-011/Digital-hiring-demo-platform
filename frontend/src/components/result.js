// src/components/ResultsPage.js

import React from 'react';

const ResultsPage = () => {
  // Replace this with your actual interview results data
  const interviewResults = [
    {
      candidate: 'John Doe',
      score: 85,
      feedback: 'Great communication skills and technical knowledge.',
    },
    {
      candidate: 'Jane Smith',
      score: 92,
      feedback: 'Outstanding performance in all aspects.',
    },
    // Add more interview results as needed
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Interview Results</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {interviewResults.map((result, index) => (
            <div
              key={index}
              className="bg-white p-4 border border-gray-300 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-semibold">{result.candidate}</h2>
              <p className="text-gray-600">Score: {result.score}%</p>
              <p className="mt-2">{result.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
