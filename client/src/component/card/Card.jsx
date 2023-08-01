import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const { item } = props;
  let navigate = useNavigate();
  const onCardClick = () => {
    navigate("/ProductDetails", { state: { item } });
  };
  return (
    <>
      <div className="max-w-xs max-h-80 rounded overflow-hidden shadow-lg card p-4">
        <div className="cursor-pointer" onClick={onCardClick}>
          <img
            className="w-full h-40 m-auto image"
            src={item.image}
            alt="Sunset in the mountains"
            style={{ height: "100px", width: "100px" }}
          />
          <div className=" text-center py-4 mx-4 h-24 w-40">
            <div className="font-bold text-md text_description">
              {item.title}
            </div>
            <p className="text-gray-700 text-base">
              <span className="font-bold">{`${item.price}$`}</span>
              <span className="ml-2 mr-1">List:</span>
              <span className="line-through">{`${parseFloat(
                item.price * 2.1
              ).toFixed(2)}$`}</span>
            </p>
          </div>
        </div>
        <div className="text-center pb-2">
          <Link
            className="inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 rounded-md hover:bg-sky-400 hover:text-white"
            to="/BuyProduct"
            state={{ item }}
          >
            Buy
          </Link>

          <span className="inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2  rounded-md hover:bg-sky-400 hover:text-white">
            Add to Cart
          </span>
        </div>
      </div>
    </>
  );
}

export default Card;
