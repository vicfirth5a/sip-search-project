import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import recipesData from "../recipesData";
import "./RecipeContent.scss";
import Navbar from "../components/Navbar";
import RecipeCard from "../components/RecipeCard";

export default function RecipeContent() {
  // 從 URL 參數中取得酒譜的 id
  //他怎麼只會抓到id不會抓到recipeContent?
  const { id } = useParams();
  //useNavigate會回傳什麼?
  const navigate = useNavigate();

  // 用來存放找到的酒譜資料
  const [recipe, setRecipe] = useState(null);

  // 元件載入時，根據 id 找到對應的酒譜
  useEffect(() => {
    // 將字串 id 轉換為數字來比對
    const recipeId = parseInt(id);
    const foundRecipe = recipesData.find((recipe) => recipe.id === recipeId);

    if (foundRecipe) {
      setRecipe(foundRecipe);
    } else {
      console.error("找不到對應的酒譜");
    }
  }, [id, navigate]);

  if (!recipe) {
    return (
      <>
        <Navbar />
        <div style={{ textAlign: "center", padding: "50px" }}>
          <p>載入中...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <section className="section-recipe-content">
        <div
          className="titles d-flex 
        justify-content-center mb-15"
        >
          <h2>{recipe.title_en}</h2>
          <h2>{recipe.title}</h2>
        </div>

        <div className="recipe-content-details">
          <div className="recipe-pic">
            <img src={recipe.imagesUrl[0]} alt={recipe.title} />
          </div>
          <div className="recipe-txt">
            <ul className="tag-list">
              {recipe.tags.map((tag) => (
                <li key={tag} className="tag-item">
                  {tag}
                </li>
              ))}
            </ul>
            <p className="recipe-description">{recipe.description}</p>

            <div className="recipe-practice">
              <h3>調酒作法</h3>
              <div className="main-content lh-lg">
                <div>
                  <h4>材料比例</h4>
                  <ul className="recipe-practice-ingredients">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>
                        {ingredient.ingredient}
                        {ingredient.amount}
                        {index !== recipe.ingredients.length - 1 && "、"}
                        {index === recipe.ingredients.length - 1 && "。"}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4>步驟</h4>
                  <ol>
                    {/* {recipe.instructions.join("")} */}
                    {recipe.instructions.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    ))}
                  </ol>
                </div>

                <div>
                  <h4>裝飾物</h4>
                  <p>{recipe.garnish.join("、")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 希望在點擊RecipeCard的箭頭之後能夠把該酒譜的filters屬性帶過來RecipeContent，並在div.recipe-recommendations-slider裡面渲染<RecipeCard />，並透過兩個arrow進行切換多個slide，篩選的邏輯是"or"，比如說該filters屬性的內容是「"口感風味": "清爽系",
      "基酒類型": "蘭姆酒","酒精濃度": "中酒精(15-25%)"」,那會篩選出口感風味=清爽系or基酒類型=蘭姆酒or酒精濃度=中酒精(15-25%)。 */}
      <section className="recipe-recommendations">
        <div className="recommendations-title">
          <h3>你可能也會喜歡...</h3>
        </div>
        <div className="recipe-recommendations-slider">
          <span className="recommendation-arrow--prev">
            <span className="material-symbols-outlined">chevron_right</span>
          </span>
          <span className="recommendation-arrow--next">
            <span className="material-symbols-outlined">chevron_left</span>
          </span>

          {/* <RecipeCard />
          <RecipeCard /> */}
        </div>
      </section>
    </>
  );
}
