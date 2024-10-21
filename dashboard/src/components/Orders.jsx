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
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "left" }}>
        {allOrders.map((stock, idx) => {
          return (
            <div key={idx}
              style={{
                border: "1px solid #ddd",
                borderRadius: "1rem",
                margin: "1rem",
                padding: "1rem",
                backgroundColor: "#f9f9f9",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                cursor: "pointer"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
              }}
            >
              <h3>{stock.name}</h3>
              <h4>Quantity : {stock.qty}</h4>
              <h4>Bid Price : {stock.price}</h4>
              <h4>Total Cost : {stock.price*stock.qty}</h4>
             
            </div>
           
          );
        })}
      </div>
    </>
  );
};

export default Orders;
