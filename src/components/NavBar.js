import React, { useState } from "react"
import { Link } from "gatsby"

import logo from "../images/logo.svg"
import { FaCartArrowDown } from "react-icons/fa"

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: "/",
      text: "home",
    },
    {
      id: 2,
      path: "/about",
      text: "about",
    },
  ]
  const [navBarOpen, updateNavBar] = useState(false)
  const [cssClasses, updateCSSClasses] = useState("collapse navbar-collapse")
  const [navBarLinks, updateLinks] = useState(links)

  // toggle the navBarOpen boolean if the navBar is open
  function toggleNavBar() {
    if (navBarOpen) {
      updateNavBar(false)
      // close the navbar
      updateCSSClasses("collapse navbar-collapse")
    } else {
      updateNavBar(true)
      updateCSSClasses("collapse navbar-collapse show")
    }
  }
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <Link to="/" className="px-4 navbar-brand">
        <img src={logo} alt="logo" style={{ height: 50, width: 50 }} />
      </Link>
      <button
        className="navbar-toggler navbar-light"
        type="button"
        onClick={toggleNavBar}
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className={`${cssClasses}`}>
        <ul className="navbar-nav ml-auto">
          {navBarLinks.map(navLink => (
            <li className="nav-item" key={navLink.id}>
              <Link className="nav-link text-capitalize" to={navLink.path}>
                {navLink.text}
              </Link>
            </li>
          ))}
          <li className="nav-item ml-sm-5">
            <FaCartArrowDown className="cart-icon snipcart-checkout" />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
