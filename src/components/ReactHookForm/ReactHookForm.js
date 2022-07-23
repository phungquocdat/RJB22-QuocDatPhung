import React, {useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import "./ReactHookForm.css";
import axios from "axios";


export default function ReactHookForm() {
  const [cities, setCities] = useState([]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  async function fetchData() {
    try {
      let response = await axios("https://provinces.open-api.vn/api/?depth=3");
      let temp = await response.data;
      console.log(response);
      setCities(temp);
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }

  const cityWatch = watch("city");
  const districtWatch = watch("district");

  useEffect(() => {
    fetchData();
  }, []);


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
          <br/>
      {/* tỉnh */}
      <div>
          <label htmlFor="inputCity">
            Thành Phố
          </label>
          <select
            id="inputCity"
            defaultValue=""
            {...register("city", { required: true })}
          >
            <option value="">Choose...</option>
            {cities.map((item) => {
              return <option key={`city-${item.code}`}>{item.name}</option>;
            })}
          </select>
        </div>
        {/* quận */}
        <div>
          <label htmlFor="inputDistrict" >
            Quận
          </label>
          <select
            id="inputDistrict"
            defaultValue=""
            {...register("district", { required: true })}
          >
            <option value="">Choose</option>
            {cities.map((item) => {
              return item.name === cityWatch
                ? item.districts.map((district) => {
                    return (
                      <option key={`districts-${district.code}`}>
                        {district.name}
                      </option>
                    );
                  })
                : null;
            })}
          </select>
        </div>
        {/* phường */}
        <div >
          <label htmlFor="inputward" >
            Phường
          </label>
          <select
            id="inputward"
            defaultValue=""
            {...register("commune", { required: true })}
          >
            <option value="">Choose...</option>
            {cities.map((item) => {
              return item.name === cityWatch
                ? item.districts.map((district) => {
                    return district.name === districtWatch
                      ? district.wards.map((ward) => {
                          return (
                            <option key={`ward-${ward.code}`}>
                              {ward.name}
                            </option>
                          );
                        })
                      : null;
                  })
                : null;
            })}
          </select>
        </div>
            <br/>
      <div className="col-12">
        <input type="checkbox" {...register("Check me out")} />
        <label>Check me out</label>
      </div>
      <br />
      <input className="submitButton" type="submit" />
    </form>
  );
}