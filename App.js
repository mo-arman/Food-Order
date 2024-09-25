import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png";
import userIcon from "./user icon.png";

const Header = () => {
  return (
    <>
 
    <header className="header">
      <div className="left">
        <img src={logo} alt="Logo" />
      </div>
      <div className="center">
        <input
          className="input"
          type="text"
          placeholder="Search anything you want..."
        />
        <button type="submit">Submit
          <i className="fa fa-search"></i>
        </button>
      </div>
      <div className="right">
        <img src={userIcon} alt="User Icon"/>
      </div>
    </header>
    </>
  );
};

const AppLayout = () => {
  return (
    <div className="applayout">
      <Header />
      {/* <Body />
      <Footer/> */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
