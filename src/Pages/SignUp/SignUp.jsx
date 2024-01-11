import React, { useContext, useState } from "react";
import loginImage from "../../assets/loginImage.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
const SignUp = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((res) => {
      console.log(res.user);
      console.log(data.name)
      updateUserProfile(data.name)
        .then(() => {
          console.log("profile updated");
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.name} is created successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((error) => console.log(error));
    });
  };

  console.log();
  return (
    <div>
      <div className="hero min-h-screen bg-base-200  ">
        <div className="hero-content flex-col md:flex-row-reverse border border-3 rounded border-r-8 border-b-8">
          <div className="text-center lg:text-left">
            <img src={loginImage} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-center font-bold text-3xl">Sign Up</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  {...register("name", { required: true })}
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-400 text-sm">
                    name is required!
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  {...register("email", { required: true })}
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-400 text-sm">
                    email is required!
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  {...register("password", {
                    required: true,
                    maxLength: 20,
                    minLength: 5,
                  })}
                  className="input input-bordered"
                />
                {errors.password && (
                  <span className="text-red-400 text-sm">
                    password is required!
                  </span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn bg-yellow-500 text-black hover:bg-yellow-800 hover:text-yellow-300"
                />
              </div>
              <div className="text-right">
                <p className="">
                  Already have account?{" "}
                  <Link className="text-yellow-500 text-sm" to={"/login"}>
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
