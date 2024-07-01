import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const NavBarAr = () => {
  const [sideBar, setSideBar] = useState("disable");
  const openSideBar = () => {
    sideBar === "disable" ? setSideBar("active") : setSideBar("disable");
    console.log(sideBar);
  };
  sideBar === "disable"
    ? (document.getElementsByTagName("body")[0].className = "overdisabled")
    : (document.getElementsByTagName("body")[0].className = "overActive");
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
            <Link to="#">المتجر</Link>
            <Link to="#">نبذة عننا</Link>
            <Link to="#">الأخبار</Link>
            <Link to="#">تواصل معنا</Link>
            <Link to="/En">EN</Link>
          </div>
          <div className="faBars" onClick={openSideBar}>
            {sideBar === "disable" ? <FaBars /> : <MdClose />}
          </div>
          <div
            className={sideBar + "Ar"}
            style={{
              display: sideBar === "disable" ? "none" : "block",
              left: "0",
            }}
          >
            <div className="NavBarRight SideBar">
              <Link to="#">المتجر</Link>
              <Link to="#">نبذة عننا</Link>
              <Link to="#">الأخبار</Link>
              <Link to="#">تواصل معنا</Link>
              <Link to="/En">EN</Link>
            </div>
          </div>
          <div
            className=" ClosingSideBarAr"
            onClick={openSideBar}
            style={{ display: sideBar === "disable" ? "none" : "flex" }}
          >
            <span>
              غلق <MdClose />
            </span>
          </div>
        </div>
        <hr />
      </div>
      <div className="TitleExplore">
        <div>
          <h3>كن مبدعا!</h3>
        </div>
        <div>
          <Link to="#">عرض المزيد</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBarAr;
