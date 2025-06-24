import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import barsData from "../barsData";
import "./barContent.scss";
import Navbar from "../components/Navbar";
import OpeningHours from "../components/OpeningHours";
import BarCard from "../components/BarCard";

export default function BarContent() {
  //跳轉到新網址後，從網址獲取參數
  const { id } = useParams();
  const navigate = useNavigate();

  //用來存放酒吧資料
  const [bar, setBar] = useState(null);

  // 用來存放相關推薦酒吧
  const [recommendedBars, setRecommendedBars] = useState([]);

  //推薦酒吧slide的當前索引
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  //推薦酒吧每次顯示的卡片數量
  const cardsPerSlide = 3;

  //每次id變化就找到對應的酒吧
  useEffect(() => {
    // 每次 id 變化時自動滾動到頁面頂部
    window.scrollTo(0, 0);

    // 將字串 id 轉換為數字來比對
    const barId = parseInt(id);

    //從barsData取得該id的酒譜
    const foundBar = barsData.find((bar) => bar.id === barId);

    if (foundBar) {
      setBar(foundBar);
      const relatedBars = findRelatedBars(foundBar);
      setRecommendedBars(relatedBars);
      setCurrentSlideIndex(0);
    } else {
      console.error("找不到對應的酒吧");
    }
  }, [id]);

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

  if (!bar) {
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
          {bar.imagesUrl.map((imgUrl) => (
            <div className="bar-pic-item">
              <img src={imgUrl} />
            </div>
          ))}
        </div>

        <div className="bar-about">
          <div className="bar-about-txt">
            <h3 className="bar-about-title">關於酒吧</h3>
            <p className="bar-about-description">{bar.description}</p>
          </div>
          <div className="bar-about-pic">
            <img src={bar.imagesUrl[0]} />
          </div>
        </div>

        <div className="bar-contact-info">
          <div className="bar-contact-info__map"></div>

          <div className="bar-contact-info__txt">
            <div className="bar-contact-info__details mb-1">
              <h3 className="bar-contact-info__title bg-primary1 py-4">
                聯繫我們
              </h3>
              <div className="bar-contact-info__address">
                <span class="material-symbols-outlined">home</span>
                {bar.contactInfo.address}
              </div>
              <div className="bar-contact-info__phone">
                <span class="material-symbols-outlined">call</span>
                {bar.contactInfo.phone}
              </div>
            </div>

            <div className="bar-contact-info__openinghours">
              <OpeningHours bar={bar} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-bar-recommendations">
        <div className="recommendations-title">
          <h3>你可能也感興趣...</h3>
          <p>基於相同的地區、酒吧類型推薦</p>
        </div>

        <div className="bar-recommendations-slider">
          <button
            className="recommendation-arrow recommendation-arrow--prev"
            onClick={handlePrevSlide}
            disabled={totalSlides <= 1}
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>

          <div className="bar-cards-container">
            <div className="bar-card-wrapper">
              {getCurrentSlideBars().map((bar) => (
                <BarCard
                  id={bar.id}
                  title={bar.name}
                  description={bar.description}
                  region={bar.region}
                  type={bar.type}
                  imagesUrl={bar.imagesUrl[0]}
                  likes={bar.likeCount}
                />
              ))}
            </div>
          </div>

          <button
            className="recommendation-arrow recommendation-arrow--next"
            onClick={handleNextSlide}
            disabled={totalSlides <= 1}
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </section>
    </>
  );
}
