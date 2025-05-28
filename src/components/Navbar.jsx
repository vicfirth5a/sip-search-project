import "./Navbar.scss";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav className="navbar-content">

        <div className="logo">
          <img src={logo} alt="logo"></img>
        </div>

        <div className="nav-links">
          <a href="#">找酒譜</a>
          <a href="#">找酒吧</a>
        </div>

        <div className="login">
          <a href="#">註冊 / 登入</a>
          <span class="material-symbols-outlined">
search
</span>
        </div>
      </nav>
    </div>
  );
}
