import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState();
  const changebackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  document.addEventListener("scroll", changebackground);
  return (
    <div>
      <div className={navbar ? "Navbar active" : "Navbar"}>
        <h1>
          <Link className={navbar ? "logo logo2" : "logo"} to={"/"}>
            59-maktab
          </Link>
        </h1>
        <ul className="collection">
          <li className="item">
            <div className="basic-4">
              <Link
                className={navbar ? "LINK_NAv LINK_NAv2" : "LINK_NAv"}
                to={"/"}
              >
                Bosh sahifa
              </Link>
            </div>
          </li>
          <li className="item">
            <div className="basic-4">
              <Link
                className={navbar ? "LINK_NAv LINK_NAv2" : "LINK_NAv"}
                to={"/rahbariyat"}
              >
                Rahbariyat
              </Link>
            </div>
          </li>
          <li className="item">
            <div className="basic-4">
              <Link
                className={navbar ? "LINK_NAv LINK_NAv2" : "LINK_NAv"}
                to={"/bizhaqimizda"}
              >
                Biz haqimizda
              </Link>
            </div>
          </li>
        </ul>
        <ul className="left_collection_nav">
          <li className="item_left_nav">
            <div className="basic-5">
              <Link to={"/signin"} className="Left_link_nav">
                Ro'yxatdan o'tish
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
