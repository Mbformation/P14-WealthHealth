import { NavLink } from "react-router-dom";
import logo from "../assets/logo/logo.svg";

function NavBar() {
  return (
    <nav>
      <NavLink to="/">
        <span>
          <img src={logo} />
          Health Wealth
        </span>
        HRnet
      </NavLink>
      <NavLink to="/employees">View Current Employees</NavLink>
    </nav>
  );
}

export default NavBar;
