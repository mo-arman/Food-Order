import { useState } from "react";
import logo from "../../logo.png";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();
  return (
    <>
      <header className="header">
        <div className="left">
          <img className="logo" src={logo} alt="Logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li className="online-status">
              Online Status : {onlineStatus ? "🌍" : "🐍"}
            </li>
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
