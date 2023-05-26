/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import NavBar from "../../pages/Shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import Footer from "../../pages/Shared/Footer/Footer";

const SignUp = () => {
  const { createUser, profileUpdate } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();

    setSuccess("");
    setError("");
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
        form.reset();
        setSuccess("user has been created successfully");

        profileUpdate(name, photo)
          .then(() => {
            console.log("profile updated");
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <NavBar />
      <div className="text-center mt-5 font-mono">
        <h1 className="text-5xl font-bold">Register now!</h1>
      </div>
      <div className="hero mt-4 mb-5 font-mono">
        <div className="hero flex-col">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-lg">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  font-bold text-lg">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  font-bold text-lg">Email</span>
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
                  <span className="label-text  font-bold text-lg">Password</span>
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
                <p className="text-black font-semibold pt-2">
                  {success && success}
                </p>
                <p className="text-[red] font-semibold pt-2">
                  {error && error}
                </p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-warning font-2xl">Register</button>
              </div>
              <Link to="/login" className="shadow-gray-500 font-bold">
                already have an account ?{" "}
                <span className="underline">please login</span>
              </Link>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
