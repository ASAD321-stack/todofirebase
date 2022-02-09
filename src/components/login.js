import React from "react";
import { useState } from "react";
import { auth } from "../firebase_config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link,useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate =useNavigate();

  const login = async (e) => {
    const { email, password } = user;
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={login}>
        <h3>Sign In</h3>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
        <p className="forgot-password text-right">
          <Link to="/signup">Signup</Link>
        </p>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
