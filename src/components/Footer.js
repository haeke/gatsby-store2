import React from "react"

const Footer = () => {
  return (
    <footer className="footer py-3">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-capitalize">
            <h3 className="text-center">
              All Rights Reserved &copy; {new Date().getFullYear()}{" "}
            </h3>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
