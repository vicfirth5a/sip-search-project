import { useSearchParams, useNavigate } from "react-router-dom";
import recipeOptions from "../recipeOption";
import recipesData from "../recipesData";
import RecipeCard from "./RecipeCard";

export default function RecipeResults() {
  //從首頁跳轉過來酒譜頁之後，用來讀取URL參數
  //使用useSearchParams可以在切換網址時re-render，使用內建的URLSearchParams則不會re-render
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const getFiltersFromURL = () => {
    const filters = {};
    //使用"包含所有選項的物件"搭配Object.key取得key，這個key就是category(種類，如:口感風味)，再透過searchParams去一一比對網址有沒有出現那個category，有的話可以透過searchParams的get方法取得value，再把category跟value放進去filters物件，最後會把這個filters物件傳出去，再用這個filters去跟酒譜API一一比對，篩出滿足條件的酒譜

    Object.keys(recipeOptions).forEach((category) => {
      const value = searchParams.get(category);
      if (value) {
        filters[category] = value;
      }
    });
    return filters;
  };

  const filterRecipes = () => {
    const filters = getFiltersFromURL();

    //沒有篩選條件的話就顯示所有酒譜
    if (Object.keys(filters).length === 0) return recipesData;

    //有篩選條件就把滿足篩選條件的酒譜顯示出來
    //回傳一個滿足條件的所有酒譜陣列
    return recipesData.filter((recipe) => {
      return Object.entries(filters).every(([category, value]) => {
        return recipe.filters[category] === value;
      });
    });
  };

  //點擊酒譜頁上方標籤時，會取得category及option，再與舊的條件比對更新篩選條件
  const handleFilterClick = (category, option) => {
    //先從目前URL取得篩選條件物件
    const currentFilters = getFiltersFromURL();
    //先複製一份目前的條件出來，之後要根據點擊的項目更改篩選條件
    const newFilters = { ...currentFilters };

    //如果點擊的option本來就有了就刪掉那個category(屬性)，沒有就新增進去新篩選條件
    if (newFilters[category] === option) {
      delete newFilters[category];
    } else {
      newFilters[category] = option;
    }

    //創造新的URL查詢參數後使用navigate導航至該URL(不會重新整理)
    const params = new URLSearchParams();
    Object.entries(newFilters).forEach(([key, value]) => {
      params.append(key, value);
    });

    navigate(`/recipes?${params.toString()}`, { replace: true });
  };

  //清除所有篩選條件
  const handleClearFilters = () => {
    navigate("/recipes");
  };

  const filteredRecipes = filterRecipes();
  //取得篩選條件物件，後續拿來裝飾樣式
  const activeFilters = getFiltersFromURL();
  const hasActiveFilters = Object.keys(activeFilters).length > 0;

  return (
    <section className="section-recipe-results">
      <h2 className="text-center mb-8">輕鬆篩選，找到你的完美調酒</h2>

      <div className="recipe-option-list">
        {Object.entries(recipeOptions).map(([category, options]) => {
          return (
            <div
              className=" recipe-option-item d-flex align-items-center gap-6"
              key={category}
            >
              <h3 className="recipe-option-title">{category}</h3>
              <ul className="recipe-option-values">
                {options.map((option) => (
                  <li
                    className={`recipe-option-value
                  ${activeFilters[category] === option ? "active" : ""}
                  `}
                    key={option}
                    onClick={() => handleFilterClick(category, option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* 新增：清除篩選按鈕 */}
      {hasActiveFilters && (
        <div className="text-center mb-4">
          <button
            className="btn btn-outline-primary"
            onClick={handleClearFilters}
          >
            清除所有篩選條件
          </button>
        </div>
      )}

      <div className="recipe-results-list ">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => {
            return (
              <RecipeCard
                key={recipe.id}
                title={recipe.title}
                title_en={recipe.title_en}
                tags={recipe.tags}
                description={recipe.description}
                imgUrl={recipe.imagesUrl[0]}
              />
            );
          })
        ) : (
          <div className="no-results">
            <p>沒有找到符合條件的酒譜</p>
            <p>請試試其他篩選條件</p>
          </div>
        )}

        {/* {recipesData.map((recipe) => {
          return (
            <RecipeCard
              key={recipe.id}
              title={recipe.title}
              title_en={recipe.title_en}
              tags={recipe.tags}
              description={recipe.description}
              imgUrl={recipe.imagesUrl[0]}
            />
          );
        })} */}
      </div>
    </section>
  );
}
