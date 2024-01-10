import React, { useContext, useEffect, useState } from "react";
import { useRef } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import loginImage from "../../assets/loginImage.png";
const Login = () => {
  const capchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((res) => {
      const user = res.user;
      console.log(user);
    });
  };
  const handleValidateCapcha = (e) => {
    const user_capcha_value = capchaRef.current.value;
    console.log(user_capcha_value);
    if (validateCaptcha(user_capcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200  ">
        <div className="hero-content flex-col md:flex-row border border-3 rounded border-r-8 border-b-8">
          <div className="text-center lg:text-left">
            <img src={loginImage} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleLogin}>
              <h2 className="text-center font-bold text-3xl">Login</h2>
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
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  ref={capchaRef}
                  type="text"
                  placeholder="type captcha"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <button onClick={handleValidateCapcha} className="btn mt-2">
                  validate capcha
                </button>
              </div>
              <div className="form-control mt-6">
                <button disabled={disabled} className="btn btn-primary">
                  Login
                </button>
              </div>
              <div className="text-right">
                <p className="">
                  New Here?{" "}
                  <Link className="text-yellow-500 text-sm" to={"/signup"}>
                    Sign Up here
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

export default Login;
