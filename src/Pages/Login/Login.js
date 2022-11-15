import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleLogin = (data) => {
    console.log(data);
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-5">
        <h2 className="text-xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
            <input
              type="text"
              {...register("email", {
                require: "Email Address is required",
              })}
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                require: "Password is require",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters on longer",
                },
              })}
              className="input input-bordered w-full"
            />
            <label className="label">
              <span className="label-text">Forget Password</span>
            </label>
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>
          <input
            className="btn btn-accent w-full"
            value="Login"
            type="submit"
          />
        </form>
        <p>
          New to Doctors Portal{" "}
          <Link className="text-secondary" to="/signup">
            Create New Account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">Continue with Google</button>
      </div>
    </div>
  );
};

export default Login;
