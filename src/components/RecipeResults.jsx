import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import recipeOptions from "../recipeOption";
import recipesData from "../recipesData";
import RecipeCard from "./RecipeCard";

export default function RecipeResults() {
  const [sortDescending, setSortDescending] = useState(true);

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
    })
  };

  const sortRecipesByLikes =(recipes)=>{
    // 使用 [...recipes] 來創建一個新陣列，避免直接修改原陣列
    return [...recipes].sort((a,b)=>{
      if(sortDescending){
        //遞減排列
        return b.likes-a.likes
      }else{
        //遞增排列
        return a.likes-b.likes
      }
    })
  }
  const handleSortToggle=()=>{
    setSortDescending(!sortDescending)
  }


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
//先過濾，再排序
  const filteredRecipes = filterRecipes();
  const sortedRecipes=sortRecipesByLikes(filteredRecipes)

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

 {/* 新增：排序控制區域 */}
      <div className="sort-controls">
        <div className="sort-info">
          <span>找到 {sortedRecipes.length} 個酒譜</span>
          <span className="sort-status">
            目前排序：按人氣
            <strong>{sortDescending ? " 由高到低" : " 由低到高"}</strong>
          </span>
        </div>


        <button
            className="btn btn-outline-primary ms-auto me-2"
            onClick={handleClearFilters}
            disabled={!hasActiveFilters}
          >
            清除所有篩選條件
          </button>
        <button 
          className="btn-sort"
          onClick={handleSortToggle}
          title={sortDescending ? "切換為由低到高" : "切換為由高到低"}
        > <span className="material-symbols-outlined">
            {sortDescending ? "arrow_downward" : "arrow_upward"}
          </span>
          切換排序
        </button>
        
      </div>


      {/* 新增：清除篩選按鈕 */}
       
        {/* <div className="text-center mb-4">
          <button
            className="btn btn-outline-primary"
            onClick={handleClearFilters}
            disabled={!hasActiveFilters}
          >
            清除所有篩選條件
          </button>

          
        </div> */}
      

      {/* 卡片清單 */}
      <div className="recipe-results-list ">
        {sortedRecipes.length > 0 ? (
          sortedRecipes.map((recipe) => {
            return (
              <RecipeCard
                key={recipe.id}
                title={recipe.title}
                title_en={recipe.title_en}
                tags={recipe.tags}
                description={recipe.description}
                imgUrl={recipe.imagesUrl[0]}
                likes={recipe.likes}
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

      {/* 頁碼區 */}
      {/* 希望每次最多出現6個RecipeCard，<li>最多出現10個頁碼，<select>裡面有所有的頁碼可以選擇 */}
      <div className="recipe-pagination">
          <ul>
            <li>上一頁</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>下一頁</li>

          </ul>

          <select value='共3頁'>
            <option>
              第一頁
            </option>
          </select>

      </div>
    </section>
  );
}
