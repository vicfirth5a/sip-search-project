import barOptions from "../barOptions";
import { useState, useEffect, useRef } from "react";

export default function FilterOptionItem({
  activeFilters,
  area,
  districts,
  handleFilterClick,
}) {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [showScrollButtons, setShowScrollButtons] = useState(false);

  // 檢查是否需要滾動按鈕
  const checkScrollability = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollWidth, clientWidth, scrollLeft } = container;

    // 判斷是否需要顯示滾動按鈕（內容寬度大於容器寬度）
    setShowScrollButtons(scrollWidth > clientWidth);

    // 判斷左右按鈕的啟用狀態
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  // 處理滾動
  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 200; // 每次滾動 200px
    const currentScroll = container.scrollLeft;
    const targetScroll =
      direction === "left"
        ? currentScroll - scrollAmount
        : currentScroll + scrollAmount;

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // 初次檢查
    checkScrollability();

    const handleScrollEvent = () => checkScrollability();
    const handleResize = () => {
      // 延遲檢查，確保重新渲染完成
      setTimeout(checkScrollability, 100);
    };

    container.addEventListener("scroll", handleScrollEvent);
    window.addEventListener("resize", handleResize);

    return () => {
      container.removeEventListener("scroll", handleScrollEvent);
      window.removeEventListener("resize", handleResize);
    };
  }, [districts]);

  return (
    <div className="option-item ">
      <h3 className="option-title">{area}</h3>

      <div className="option-values-wrapper">
        {/*左滾動按鈕*/}
        {showScrollButtons && (
          <button
            className={`scroll-btn scroll-btn-left ${
              !canScrollLeft ? "disabled" : ""
            }`}
            onClick={() => handleScroll("left")}
            disabled={!canScrollLeft}
            aria-label="向左滾動"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
        )}

        <ul className="option-values" ref={scrollContainerRef}>
          {districts.map((district) => (
            <li
              className={`option-value
                  ${activeFilters.includes(district) ? "active" : ""}
                  `}
              key={district}
              onClick={() => handleFilterClick(district)}
            >
              {district}
            </li>
          ))}
        </ul>

        {/* 右滾動按鈕 */}
        {showScrollButtons && (
          <button
            className={`scroll-btn scroll-btn-right ${
              !canScrollRight ? "disabled" : ""
            }`}
            onClick={() => handleScroll("right")}
            disabled={!canScrollRight}
            aria-label="向右滾動"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        )}
      </div>
    </div>
  );
}
