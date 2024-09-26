import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Header";
import Body from "./Component/Body";



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
