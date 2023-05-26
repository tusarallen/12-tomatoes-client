/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { FaGithub, FaGoogle } from "react-icons/fa";
import NavBar from "../../pages/Shared/Navbar/Navbar";
import Footer from "../../pages/Shared/Footer/Footer";

const SignIn = () => {
  const { signIn, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();

    setSuccess("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
        setSuccess("user login successfully");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <NavBar />
      <div className="text-center mt-5 font-mono">
        <h1 className="text-5xl font-bold">Login now!</h1>
      </div>
      <div className="hero mt-4 mb-5 font-mono">
        <div className="hero flex-col">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-lg">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-lg">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label font-bold">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <p className="text-black font-semibold pt-2">{success}</p>
                <p className="text-[red] font-semibold pt-2">{error && error}</p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-warning text-lg">Login</button>
              </div>
              <Link to="/register" className="shadow-gray-500 font-bold">
                new to here ? <span className="underline">please register</span>
              </Link>
            </form>
            <div className="form-control mt-1">
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-success w-[85%] mx-auto"
              >
                <div className="flex items-center">
                  <p className="font-bold text-lg">Signin with</p>
                  <p style={{fontSize:'20px'}} className="ml-2">
                    <FaGoogle />
                  </p>
                </div>
              </button>
              <button
                onClick={handleGithubSignIn}
                className="btn btn-warning mt-3 w-[85%] mx-auto mb-4"
              >
                <div className="flex items-center">
                  <p className="font-bold text-lg">Signin with</p>
                  <p style={{fontSize:'20px'}} className="ml-2">
                    <FaGithub />
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default SignIn;
