import React from "react";
import "chart.js/auto";
import "../components/sample.css";

import { Line, Bar, Pie,Doughnut } from "react-chartjs-2";

// const data = {
//   labels: ["Apples", "Bananas", "Cherries", "Grapes"],
//   datasets: [
//     {
//       label: "Number of Fruits",
//       backgroundColor: "rgba(75,192,192,1)",
//       borderColor: "rgba(75,192,192,1)",
//       borderWidth: 1,
//       hoverBackgroundColor: "rgba(75,192,192,0.4)",
//       hoverBorderColor: "rgba(75,192,192,1)",
//       data: [10, 5, 8, 12],
//     },
//   ],
// };
const scores=localStorage.getItem('scores')
console.log(scores)
const response = 
{
    'eyecontact': 20,
    'face_matched': true,
    'jd_score': 30,
    'leetcode': {
      'easy': 1 / 12 ,
      'medium': 14 / 240 ,
      'hard': 16 / 100 ,
      'active days': 45 ,
    },
    'github': {
      'username': 'xyz',
      'last commit': 12,
    },
  }
let face_score = 5;
if(response.face_matched){let face_score = 5}else{let face_score=0}
const overallScore = (response.eyecontact/60 * 20)+(face_score)+(response.jd_score/100 * 50)+(response.github["last commit"]/20 *5)+(response.leetcode["active days"]/100 *20)
console.log(overallScore)
  const responseDataEasy = {
    labels: ["Easy", "Total Easy"],
    datasets: [
      {
        label: "Leetcode Score",
        backgroundColor: ['rgba(75, 192, 192, 0.6)','rgba(255, 206, 86, 0.6)'],
        borderColor: "rgba(0,0,0,0)",
        borderWidth: 1,
        hoverBackgroundColor: ['rgba(75, 192, 192, 0.8)', 'rgba(255, 206, 86, 0.8)'],
        hoverBorderColor: "rgba(0,0,0,0)",
        data: [response.leetcode.easy*100, 100-response.leetcode.easy],
      },
    ],
  };
  const responseDataHard = {
    labels: ["Hard", "Total Hard"],
    datasets: [
      {
        label: "Leetcode Score",
        backgroundColor: ['rgba(75, 192, 192, 0.6)','rgba(255, 206, 86, 0.6)'],
        borderColor: "rgba(0,0,0,0)",
        borderWidth: 1,
        hoverBackgroundColor: ['rgba(75, 192, 192, 0.8)', 'rgba(255, 206, 86, 0.8)'],
        hoverBorderColor: "rgba(0,0,0,0)",
        data: [response.leetcode.hard*100, 100-response.leetcode.hard],
      },
    ],
  };
  const responseDataMedium = {
    labels: ["Medium", "Total Medium"],
    datasets: [
      {
        label: "Leetcode Score",
        backgroundColor: ['rgba(75, 192, 192, 0.6)','rgba(255, 206, 86, 0.6)'],
        borderColor: "rgba(0,0,0,0)",
        borderWidth: 1,
        hoverBackgroundColor: ['rgba(75, 192, 192, 0.8)', 'rgba(255, 206, 86, 0.8)'],
        hoverBorderColor: "rgba(0,0,0,0)",
        data: [response.leetcode.medium*100, 100-response.leetcode.medium],
      },
    ],
  };
  const overallScoreData = {
    labels: ["Eye Conatct", "Face Matched","JD Score","Github","Leetcode"],
    datasets: [
      {
        label: "OverallScore Analysis",
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(54, 162, 235, 0.6)','rgba(31, 7, 246, 0.41)'],
        borderColor: "rgba(0,0,0,0)",
        borderWidth: 1,
        hoverBackgroundColor: ['rgba(75, 192, 192, 0.8)', 'rgba(255, 99, 132, 0.8)', 'rgba(255, 206, 86, 0.8)', 'rgba(54, 162, 235, 0.8)',"rgba(31, 7, 246, 1.41)"],
        hoverBorderColor: "rgba(0,0,0,0)",
        data: [response.eyecontact/60 * 20, face_score, response.jd_score/100 * 50, response.github["last commit"]/20 *5, response.leetcode["active days"]/100 *20],
      },
    ],
  };

const Score = () => {
  return (
    <div className="scoreMain">
        <div className="text-center text-3xl font-semibold mt-3">Score Summary</div>
        <div className="scoreMainCon">
            <div className="scoreMainConIn">
                <h1>Eye Contact : {response.eyecontact}</h1>
            </div>
            <div className="scoreMainConIn">
                {response.face_matched? <h1>Face Matched : True</h1> : <h1>Face Matched : False</h1>}
            </div>
        </div>
        <div className="scoreMainCon">
            <div className="scoreMainConIn">
                <h1>JD Score : {response.jd_score}</h1>
            </div>
            <div className="scoreMainConIn">
                <h1>User Name : {response.github.username}</h1>
                <h1>Last Commit : {response.github["last commit"]}</h1>
            </div>
            
        </div>
        <div className="scoreMainCon">
            
        <div className="scoreMainConLeet">
            <div className="chart-container ml-auto">
                
                <Pie
                    data={responseDataEasy}
                    // options={{
                    // scales: {
                    //     y: {
                    //     beginAtZero: true,
                    //     },
                    // },
                    // }}
                />
                
            </div>
            <div className="chart-container ml-auto">
            <Pie data={responseDataMedium}/>
                
            </div>
            <div className="chart-container ml-auto">
            <Pie data={responseDataHard}/>
                
            </div>
        </div>
        </div>

        <div className="scoreMainCon">
        
        <div className="scoreMainConLeet">
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


      
    </div>
  );
};

export default Score;
