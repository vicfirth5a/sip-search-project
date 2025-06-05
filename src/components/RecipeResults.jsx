import { useSearchParams } from "react-router-dom";
import recipeOptions from "../recipeOption";
import recipesData from "../recipesData";
import RecipeCard from "./RecipeCard";

export default function RecipeResults() {
  //從首頁跳轉過來酒譜頁之後，用來讀取URL參數
  //使用useSearchParams可以在切換網址時re-render，使用內建的URLSearchParams則不會re-render
  const [searchParams] = useSearchParams();

  const getFiltersFromURL = () => {
    const filters = {};
    //使用"包含所有選項的物件"搭配Object.key取得key，這個key就是category(種類，如:口感風味)，再透過searchParams去一一比對網址有沒有出現那個category，有的話可以透過searchParams的get方法取得value，再把category跟value放進去filters物件

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
    return recipesData.filter((recipe) => {
      return Object.entries(filters).every(([category, value]) => {
        return recipe.filters[category] === value;
      });
    });

    // return recipesData.filter((recipe) => {
    //   return Object.entries(filters).every(([category, value]) => {
    //     return recipe.tags.includes(value);
    //   });
    // });
  };
  const filteredRecipes = filterRecipes();

  //取得篩選條件物件，後續拿來裝飾樣式
  const activeFilters = getFiltersFromURL();

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
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

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
