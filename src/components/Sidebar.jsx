import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

import logo from "../imgs/logo-black-comfy.svg";
import { links } from "../utils/constants";

import { useStructureContext } from "../context";
import { SidebarStyles } from "./styledComponents";
import { ModalOverlay } from "./utils";
import CartButtons from "./CartButtons";

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useStructureContext();

  return (
    <React.Fragment>
      <ModalOverlay />
      <SidebarStyles className={isSidebarOpen ? "show" : "unshown"}>
        <div className="sidebar-header">
          <Link to="/" onClick={closeSidebar}>
            <img src={logo} alt="Comfy" />
          </Link>
          <div className="sidebar-header-close" onClick={closeSidebar}>
            <FaTimes />
          </div>
        </div>
        <ul>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <Link to={link.url} onClick={closeSidebar}>
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
        <CartButtons kindof="sidebar" />
      </SidebarStyles>
    </React.Fragment>
  );
}

export default Sidebar;
