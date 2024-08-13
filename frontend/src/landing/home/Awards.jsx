import React from "react";

function Awards() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <img src="../../../public/images/largestBroker.svg" alt="" />
        </div>
        <div className="col-6" style={{ padding: "7rem" }}>
          <h1>Largest stock broker in India</h1>
          <h4>2 mil. + users as of today</h4>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency Derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Stocks and IPOs</li>
                <li>Bonds</li>
                <li>Mutual Funds</li>
              </ul>
            </div>
            <img
              src="../../../public/images/pressLogos.png"
              style={{ marginTop: "1rem" }}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
