export default function ModalText({
  title,
  tags = [],
  category,
  onFilterClick,
  selectedRecipeFilters,
}) {
  return (
    <div className="modal-content">
      {title && <p className="modal-title">{title}</p>}

      {tags.length > 0 && (
        <div className="modal-tags">
          {tags.map((tag, index) => {
            //檢查這個選項有沒有在篩選條件物件裡面
            const isSelected = selectedRecipeFilters[category] === tag;

            return (
              <span
                key={index}
                className={`tag-item 
            ${isSelected ? "selected" : null}
            `}
                onClick={() => onFilterClick(category, tag)}
              >
                {tag}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}
