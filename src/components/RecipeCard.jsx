export default function RecipeCard({
  title,
  title_en,
  tags,
  description,
  imgUrl,
  likes
}) {
  return (
    <div className="recipe-results-item ">
      <div className="d-flex  justify-content-between align-items-start">
        <div className="titles ">
          <h3 className="mb-1">{title_en}</h3>
          <h3>{title}</h3>
        </div>
        {/* <span className="icon-likes">
          <span className="material-symbols-outlined">favorite
          </span>
          {likes}
        </span> */}
      </div>

      <ul className="recipe-tag-list">
        {tags.map((tag) => (
          <li key={tag} className="recipe-tag-item">
            {tag}
          </li>
        ))}
      </ul>
      {/* description只顯示前50字，超過的部分用...表示 */}
      <p className="recipe-description">{description.length>50?description.substring(0,50)+'...':description}</p>
      <div className="pic">
        <img className="w-100" src={imgUrl}></img>
      </div>

      {/* 新增：顯示 likes 數量 */}
      <div className="recipe-stats">
        <span className="likes-count">
          <span className="material-symbols-outlined">favorite</span>
          {likes} 人喜歡
        </span>
      </div>

      <span className="arrow">
        <span className="material-symbols-outlined">arrow_forward</span>
      </span>
    </div>
  );
}
