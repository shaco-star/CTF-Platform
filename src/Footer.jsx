import './Footer.css'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="nav-container">
        <div className="navbar">
          <Link className="logo" to="/">
            HackTrack
          </Link>
          <div className="main-nav">
          HackerTrack All Rights Reserved
          </div>
          <div className="right-nav">
            <p>Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
