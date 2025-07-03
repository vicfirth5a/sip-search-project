// src/components/AuthModal.jsx
import "./authModal.scss";

import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function AuthModal({ isOpen, onClose }) {
  // 從 AuthContext 取得登入和註冊功能
  const { login, register } = useAuth();

  // 控制是登入模式還是註冊模式
  const [isLoginMode, setIsLoginMode] = useState(true);

  // 表單資料
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // 錯誤訊息
  const [error, setError] = useState("");

  // 載入狀態
  const [isLoading, setIsLoading] = useState(false);

  // 處理輸入框變化
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // 清除錯誤訊息
    if (error) setError("");
  };

  // 處理表單送出
  const handleSubmit = async (e) => {
    e.preventDefault(); // 防止表單預設送出行為
    setIsLoading(true);
    setError("");

    try {
      if (isLoginMode) {
        // 登入模式
        await login(formData.username, formData.password);
        console.log("登入成功！");
      } else {
        // 註冊模式
        // 檢查密碼確認
        if (formData.password !== formData.confirmPassword) {
          throw new Error("密碼確認不相符");
        }

        // 簡單的驗證
        if (formData.username.length < 3) {
          throw new Error("使用者名稱至少要 3 個字元");
        }

        if (formData.password.length < 6) {
          throw new Error("密碼至少要 6 個字元");
        }

        await register(formData.username, formData.email, formData.password);
        console.log("註冊成功！");
      }

      // 成功後關閉 Modal 並清空表單
      onClose();
      resetForm();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // 重置表單
  const resetForm = () => {
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setError("");
  };

  // 切換登入/註冊模式
  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
    resetForm();
  };

  // 處理 Modal 背景點擊
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
      resetForm();
    }
  };

  // 處理 ESC 鍵
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
      resetForm();
    }
  };

  // 如果 Modal 沒有開啟，就不渲染任何內容
  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="modal-container">
        <div className="auth-modal">
          {/* 關閉按鈕 */}
          <button
            className="auth-modal__close"
            onClick={() => {
              onClose();
              resetForm();
            }}
          >
            <span className="material-symbols-outlined">close</span>
          </button>

          {/* Modal 標題 */}
          <h2 className="auth-modal__title">
            {isLoginMode ? "會員登入" : "註冊會員"}
          </h2>

          {/* 錯誤訊息 */}
          {error && <div className="auth-modal__error">{error}</div>}

          {/* 表單 */}
          <form onSubmit={handleSubmit} className="auth-modal__form">
            {/* 使用者名稱 */}
            <div className="form-group">
              <label htmlFor="username">
                使用者名稱{!isLoginMode && "/Email"}
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder={
                  isLoginMode ? "請輸入使用者名稱或 Email" : "請輸入使用者名稱"
                }
                required
              />
            </div>

            {/* Email（只在註冊模式顯示） */}
            {!isLoginMode && (
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="請輸入 Email"
                  required
                />
              </div>
            )}

            {/* 密碼 */}
            <div className="form-group">
              <label htmlFor="password">密碼</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="請輸入密碼"
                required
              />
            </div>

            {/* 確認密碼（只在註冊模式顯示） */}
            {!isLoginMode && (
              <div className="form-group">
                <label htmlFor="confirmPassword">確認密碼</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="請再次輸入密碼"
                  required
                />
              </div>
            )}

            {/* 送出按鈕 */}
            <button
              type="submit"
              className="auth-modal__submit"
              disabled={isLoading}
            >
              {isLoading ? "處理中..." : isLoginMode ? "登入" : "註冊"}
            </button>
          </form>

          {/* 切換模式 */}
          <div className="auth-modal__switch">
            {isLoginMode ? (
              <p>
                還沒有帳號？
                <button type="button" onClick={toggleMode}>
                  立即註冊
                </button>
              </p>
            ) : (
              <p>
                已經有帳號？
                <button type="button" onClick={toggleMode}>
                  前往登入
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
