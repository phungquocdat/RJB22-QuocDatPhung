import React, {useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import "./ReactHookForm.css";

export default function ReactHookForm() {
    
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const onSubmit = (data, event) => {
  event.preventDefault();
  console.log(data);}
  return (
    <form
      className="row"
      style={{ textAlign: "center" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="col-6">
        <label>Email</label> <br />
        <input
          placeholder="Email@abc123.xyz"
          {...register("mail", {
            required: "Phai co Email",
            pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
          })}
        />
        <p style={{ color: "red" }}>{errors.mail?.message}</p>
        <p style={{ color: "red" }}>
          {errors.mail?.type === "pattern" ? "Phai dung dinh dang email" : ""}
        </p>
      </div>
      <div className="col-6">
        <label>Password</label> <br />
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Phai co Password",
            minLength: {
              value: 8,
              message: "It nhat 8 ky tu",
            },
          })}
        />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}
      </div>
      <div className="col-12">
        <label>Address</label> <br />
        <input
          placeholder="Address"
          {...register("address", { required: true })}
        />
        {errors.Address && <p>Address required</p>}
      </div>
      <div className="col-12">
        <label>Address 2</label> <br />
        <input placeholder="Address 2" {...register("address2")} />
      </div>

            <select>

            </select>

      <div className="col-12">
        <input type="checkbox" {...register("Check me out")} />
        <label>Check me out</label>
      </div>
      <br />
      <input className="submitButton" type="submit" />
    </form>
  );
}
