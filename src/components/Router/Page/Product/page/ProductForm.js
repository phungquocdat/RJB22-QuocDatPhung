import React, { useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";

export default function ProductForm() {
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
  let url = "https://62d16ee7dccad0cf176779b1.mockapi.io/product/" + id;
  async function fetchData() {
    try {
      let response = await axios.get(url);
      let temp = await response.data;
      setValue("name", temp.name);
      setValue("color", temp.color);
      setValue("price", temp.price);
      setValue("description", temp.description);
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
        "https://62d16ee7dccad0cf176779b1.mockapi.io/product/",
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
        className="row col-8 m-auto rounded font-weight-bold "
        style={{ textAlign: "center", border: "solid 1px #aaa",backgroundColor:"#FFDEDE",minHeight:"100vh" }}
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
        <div className="col-6 ">
          <label>COLOR</label> <br />
          <input 
            placeholder="#123abc , Color"
            {...register("color", { required: "Color is required" })}
          />
          <p style={{ color: "red" }}>{errors.color?.message}</p>
        </div>
        <div className="col-12 ">
          <label>PRICE</label> <br />
          <input
            type={"number"}
            placeholder="Price"
            {...register("price", { required: "Price is required" })}
          />
          <p style={{ color: "red" }}>{errors.price?.message}</p>
        </div>
        <div className="col-12 ">
          <label>DESCRIPTION</label> <br />
          <input
            placeholder="Description"
            {...register("description", { required: "Description is required" })}
          />
          <p style={{ color: "red" }}>{errors.description?.message}</p>
        </div>
        <input className="btn btn-success m-auto" type="submit" />
      </form>
    </>
  );
}
