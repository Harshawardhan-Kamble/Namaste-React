import logo from "../../assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [log, setLog] = useState("Login");
  const toggleLog = () => {
    setLog(log === "Login" ? "Logout" : "Login");
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus ? "🟢" : "😡")
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={logo} />
        </div>
        <div className="nav-items">
          <ul>
            <li>{onlineStatus}</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contactus">Contact us</Link>
            </li>
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
