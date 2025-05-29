import "./banner.scss";
export default function Banner() {
  const [showRecipeModal, setShowRecipeModal] = useState(false); // 酒譜modal是否顯示
  const [showBarModal, setShowBarModal] = useState(false); // 酒吧modal是否顯示
  const [selectedRecipeFilters, setSelectedRecipeFilters] = useState([]); // 選中的酒譜條件
  const [selectedBarFilters, setSelectedBarFilters] = useState([]); // 選中的酒吧條件

  // 酒譜篩選選項 - 精簡但有效的分類
  const recipeOptions = {
    口感風味: ["清爽系", "香甜系", "濃郁系", "酸甜系", "苦味系", "辛辣系"],
    基酒類型: [
      "伏特加",
      "琴酒",
      "威士忌",
      "蘭姆酒",
      "龍舌蘭",
      "白蘭地",
      "其他",
    ],
    酒精濃度: ["低酒精 (10-15%)", "中酒精 (15-25%)", "高酒精 (25%+)"],
    特殊需求: ["無酒精版本", "低卡路里", "不含咖啡因", "適合素食", "經典調酒"],
  };
  // 模擬酒譜資料 - 展示 API 資料結構
  const sampleCocktails = [
    {
      id: "mojito-001",
      name: "經典莫吉托",
      base_spirit: "蘭姆酒",
      flavor_profile: "清爽系",
      alcohol_content: 15.5,
      special_requirements: ["經典調酒"],
      tags: ["夏日", "清爽", "薄荷"],
    },
    {
      id: "old-fashioned-001",
      name: "古典雞尾酒",
      base_spirit: "威士忌",
      flavor_profile: "濃郁系",
      alcohol_content: 32.0,
      special_requirements: ["經典調酒"],
      tags: ["經典", "烈酒", "橙皮"],
    },
    {
      id: "virgin-mojito-001",
      name: "無酒精莫吉托",
      base_spirit: "其他",
      flavor_profile: "清爽系",
      alcohol_content: 0,
      special_requirements: ["無酒精版本", "低卡路里"],
      tags: ["無酒精", "清爽", "薄荷"],
    },
  ];
  // 篩選邏輯函數 - 核心的資料處理邏輯
  const filterCocktails = (cocktails, filters) => {
    if (!filters || filters.length === 0) return cocktails;

    return cocktails.filter((cocktail) => {
      // 檢查每個篩選條件是否符合
      return filters.every((filter) => {
        const [category, option] = filter.split(":");

        switch (category) {
          case "口感風味":
            return cocktail.flavor_profile === option;

          case "基酒類型":
            return cocktail.base_spirit === option;

          case "酒精濃度":
            if (option === "低酒精 (10-15%)") {
              return (
                cocktail.alcohol_content >= 10 && cocktail.alcohol_content <= 15
              );
            } else if (option === "中酒精 (15-25%)") {
              return (
                cocktail.alcohol_content > 15 && cocktail.alcohol_content <= 25
              );
            } else if (option === "高酒精 (25%+)") {
              return cocktail.alcohol_content > 25;
            }
            return false;

          case "特殊需求":
            return cocktail.special_requirements.includes(option);

          default:
            return false;
        }
      });
    });
  };

  return (
    <section className="section-banner">
      <h2 className="text-center my-6">探索微醺魅力，從這裡開始</h2>

      <div className="d-flex gap-2 justify-content-center my-6">
        <button className="btn btn-primary1 px-5 py-3">找酒譜</button>
        <button className="btn btn-primary1 px-5 py-3 bg-light">找酒吧</button>
      </div>

      <div className="d-flex justify-content-center  searchbar">
        <div>
          <input type="text" placeholder="立即搜尋" className="px-4 py-3" />

          <span className="material-symbols-outlined">search</span>
        </div>
      </div>

      <div className="modal-recipe"></div>
    </section>
  );
}
