import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./ProductPage.css";
import ProductDetails from "./ProductDetails";
import NavBar from "../../component/navbar/NavBar";
function ProductPage() {
  const location = useLocation();
  const { item } = location.state;
  console.log(item);
  return (
    <>
      <NavBar />
      <div>
        <div className="my-16 mx-8 flex flex-row gap-16">
          <img src={item.image} alt="item_image" className="h-96 w-1/5" />
          <div className="max-h-96 rounded font-bold bg-gray-200 p-20 w-3/5">
            {item.description}
          </div>
          <ProductDetails item={item} />
        </div>
      </div>
    </>
  );
}

export default ProductPage;
