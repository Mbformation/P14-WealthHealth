import { NavLink } from "react-router-dom";
import logo from "../assets/logo/logo.svg";

// composant de naviguation
function NavBar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <NavLink to="/">
          <img src={logo} />
          Wealth Health
        </NavLink>
        <NavLink to="/employees">View Current Employees</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
