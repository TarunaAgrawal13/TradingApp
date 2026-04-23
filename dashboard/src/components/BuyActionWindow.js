import React, { useState,useContext} from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from '../config/index.jsx';

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";



const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  //replaced
  // const handleBuyClick = () => {
  //   axios.post(`${BASE_URL}/newOrder`, {
  //     name: uid,
  //     qty: stockQuantity,
  //     price: stockPrice,
  //     mode: "BUY",
  //   });

  //   GeneralContext.closeBuyWindow();
  // };

  // extra added
  const { closeBuyWindow } = useContext(GeneralContext);//extra adeed

   const handleBuyClick = async () => {
  try {
    await axios.post(`${BASE_URL}/newOrder`, {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    });

    console.log("Order placed");
    closeBuyWindow();
  } catch (err) {
    console.error("Error placing order:", err);
  }
};







  const handleCancelClick = () => {
    GeneralContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(Number(e.target.value))} //Number extra added
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(Number(e.target.value))}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          {/* <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link> */}

   {/* replaced  extra added*/}
         <button className="btn btn-blue" onClick={handleBuyClick}>
          Buy
        </button>

        <button className="btn btn-grey" onClick={handleCancelClick}>
          Cancel
        </button>



        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
