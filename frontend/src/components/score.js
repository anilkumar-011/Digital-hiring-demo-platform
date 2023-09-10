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
// const response1 = 
// {
//     'eyecontact': 20,
//     'face_matched': true,
//     'jd_score': 30,
//     'leetcode': {
//       'easy': 1 / 12 ,
//       'medium': 14 / 240 ,
//       'hard': 16 / 100 ,
//       'active days': 45 ,
//     },
//     'github': {
//       'username': 'xyz',
//       'last commit': 12,
//     },
//   }
  const response ={
    "_id": {
      "$oid": "64fd59a394e2ec9baba16696"
    },
    "job_d": "1",
    "results": true,
    "eye_contact_time": 49,
    "Jd_score": 43.17,
    "leetcode": {
      "problem_sloved": [
        "Easy112/714Beats92.7",
        "Medium24/1510Beats61.0",
        "Hard0/627Not enough data"
      ],
      "active days": "41"
    },
    "github": {
      "username": "Pavan Kumar Settem",
      "contributions": "150"
    }
  }

  const res = response.leetcode.problem_sloved;

    const extractedValues = res.map((str) => {
    const match = str.match(/(\w+\d+\/\d+)/);
    return match ? match[0] : null;
    });

    console.log(extractedValues);


    let easyValue = (extractedValues[0].slice(4).split("/"))
    let easy = parseInt(easyValue[0])/parseInt(easyValue[1])

    let mediumValue = (extractedValues[1].slice(6).split("/"))
    let medium = parseInt(mediumValue[0])/parseInt(mediumValue[1])

    let hardValue = (extractedValues[2].slice(4).split("/"))
    let hard = parseInt(hardValue[0])/parseInt(hardValue[1])

let face_score = 5;
if(true){let face_score = 5}else{let face_score=0}
const overallScore = (response.eye_contact_time/60 * 20)+(face_score)+(response.Jd_score/100 * 50)+(response.github.contributions/500 *5)+(response.leetcode["active days"]/100 *20)
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
        data: [easy*100, 100-easy],
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
        data: [hard*100, 100-hard],
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
        data: [medium*100, 100-medium],
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
        data: [response.eye_contact_time/60 * 20, face_score, response.Jd_score/100 * 50, response.github.contributions/500 *5, response.leetcode["active days"]/100 *20],
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

const Score = () => {
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
        {/* <div className="scoreMainCon">
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
            
        </div> */}
        

        


      
    </div>
  );
};

export default Score;
