import logo from "../utils/logo.png";
import { useState } from "react";
const Header = () => {
  const [log, setLog] = useState("Login");
  const toggleLog = () => {
    if (log == "Login") {
      setLog("Logout");
    } else {
      setLog("Login");
    }
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
          <button className="login-btn" onClick={toggleLog}>
            {log}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
