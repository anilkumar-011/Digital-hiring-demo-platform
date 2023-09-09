// src/components/Login.js

import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Implement your login logic here
    if (email === 'user@example.com' && password === 'password') {
      // Successful login, you can redirect or set a token here
      setError('');
      alert('Logged in successfully!');
    } else {
      // Display an error message for unsuccessful login
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-4">
          <img
            src="https://via.placeholder.com/80"
            alt="User Avatar"
            className="w-20 h-20 rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-semibold">Login</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded-md bg-gray-700 text-white"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border rounded-md bg-gray-700 text-white"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          {error && (
            <div className="text-red-500 mb-4 text-center">{error}</div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-400">Or login with:</p>
          <div className="flex justify-center mt-2">
            <button  className="bg-blue-500 text-white px-4 py-2 rounded-md mx-2 hover:bg-blue-600">
              Register
            </button>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
