import React from "react";

function Education() {
  return (
    <div className="container" style={{ margin: "8rem" }}>
      <div className="row">
        <div className="col">
          <img src="../../../public/images/education.svg" alt="" />
        </div>
        <div className="col text-center">
          <h1>Free and open market education</h1>

          <div className="row">
            <p>
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a href="">
              Varsity<i className="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
            <p>
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a href="">
              TradingQ&A{" "}
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
