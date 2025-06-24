const BASE_URL = import.meta.env.PROD
  ? "https://vicfirth5a.github.io/sip-search-project" // 請替換成你的用戶名
  : ""; // 開發環境使用相對路徑

export const fetchBarsData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/data/barsData.json`);
    if (!response.ok) {
      throw new Error("無法取得酒吧資料");
    }
    return await response.json();
  } catch (error) {
    console.error("取得酒吧資料失敗:", error);
    return [];
  }
};

export const fetchRecipesData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/data/recipesData.json`);
    if (!response.ok) {
      throw new Error("無法取得調酒資料");
    }
    return await response.json();
  } catch (error) {
    console.error("取得調酒資料失敗:", error);
    return [];
  }
};
