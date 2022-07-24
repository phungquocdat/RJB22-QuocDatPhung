import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Login from "./Login";
import SignUp from "./SignUp";

export default function Hi() {
  const [user, setUser] = useState();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data, event) => {
    event.preventDefault();
    console.log(data.mail);
    setUser(data.mail);
  };

  return (
    <>
      <div className="row d-flex m-auto">
        <div style={{borderRadius: "25px", margin: "10px",}} className="col-3 border">
          <h2>Hi!</h2>
          <form
            style={{ backgroundColor: "rgba(192,192,192,0.2)", borderRadius:"10px" }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label>EMAIL</label> <br />
              <input
                placeholder="Email@abc123.xyz"
                {...register("mail", {
                  required: "Email is required",
                  pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
                })}
              />
              <p style={{ color: "red" }}>{errors.mail?.message}</p>
              <p style={{ color: "red" }}>
                {errors.mail?.type === "pattern" ? "INVALID EMAIL ADDRESS" : ""}
              </p>
            </div>
            <input type="submit" value="Continue" />
            <p>or</p>
            <p>Continue with Facebook</p>
            <p>Continue with Google</p>
            <p>Continue with Apple</p>
            <br />
            <p>Don't have an Account ? Sign up</p>
            <p>Forgot your password ?</p>
          </form>
        </div>
        <SignUp mail={user} />
        <Login mail={user} />
      </div>
    </>
  );
}
