import React from "react";
import "./BuyProduct.css";
import { useLocation } from "react-router-dom";
import NavBar from "../../component/navbar/NavBar";
function BuyProduct() {
  const location = useLocation();
  const { item } = location.state;
  console.log(item);
  return (
    <>
      <NavBar />
      <div className="max-w-xs max-h-96 mt-8 m-auto rounded overflow-hidden shadow-lg p-4 w-2/5 buy_card p-2">
        <div>
          <span className="font-bold">{item.title}</span>
        </div>
        <div className="my-8">
          <div className="flex flex-row">
            <div className="w-40">Product Price:</div>
            <div> {`${parseFloat(item.price * 2.1).toFixed(2)}$`}</div>
          </div>
          <div className="flex flex-row">
            <div className="w-40">Discount:</div>
            <div>{`${parseFloat(item.price * 1.1).toFixed(2)}$`}</div>
          </div>
          <div className="flex flex-row">
            <div className="w-40">Price After Discount :</div>
            <div>{item.price}$</div>
          </div>
          <div className="flex flex-row">
            <div className="w-40">Tax:</div>
            <div>{`${parseFloat(item.price / 10).toFixed(2)}$`}</div>
          </div>
          <hr className="h-px" width="100%" color="black" />
          <div className="flex flex-row">
            <div className="w-40">Total Price:</div>
            <div>{`${parseFloat(item.price + item.price / 10).toFixed(
              2
            )}$`}</div>
          </div>
        </div>
        <button className="rounded-md bg-sky-400 text-white p-2 font-bold w-40 mt-8 block">
          Buy
        </button>
      </div>
    </>
  );
}

export default BuyProduct;
