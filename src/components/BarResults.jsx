import { useEffect, useState } from "react";
import barOptions from "../barOptions";
// import barsData from "../barsData";
import FilterOptionItem from "../components/FilterOptionItem";
import BarCard from "./BarCard";
import { useSearchParams, useNavigate } from "react-router-dom";
import { fetchBarsData } from "../api/dataService.js";

export default function BarResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [barsData, setBarsData] = useState([]);
  const [sortDescending, setSortDescending] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; //每頁顯示6個酒譜

  useEffect(() => {
    fetchBarsData().then((data) => setBarsData(data));
  }, []);

  //從URL取得篩選"使用者選取的地區"陣列
  const getFiltersFromURL = () => {
    //每次跳轉網址就會生成一個新的篩選條件陣列
    let filters = [];
    const value = searchParams.getAll("area");
    if (value) filters = [...value];

    return filters;
  };

  //篩選後的酒吧
  const filterBars = () => {
    //先取得使用者選取的地區
    const filters = getFiltersFromURL();
    //使用者沒選的話，直接回傳所有的酒吧
    if (filters.length === 0) return barsData;

    return barsData.filter((bar) => filters.includes(bar.region));
  };

  const sortBarsByLikes = (bars) => {
    return [...bars].sort((a, b) => {
      if (sortDescending) {
        return b.likeCount - a.likeCount;
      } else {
        return a.likeCount - b.likeCount;
      }
    });
  };

  const handleSortToggle = () => {
    setSortDescending(!sortDescending);
    setCurrentPage(1);
  };

  const handleFilterClick = (district) => {
    //這個函式的主要功能是當Option-list裡面的option被點擊時，會導航至新的網址
    const newParams = new URLSearchParams(searchParams);
    //如果網址本身已包含某地區(代表已經是當前的篩選條件)，則把該地區從篩選條件刪除
    if (newParams.getAll("area").includes(district)) {
      const areas = newParams
        .getAll("area")
        .filter((item) => item !== district);
      //先把舊的全部刪除
      newParams.delete("area");
      //再加入新的篩選條件
      areas.forEach((area) => newParams.append("area", area));
    } else {
      //網址本身沒有該地區，直接加進去篩選條件
      newParams.append("area", district);
    }
    setSearchParams(newParams, { replace: true });
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    navigate("/bars");
  };

  //分頁相關
  const getTotalPages = (totalItemsLength) =>
    Math.ceil(totalItemsLength / itemsPerPage);

  // 取得當前頁的資料
  const getCurrentPageData = (allData) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return allData.slice(startIndex, endIndex);
  };

  //處理頁碼點擊
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // 滾動到頁面頂部，讓使用者看到新內容
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // 處理上一頁
  const handlePrePage = () => {
    if (currentPage > 1) handlePageChange(currentPage - 1);
  };

  // 處理下一頁
  //已經有聲明totalPages 是不是就不用放進去參數
  const handleNextPage = () => {
    if (currentPage < totalPages) handlePageChange(currentPage + 1);
  };

  //生成要顯示的頁碼陣列
  // const getPageNumbers = (totalPages) => {
  //   const pages = [];
  //   const maxVisiblePages = 10;

  //   //先聲明總頁數不超過10頁的，顯示全部頁碼
  //   if (totalPages < maxVisiblePages) {
  //     for (let i = 1; i <= totalPages; i++) {
  //       pages.push(i);
  //     }
  //   } else {
  //     let startPage = Math.max(1, currentPage - 4);
  //     let endPage = Math.min(totalPages, currentPage + 5);

  //     if (endPage - startPage < maxVisiblePages - 1) {
  //       if (startPage === 1) {
  //         endPage = 10;
  //       } else {
  //         startPage = endPage - (maxVisiblePages - 1);
  //       }
  //     }
  //     for (let i = startPage; i <= endPage; i++) {
  //       pages.push(i);
  //     }
  //   }

  //   return pages;
  // };

  const getPageNumbers = (totalPages) => {
    // 頁碼最多顯示10頁
    const maxVisiblePages = 10;
    //起始頁與結束頁不一定是1跟10，得考慮"總頁數"與"目前所在頁數"
    let startPage, endPage;

    if (totalPages <= maxVisiblePages) {
      startPage = 1;
      endPage = totalPages;
    } else {
      // 讓目前頁碼盡量在中間
      //如果"目前頁碼"扣掉5頁之後變負數或0，那起始頁就用1
      startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
      endPage = startPage + maxVisiblePages - 1;

      // 如果endPage超過總頁數，往前補
      if (endPage > totalPages) {
        endPage = totalPages;
        startPage = endPage - maxVisiblePages + 1;
      }
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  const filteredBars = filterBars();
  const sortedBars = sortBarsByLikes(filteredBars);

  //分頁
  const totalPages = getTotalPages(sortedBars.length);
  const currentPageData = getCurrentPageData(sortedBars);
  const pagesNumbers = getPageNumbers(totalPages);

  //取得篩選條件陣列，後續拿來裝飾樣式
  const activeFilters = getFiltersFromURL();
  const hasActiveFilters = activeFilters.length > 0;

  return (
    <section className="section-bar-results">
      <h2 className="text-center my-8">尋找你周圍最棒的酒吧</h2>
      <div className="option-list">
        {Object.entries(barOptions).map(([area, districts]) => (
          <FilterOptionItem
            key={area}
            activeFilters={activeFilters}
            area={area}
            districts={districts}
            handleFilterClick={handleFilterClick}
          />
        ))}
      </div>

      {/* 排序控制按鈕 */}
      <div className="sort-controls">
        <button
          className="btn-clear"
          onClick={handleClearFilters}
          disabled={!hasActiveFilters}
        >
          清除所有篩選條件
        </button>

        <button
          className="btn-sort"
          onClick={handleSortToggle}
          title={sortDescending ? "切換為由低到高" : "切換為由高到低"}
        >
          <span className="material-symbols-outlined">
            {sortDescending ? "arrow_downward" : "arrow_upward"}
          </span>
          切換排序
        </button>
      </div>

      <div className="sort-info">
        <span>找到{sortedBars.length}個酒吧</span>
        <span className="sort-status">
          目前排序：按人氣
          <strong>{sortDescending ? " 由高到低" : " 由低到高"}</strong>
        </span>
      </div>

      {/* 酒吧搜尋結果卡片   */}
      <div className="bar-results-list ">
        {currentPageData.length > 0 ? (
          currentPageData.map((bar) => (
            <BarCard
              key={bar.id}
              id={bar.id}
              title={bar.name}
              description={bar.description}
              region={bar.region}
              type={bar.type}
              imagesUrl={bar.imagesUrl[0]}
              likes={bar.likeCount}
            />
          ))
        ) : (
          <div className="no-results">
            <p>沒有找到符合條件的酒吧</p>
            <p>請試試其他篩選條件</p>
          </div>
        )}
      </div>

      {/* 頁碼區 */}

      {totalPages > 1 && (
        <div className="pagination">
          <ul className="pagination-list">
            <li
              className={`pagination-item ${
                currentPage === 1 ? "disabled" : ""
              }`}
              onClick={handlePrePage}
            >
              上一頁
            </li>

            {pagesNumbers.map((pageNum) => (
              <li
                className={`pagination-item ${
                  currentPage === pageNum ? "active" : ""
                } `}
                onClick={() => handlePageChange(pageNum)}
              >
                {pageNum}
              </li>
            ))}

            <li
              className={`pagination-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
              onClick={() => handleNextPage()}
            >
              下一頁
            </li>
          </ul>

          <select
            value={currentPage}
            onChange={(e) => handlePageChange(Number(e.target.value))}
            className="page-selector"
          >
            {pagesNumbers.map((page) => (
              <option key={page} value={page}>
                第{page}頁
              </option>
            ))}
          </select>
        </div>
      )}
    </section>
  );
}
