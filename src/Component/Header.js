import { useState } from "react";
import logo from "../../logo.png";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <>
      <header className="header">
        <div className="left">
          <img className="logo" src={logo} alt="Logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button
            className="button-86"
              onClick={() => {
                
                 btnName == "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
