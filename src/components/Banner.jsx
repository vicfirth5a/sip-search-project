import { useState, useEffect } from "react";

import RecipeFilterModal from "./RecipeFilterModal.jsx";
export default function Banner() {
  const [showRecipeModal, setShowRecipeModal] = useState(false); // 酒譜modal是否顯示

  //酒譜類別，每個類別只能選一個選項
  const [selectedRecipeFilters, setSelectedRecipeFilters] = useState({
    口感風味: null,
    基酒類型: null,
    酒精濃度: null,
  });
  //點擊modal裡的選項的處理邏輯
  const handleRecipeFilterClick = function (category, option) {
    setSelectedRecipeFilters((prev) => ({
      ...prev,
      [category]: prev[category] === option ? null : option,
    }));
  };
  //點擊modal裡的確認按鈕的處理邏輯
  const handleConfirmFilters = function () {
    //按下確認按鈕後把modal關閉
    setShowRecipeModal(false);
    console.log("確認選到的篩選條件:", selectedRecipeFilters);
  };

  //將選取到的篩選條件從物件(三種條件匯總成一物件)轉換成陣列(每一條件為一個物件，每一個物件為陣列的元素)
  const getSelectedRecipeFilterTags = function () {
    const tags = [];

    Object.entries(selectedRecipeFilters).forEach(([category, value]) => {
      if (value !== null) {
        tags.push({
          category: category, //類別名稱(如：口感風味)
          value: value, // 選擇的值（如：清爽系）
          displayText: `${category}:${value}`,
        });
      }
    });
    return tags;
  };

  //點擊搜尋欄下標籤後移除
  const handleRemoveFilterTag = function (category) {
    setSelectedRecipeFilters((prev) => ({
      ...prev,
      [category]: null, //等於點擊後該類別清空
    }));
  };

  useEffect(() => {
    console.log("目前選到的篩選條件", selectedRecipeFilters); // 這個會在狀態更新並重新渲染元件後紀錄
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

      {/* 篩選後條件顯示區 */}
      <div className="selected-filters">
        {getSelectedRecipeFilterTags().map((filterTag, index) => (
          <span
            key={index}
            className="selected-filter-tag"
            onClick={() => handleRemoveFilterTag(filterTag.category)}
          >
            {filterTag.displayText}
            <span className="material-symbols-outlined remove-icon">close</span>
          </span>
        ))}
      </div>

      <div className="modal-recipe">
        {showRecipeModal && (
          <RecipeFilterModal
            onFilterClick={handleRecipeFilterClick}
            onConfirm={handleConfirmFilters}
            selectedRecipeFilters={selectedRecipeFilters}
          />
        )}
      </div>
    </section>
  );
}
