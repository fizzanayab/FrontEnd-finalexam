import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { signUpSchema, signInSchema } from "./validationSchema"; // Import Yup schema
import SocialMedia from "./../../utilities/icons/SocialMedia";
import "./Login.css";
<<<<<<< HEAD

const Login = () => {
  const [signUpMode, setSignUpMode] = useState(false);
  const navigate = useNavigate();

  // Formik setup for SignUp
  const formikSignUp = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      // Save data to localStorage
      localStorage.setItem("user", JSON.stringify(values));
      // After signup, switch to sign-in mode
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
        // Redirect to Home page after successful login
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
            <i className="fas fa-user"></i>
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
            <i className="fas fa-lock"></i>
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
          <button className="btn solid" type="submit">Login</button>
=======
import SocialMedia from "./../../utilities/icons/SocialMedia";

const Login = () => {
  const [signUpMode, setSignUpMode] = useState(false);

  return (
    <div className={`login-container ${signUpMode ? "sign-up-mode" : ""}`}>
      <div className="form-container sign-in-container">
        <form className="sign-in-form">
          <h2 className="title">Sign in</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" />
          </div>
          <button className="btn solid">Login</button>
>>>>>>> 7e811832f7ac5ea92952b7a6aaa63e21c7a8eeea
          <p className="social-text">Or Sign in with social platforms</p>
          <div className="social-media">
            <SocialMedia icon_name="facebook-f" size="24px" color="#3b5998" />
            <SocialMedia icon_name="twitter" size="24px" color="#1DA1F2" />
            <SocialMedia icon_name="google" size="24px" color="#DB4437" />
            <SocialMedia icon_name="linkedin-in" size="24px" color="#0077b5" />
          </div>
        </form>
      </div>

<<<<<<< HEAD
      {/* Sign Up Container */}
      <div className="form-container sign-up-container">
        <form className="sign-up-form" onSubmit={formikSignUp.handleSubmit}>
          <h2 className="title">Sign up</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
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
            <i className="fas fa-envelope"></i>
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
            <i className="fas fa-lock"></i>
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
          <button className="btn solid" type="submit">Sign Up</button>
=======
      <div className="form-container sign-up-container">
        <form className="sign-up-form">
          <h2 className="title">Sign up</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-field">
            <i className="fas fa-envelope"></i>
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" />
          </div>
          <button className="btn solid">Sign Up</button>
>>>>>>> 7e811832f7ac5ea92952b7a6aaa63e21c7a8eeea
          <p className="social-text">Or Sign up with social platforms</p>
          <div className="social-media">
            <SocialMedia icon_name="facebook-f" size="24px" color="#3b5998" />
            <SocialMedia icon_name="twitter" size="24px" color="#1DA1F2" />
            <SocialMedia icon_name="google" size="24px" color="#DB4437" />
            <SocialMedia icon_name="linkedin-in" size="24px" color="#0077b5" />
          </div>
        </form>
      </div>

<<<<<<< HEAD
      {/* Overlay for switching between sign-in and sign-up */}
=======
>>>>>>> 7e811832f7ac5ea92952b7a6aaa63e21c7a8eeea
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h3>Already have an account?</h3>
            <p>Sign in to stay connected!</p>
            <button className="btn transparent" onClick={() => setSignUpMode(false)}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h3>New here?</h3>
            <p>Sign up and discover great content!</p>
            <button className="btn transparent" onClick={() => setSignUpMode(true)}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
