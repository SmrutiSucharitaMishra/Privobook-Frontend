/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
const Login = (props) => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div className="login">
      <form
        onSubmit={async (e) => {
          const response = await fetch(
            "http://privobook-env.eba-imi9mm39.ap-south-1.elasticbeanstalk.com/api/auth/login",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify({
                email: input.email,
                password: input.password,
              }),
            }
          );
          const json = await response.json();
          const token = await json.token;
          if (token && await  json.success) {
            localStorage.setItem("token", token);
            navigate("/");
            props.showALert(await json.message, "success");
          } else {
            props.showALert(await json.message, "danger");
          }
        }}
      >
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
            name="password"
            required
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
