import React from "react";

function Hero() {
  return (
    <div className="container text-center" style={{ marginBottom: "5rem" }}>
      <div className="row" style={{ padding: "7rem" }}>
        <img
          src="../../../public/images/homeHero.png"
          style={{ marginBottom: "3rem" }}
          alt=""
        />
        <h1>Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <p>
          <button
            type="button"
            className="btn btn-primary"
            style={{ marginTop: "3rem", width: "40%" }}>
            Sign up now
          </button>
        </p>
      </div>
    </div>
  );
}

export default Hero;
