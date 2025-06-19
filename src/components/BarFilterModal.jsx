import ModalText from "./ModalText";
import barOptions from "../barOptions";

export default function BarFilterModal({
  onBarFilterClick,
  onConfirm,
  onClose,
  selectedBarFilters,
}) {
  return (
    <div className="filter-modal">
      <span className="material-symbols-outlined close" onClick={onClose}>
        close
      </span>

      {Object.entries(barOptions).map(([title, areas]) => (
        <ModalText
          key={title}
          title={title}
          tags={areas}
          onBarFilterClick={onBarFilterClick}
          selectedBarFilters={selectedBarFilters}
        />
      ))}

      {/* 希望按下確認按鈕後跳轉至RecipeSearch.jsx頁面，並根據selectedRecipeFilters這個狀態，動態渲染RecipeCard元件 */}
      <button className="btn-confirm" onClick={onConfirm}>
        確認
      </button>
    </div>
  );
}
