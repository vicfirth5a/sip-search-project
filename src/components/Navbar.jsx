// import "./navbar.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  //切換漢堡選單開關
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  //點擊選單項目後關閉選單的函式
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      // 選單開啟時，禁止 body 滾動
      document.body.style.overflow = "hidden";
    } else {
      // 選單關閉時，恢復 body 滾動
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="navbar">
      <nav className="navbar-content">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo"></img>
          </Link>
        </div>

        {/* 桌機版連結 */}
        <div className="nav-links desktop-nav">
          <Link to="/recipes">找酒譜</Link>
          <Link to="/bars">找酒吧</Link>
        </div>

        {/* 桌機版登入區塊 */}
        <div className="login desktop-login">
          <a href="#">註冊 / 登入</a>
          <span className="material-symbols-outlined">search</span>
        </div>

        {/* 漢堡選單(手機版才顯示) */}
        <button
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="切換選單"
        >
          <span className="material-symbols-outlined">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>

        {/* 手機版選單 */}
        {isMobileMenuOpen && (
          <div className="mobile-menu-overlay">
            <div
              className="mobile-menu-backdrop"
              onClick={closeMobileMenu}
            ></div>

            <div className="mobile-menu">
              <div className="mobile-menu-header">
                <div className="mobile-menu-logo">
                  <img src={logo} alt="logo" />
                </div>

                <button
                  className="mobile-menu-close"
                  onClick={closeMobileMenu}
                  aria-label="關閉選單"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <div className="mobile-menu-content">
                <Link
                  to="/recipes"
                  className="mobile-menu-item"
                  onClick={closeMobileMenu}
                >
                  <span className="material-symbols-outlined">local_bar</span>
                  找酒譜
                </Link>
                <Link
                  to="/bars"
                  className="mobile-menu-item"
                  onClick={closeMobileMenu}
                >
                  <span className="material-symbols-outlined">location_on</span>
                  找酒吧
                </Link>
                <a
                  href="#"
                  className="mobile-menu-item"
                  onClick={closeMobileMenu}
                >
                  <span className="material-symbols-outlined">person</span>
                  註冊 / 登入
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
