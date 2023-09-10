// src/components/ResultsPage.js

import React, { Children, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Score from "../components/score";

export const MyContext = React.createContext();

const ResultsPage = () => {

  const navigate = useNavigate();

  const [results, setResults] = useState([
    {
      job_d: "1",
      username: "Pavan kumar Settem",
      company: "Tech Solutions Inc.",
      results: true,
      eye_contact_time: 0,
      Jd_score: 42.63,
      leetcode: [
         [
          "Easy112/714Beats92.7",
          "Medium24/1510Beats61.0",
          "Hard0/627Not enough data"
        ],
        "41",
      ],
      github: [
         "Pavan Kumar Settem",
         "154",
    ],
    },
  ]);
  const viewresults=(result)=>{
    return  <MyContext.Provider value={result}>{Children}</MyContext.Provider>
  }
  useEffect(() => {
    // Make a GET request to fetch interview results
    axios
      .get("http://127.0.0.1:8000/get_user_results")
      .then((response) => {
        // Assuming the API response contains an array of interview results
        setResults(response.data);
        console.log(results);
      })
      .catch((error) => {
        console.error("Error fetching interview results:", error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Interview Results</h1>
        <MyContext.Provider value={results}>
          <Score /> 
        </MyContext.Provider>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {results.map((result, index) => (
            
            <div
              key={index}
              className="bg-white p-4 border border-gray-300 rounded-lg shadow-md"
            >
              {/* <p className=" m-4 text-4xl font-normal">{result.company}</p>
              <div className=" float-left">
                <p> Job Discription Score : {result.Jd_score}</p>
                <p> Eye contact in seconds: {result.eye_contact_time}</p>
              </div> */}
              <button
                className=" font-medium float-right mx-4 p-4 bg-blue-500 text-white rounded-lg"
                onClick={()=>{
                  viewresults(result)
                  navigate('/score')
                }}
              >
                {" "}
                Know more
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
