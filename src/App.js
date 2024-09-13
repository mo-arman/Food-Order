import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { IMG_CDN_URL } from "./utils/constants";

//Create nested React Elements

// const heading = React.createElement(
//     "h1",
//     {
//       id: "title",
//       style: {gi
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








const AppLayout = () => {
  return (
    <div className="applayout">
      <Header />
      <Body />
      <Footer/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
