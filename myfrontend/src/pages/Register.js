import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../util";
import { ToastContainer } from "react-toastify";

function Register() {
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const copySignupInfo = { ...signupInfo };
    copySignupInfo[name] = value;
    setSignupInfo(copySignupInfo);
  };
  console.log("signupInfo->", signupInfo);

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      return handleError("Empty are required");
    }
    try {
      const url = "http://localhost:3000/api/auth/register";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupInfo),
      });
      if (response.ok) {
        console.log("ok");
        handleSuccess("Account Created Successfully");
        setTimeout(() => {
          navigate("/Login");
        }, 6000);
      } else if (!response.ok) {
        console.log("Error");
        handleError("User already exists");
      }
      const result = await response.json();
      console.log("FUll response object", result);
      // const { success, message } = result;
      // console.log("succes->", success);
      // console.log("meesage->", message);
      // if (success) {
      //   handleSuccess(message);
      //   setTimeout(() => {
      //     navigate("/Login");
      //   }, 1000);
      // }
      // console.log(result);
    } catch (error) {
      handleError(error);
    }
  };
  return (
    <div className="container">
      <h1>Register Account</h1>
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            autoFocus
            placeholder="Enter your name.."
            value={signupInfo.name}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Enter your email.."
            value={signupInfo.email}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Enter your password.."
            value={signupInfo.password}
          />
        </div>
        <button>Signup</button>
        <span>
          Already have an account?
          <Link to="/Login">Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Register;
