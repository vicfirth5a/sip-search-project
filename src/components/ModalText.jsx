export default function ModalText({
  title,
  tags = [],
  category,
  onFilterClick,
  onBarFilterClick,
  selectedRecipeFilters,
  selectedBarFilters,
}) {
  return (
    <div className="modal-content">
      {title && <p className="modal-title">{title}</p>}

      {tags.length > 0 && selectedRecipeFilters && (
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

      {tags.length > 0 && selectedBarFilters && (
        <div className="modal-tags">
          {tags.map((tag, index) => {
            //檢查這個選項有沒有在篩選條件物件裡面
            const isSelected = selectedBarFilters.includes(tag);

            return (
              <span
                key={index}
                className={`tag-item 
            ${isSelected ? "selected" : null}
            `}
                onClick={() => onBarFilterClick(tag)}
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
