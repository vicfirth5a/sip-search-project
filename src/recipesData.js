//將來希望能部署到伺服器執行非同步操作

const recipesData = [
  {
    id: 1,
    title: "叢林鳥",
    title_en: "Jungle Bird",
    description: "一杯美麗的熱帶調酒，帶有鳳梨和朗姆酒的風味。",
    likes: 120,
    imagesUrl: [
      "https://i.imgur.com/eocXieO.png",
      "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGluZWFwcGxlJTIwY29ja3RhaWx8ZW58MHx8MHx8fDI%3D",
    ],
    tags: ["清爽系", "伏特加", "低酒精(10-15%)"],
    ingredients: [
      {
        amount: "45 毫升",
        ingredient: "黑朗姆酒",
      },
      {
        amount: "20 毫升",
        ingredient: "新鮮鳳梨汁",
      },
      {
        amount: "15 毫升",
        ingredient: "橙皮利口酒（如橙酒）",
      },
      {
        amount: "15 毫升",
        ingredient: "新鮮青檸汁",
      },
      {
        amount: "10 毫升",
        ingredient: "細砂糖漿（可選）",
      },
    ],
    instructions: [
      "在調酒壺中加入黑朗姆酒、鳳梨汁、橙皮利口酒、青檸汁及糖漿。",
      "加入冰塊，充分搖勻。",
      "使用濾網倒入裝有冰塊的高球杯中。",
    ],
    garnish: ["鳳梨片", "櫻桃"],
  },
  {
    id: 2,
    title: "尼格羅尼",
    title_en: "Negroni",
    description: "金酒、甜苦艾酒與苦味橙酒的經典組合。",
    likes: 180,
    imagesUrl: [
      "https://i.imgur.com/6DGnFqc.png",
      "https://plus.unsplash.com/premium_photo-1661370085023-16bf34456bbf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    tags: ["香甜系", "琴酒", "中酒精(15-25%)"],
    ingredients: [
      {
        amount: "30 毫升",
        ingredient: "金酒",
      },
      {
        amount: "30 毫升",
        ingredient: "甜苦艾酒",
      },
      {
        amount: "30 毫升",
        ingredient: "苦味橙酒",
      },
    ],
    instructions: [
      "在攪拌杯中加入金酒、甜苦艾酒和苦味橙酒。",
      "加入冰塊並輕輕攪拌約 20 秒，直到混合物變冷。",
      "使用濾網將混合液倒入裝有冰塊的低球杯中。",
    ],
    garnish: ["橙片"],
  },
  {
    id: 3,
    title: "瑪格麗特",
    title_en: "Margarita",
    description: "清新酸甜的經典雞尾酒，充滿龍舌蘭的味道。",
    likes: 250,
    imagesUrl: [
      "https://i.imgur.com/RyXp6Ds.png",
      "https://images.unsplash.com/photo-1634003311194-152e30e732f7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    tags: ["濃郁系", "威士忌", "高酒精(25%+)"],
    ingredients: [
      {
        amount: "45 毫升",
        ingredient: "龍舌蘭酒",
      },
      {
        amount: "15 毫升",
        ingredient: "橙酒（如君度）",
      },
      {
        amount: "15 毫升",
        ingredient: "新鮮青檸汁",
      },
      {
        amount: "10 毫升",
        ingredient: "細砂糖漿（可選）",
      },
    ],
    instructions: [
      "在調酒壺中加入龍舌蘭酒、橙酒、青檸汁及糖漿（如果需要）。",
      "加入冰塊，充分搖勻。",
      "將混合液倒入已經塗上鹽邊的瑪格麗特杯中。",
    ],
    garnish: ["青檸片", "鹽邊"],
  },
];

export default recipesData;
