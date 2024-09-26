
import logo from "../../logo.png";

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
          
        </header>
      </>
    );
  };

  export default Header;