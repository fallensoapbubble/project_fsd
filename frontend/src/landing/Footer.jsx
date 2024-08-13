import React from "react";

function Footer() {
  return (
    <div className="container">
      <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
        <div class="col mb-3">
          <a
            href="/"
            class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
          >
            <img
              src="../../../public/images/logo.svg"
              style={{ width: "50%" }}
              alt=""
            />
          </a>
          <p class="text-body-secondary">© 2024</p>
        </div>
        <div class="col mb-3"></div>
        <div class="col mb-3">
          <h5>Company</h5>

          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="">About</a>
            </li>
            <li class="nav-item mb-2">
              <a href="">Products</a>
            </li>
            <li class="nav-item mb-2">
              <a href="">Pricing</a>
            </li>
            <li class="nav-item mb-2">
              <a href="">Referral programme</a>
            </li>
            <li class="nav-item mb-2">
              <a href="">Careers</a>
            </li>
            <li class="nav-item mb-2">
              <a href="">Zerodha.tech</a>
            </li>
            <li class="nav-item mb-2">
              <a href="">Press & media</a>
            </li>
            <li class="nav-item mb-2">
              <a href="">Zerodha Cares (CSR)</a>
            </li>

            <li class="nav-item mb-2">
              <a href=""></a>
            </li>
            <li class="nav-item mb-2"></li>
          </ul>
        </div>
        <div class="col mb-3">
          <h5>Support</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="">Support portal</a>
            </li>
            <li class="nav-item mb-2">
              <a href="">Contact us</a>
            </li>
            <li class="nav-item mb-2">
              <a href="">Z-Connect blog</a>
            </li>
            <li class="nav-item mb-2">
              <a href="">List of charges</a>
            </li>
            <li class="nav-item mb-2">
              <a href="">Downloads & resources</a>
            </li>
            <li class="nav-item mb-2">
              <a href="">Videos</a>
            </li>
            <li class="nav-item mb-2">
              <a href="">Market overview</a>
            </li>
            <li class="nav-item mb-2">
              <a href="">How to file a complaint?</a>
            </li>
            <li class="nav-item mb-2">
              <a href="">Status of your complaints</a>
            </li>
          </ul>
        </div>
        <div class="col mb-3">
          <h5>Account</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="">Open an account</a>
            </li>
            <li class="nav-item mb-2">
              <a href=""> Fund transfer </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
