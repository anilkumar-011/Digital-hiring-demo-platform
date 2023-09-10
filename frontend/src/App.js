import React, { useEffect, useState,useContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "chart.js/auto";
import Home from "./components/home";
import ResultsPage from "./components/result";
import Interview from "./components/interview";
import Login from "./components/login";
import JobListings from "./components/joblisting/JobListings";
import SignUp from "./components/signup";
import axios from "axios";

function Navigate() {
  const [jobs, setJobs] = useState([{}]);
  useEffect(() => {
    // Make a GET request to fetch interview results
    axios
      .get("http://127.0.0.1:8000/get_jd")
      .then((response) => {
        // Assuming the API response contains an array of interview results
        setJobs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching job descriptions:", error);
      });
  }, []);

  return (
    <div>
      {/* navbar */}
      <BrowserRouter>
        <div className=" w-full shadow-xl bg-gray-900 sticky p-5 justify-around text-center top-0 flex text-lg">
          <p className=" text-blue-400 text-2xl">Akatsuki</p>
          <div className=" text-white my-auto">
            <Link
              className="px-10 p-2 hover:border-b-2 hover:border-blue-600 active:text-blue-600"
              to={"/"}
            >
              Home
            </Link>
            <Link
              className="px-10 p-2 hover:border-b-2 hover:border-blue-600 active:text-blue-600"
              to={"/jobs"}
            >
              Job Positions
            </Link>
            <Link
              className="px-10 p-2 hover:border-b-2 hover:border-blue-600 active:text-blue-600"
              to={"/results"}
            >
              Results
            </Link>
            <Link
              className="px-10 p-2 hover:border-b-2 hover:border-blue-600 active:text-blue-600"
              to={"/login"}
            >
              Login
            </Link>
          </div>
        </div>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/interview/:id"
              element={<Interview jobs={jobs} />}
            ></Route>
            <Route path="/results" element={<ResultsPage />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/jobs" element={<JobListings jobs={jobs} />}></Route>
        </Routes>
      </BrowserRouter>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Akatsuki. All rights reserved.</p>
          <div className="mt-2">
            <a
              href="/privacy-policy"
              className="text-blue-300 hover:text-blue-400 mr-4"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-blue-300 hover:text-blue-400"
            >
              Terms of Service
            </a>
          </div>
          <div className="mt-4">
            <a
              href="https://www.facebook.com/akatsuki"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-400 mr-4"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com/akatsuki"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-400 mr-4"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/company/akatsuki"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <>
      <Navigate />
      {/* <Camera/> */}
    </>
  );
}

export default App;
