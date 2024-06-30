import { React, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [sideBar, setSideBar] = useState("disable");
  const openSideBar = () => {
    sideBar === "disable" ? setSideBar("active") : setSideBar("disable");
    console.log(sideBar);
  };

  return (
    <div className="MainNav">
      <div>
        <div className="MainNavBarClass">
          <h3 className="NavBarLeft">
            <Link to="#" onClick={() => window.scroll(0, 0)}>
              Brainwave.io
            </Link>
          </h3>
          <div className="NavBarRight">
            <Link to="#">Our-shop</Link>
            <Link to="#">About us</Link>
            <Link to="#">News</Link>
            <Link to="#">Contact us</Link>
            <Link to="/Ar">عربي</Link>
          </div>
          <div className="faBars" onClick={openSideBar}>
            <FaBars />
          </div>
          <div
            className={sideBar}
            style={{ display: sideBar === "disable" ? "none" : "block" }}
          >
            <div className="NavBarRight SideBar">
              <Link to="#">Our-shop</Link>
              <Link to="#">About us</Link>
              <Link to="#">News</Link>
              <Link to="#">Contact us</Link>
              <Link to="/Ar">عربي</Link>
            </div>
          </div>
          <div
            className="ClosingSideBar"
            onClick={openSideBar}
            style={{ display: sideBar === "disable" ? "none" : "block" }}
          ></div>
        </div>
        <hr />
      </div>
      <div className="TitleExplore">
        <div>
          <h3>Be Creative!</h3>
        </div>
        <div>
          <Link to="#">Explore More</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
