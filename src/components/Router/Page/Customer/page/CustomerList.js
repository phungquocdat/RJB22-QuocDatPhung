import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";

export default function CustomerList() {
  const [customerList, setCustomerList] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  //list
  let url = "https://62d16ee7dccad0cf176779b1.mockapi.io/customer";

  async function fetchData() {
    try {
      let response = await axios.get(url, {
        params: {
          page: 1,
          limit: 10,
        },
      });
      let temp = await response.data;
      setIsLoad(false);
      setCustomerList(temp);
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, []);

  //del data
  const deleteData = (id) => {
    axios
      .delete("https://62d16ee7dccad0cf176779b1.mockapi.io/customer/" + id)
      .then(function (del) {
        console.log(del);
        toast.success(" SUCCESSFULLY DELETE  ! 👏 BYE BYE 👏 ", {
          style: {
            borderRadius: "10px",
            background: "#F637EC",
            color: "#fff",
          },
        });
        fetchData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      
        <table className="table table-bordered table-dark">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">PostCode</th>
              <th scope="col">Address</th>
              <th scope="col">Dob</th>
              <th scope="col">Email</th>
              <th scope="col">Gender</th>
              <th scope="col">Phone</th>
              <th style={{ textAlign: "center" }} scope="col">
                Action
              </th>
            </tr>
          </thead>
          {isLoad && "Loadding..."}
          <tbody>
            {customerList.map((customer, index) => {
              return (
                <tr key={`customer-${customer?.id}`}>
                  <th scope="row">{index + 1}</th>
                  <td>{customer?.name}</td>
                  <td>{customer?.postCode}</td>
                  <td>{customer?.address}</td>
                  <td>{customer?.dob}</td>
                  <td>{customer?.email}</td>
                  <td>{customer?.gender}</td>
                  <td>{customer?.phone}</td>
                  <td className="text-center">
                    <Link
                      style={{ width: 100 }}
                      className="btn btn-primary mr-md-3"
                      to={`edit/${customer.id}`}
                      type="button"
                    >
                      Edit <AiOutlineEdit />
                    </Link>
                    <button
                      style={{ width: 100 }}
                      className="btn btn-danger mr-md-3"
                      onClick={(e) => deleteData(customer?.id, e)}
                      type="button"
                    >
                      Delete <AiOutlineDelete />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
    </>
  );
}
