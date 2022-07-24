import React, { useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";

export default function CustomerForm() {
  let { id } = useParams();
  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault();
    console.log(data);
    toast.success(" SUCCESSFULLY SUBMIT !👏 SEEEE YAHHH !!!👏 ", {
      style: {
        borderRadius: "10px",
        background: "#F637EC",
        color: "#fff",
      },
    });
    if (id) {
      fetchUpdateData(data);
    } else {
      fetchCreateData(data);
    }
  };

  let url = "https://62d16ee7dccad0cf176779b1.mockapi.io/customer/" + id;
  async function fetchData() {
    try {
      let response = await axios.get(url);
      let temp = await response.data;
      setValue("name", temp.name);
      setValue("mail", temp.email);
      setValue("postCode", temp.postCode);
      setValue("address", temp.address);
      setValue("dob", temp.dob);
      setValue("phone", temp.phone);
      setValue("gender", temp.gender);
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }
  async function fetchUpdateData(data) {
    try {
      await axios.put(url, data);
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }
  async function fetchCreateData(data) {
    try {
      await axios.post(
        "https://62d16ee7dccad0cf176779b1.mockapi.io/customer/",
        data
      );
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, []);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
    <form
      className="row col-8 m-auto rounded font-weight-bold"
      style={{ textAlign: "center", border: "solid 1px #aaa", backgroundColor:"#FFDEDE",minHeight:"100vh" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="col-6 ">
        <label>NAME</label> <br />
        <input
          placeholder="Name"
          {...register("name", { required: "Name is required" })}
        />
        <p style={{ color: "red" }}>{errors.name?.message}</p>
      </div>
      <div className="col-6">
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
      <div className="col-12">
        <label>POSTCODE</label> <br />
        <input
          placeholder="PostCode"
          {...register("postCode", { required: "PostCode is required" })}
        />
        <p style={{ color: "red" }}>{errors.postCode?.message}</p>
      </div>
      <div className="col-12">
        <label>ADDRESS</label> <br />
        <input
          placeholder="Address"
          {...register("address", { required: true })}
        />
        {errors.Address && <p>Address required</p>}
      </div>
      <div className="col-12">
        <label>DAY OF BIRTH</label> <br />
        <input
          placeholder="YYYY-MM-DD"
          {...register("dob", { required: "DAY OF BIRTH is required" })}
        />
        <p style={{ color: "red" }}>{errors.dob?.message}</p>
      </div>
      <div className="col-12">
        <label>PHONE NUMBER</label> <br />
        <input
          type="tel"
          placeholder="Phone Number"
          {...register("phone", { required: "Phone is required" })}
        />
        <p style={{ color: "red" }}>{errors.phone?.message}</p>
      </div>
      <div className="col-12">
        <label htmlFor="gender">GENDER</label>
        <select
          id="gender"
          defaultValue=""
          {...register("gender", { required: false })}
        >
          <option value="">Choose</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <input className="btn btn-success m-auto" type="submit" />
         </form>
    </>
  );
}
