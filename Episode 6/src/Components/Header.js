import logo from "../utils/logo.png";
import { useState } from "react";
const Header = () => {
  const [log, setLog] = useState("Login");
  const toggleLog = () => {
    setLog(log === "Login" ? "Logout" : "Login");
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>Cart</li>
          <li>
            <button className="log-btn" onClick={toggleLog}>
              {log}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
