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

  return (
    <div className="flex justify-between">
      <div className="logo-container">
        <img className="w-44" src={logo} />
      </div>
      <div className="flex">
        <ul className="flex">
          <li>{onlineStatus ? "🟢" : "🛑"}</li>
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
