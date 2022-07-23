import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function ProductList() {
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
