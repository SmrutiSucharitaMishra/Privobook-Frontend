/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
const Signup = (props) => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
    name: "",
  });
  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div className="signup">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const response = await fetch(
            "http://privobook-env.eba-imi9mm39.ap-south-1.elasticbeanstalk.com/api/auth/signup",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify({
                name: input.name,
                email: input.email,
                password: input.password,
              }),
            }
          );
          const json = await response.json();
          if (await json.success) {
            navigate("/login");
            props.showALert(await json.message, "success");
          } else {
            props.showALert(await json.message, "danger");
          }
        }}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            onChange={onChange}
            name="name"
            required
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={onChange}
            name="email"
            required
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            onChange={onChange}
            required
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
