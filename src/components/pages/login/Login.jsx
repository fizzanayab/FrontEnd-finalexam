import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { signUpSchema, signInSchema } from "./validationSchema"; 
import SocialMedia from "./../../utilities/icons/SocialMedia";
import { useDispatch } from 'react-redux';
import { login } from '../../features/authSlice'; 
import "./Login.css";

const Login = () => {
  const [signUpMode, setSignUpMode] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch(); 

  // Formik setup for SignUp
  const formikSignUp = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      localStorage.setItem("user", JSON.stringify(values));
      setSignUpMode(false);
      alert("Registration successful! Please sign in.");
    },
  });

  // Formik setup for SignIn
  const formikSignIn = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: signInSchema,
    onSubmit: (values) => {
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (storedUser && storedUser.username === values.username && storedUser.password === values.password) {
        alert("Login successful!");
        dispatch(login(storedUser)); 
        navigate("/"); 
      } else {
        alert("Invalid credentials. Please try again.");
      }
    },
  });

  return (
    <div className={`login-container ${signUpMode ? "sign-up-mode" : ""}`}>
      {/* Sign In Container */}
      <div className="form-container sign-in-container">
        <form className="sign-in-form" onSubmit={formikSignIn.handleSubmit}>
          <h2 className="title">Sign in</h2>
          <div className="input-field">
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={formikSignIn.values.username}
              onChange={formikSignIn.handleChange}
              onBlur={formikSignIn.handleBlur}
            />
            {formikSignIn.touched.username && formikSignIn.errors.username && (
              <div className="error">{formikSignIn.errors.username}</div>
            )}
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formikSignIn.values.password}
              onChange={formikSignIn.handleChange}
              onBlur={formikSignIn.handleBlur}
            />
            {formikSignIn.touched.password && formikSignIn.errors.password && (
              <div className="error">{formikSignIn.errors.password}</div>
            )}
          </div>
          <button className="btnforum solid" type="submit">Login</button>
          <p className="social-text">Or Sign in with social platforms</p>
          <div className="social-media">
            <SocialMedia icon_name="facebook-f" size="24px" color="#3b5998" />
            <SocialMedia icon_name="twitter" size="24px" color="#1DA1F2" />
            <SocialMedia icon_name="google" size="24px" color="#DB4437" />
            <SocialMedia icon_name="linkedin-in" size="24px" color="#0077b5" />
          </div>
        </form>
      </div>

      {/* Sign Up Container */}
      <div className="form-container sign-up-container">
        <form className="sign-up-form" onSubmit={formikSignUp.handleSubmit}>
          <h2 className="title">Sign up</h2>
          <div className="input-field">
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={formikSignUp.values.username}
              onChange={formikSignUp.handleChange}
              onBlur={formikSignUp.handleBlur}
            />
            {formikSignUp.touched.username && formikSignUp.errors.username && (
              <div className="error">{formikSignUp.errors.username}</div>
            )}
          </div>
          <div className="input-field">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formikSignUp.values.email}
              onChange={formikSignUp.handleChange}
              onBlur={formikSignUp.handleBlur}
            />
            {formikSignUp.touched.email && formikSignUp.errors.email && (
              <div className="error">{formikSignUp.errors.email}</div>
            )}
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formikSignUp.values.password}
              onChange={formikSignUp.handleChange}
              onBlur={formikSignUp.handleBlur}
            />
            {formikSignUp.touched.password && formikSignUp.errors.password && (
              <div className="error">{formikSignUp.errors.password}</div>
            )}
          </div>
          <button className="btnforum  solid" type="submit">Sign Up</button>
          <p className="social-text">Or Sign up with social platforms</p>
          <div className="social-media">
            <SocialMedia icon_name="facebook-f" size="24px" color="#3b5998" />
            <SocialMedia icon_name="twitter" size="24px" color="#1DA1F2" />
            <SocialMedia icon_name="google" size="24px" color="#DB4437" />
            <SocialMedia icon_name="linkedin-in" size="24px" color="#0077b5" />
          </div>
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Login </h1>
            <p>To open shoppingBag or buy thins from shop Must Login first!</p>
            <button className="btnoverlay ghost" onClick={() => setSignUpMode(false)}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>signup</h1>
            <p>dont have account? sign up for new account </p>
            <button className="btnoverlay ghost" onClick={() => setSignUpMode(true)}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
