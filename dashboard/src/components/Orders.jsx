import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";



const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/allOrders")
      .then((res) => {
        setAllOrders(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log("Error is ", err);
      });
  }, []);
  return (
    <>
      <h2>
        <i>Your Current Orders</i>
      </h2>
      <div style={{ display: "flex", justifyContent: "left" }}>
        {allOrders.map((stock, idx) => {
          return (
            <div key={idx}
              style={{
                border: "1px solid grey",
                borderRadius: "2rem",
                margin: "3rem",
                padding: "2rem",
              }}
            >
              <h3>{stock.name}</h3>
              <h4>QUANTITY : {stock.qty}</h4>
              <h4>COST : {stock.price}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Orders;
