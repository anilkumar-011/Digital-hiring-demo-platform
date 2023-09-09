// src/components/SignUp.js

import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [qualification, setQualification] = useState('');
  const [github, setGithub] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [leetcode, setLeetcode] = useState('');
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleQualificationChange = (e) => {
    setQualification(e.target.value);
  };

  const handleGithubChange = (e) => {
    setGithub(e.target.value);
  };
  const handleLinkedinChange = (e) => {
    setLinkedin(e.target.value);
  };
  const handleLeetcodeChange = (e) => {
    setLeetcode(e.target.value);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a user object with the form data
    const user = {
      name,
      email,
      password,
      qualification,
      github,
      linkedin,
      leetcode,
    };
    console.log(user)
    // Send user data to the API
    // try {
    //   const formData = new FormData();
    //   formData.append('photo', photo); // Append the selected photo to the form data
    //   formData.append('user', JSON.stringify(user)); // Append user data as JSON string

    //   const response = await axios.post('https://127.0.0.1:8000/signup', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data', // Important for file upload
    //     },
    //   });

    //   if (response.status === 201) {
    //     // Successful user registration
    //     console.log('User registered successfully:', response.data);

    //     // Reset form fields and error message
    //     setName('');
    //     setEmail('');
    //     setPassword('');
    //     setQualification('');
    //     setGithub('');
    //     setLinkedin('');
    //     setLeetcode('');
    //     setPhoto(null);
    //     setError('');

    //     // Optionally, you can perform additional actions like redirecting the user
    //   } else {
    //     console.error('Failed to register user:', response.status);
    //     setError('Failed to register user');
    //   }
    // } catch (error) {
    //   console.error('Error registering user:', error);
    //   setError('Error registering user');
    // }
  };

  return (
    <div className="min-h-screen items-center justify-center bg-gray-100 p-1">
      <div className=" font-semibold bg-gradient-to-br from-blue-200 to-purple-200 p-8 rounded-lg shadow-md w-[70%] mx-auto">
        <div className="text-center mb-4 float-right p-20 ">
          <h2 className="text-4xl font-semibold">Sign Up</h2>
          <img
            src="https://img.freepik.com/free-vector/vacant-job-promo-with-join-us-message_52683-61756.jpg?size=626&ext=jpg&ga=GA1.1.1807596171.1678537696&semt=ais"
            alt="User Avatar"
            className="w-40 h-40 rounded-full mx-auto mb-4"
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className=' flex gap-10'>
            <div>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter your name"
                  value={name}
                  onChange={handleNameChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="qualification" className="block text-gray-600">
                  Qualification
                </label>
                <input
                  type="text"
                  id="qualification"
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter your qualification"
                  value={qualification}
                  onChange={handleQualificationChange}
                  required
                />
              </div>
            </div>
            <div>
              <div className="mb-4">
                <label htmlFor="github" className="block text-gray-600">
                  Github
                </label>
                <input
                  type="text"
                  id="github"
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter your github url"
                  value={github}
                  onChange={handleGithubChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="linkedin" className="block text-gray-600">
                  Linked in
                </label>
                <input
                  type="text"
                  id="linkedin"
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter your linkedin url"
                  value={linkedin}
                  onChange={handleLinkedinChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="leetcode" className="block text-gray-600">
                  Leetcode
                </label>
                <input
                  type="text"
                  id="leetcode"
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter your leetcode url"
                  value={leetcode}
                  onChange={handleLeetcodeChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="photo" className="block text-gray-600">
              Photo
            </label>
            <input
              type="file"
              id="photo"
              accept="image/*"
              onChange={handlePhotoChange}
            />
          </div>
          {error && (
            <div className="text-red-500 mb-4 text-center">{error}</div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
