import logo from "../utils/logo.png";
const Header = () => {
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
          <button className="login-btn">Login</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
