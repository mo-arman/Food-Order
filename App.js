import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import logo from "./logo.png";
import userIcon from "./user icon.png";

//Create nested React Elements

// const heading = React.createElement(
//     "h1",
//     {
//       id: "title",
//       style: {
//         background:"red",
//       },
//       className:"title"
//     },
//     "This is Heading"
//   );
//   const heading1 = React.createElement(
//     "h1",
//     {
//       id: "title",
//     },
//     "This is heading1"
//   );

//   const container = React.createElement(
//     "div",
//     {
//       id: "container",
//     },
//     [heading, heading1]
//   );

//   // create root using createRoot
//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   // passing react element inside root
//   root.render(container);

const Header = () => {
  return (
    <header className="header">
      <div className="left">
        <img src={logo} alt="logo" />
      </div>
      <div className="center">
        <input
          className="input"
          type="text"
          placeholder="  Search anything you want.... "
        />
        <button type="submit">🔍
          <i className="fa fa search"></i>
        </button>
      </div>
      <div className="right">
        <img src={userIcon} alt="User Icon" />
      </div>
    </header>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>);