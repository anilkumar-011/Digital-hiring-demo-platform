// src/components/ResultsPage.js

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Line, Bar, Pie, Doughnut } from "react-chartjs-2";



const ResultsPage = () => {
  const Score = (response) => {
    const [hero, setHero]=useState(null)

    const res = response.leetcode[0];

    const extractedValues = res.map((str) => {
      const match = str.match(/(\w+\d+\/\d+)/);
      return match ? match[0] : null;
    });

    // console.log(extractedValues);


    let easyValue = (extractedValues[0].slice(4).split("/"))
    let easy = parseInt(easyValue[0]) / parseInt(easyValue[1])

    let mediumValue = (extractedValues[1].slice(6).split("/"))
    let medium = parseInt(mediumValue[0]) / parseInt(mediumValue[1])

    let hardValue = (extractedValues[2].slice(4).split("/"))
    let hard = parseInt(hardValue[0]) / parseInt(hardValue[1])

    let face_score = 5;
    if (true) { let face_score = 5 } else { let face_score = 0 }
    const overallScore = (response.eye_contact_time / 60 * 20) + (face_score) + (response.Jd_score / 100 * 50) + (response.github[1] / 500 * 5) + (response.leetcode[1] / 100 * 20)
    // console.log(overallScore)
    const responseDataEasy = {
      labels: ["Easy", "Total Easy"],
      datasets: [
        {
          label: "Leetcode Score",
          backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 206, 86, 0.6)'],
          borderColor: "rgba(0,0,0,0)",
          borderWidth: 1,
          hoverBackgroundColor: ['rgba(75, 192, 192, 0.8)', 'rgba(255, 206, 86, 0.8)'],
          hoverBorderColor: "rgba(0,0,0,0)",
          data: [easy * 100, 100 - easy],
        },
      ],
    };
    const responseDataHard = {
      labels: ["Hard", "Total Hard"],
      datasets: [
        {
          label: "Leetcode Score",
          backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 206, 86, 0.6)'],
          borderColor: "rgba(0,0,0,0)",
          borderWidth: 1,
          hoverBackgroundColor: ['rgba(75, 192, 192, 0.8)', 'rgba(255, 206, 86, 0.8)'],
          hoverBorderColor: "rgba(0,0,0,0)",
          data: [hard * 100, 100 - hard],
        },
      ],
    };
    const responseDataMedium = {
      labels: ["Medium", "Total Medium"],
      datasets: [
        {
          label: "Leetcode Score",
          backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 206, 86, 0.6)'],
          borderColor: "rgba(0,0,0,0)",
          borderWidth: 1,
          hoverBackgroundColor: ['rgba(75, 192, 192, 0.8)', 'rgba(255, 206, 86, 0.8)'],
          hoverBorderColor: "rgba(0,0,0,0)",
          data: [medium * 100, 100 - medium],
        },
      ],
    };
    const overallScoreData = {
      labels: ["Eye Conatct", "Face Matched", "JD Score", "Github", "Leetcode"],
      datasets: [
        {
          label: "OverallScore Analysis",
          backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(31, 7, 246, 0.41)'],
          borderColor: "rgba(0,0,0,0)",
          borderWidth: 1,
          hoverBackgroundColor: ['rgba(75, 192, 192, 0.8)', 'rgba(255, 99, 132, 0.8)', 'rgba(255, 206, 86, 0.8)', 'rgba(54, 162, 235, 0.8)', "rgba(31, 7, 246, 1.41)"],
          hoverBorderColor: "rgba(0,0,0,0)",
          data: [response.eye_contact_time / 60 * 20, face_score, response.Jd_score / 100 * 50, response.github[1] / 500 * 5, response.leetcode[1] / 100 * 20],
        },
      ],
    };
    const optionsMedium = {
      plugins: {
        title: {
          display: true,
          text: "Medium Level", // Set the title text here
          font: {
            size: 24,
          },
        },
      },
    };
    const optionsEasy = {
      plugins: {
        title: {
          display: true,
          text: "Easy Level", // Set the title text here
          font: {
            size: 24,
          },
        },
      },
    };
    const optionsHard = {
      plugins: {
        title: {
          display: true,
          text: "Hard Level", // Set the title text here
          font: {
            size: 24,
          },
        },
      },
    };


    return (
      <div className="scoreMain">
        <div className="text-center text-3xl font-semibold mt-3">Score Summary</div>

        <div className="scoreMainCon">

          <div className="scoreMainConLeet pl-10">
            <div className="my-auto">
              <h1 className="text-4xl font-bold mb-15">Overall Score Analysis</h1>
              <div className="p-5">
                <h1 className="text-6xl font-bold mb-15"> {overallScore.toFixed(2)}/100 </h1>
              </div>
            </div>
            <div className="chart-container ml-auto">
              <Doughnut
                data={overallScoreData}
              />

            </div>
          </div>
        </div>
        <h1 className="text-center  text-3xl font-bold mt-10 ">Leetcode Stats</h1>
        <div className="scoreMainCon">

          <div className="scoreMainConLeet">

            <div className="chart-container ml-auto">

              <Pie
                data={responseDataEasy}
                options={optionsEasy}
              />

            </div>
            <div className="chart-container ml-auto">
              <Pie data={responseDataMedium} options={optionsMedium} />

            </div>
            <div className="chart-container ml-auto">
              <Pie data={responseDataHard} options={optionsHard} />

            </div>
          </div>
        </div>
      </div>
    );
  };

  const [i, setI] = useState(0)
  const [scoreview, setScoreView] = useState(false)
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
    <div>
      {!scoreview && (
        <div className="min-h-screen bg-gray-100 p-4">
          <div className="container mx-auto">
            <h1 className="text-2xl font-semibold mb-4">Interview Results</h1>
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
                    onClick={() => {
                      setScoreView(true)
                      setI(index)
                      console.log(index,results[index])
                    }}
                  >
                    {" "}
                    Know more
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>)}
        {scoreview && <Score response={results[i]} />}
    </div>
  );
};

export default ResultsPage;
