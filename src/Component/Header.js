
import logo from "../../logo.png";

const Header = () => {
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
             </ul>
          </div>
          
        </header>
      </>
    );
  };

  export default Header;