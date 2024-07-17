import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../Users_style/Navbar.css";
import { getToken } from "../services/getToken";
import mainlogo from '../images/mainlogo.png'

const Navbar = () => {
  const [isEdit, setisEdit] = useState(false);
  useEffect(() => {
    if (getToken) {
      Axios.get("http://localhost:8000/loggedin", {
        headers: { authorization: getToken },
      })
      setisEdit(!isEdit);
    }
  }, []);
  return (
    <>
      <div className="unavbar">
        <nav className="navbar navbar-expand-sm">
          <div className="col-xl-9">
            <ul className="navbar-nav ">
              {isEdit ? (
                <li className="nav-item ">
                  <NavLink exact className="nav-link nbr" to="/profile">
                    <i className="fas fa-solid fa-user"> Profile</i>
                  </NavLink>
                </li>
              ) : (
                <li className="nav-item text-dark">
                  <NavLink exact className="nav-link nbr" to="/login">
                    <i className="fas fa-sign-in-alt "> Login</i>
                  </NavLink>
                </li>
              )}
              <li className="nav-item text-dark">
                <NavLink exact className="nav-link nbr  " to="/">
                  <i className="fas fa-home "> Home</i>
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink exact className="nav-link nbr " to="/vehicle">
                  <i className="fas fa-motorcycle"> Vehicle </i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link nbr" to="/service">
                  <i className="fas fa-tools"> Service</i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link nbr" to="/contact">
                  <i className="fas fa-address-book"> Contact </i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link nbr" to="/about">
                  <i className="fas fa-solid fa-users"> About</i>
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <div className="col-xl-3 ">
              <img
                src={mainlogo}
                className=" userlogo"
              />
            </div>
            <p className="rentadv"> Rent Adventure</p>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;