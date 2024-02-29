import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="nav-container">
        <div className="navbar">
          <Link className="logo" to="/">
            HackTrack
          </Link>
          <div className="main-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/play">Play</Link>
          </div>
          <div className="right-nav">
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
