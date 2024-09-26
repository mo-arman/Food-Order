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
          <button type="submit">
            Submit
            <i className="fa fa-search"></i>
          </button>
        </div>
        <div className="right">
          <img src={userIcon} alt="User Icon" />
        </div>
      </header>
    </>
  );
};
const RestaurantCard = () => {
  return <div className="res-card"></div>;
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
        <img
          className="card"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/raogglkyaraip6pcmywq"
          alt="card-img"
        />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="applayout">
      <Header />
      <Body />
      {/* <Footer/>  */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
