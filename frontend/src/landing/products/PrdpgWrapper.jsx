import React from "react";
import Hero from "./Hero";
import Leftimg from "./Leftimg";
import Rightimg from "./Rightimg";
import Universe from "./Universe";

// import x from "";

function PrdpgWrapper() {
  return (
    <>
      <Hero />
      <br />
      <br />
      <br />
      <Leftimg
        imgURL="../../../public/images/kite.png"
        productName="Kite"
        productDesc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="/"
        learnMore="/"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
        appStore="https://apps.apple.com/in/app/kite-zerodha/id1449453802"
      />
      <br />
      <br />
      <br />
      <Rightimg
        productName="Console"
        productDesc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="/"
        imgURL="../../../public/images/console.png"
      />
      <br />
      <br />
      <br />
      <Leftimg
        imgURL="../../../public/images/coin.png"
        productName="Coin"
        productDesc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="/"
        learnMore="/"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
        appStore="https://apps.apple.com/in/app/kite-zerodha/id1449453802"
      />
      <br />
      <br />
      <br />
      <Rightimg
        productName="Kite Connect API"
        productDesc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="/"
        imgURL="../../../public/images/kiteconnect.png"
      />
      <br />
      <br />
      <br />
      <Leftimg
        imgURL="../../../public/images/varsity-products.png"
        productName="Varsity mobile"
        productDesc="BAn easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo="/"
        learnMore="/"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
        appStore="https://apps.apple.com/in/app/kite-zerodha/id1449453802"
      />
      <br />
      <br />
      <br />
      <div className="text-center fs-4">
        <h1>The Zerodha Universe</h1>
        <p>
          Want to know about our technology stack ? Check out the Zerodha tech
          blog
        </p>
      </div>
      <Universe />
    </>
  );
}

export default PrdpgWrapper;
