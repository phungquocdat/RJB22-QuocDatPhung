import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Customer
              </div>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" to="/customerList">
                  List
                </NavLink>
                <NavLink className="dropdown-item" to="/customerForm">
                  Form
                </NavLink>
                <div className="dropdown-divider"></div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Product
              </div>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" to="/productList">
                  List
                </NavLink>
                <NavLink className="dropdown-item" to="/productForm">
                  Form
                </NavLink>
                <div className="dropdown-divider"></div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
