import React from "react";
import { useForm } from "react-hook-form";

export default function SignUp(props) {
  const { mail } = props;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = () => {};
  return (
    <div style={{borderRadius: "25px", margin: "10px"}} className="col-3 border">
      <h2>Sign up</h2>
      <form
        style={{ backgroundColor: "rgba(192,192,192,0.2)", borderRadius:"10px"  }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <p>Looks like you don't have an account.</p>
          <p>Let's create a new account for</p>
          <p>{mail}</p>
          <label>NAME</label> <br />
          <input
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
          />
          <p style={{ color: "red" }}>{errors.name?.message}</p>
        </div>
        <div>
          <label>Password</label> <br />
          <input type="password" />
        </div>
        <p>
          By selecting Agree and continue below, i agree to Term of Service and
          Privacy Policy
        </p>
        <input type="submit" value="Agree and continue" />
      </form>
    </div>
  );
}
