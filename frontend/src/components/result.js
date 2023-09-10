// src/components/ResultsPage.js

import React, { useEffect,useState } from 'react';
import Score from './score';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const ResultsPage = () => {
  const navigate = useNavigate()

  const [results, setResults] = useState([]);

  useEffect(() => {
    // Make a GET request to fetch interview results
    axios.get('http://127.0.0.1:8000/get_user_results')
      .then((response) => {
        // Assuming the API response contains an array of interview results
        setResults(response.data);
      })
      .catch((error) => {
        console.error('Error fetching interview results:', error);
      });
  }, []);



  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Interview Results</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-white p-4 border border-gray-300 rounded-lg shadow-md"
            >
              <p className=' m-4 text-4xl font-normal'>{result.company}</p>
              <div className=' float-left'>
                <p> Status : {result.status}</p> 
                <p> Score: {result.score}</p>
              </div>
              <button className=' font-medium float-right mx-4 p-4 bg-blue-500 text-white rounded-lg'
                onClick={() => {
                  localStorage.setItem('eyecontact', result.eyecontact)
                  localStorage.setItem('username', result.username)
                  localStorage.setItem('company', result.company)
                  localStorage.setItem('score', result.score)
                  localStorage.setItem('performance', result.performance)
                  navigate('/score')
                }}> Know more</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
