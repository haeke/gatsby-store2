import React from "react"
import { Link } from "gatsby"

import facebookLogo from "../images/facebook.svg"
import instaLogo from "../images/insta.svg"
import pinterestLogo from "../images/pinterest.svg"

const Footer = () => {
  return (
    <footer className="orangeBackground py-3">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-6 text-capitalize text-center">
            <h3 className="display-4 mb-3 brandColor">Camping Supplies</h3>
            <h3 className="mainWhiteText">
              All Rights Reserved &copy; {new Date().getFullYear()}{" "}
            </h3>
          </div>
          <div className="col-md-6">
            <div className="socials text-left">
              <a
                href="https://www.facebook.com"
                rel="nonopener noreferrer"
                target="_blank"
              >
                <img
                  src={facebookLogo}
                  alt="facebook icon"
                  style={{ height: 30, width: 30, margin: "20px 10px" }}
                />
              </a>
              <a
                href="https://www.instagram.com"
                rel="nonopener noreferrer"
                target="_blank"
              >
                <img
                  src={instaLogo}
                  alt="instagram icon"
                  style={{ height: 30, width: 30, margin: "0 10px" }}
                />
              </a>
              <a
                href="https://www.pinterest.com"
                rel="nonopener noreferrer"
                target="_blank"
              >
                <img
                  src={pinterestLogo}
                  alt="pinterest icon"
                  style={{ height: 30, width: 30, margin: "0 10px" }}
                />
              </a>
            </div>
            <div className="links">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="mainWhiteText text-capitalize" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="mainWhiteText text-capitalize" to="/about">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
