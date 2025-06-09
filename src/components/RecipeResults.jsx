import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import recipeOptions from "../recipeOption";
import recipesData from "../recipesData";
import RecipeCard from "./RecipeCard";

export default function RecipeResults() {
  const [sortDescending, setSortDescending] = useState(true);
  const [currentPage,setCurrentPage]=useState(1)
  const itemsPerPage = 6 //每頁顯示6個酒譜

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

  // 回傳一個滿足條件的所有酒譜陣列
  const filterRecipes = () => {
    //先從網址取得包含篩選條件的物件
    const filters = getFiltersFromURL();

    //沒有篩選條件的話就顯示所有酒譜
    if (Object.keys(filters).length === 0) return recipesData;

    //有篩選條件就回傳一個滿足條件的所有酒譜陣列
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
    // 排序改變時回到第一頁
    setCurrentPage(1)
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

    //篩選條件改變時回到第一頁
    setCurrentPage(1)
  };

  //清除所有篩選條件
  const handleClearFilters = () => {
    navigate("/recipes");
  };

//分頁相關函數

//計算總頁數
const getTotalPages=(totalItems)=>{
  return Math.ceil(totalItems/itemsPerPage)
}
//取得當前頁的資料
const getCurrentPageData=(allData)=>{
  const startIndex=(currentPage-1)*itemsPerPage;
  const endIndex=startIndex+itemsPerPage
  return allData.slice(startIndex,endIndex)

}
// 處理頁碼點擊
const handlePageChange=(pageNumber)=>{
  setCurrentPage(pageNumber)
  //滾動到頁面頂部，讓使用者看到新內容
  window.scrollTo({
    top:0,
    behavior:'smooth'
  })
}
//處理上一頁
const handlePrevPage=()=>{
  if(currentPage>1){
    handlePageChange(currentPage-1)
  }
}
//處理下一頁
const handleNextPage=(totalPages)=>{
  if(currentPage<totalPages){
    handlePageChange(currentPage+1)
  }
}
//生成要顯示的頁碼陣列
const getPageNumbers=(totalPages)=>{
  //等等要跑迴圈把頁碼push進pages陣列
  const pages=[];
  //頁碼最多出現10頁
  const maxVisiblePages=10;

  //先聲明總頁數不超過10頁的，顯示全部頁碼
  if(totalPages<=maxVisiblePages){
    for(let i=1;i<=totalPages;i++ ){
      pages.push(i)
    }}else{
  //總頁數超過10頁的，每次都會顯示10個頁碼，這時候就要根據不同情形動態調整startPage與endPage
  //先想像你要顯示的情況是你的currentPage要在畫面的正中央，假設currentPage是第5頁，那startPage是第1頁，也就是currentPage-4;endPage是第10頁，也就是currentPage+5
  //會做以下設定是因為如果無腦使用startPage=currentPage - 4;endPage=currentPage + 5，startPage可能會出現負數，endPage可能會出現超過總頁數的情況    
  let startPage=Math.max(1,currentPage-4)
  let endPage=Math.min(totalPages,currentPage+5)

  //確定了startPage跟endPage是合理的數字之後，有一個新的問題，就是顯示的頁數可能有時候無法顯示10頁，
  //第一種情況是因為你的startPage從負數被設定成1，造成你的總頁數<10
  //第二種情況是因為你的endPage從超過總頁數被設定成總頁數，造成你的總頁數<10
  // 比如說你在第2頁，起點不會是2-4=-2(不合理)而是1，終點是2+5=7，總頁數不滿10頁
  // 確保顯示的頁碼數量維持在10個
  //抓出正確的起點與終點去跑迴圈，就能得到正確要顯示的10個頁數
  if(endPage-startPage<maxVisiblePages-1){
        //先處理第一種情形，startPage為1
        if(startPage===1){
        //第一種情形是因為你的startPage從負數被設定成1，造成你的總頁數<10，這時候就要向右延伸(改endPage)湊足10頁
          endPage=10
        }else{
          startPage=endPage-(maxVisiblePages-1)
        }
      }

  //確定了起點與終點之後跑迴圈取得頁面的陣列
  for(let i=startPage;i<=endPage;i++){
    pages.push(i)
  }  
}
return pages
  
}

//先過濾，再排序
  const filteredRecipes = filterRecipes();
  const sortedRecipes=sortRecipesByLikes(filteredRecipes)

//分頁功能會用到的相關數據
const totalPages = getTotalPages(sortedRecipes.length);
const currentPageData=getCurrentPageData(sortedRecipes)
const pageNumbers=getPageNumbers(totalPages)

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

      

      {/* 卡片清單 */}
      <div className="recipe-results-list ">
        {currentPageData.length > 0 ? (
          currentPageData.map((recipe) => {
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
      </div>

      {/* 頁碼區 */}
      {/* 希望每次最多出現6個RecipeCard，<li>最多出現10個頁碼，<select>裡面有所有的頁碼可以選擇 */}
      {totalPages > 1 && (
        <div className="recipe-pagination">
          <ul className="pagination-list">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}
              onClick={handlePrevPage}>上一頁</li>

              {/* 頁碼的按鈕 */}
              {pageNumbers.map((pageNum)=>( <li
              key={pageNum}
               className={`page-item ${currentPage === pageNum ? 'active' : ''}`}
                onClick={() => handlePageChange(pageNum)}
              >{pageNum}</li>))}

              <li
              className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}
              onClick={() => handleNextPage(totalPages)}>下一頁</li>
          </ul>

          <select value={currentPage} 
            onChange={(e) => handlePageChange(Number(e.target.value))}
            className="page-selector">
            {Array.from({length:totalPages},(_,index)=>(<option key={index + 1} value={index + 1}>第{index+1}頁</option>))}
          </select>
        </div>
      )}
    </section>
  );
}
