export default function ModalText({ title, tags = [], onAddRecipeFilter }) {
  return (
    <div className="modal-content">
      {title && <p className="modal-title">{title}</p>}

      {tags.length > 0 && (
        <div className="modal-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag-item" onClick={onAddRecipeFilter}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
