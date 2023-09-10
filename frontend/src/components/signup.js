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
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <h1>Signup</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <input
            name="qualification"
            type="text"
            placeholder="Qualification"
            value={this.state.qualification}
            onChange={this.handleChange}
          />
          <input
            name="github"
            type="text"
            placeholder="Github"
            value={this.state.github}
            onChange={this.handleChange}
          />
          <input
            name="linkedin"
            type="text"
            placeholder="LinkedIn"
            value={this.state.linkedin}
            onChange={this.handleChange}
          />
          <input
            name="leetcode"
            type="text"
            placeholder="Leetcode"
            value={this.state.leetcode}
            onChange={this.handleChange}
          />
          <button type="submit">Signup</button>
        </form>
      </div>
    );
  }
}

export default SignupPage;