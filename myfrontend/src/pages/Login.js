import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../util";
import { ToastContainer } from "react-toastify";

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;

    if (!email || !password) {
      return handleError("Both fields are required");
    }

    try {
      const url = "http://localhost:3000/api/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });

      if (response.ok) {
        const result = await response.json();
        const token = result.token;

        // Save the JWT token to local storage
        localStorage.setItem("token", token);

        handleSuccess("Login Successful");
        setTimeout(() => {
          navigate("/RestaurantSearch");
        }, 3000);
      } else {
        handleError("Invalid credentials");
      }
    } catch (error) {
      handleError("Server error");
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Enter your email.."
            value={loginInfo.email}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Enter your password.."
            value={loginInfo.password}
          />
        </div>
        <button>Login</button>
        <span>
          Does not have an account?
          <Link to="/Register">SignUp</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;
