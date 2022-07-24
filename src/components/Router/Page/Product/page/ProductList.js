import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import CustomerForm from "../../Customer/page/CustomerForm";

export default function ProductList() {
  const [isLoad, setIsLoad] = useState(true);
  const [productList, setProductList] = useState([]);

  let url = "https://62d16ee7dccad0cf176779b1.mockapi.io/product";

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
      setProductList(temp);
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }
  const deleteData = (id) => {
    axios
      .delete("https://62d16ee7dccad0cf176779b1.mockapi.io/product/" + id)
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
  useEffect(() => {
    fetchData(url);
  }, []);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <table className="table table-bordered table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Color</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th style={{ textAlign: "center" }} scope="col">
              Action
            </th>
          </tr>
        </thead>
        {isLoad && "Loadding..."}
        <tbody>
          {productList.map((product, index) => {
            return (
              <tr key={`product-${product?.id}`}>
                <th scope="row">{index + 1}</th>
                <td>{product?.name}</td>
                <td>{product?.color}</td>
                <td>{product?.price}</td>
                <td>{product?.description}</td>
                <td className="text-center ">
                  <Link
                    style={{ width: 100 }}
                    className="btn btn-primary mr-md-3"
                    to={`edit/${product.id}`}
                    type="button"
                  >
                    Edit <AiOutlineEdit />
                  </Link>
                  <button
                    style={{ width: 100 }}
                    className="btn btn-danger mr-md-3"
                    onClick={(e) => deleteData(product?.id, e)}
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
