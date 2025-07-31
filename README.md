# 🍷 Sip Search - 酒譜酒吧搜尋系統

> 一個結合酒譜搜尋與酒吧地圖的完整應用程式

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=for-the-badge&logo=leaflet&logoColor=white)

## 📋 目錄

- [✨ 功能特色](#-功能特色)
- [🔧 技術架構](#-技術架構)
- [📦 技術棧](#-技術棧)
- [📁 專案結構](#-專案結構)
- [💡 核心功能](#-核心功能)

## ✨ 功能特色

**Sip Search** 是一個現代化的酒譜及酒吧搜尋系統，結合了直觀的使用者介面與檢索篩選功能，使用 React 框架和第三方 API 技術實現，並導入 RWD 響應式設計，提供良好的桌機與手機使用體驗。

### 🎯 主要特色

- **智能搜尋**：支援多種搜尋條件的酒譜查詢
- **即時篩選**：動態篩選和排序功能
- **互動地圖**：整合 Leaflet 的酒吧地圖顯示
- **響應式設計**：適配所有裝置尺寸
- **使用者認證**：具備簡易的登入與註冊功能
- **現代化 UI**：使用 Bootstrap 5 和 SCSS 自訂樣式

## 🔧 技術架構

### 前端架構

- **狀態管理**：React Context 用於全域狀態管理
- **路由管理**：React Router 實現單頁應用導航
- **組件化設計**：可重複使用的 React 元件
- **樣式管理**：模組化的 SCSS 樣式系統

### 資料管理

- **API 整合**：RESTful API 呼叫
- **本地儲存**：LocalStorage 用於使用者偏好設定
- **地圖整合**：整合 Google Maps 和 Leaflet 地圖
- **圖片優化**：圖片快取和預載入機制
- **錯誤處理**：全面的錯誤邊界處理

### 使用者體驗

- **載入狀態**：優雅的載入指示器
- **搜尋優化**：防抖動搜尋功能
- **響應式設計**：適配行動裝置和桌面

## 📦 技術棧

### 核心框架

- **React 19.1.0** - 前端 JavaScript 框架
- **Vite 6.3.5** - 建置工具和開發伺服器
- **React Router DOM 7.6.0** - 路由管理

### UI 框架

- **Bootstrap 5.3.6** - 響應式 CSS 框架
- **SASS 1.89.0** - CSS 預處理器
- **自訂 SCSS** - 客製化樣式

### 地圖功能

- **Leaflet 1.9.4** - 開源地圖函式庫
- **React Leaflet 5.0.0** - React 地圖元件

### 開發工具

- **ESLint 9.25.0** - 程式碼品質檢查
- **gh-pages 6.3.0** - GitHub Pages 部署工具

## 📁 專案結構

```
sip-search-project/
├── public/
│   └── data/                # 靜態資料檔案
│       ├── barsData.json    # 酒吧資料
│       └── recipesData.json # 食譜資料
├── src/
│   ├── components/          # 可重複使用元件
│   │   ├── Navbar.jsx      # 導航列
│   │   ├── BarCard.jsx     # 酒吧卡片
│   │   ├── RecipeCard.jsx  # 食譜卡片
│   │   ├── BarMap.jsx      # 地圖元件
│   │   └── ...
│   ├── pages/              # 頁面元件
│   │   ├── Home.jsx        # 首頁
│   │   ├── RecipeSearch.jsx # 食譜搜尋
│   │   ├── BarSearch.jsx   # 酒吧搜尋
│   │   └── ...
│   ├── contexts/           # React Context
│   │   └── AuthContext.jsx # 認證狀態管理
│   ├── api/               # API 服務
│   │   └── dataService.js  # 資料服務
│   ├── scss/              # 樣式檔案
│   │   ├── bootstrap/     # Bootstrap 覆寫
│   │   └── common.scss    # 共用樣式
│   └── assets/            # 靜態資源
└── dist/                  # 建置輸出目錄
```

## 💡 核心功能

### 首頁

- 精美的歡迎畫面和導航
- 快速連結到主要功能

### 酒譜搜尋頁

- 多條件搜尋功能（口感、基酒、酒精濃度）
- 卡片式酒譜展示
- 即時篩選和排序

### 酒吧搜尋頁

- 行政區搜尋功能
- 卡片式酒吧展示
- 地圖式酒吧位置展示
- 互動式地圖操作
- 酒吧詳聯絡資訊展示

---
