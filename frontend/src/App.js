import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import ResultsPage from "./components/result";
import Interview from "./components/interview";
import VideoRecorder from "./components/VideoRecorder";
import Login from "./components/login";
import JobListings from "./components/joblisting/JobListings";
import SignUp from "./components/signup";

const jobs = [
  {
    "jobTitle": "Frontend Developer",
    "location": "San Francisco, CA",
    "salary": "$80,000 - $100,000 per year",
    "description": "We are looking for a skilled Frontend Developer to join our team. You will be responsible for developing user interfaces and implementing interactive web features. Proficiency in HTML, CSS, and JavaScript is required.",
    "requirements": [
      "Bachelor's degree in Computer Science or related field",
      "Strong experience with React.js or Vue.js",
      "Familiarity with responsive web design",
      "Excellent problem-solving skills"
    ]
  },
  {
    "jobTitle": "Backend Engineer",
    "location": "New York, NY",
    "salary": "$90,000 - $120,000 per year",
    "description": "We are seeking an experienced Backend Engineer to work on our server-side applications. Your responsibilities will include designing, implementing, and maintaining APIs and databases.",
    "requirements": [
      "Bachelor's degree in Computer Science or related field",
      "Proficiency in server-side languages like Python, Node.js, or Ruby",
      "Experience with database systems (e.g., PostgreSQL, MongoDB)",
      "Knowledge of RESTful API design"
    ]
  },
  {
    "jobTitle": "Data Scientist",
    "location": "Chicago, IL",
    "salary": "$100,000 - $130,000 per year",
    "description": "We are looking for a Data Scientist to analyze large datasets and extract valuable insights. You will work on predictive modeling, data visualization, and machine learning projects.",
    "requirements": [
      "Master's or Ph.D. in a quantitative field (e.g., Statistics, Data Science)",
      "Strong programming skills in Python or R",
      "Experience with machine learning libraries (e.g., TensorFlow, scikit-learn)",
      "Ability to communicate data-driven insights effectively"
    ]
  },
  {
    "jobTitle": "UI/UX Designer",
    "location": "Seattle, WA",
    "salary": "$75,000 - $95,000 per year",
    "description": "We are seeking a creative UI/UX Designer to create visually appealing and user-friendly interfaces. Your role will involve wireframing, prototyping, and collaborating with cross-functional teams.",
    "requirements": [
      "Bachelor's degree in Design, HCI, or related field",
      "Proficiency in design tools (e.g., Adobe XD, Sketch)",
      "Strong portfolio showcasing UI/UX projects",
      "Understanding of user-centered design principles"
    ]
  }
]
function Navigate() {
  return (
    <div>
      {/* navbar */}
      <BrowserRouter>
        <div className=" w-full shadow-xl bg-gray-900 sticky p-5 justify-around text-center top-0 flex text-lg">
          <p className=" text-blue-400 text-2xl">Akatsuki</p>
          <div className=" text-white my-auto">
            <Link className="px-10 p-2 hover:border-b-2 hover:border-blue-600 active:text-blue-600" to={'/'}>Home</Link>
            <Link className="px-10 p-2 hover:border-b-2 hover:border-blue-600 active:text-blue-600" to={'/jobs'}>Job Positions</Link>
            <Link className="px-10 p-2 hover:border-b-2 hover:border-blue-600 active:text-blue-600" to={'/results'}>Results</Link>
            <Link className="px-10 p-2 hover:border-b-2 hover:border-blue-600 active:text-blue-600" to={'/login'}>Login</Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/interview" element={<Interview />}></Route>
          <Route path="/results" element={<ResultsPage />}></Route>
          <Route path="/video" element={<VideoRecorder />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/jobs" element={<JobListings jobs={jobs} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};



function App() {
  return (
    <>
      <Navigate />
      {/* <Camera/> */}
    </>

  );
}

export default App;
