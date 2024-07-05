import { NavLink } from "react-router-dom";
import logo from "../assets/logo/logo.svg";

function NavBar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <NavLink to="/">
          <img src={logo} />
          HRnet
        </NavLink>
        <NavLink to="/employees">View Current Employees</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
