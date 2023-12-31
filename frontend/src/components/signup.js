import React, { Component } from "react";
import axios from "axios";

class SignupPage extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    qualification: "",
    github: "",
    linkedin: "",
    leetcode: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      qualification: this.state.qualification,
      github: this.state.github,
      linkedin: this.state.linkedin,
      leetcode: this.state.leetcode,
    };
    console.log(data)
    axios.post("http://127.0.0.1:8000/signup", data)
      .then((response) => {
        console.log(response, data);
        if (response.status === 201) {
          window.location.href = "/login";
        }
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  render() {
    return (
      <div className="min-h-screen items-center justify-center bg-gray-100 p-1">
        <div className="font-semibold bg-gradient-to-br mt-28 from-blue-200 to-purple-200 p-8 rounded-lg shadow-md w-[60%] mx-auto">
          <div className="text-center mb-4 p-20 float-right">
            <h2 className="text-4xl font-semibold">Sign Up</h2>
            <img
              src="https://img.freepik.com/free-vector/vacant-job-promo-with-join-us-message_52683-61756.jpg?size=626&ext=jpg&ga=GA1.1.1807596171.1678537696&semt=ais"
              alt="User Avatar"
              className="w-40 h-40 rounded-full mx-auto mb-4"
            />
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="flex gap-10">
              <div>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-600">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    className="w-full p-2 border rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-600">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    className="w-full p-2 border rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-600">
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className="w-full p-2 border rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="qualification" className="block text-gray-600">
                    Qualification
                  </label>
                  <input
                    name="qualification"
                    type="text"
                    placeholder="Enter your qualification"
                    value={this.state.qualification}
                    onChange={this.handleChange}
                    className="w-full p-2 border rounded-md"
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
                    name="github"
                    type="text"
                    placeholder="Enter your github url"
                    value={this.state.github}
                    onChange={this.handleChange}
                    className="w-full p-2 border rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="linkedin" className="block text-gray-600">
                    Linked in
                  </label>
                  <input
                    name="linkedin"
                    type="text"
                    placeholder="Enter your linkedin url"
                    value={this.state.linkedin}
                    onChange={this.handleChange}
                    className="w-full p-2 border rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="leetcode" className="block text-gray-600">
                    Leetcode
                  </label>
                  <input
                    name="leetcode"
                    type="text"
                    placeholder="Enter your leetcode url"
                    value={this.state.leetcode}
                    onChange={this.handleChange}
                    className="w-full p-2 border rounded-md"
                    required
                  />
                </div>
              </div>
            </div>
          
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
  }
}

export default SignupPage;