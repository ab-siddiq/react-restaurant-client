import React from "react";
import loginImage from "../../assets/loginImage.png";
import { Link } from "react-router-dom";
const SignUp = () => {
  const handleSignIn = (e) => {
    
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200  ">
        <div className="hero-content flex-col md:flex-row-reverse border border-3 rounded border-r-8 border-b-8">
          <div className="text-center lg:text-left">
            <img src={loginImage} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSignIn}>
              <h2 className="text-center font-bold text-3xl">Sign Up</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn bg-yellow-500 text-black hover:bg-yellow-800 hover:text-yellow-300">Sign Up</button>
              </div>
              <div className="text-right">
                <p className="">
                  Already have account?{" "}
                  <Link className="text-yellow-500 text-sm" to={"/signup"}>
                    Login here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
