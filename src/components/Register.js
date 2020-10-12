import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const submitRegister = (data) => {
    axios
      .post("localhost:2000/register", {
        data,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(data);
  };
  return (
    <form className="authentication" onSubmit={handleSubmit(submitRegister)}>
      <fieldset>
        <legend>Please fill the form to register</legend>
        <div className="form-group">
          <label htmlFor="exampleInputName">Name</label>
          <input
            type="name"
            className="form-control"
            id="exampleInputName"
            aria-describedby="nameHelp"
            placeholder="Enter name"
            name="name"
            ref={register}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            ref={register}
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
            ref={register}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>{" "}
        or <Link to="/login">Login</Link>
      </fieldset>
    </form>
  );
};

export default Register;
