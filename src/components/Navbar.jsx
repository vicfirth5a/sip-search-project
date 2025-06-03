// import "./navbar.scss";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav className="navbar-content">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo"></img>
          </Link>
          {/* <a href="#">
            <img src={logo} alt="logo"></img>
          </a> */}
        </div>

        <div className="nav-links">
          <Link to="/recipes">找酒譜</Link>
          <Link to="/bars">找酒吧</Link>
        </div>

        <div className="login">
          <a href="#">註冊 / 登入</a>
          <span className="material-symbols-outlined">search</span>
        </div>
      </nav>
    </div>
  );
}
