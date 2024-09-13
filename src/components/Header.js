import { LOGO_IMG } from "../utils/constants";


const Header = () => {


  return (
    <div className="header">
      <div className="logo-container">
        <img className="img" src={LOGO_IMG} alt="logo-img" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>🛒</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
