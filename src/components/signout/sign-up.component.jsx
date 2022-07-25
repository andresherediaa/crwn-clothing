import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";
import { useState } from "react";

const SignUp = ({ signUp }) => {
  const [userCredentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = userCredentials;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...userCredentials,  [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = userCredentials;

    if (password !== confirmPassword) {
      console.log("password problems diferentes");
      return;
    }

    signUp({
      email,
      password,
      displayName,
    });

    setCredentials({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (user) => dispatch(signUpStart(user)),
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
