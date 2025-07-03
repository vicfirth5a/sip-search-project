// src/contexts/AuthContext.jsx

import { createContext, useContext, useState, useEffect } from "react";

// 1. 建立 Context（就像建立一個公告板）
const AuthContext = createContext();

// 2. 建立 Provider 元件（就像公告板的管理員）
export function AuthProvider({ children }) {
  // 管理登入狀態的變數
  const [currentUser, setCurrentUser] = useState(null); // null = 未登入
  const [isLoading, setIsLoading] = useState(true); // 載入狀態

  // 元件載入時，檢查 localStorage 是否有已登入的使用者
  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      // 如果有存放的使用者資料，就設定為已登入
      setCurrentUser(JSON.parse(savedUser));
    }
    setIsLoading(false); // 檢查完畢，停止載入
  }, []);

  // 註冊功能
  const register = (username, email, password) => {
    // 1. 從 localStorage 取得現有的使用者列表
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

    // 2. 檢查是否已經有相同的使用者名稱或 email
    const userExists = existingUsers.find(
      (user) => user.username === username || user.email === email
    );

    if (userExists) {
      throw new Error("使用者名稱或 Email 已存在");
    }

    // 3. 建立新使用者
    const newUser = {
      id: Date.now(), // 用時間戳記當作 ID（簡單的方法）
      username,
      email,
      password, // 注意：實際專案中要加密
    };

    // 4. 加入到使用者列表
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // 5. 自動登入新註冊的使用者
    const userToLogin = { id: newUser.id, username, email };
    setCurrentUser(userToLogin);
    localStorage.setItem("currentUser", JSON.stringify(userToLogin));

    return userToLogin;
  };

  // 登入功能
  const login = (username, password) => {
    // 1. 從 localStorage 取得使用者列表
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // 2. 尋找匹配的使用者
    const user = users.find(
      (u) =>
        (u.username === username || u.email === username) &&
        u.password === password
    );

    if (!user) {
      throw new Error("使用者名稱或密碼錯誤");
    }

    // 3. 登入成功，設定當前使用者（不包含密碼）
    const userToLogin = {
      id: user.id,
      username: user.username,
      email: user.email,
    };

    setCurrentUser(userToLogin);
    localStorage.setItem("currentUser", JSON.stringify(userToLogin));

    return userToLogin;
  };

  // 登出功能
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  // 提供給其他元件使用的值
  const value = {
    currentUser, // 當前登入的使用者
    isLoading, // 是否正在載入
    register, // 註冊功能
    login, // 登入功能
    logout, // 登出功能
  };

  // 3. 回傳 Provider，包裹子元件
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// 4. 建立 useAuth Hook（讓其他元件容易使用 Context）
export function useAuth() {
  const context = useContext(AuthContext);

  // 如果在 Provider 外面使用，會回傳 undefined
  if (context === undefined) {
    throw new Error("useAuth 必須在 AuthProvider 內部使用");
  }

  return context;
}
