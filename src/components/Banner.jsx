import { useState, useEffect } from "react";

import RecipeFilterModal from "./RecipeFilterModal.jsx";
export default function Banner() {
  const [showRecipeModal, setShowRecipeModal] = useState(false); // 酒譜modal是否顯示

  const [selectedRecipeFilters, setSelectedRecipeFilters] = useState([]); // 選中的酒譜條件

  const handleAddRecipeFilter = function (e) {
    setSelectedRecipeFilters((pre) => [...pre, e.target.textContent]);
    console.log("準備更新");
  };
  useEffect(() => {
    console.log("Updated selectedRecipeFilters:", selectedRecipeFilters); // 這個會在狀態更新並重新渲染元件後紀錄
  }, [selectedRecipeFilters]);
  // 模擬酒譜資料 - 展示 API 資料結構

  return (
    <section className="section-banner">
      <h2 className="text-center my-6">探索微醺魅力，從這裡開始</h2>

      <div className="d-flex gap-2 justify-content-center my-6">
        <button
          className="btn btn-primary1 px-5 py-3"
          onClick={() => setShowRecipeModal(!showRecipeModal)}
        >
          找酒譜
        </button>
        <button className="btn btn-primary1 px-5 py-3 bg-light">找酒吧</button>
      </div>

      <div className="d-flex justify-content-center  searchbar">
        <div>
          <input type="text" placeholder="立即搜尋" className="px-4 py-3" />

          <span className="material-symbols-outlined">search</span>
        </div>
      </div>

      <div className="modal-recipe">
        {showRecipeModal && (
          <RecipeFilterModal onAddRecipeFilter={handleAddRecipeFilter} />
        )}
      </div>
    </section>
  );
}
