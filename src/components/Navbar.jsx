import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

import "./navbar.scss";

// 引入我們建立的 useAuth 和 AuthModal
import { useAuth } from "../contexts/AuthContext";
import AuthModal from "./AuthModal";

export default function Navbar() {
  // 從 AuthContext 取得登入狀態和登出功能
  const { currentUser, logout } = useAuth();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 控制登入 Modal 的顯示
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // 切換漢堡選單開關
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // 點擊選單項目後關閉選單的函式
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // 開啟登入 Modal
  const openAuthModal = () => {
    setIsAuthModalOpen(true);
  };

  // 關閉登入 Modal
  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  // 處理登出
  const handleLogout = () => {
    logout();
    closeMobileMenu(); // 如果是在手機選單中點擊登出，也要關閉選單
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
          {currentUser ? (
            // 如果已登入，顯示使用者資訊和登出按鈕
            <div className="user-info">
              <span className="welcome-text">歡迎，{currentUser.username}</span>
              <button className="logout-btn" onClick={handleLogout}>
                登出
              </button>
            </div>
          ) : (
            // 如果未登入，顯示註冊/登入按鈕
            <>
              <button onClick={openAuthModal}>註冊 / 登入</button>
              <span className="material-symbols-outlined">search</span>
            </>
          )}
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

                {currentUser ? (
                  // 手機版：已登入狀態
                  <>
                    <div className="mobile-user-info">
                      <span className="material-symbols-outlined">person</span>
                      歡迎，{currentUser.username}
                    </div>
                    <button
                      className="mobile-menu-item logout-item"
                      onClick={handleLogout}
                    >
                      <span className="material-symbols-outlined">logout</span>
                      登出
                    </button>
                  </>
                ) : (
                  // 手機版：未登入狀態
                  <button
                    className="mobile-menu-item"
                    onClick={() => {
                      openAuthModal();
                      closeMobileMenu();
                    }}
                  >
                    <span className="material-symbols-outlined">person</span>
                    註冊 / 登入
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* 登入/註冊 Modal */}
      <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
    </div>
  );
}
