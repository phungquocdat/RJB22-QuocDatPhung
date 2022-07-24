import React from "react";
import { useForm } from "react-hook-form";

export default function Login(props) {
  const { mail } = props;
  const { handleSubmit } = useForm();
  const onSubmit = () => {};

  return (
    <div style={{borderRadius: "25px", margin: "10px"}} className="col-3 border">
      <h2>Log in</h2>
      <form
        style={{ backgroundColor: "rgba(192,192,192,0.2)", borderRadius:"10px"  }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>Welcome {mail}</div>
        <input type="password" />

        <input type="submit" value="Continue" />
        <p>Forgot your password ?</p>
      </form>
    </div>
  );
}
