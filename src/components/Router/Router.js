import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Page/Home";
import CustomerList from "./Page/Customer/page/CustomerList";
import CustomerForm from "./Page/Customer/page/CustomerForm";
import ProductList from "./Page/Product/page/ProductList";
import ProductForm from "./Page/Product/page/ProductForm";


export default function Router() {
  return (
    <div style={{backgroundImage : `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnjzCkb7v9BiOximq9-apwW4H9J16KqcvIew&usqp=CAU)`,
      minHeight: "100vh"    
    }} >
      <BrowserRouter >
        <Navigation></Navigation>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="customerList" element={<CustomerList />} />
          <Route path="customerForm" element={<CustomerForm />} />
          <Route path="customerList/edit/:id" element={<CustomerForm />} />

          <Route path="productList" element={<ProductList />} />
          <Route path="productForm" element={<ProductForm />} />
          <Route path="productList/edit/:id" element={<ProductForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
