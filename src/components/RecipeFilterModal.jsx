import ModalText from "./ModalText.jsx";
import recipeOptions from "../recipeOption.js";

export default function RecipeFilterModal({
  onFilterClick,
  onConfirm,
  onClose,
  selectedRecipeFilters,
}) {
  return (
    <div className="recipe-filter-modal">
      <span className="material-symbols-outlined close" onClick={onClose}>
        close
      </span>

      <ModalText
        title="口感風味"
        tags={recipeOptions.口感風味}
        category="口感風味"
        onFilterClick={onFilterClick}
        selectedRecipeFilters={selectedRecipeFilters}
      />
      <ModalText
        title="基酒類型"
        tags={recipeOptions.基酒類型}
        category="基酒類型"
        onFilterClick={onFilterClick}
        selectedRecipeFilters={selectedRecipeFilters}
      />
      <ModalText
        title="酒精濃度"
        tags={recipeOptions.酒精濃度}
        category="酒精濃度"
        onFilterClick={onFilterClick}
        selectedRecipeFilters={selectedRecipeFilters}
      />

      {/* 希望按下確認按鈕後跳轉至RecipeSearch.jsx頁面，並根據selectedRecipeFilters這個狀態，動態渲染RecipeCard元件 */}
      <button className="btn-confirm" onClick={onConfirm}>
        確認
      </button>
    </div>
  );
}
