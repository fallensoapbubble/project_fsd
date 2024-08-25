import React from "react";

function Universe() {
  return (
    <div className="d-flex justify-content-center flex-wrap">
      <div className="p-2">
        <img
          src="../../../public/images/zerodhaFundhouse.png"
          alt=""
          style={{ height: "2.2rem" }}
        />
        <p style={{ color: "grey", fontSize: "0.8rem" }}>
          Our asset management venture that is creating simple and transparent
          index funds to help you save for your goals.
        </p>
      </div>
      <div className="p-2">
        <img
          src="../../../public/images/sensibullLogo.svg"
          alt=""
          style={{ height: "2.2rem" }}
        />
        <p style={{ color: "grey", fontSize: "0.8rem" }}>
          Options trading platform that lets you create strategies, analyze
          positions, and examine data points like open interest, FII/DII, and
          more.
        </p>
      </div>
      <div className="p-2">
        <img
          src="../../../public/images/streakLogo.png"
          alt=""
          style={{ height: "2.2rem" }}
        />
        <p style={{ color: "grey", fontSize: "0.8rem" }}>
          Systematic trading platform that allows you to create and backtest
          strategies without coding.
        </p>
      </div>
      <div className="p-2">
        <img
          src="../../../public/images/smallcaseLogo.png"
          alt=""
          style={{ height: "2.2rem" }}
        />
        <p style={{ color: "grey", fontSize: "0.8rem" }}>
          Thematic investing platform that helps you invest in diversified
          baskets of stocks on ETFs.
        </p>
      </div>
      <div className="p-2">
        <img
          src="../../../public/images/tijori.svg"
          alt=""
          style={{ height: "2.2rem" }}
        />
        <p style={{ color: "grey", fontSize: "0.8rem" }}>
          Investment research platform that offers detailed insights on stocks,
          sectors, supply chains, and more.
        </p>
      </div>
      <div className="p-2">
        <img
          src="../../../public/images/dittoLogo.png"
          alt=""
          style={{ height: "2.2rem" }}
        />
        <p style={{ color: "grey", fontSize: "0.8rem" }}>
          Personalized advice on life and health insurance. No spam and no
          mis-selling.
        </p>
      </div>
    </div>
  );
}

export default Universe;
