import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <form className="authentication">
      <fieldset>
        <legend>Please login to access the website</legend>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>{" "}
        or <Link to="/register">Register</Link>
      </fieldset>
    </form>
  );
};

export default Login;
