import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(localStorage.getItem('username'));

    // Implement your login logic here
    if (username === 'user@example.com' && password === 'password') {
      setError('');
      alert('Logged in successfully!');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen items-center justify-center bg-gray-100 p-1">
  <div className="font-semibold bg-gradient-to-br m-6 from-blue-200 to-purple-200 p-8 rounded-lg shadow-md w-[60%] mx-auto">
    <div className="text-center mb-4 p-20 float-right">
      <h2 className="text-4xl font-semibold">Login</h2>
      <img
        src="https://img.freepik.com/free-vector/vacant-job-promo-with-join-us-message_52683-61756.jpg?size=626&ext=jpg&ga=GA1.1.1807596171.1678537696&semt=ais"
        alt="User Avatar"
        className="w-40 h-40 rounded-full mx-auto mb-4"
      />
    </div>
    <form onSubmit={handleSubmit}>
      <div className="flex gap-10">
        <div className=' w-[70%] mx-auto mt-32'>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full p-2 border rounded-md"
              placeholder="Enter your username"
              value={username}
              onChange={handleUsernameChange}
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
        </div>
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
      <p className="text-gray-400">Or create an account:</p>
      <div className="flex justify-center mt-2">
        <button
          onClick={() => {
            navigate('/signup');
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mx-2 hover:bg-blue-600"
        >
          Register
        </button>
      </div>
    </div>
  </div>
</div>

  );
};

export default Login;
