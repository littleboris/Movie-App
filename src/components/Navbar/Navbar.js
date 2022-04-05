import React, { useState, useContext } from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { GlobalContext } from "../../context/GlobalState";

export default function Navbar() {
  const { watchlist, removeMovieFromWatchlist } = useContext(GlobalContext);
  let watchAmount = watchlist.length;

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const reloadMainPage = () => {
    window.location.reload();
  };

  return (
    <main id="navbar-container">
      <IconContext.Provider value={{ color: "fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars"></Link>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <div id="link-container" key={index}>
                  <li
                    onClick={reloadMainPage}
                    key={index}
                    className={item.cName}
                  >
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                      <p>({watchAmount})</p>
                    </Link>
                  </li>
                </div>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </main>
  );
}
