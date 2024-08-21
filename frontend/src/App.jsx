import HomepgWrapper from "./landing/home/HomepgWrapper";
import SignupWrap from "./landing/signup/SignupWrap";
import AboutpgWrapper from "./landing/about/AboutpgWrapper";
import SupportpgWrapper from "./landing/support/SupportpgWrapper";
import PrdpgWrapper from "./landing/products/PrdpgWrapper";
import PricingpgWrap from "./landing/pricing/PricingpgWrap";

import { BrowserRouter, Routes, Route } from "react-router-dom";


import Topnavbar from "./landing/Topnavbar";
import Footer from "./landing/Footer";
import Notfound from "./landing/Notfound";


function App() {
  return (
    <BrowserRouter>

      <Topnavbar />
      <Routes>
        <Route path="/" element={<HomepgWrapper />} />
        <Route path="/signup" element={<SignupWrap />} />
        <Route path="/about" element={<AboutpgWrapper />} />
        <Route path="/support" element={<SupportpgWrapper />} />
        <Route path="/products" element={<PrdpgWrapper />} />
        <Route path="/pricing" element={<PricingpgWrap />} />

        <Route path="*" element={<Notfound/>} />
        
      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
