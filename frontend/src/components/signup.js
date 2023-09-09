// src/components/SignUp.js

import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [qualification, setQualification] = useState('');
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
    };

    // Send user data to the API
    try {
      const formData = new FormData();
      formData.append('photo', photo); // Append the selected photo to the form data
      formData.append('user', JSON.stringify(user)); // Append user data as JSON string

      const response = await axios.post('https://127.0.0.1:8000/signup', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Important for file upload
        },
      });

      if (response.status === 201) {
        // Successful user registration
        console.log('User registered successfully:', response.data);

        // Reset form fields and error message
        setName('');
        setEmail('');
        setPassword('');
        setQualification('');
        setPhoto(null);
        setError('');

        // Optionally, you can perform additional actions like redirecting the user
      } else {
        console.error('Failed to register user:', response.status);
        setError('Failed to register user');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      setError('Error registering user');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-semibold">Sign Up</h2>
        </div>
        <form onSubmit={handleSubmit}>
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
