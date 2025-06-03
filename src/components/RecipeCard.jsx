export default function RecipeCard({
  title,
  title_en,
  tags,
  description,
  imgUrl,
}) {
  return (
    <div className="recipe-results-item ">
      <div className="titles ">
        <h3 className="mb-1">{title_en}</h3>
        <h3>{title}</h3>
      </div>
      <ul className="recipe-tag-list">
        {tags.map((tag) => (
          <li key={tag} className="recipe-tag-item">
            {tag}
          </li>
        ))}
      </ul>
      {/* 希望description只顯示前50字，超過的部分用...表示 */}
      <p className="recipe-description">{description}</p>
      <div className="pic">
        <img className="w-100" src={imgUrl}></img>
      </div>
      <span className="arrow">
        <span class="material-symbols-outlined">arrow_forward</span>
      </span>
    </div>
  );
}
