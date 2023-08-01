import React from "react";
import "./ProductPage.css";
import { Link } from "react-router-dom";

function ProductDetails(props) {
  const { item } = props;
  return (
    <div className="max-w-xs max-h-96 rounded overflow-hidden shadow-lg p-4 w-2/5 buy_card p-2">
      <div>
        <span className="font-bold">{item.title}</span>
      </div>
      <div className="my-4">
        <div className="flex flex-row text-rose-600">
          <div>
            Congratulations! You've received a lucky discount of{" "}
            {`${parseFloat(item.price * 1.1).toFixed(2)}$`}. Enjoy the savings!
          </div>
        </div>

        <div className="flex flex-row mt-2">
          <div className="w-40">Category:</div>
          <div>{item.category}</div>
        </div>

        <div className="flex flex-row mt-2">
          <div className="w-40">Customer Rating:</div>
          <div>
            {item.rating.rate}* ({item.rating.count})
          </div>
        </div>

        <div className="flex flex-row mt-2">
          <div className="w-40">Original Price:</div>
          <div> {`${parseFloat(item.price * 2.1).toFixed(2)}$`}</div>
        </div>

        <div className="flex flex-row mt-2">
          <div className="w-40">Limited Time Offer:</div>
          <div>{item.price}$</div>
        </div>
      </div>
      <Link
        className="rounded-md bg-sky-400 text-white flex  justify-center p-2 font-bold w-40 mt-8 block"
        to="/BuyProduct"
        state={{ item }}
      >
        Buy
      </Link>
    </div>
  );
}

export default ProductDetails;
