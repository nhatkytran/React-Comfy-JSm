import { Link } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";

import logo from "../imgs/logo-black-comfy.svg";
import { links } from "../utils/constants";

import { useStructureContext } from "../context";
import { NavbarStyles } from "./styledComponents";
import CartButtons from "./CartButtons";

function Navbar() {
  const { openSidebar } = useStructureContext();

  return (
    <NavbarStyles>
      <div className="app">
        <div className="navbar">
          <Link to="/">
            <img src={logo} alt="Comfy" />
          </Link>
          <ul className="hide">
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
              );
            })}
            <li>
              <Link to="/checkout">CHECKOUT</Link>
            </li>
          </ul>
          <CartButtons kindof="navbar" />
          <div className="navbar-icon responsive-display" onClick={openSidebar}>
            <VscThreeBars />
          </div>
        </div>
      </div>
    </NavbarStyles>
  );
}

export default Navbar;
