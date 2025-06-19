import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import recipesData from "../recipesData";
import "./RecipeContent.scss";
import Navbar from "../components/Navbar";
import RecipeCard from "../components/RecipeCard";

export default function RecipeContent() {
  // 從 URL 參數中取得酒譜的 id
  const { id } = useParams();
  const navigate = useNavigate();

  // 用來存放找到的酒譜資料
  const [recipe, setRecipe] = useState(null);

  // 用來存放相關推薦酒譜
  const [recommendedRecipes, setRecommendedRecipes] = useState([]);

  //推薦酒譜slide的當前索引
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  //推薦酒譜每次顯示的卡片數量
  const cardsPerSlide = 3;

  // 元件載入時，根據 id 找到對應的酒譜
  useEffect(() => {
    // 每次 id 變化時自動滾動到頁面頂部
    window.scrollTo(0, 0);

    // 將字串 id 轉換為數字來比對
    const recipeId = parseInt(id);

    //從recipesData取得該id的酒譜
    const foundRecipe = recipesData.find((recipe) => recipe.id === recipeId);

    if (foundRecipe) {
      //放進去recipe這個狀態
      setRecipe(foundRecipe);

      // 根據當前酒譜的 filters 篩選相關酒譜
      const relatedRecipes = findRelatedRecipes(foundRecipe);
      setRecommendedRecipes(relatedRecipes);
      //重置slide索引
      setCurrentSlideIndex(0);
    } else {
      console.error("找不到對應的酒譜");
    }
  }, [id, navigate]);

  //篩選相關酒譜的函式(使用 OR 邏輯)
  const findRelatedRecipes = (currentRecipe) => {
    //把目前渲染的酒譜丟進來取得該酒譜的filters屬性，再使用這個filters去篩選符合的酒譜
    const currentFilters = currentRecipe.filters;
    const related = recipesData.filter((recipe) => {
      //排除當前酒譜(回傳false的元素不會被歸進去回傳的陣列)
      if (recipe.id === currentRecipe.id) return false;

      //filter特性:回傳true的元素會被編入新的陣列回傳
      //利用some方法的特性:只要一個元素符合條件就會回傳true
      return Object.entries(currentFilters).some(([category, value]) => {
        return recipe.filters[category] === value;
      });
    });
    //篩選完之後，把陣列傳出來做後續應用
    return related;
  };

  //計算slide總頁數
  const totalSlides = Math.ceil(recommendedRecipes.length / cardsPerSlide);

  //取得當前要顯示的推薦酒譜，要先決定startIndex與endIndex，再從recommendedRecipes切出來
  const getCurrentSlideRecipes = () => {
    const startIndex = currentSlideIndex * cardsPerSlide;
    const endIndex = startIndex + cardsPerSlide;
    return recommendedRecipes.slice(startIndex, endIndex);
  };

  //處理slide上一頁
  const handlePrevSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : totalSlides - 1
    );
  };
  //處理slide下一頁
  const handleNextSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex < totalSlides - 1 ? prevIndex + 1 : 0
    );
  };

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
          <p className="recommendations-subtitle">
            基於相似的口感風味、基酒類型或酒精濃度推薦
          </p>
        </div>

        {recommendedRecipes.length > 0 ? (
          <>
            <div className="recipe-recommendations-slider">
              {/* 左箭頭 */}
              <button
                className="recommendation-arrow recommendation-arrow--prev"
                onClick={handlePrevSlide}
                disabled={totalSlides <= 1}
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>

              <div className="recipe-cards-container">
                {getCurrentSlideRecipes().map((recommendedRecipe) => (
                  <div
                    className="recipe-card-wrapper"
                    key={recommendedRecipe.id}
                  >
                    <RecipeCard
                      id={recommendedRecipe.id}
                      title={recommendedRecipe.title}
                      title_en={recommendedRecipe.title_en}
                      tags={recommendedRecipe.tags}
                      description={recommendedRecipe.description}
                      imgUrl={recommendedRecipe.imagesUrl[0]}
                      likes={recommendedRecipe.likes}
                    />
                  </div>
                ))}
              </div>

              {/* 右箭頭 */}
              <button
                className="recommendation-arrow recommendation-arrow--next"
                onClick={handleNextSlide}
                disabled={totalSlides <= 1}
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
            {/* 滑動指示器 */}
            {totalSlides > 1 && (
              <div className="slide-indicators">
                {Array.from({ length: totalSlides }, (_, index) => (
                  <button
                    key={index}
                    className={`slide-indicator ${
                      index === currentSlideIndex ? "active" : ""
                    }`}
                    onClick={() => setCurrentSlideIndex(index)}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="no-recommendations">
            <p>目前沒有找到相關的酒譜推薦</p>
          </div>
        )}
      </section>
    </>
  );
}
