import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchBarsData } from "../api/dataService.js"; // 使用 API 服務
import "./barContent.scss";
import Navbar from "../components/Navbar";
import OpeningHours from "../components/OpeningHours";
import BarCard from "../components/BarCard";
import BarMap from "../components/BarMap"; // 引入我們建立的地圖元件
import "../components/BarMap.scss"; // 引入地圖樣式

export default function BarContent() {
  // 跳轉到新網址後，從網址獲取參數
  const { id } = useParams();
  const navigate = useNavigate();

  // 用來存放酒吧資料
  const [bar, setBar] = useState(null);
  // 用來存放所有酒吧資料（用於推薦功能）
  const [barsData, setBarsData] = useState([]);

  // 用來存放相關推薦酒吧
  const [recommendedBars, setRecommendedBars] = useState([]);

  // 推薦酒吧每次顯示的卡片數量
  const [cardsPerSlide, setCardsPerSlide] = useState(() => {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 992) return 2;
    return 3;
  });

  // 推薦酒吧slide的當前索引
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // 載入狀態，用於顯示載入畫面
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // 載入酒吧資料
  useEffect(() => {
    const loadBarsData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchBarsData();
        setBarsData(data);
      } catch (err) {
        setError("無法載入酒吧資料");
        console.error("載入酒吧資料失敗:", err);
      } finally {
        setIsLoading(false);
      }
    };

    loadBarsData();
  }, []);

  // 綁定監聽器，監聽設備寬度改變投影片張數
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerSlide(1);
      } else if (window.innerWidth < 992) {
        setCardsPerSlide(2);
      } else {
        setCardsPerSlide(3);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 每次id變化就找到對應的酒吧
  useEffect(() => {
    // 確保酒吧資料已載入
    if (barsData.length === 0) return;

    // 每次 id 變化時自動滾動到頁面頂部
    window.scrollTo(0, 0);

    // 將字串 id 轉換為數字來比對
    const barId = parseInt(id);

    // 從 barsData 取得該 id 的酒吧
    const foundBar = barsData.find((bar) => bar.id === barId);

    if (foundBar) {
      setBar(foundBar);
      const relatedBars = findRelatedBars(foundBar);
      setRecommendedBars(relatedBars);
      setCurrentSlideIndex(0);
    } else {
      console.error("找不到對應的酒吧");
      setError("找不到對應的酒吧");
    }
  }, [id, barsData]);

  const findRelatedBars = (foundBar) => {
    const region = foundBar.region;
    const type = foundBar.type;
    const relatedRegionBars = barsData.filter((bar) => {
      if (bar.id === foundBar.id) return false;
      return bar.region === region;
    });
    const relatedTypeBars = barsData.filter((bar) => {
      if (bar.id === foundBar.id) return false;
      return bar.type === type;
    });
    const combinedRelatedBars = [...relatedRegionBars, ...relatedTypeBars];
    return combinedRelatedBars;
  };

  const totalSlides = Math.ceil(recommendedBars.length / cardsPerSlide);

  const getCurrentSlideBars = () => {
    const startIndex = currentSlideIndex * cardsPerSlide;
    const endIndex = startIndex + cardsPerSlide;

    return recommendedBars.slice(startIndex, endIndex);
  };

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : totalSlides - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex < totalSlides - 1 ? prevIndex + 1 : 0
    );
  };

  // 載入中的顯示
  if (isLoading) {
    return (
      <>
        {/* <Navbar /> */}
        <div style={{ textAlign: "center", padding: "50px" }}>
          <p>載入中...</p>
        </div>
      </>
    );
  }

  // 錯誤狀態的顯示
  if (error) {
    return (
      <>
        {/* <Navbar /> */}
        <div style={{ textAlign: "center", padding: "50px" }}>
          <p>{error}</p>
        </div>
      </>
    );
  }

  // 如果沒有找到酒吧資料
  if (!bar) {
    return (
      <>
        {/* <Navbar /> */}
        <div style={{ textAlign: "center", padding: "50px" }}>
          <p>找不到酒吧資料</p>
        </div>
      </>
    );
  }

  return (
    <>
      {/* <Navbar /> */}

      <section className="section-bar-content">
        <div className="title mb-6">
          <h2>{bar.name}</h2>
          <span className="likes-icon d-flex align-items-center gap-1">
            <span className="material-symbols-outlined">favorite</span>
            {bar.likeCount}
          </span>
        </div>

        <ul className="bar-tag-list mb-6">
          <li className="bar-tag-item">
            <a
              className="bar-tag-region"
              onClick={() => navigate(`/bars?area=${bar.region}`)}
            >
              {bar.region}
            </a>
          </li>
          <li className="bar-tag-item">
            <a className="bar-tag-type">{bar.type}</a>
          </li>
        </ul>

        <div className="bar-pic-list">
          {bar.imagesUrl.map((imgUrl, index) => (
            <div className="bar-pic-item" key={index}>
              <img src={imgUrl} alt={`${bar.name} 照片 ${index + 1}`} />
            </div>
          ))}
        </div>

        <div className="bar-about">
          <div className="bar-about-txt">
            <h3 className="bar-about-title">關於酒吧</h3>
            <p className="bar-about-description">{bar.description}</p>
          </div>
          <div className="bar-about-pic">
            <img src={bar.imagesUrl[0]} alt={bar.name} />
          </div>
        </div>

        <div className="bar-contact-info">
          <div className="bar-contact-info__txt">
            <div className="bar-contact-info__details mb-1">
              <h3 className="bar-contact-info__title bg-primary1 py-4">
                聯繫我們
              </h3>
              <div className="bar-contact-info__address">
                <span className="material-symbols-outlined">home</span>
                {bar.contactInfo.address}
              </div>
              <div className="bar-contact-info__phone">
                <span className="material-symbols-outlined">call</span>
                {bar.contactInfo.phone}
              </div>
            </div>

            <div className="bar-contact-info__openinghours">
              <OpeningHours bar={bar} />
            </div>
          </div>

          {/* 使用建立的 BarMap 元件 */}
          <div className="bar-contact-info__map">
            <BarMap bar={bar} />
          </div>
        </div>
      </section>

      <section className="section-bar-recommendations">
        <div className="recommendations-title">
          <h3>你可能也感興趣...</h3>
          <p>基於相同的地區、酒吧類型推薦</p>
        </div>

        {recommendedBars.length > 0 ? (
          <>
            <div
              className="bar-recommendations-slider"
              style={{ "--col-count": cardsPerSlide }}
            >
              {/* 左箭頭 */}
              <button
                className="recommendation-arrow recommendation-arrow--prev"
                onClick={handlePrevSlide}
                disabled={totalSlides <= 1}
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>

              <div className="bar-cards-container">
                {getCurrentSlideBars().map((bar) => (
                  <div className="bar-card-wrapper" key={bar.id}>
                    <BarCard
                      id={bar.id}
                      title={bar.name}
                      description={bar.description}
                      region={bar.region}
                      type={bar.type}
                      imagesUrl={bar.imagesUrl[0]}
                      likes={bar.likeCount}
                    />
                  </div>
                ))}
              </div>

              <button
                className="recommendation-arrow recommendation-arrow--next"
                onClick={handleNextSlide}
                disabled={totalSlides <= 1}
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </>
        ) : (
          <div className="no-recommendations">
            <p>目前沒有找到相關的酒吧推薦</p>
          </div>
        )}
      </section>
    </>
  );
}
