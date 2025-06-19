const barsData = [
  {
    id: 1,
    name: "Indulge",
    description:
      "位於台北市大安區的 Indulge Experimental Bistro 是一家結合創意調酒與美食的特色酒吧，以台灣在地食材與現代混搭風格聞名，提供茶香雞尾酒與舒適的用餐環境。",
    region: "台北市",
    type: "特色",
    isReservable: true,
    likeCount: 66,
    favoriteCount: 34,
    minimum_spend: 250,
    imagesUrl: [
      "https://images.unsplash.com/photo-1618659525444-49206d11d0b6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1556855810-ac404aa91e85?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1619864330819-dd4219766e9c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1618683742424-0d7c96d49b54?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1569924995007-e591d333f882?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1574071318537-1c5c7f4b570d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    contactInfo: {
      address: "台北市大安區復興南路一段219巷11號",
      addressUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.8505531017645!2d121.54479809999998!3d25.039145299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abd0e2e035e5%3A0xc2381f52a1189251!2zMTA25Y-w5YyX5biC5aSn5a6J5Y2A5b6p6IiI5Y2X6Lev5LiA5q61MjE55be3MTHomZ8!5e0!3m2!1szh-TW!2stw!4v1741878589322!5m2!1szh-TW!2stw",
      phone: "0227730080",
      openingHours: {
        sunday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        wednesday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        thursday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        friday: {
          open: true,
          start: "17:00",
          end: "03:00",
        },
        saturday: {
          open: true,
          start: "17:00",
          end: "03:00",
        },
      },
    },
  },
  {
    id: 2,
    name: "Draft Land",
    description:
      "台北市中山區的 Draft Land 以創新的雞尾酒直取概念聞名，提供多款桶裝調酒，讓顧客體驗輕鬆的飲酒樂趣。",
    region: "台北市",
    type: "熱門",
    isReservable: false,
    likeCount: 82,
    favoriteCount: 45,
    minimum_spend: 350,
    imagesUrl: [
      "https://images.unsplash.com/photo-1586338211598-e2d64cf97e28?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1514447357535-f21ac8c34538?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1565755713428-1bdfaa7db8ba?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1575184560884-5f3ece6e636c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1582457601528-5f8757143fb1?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    contactInfo: {
      address: "台北市大安區忠孝東路四段248巷2號1樓",
      addressUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.795140225575!2d121.55405410000003!3d25.04102539999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abc5df064007%3A0xd6fbb7ed43fa0377!2zMTA25Y-w5YyX5biC5aSn5a6J5Y2A5b-g5a2d5p2x6Lev5Zub5q61MjQ45be3MuiZnw!5e0!3m2!1szh-TW!2stw!4v1741878740903!5m2!1szh-TW!2stw",
      phone: "0227535366",
      openingHours: {
        sunday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        wednesday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        thursday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        friday: {
          open: true,
          start: "17:00",
          end: "03:00",
        },
        saturday: {
          open: true,
          start: "17:00",
          end: "03:00",
        },
      },
    },
  },
  {
    id: 3,
    name: "Ounce Taipei",
    description:
      "隱身於台北東區巷弄中的 Ounce Taipei 是一家復古風格的秘密酒吧，以經典調酒和高品質威士忌吸引愛好者。",
    region: "台北市",
    type: "音樂",
    isReservable: true,
    likeCount: 57,
    favoriteCount: 28,
    minimum_spend: 450,
    imagesUrl: [
      "https://images.unsplash.com/photo-1535958636474-b021ee887b13?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1594063834707-57413e4221f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1607328874414-4d6c39edde49?q=80&w=2105&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1543007629-5c4e8a83ba4c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1601673732434-223451f7346e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1591243315780-978fd00ff9db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    contactInfo: {
      address: "台北市大安區信義路四段309號",
      addressUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.0212943593533!2d121.55575629999998!3d25.033351400000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abcbdc2bf367%3A0x65e0807b1ff565bc!2zMTA25Y-w5YyX5biC5aSn5a6J5Y2A5L-h576p6Lev5Zub5q61MzA56Jmf!5e0!3m2!1szh-TW!2stw!4v1741878780683!5m2!1szh-TW!2stw",
      phone: "0227037761",
      openingHours: {
        sunday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        wednesday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        thursday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        friday: {
          open: true,
          start: "17:00",
          end: "03:00",
        },
        saturday: {
          open: true,
          start: "17:00",
          end: "03:00",
        },
      },
    },
  },
  {
    id: 4,
    name: "Alchemy",
    description:
      "台中市中區的 Alchemy 將調酒視為一門藝術，提供視覺與味覺兼具的創意飲品，深受年輕族群喜愛。",
    region: "台中市",
    type: "複合",
    isReservable: true,
    likeCount: 73,
    favoriteCount: 39,
    minimum_spend: 550,
    imagesUrl: [
      "https://images.unsplash.com/photo-1615887023544-3a566f29d822?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1562259934-6e09f6a89a98?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1538334591575-c5f86eb5793c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1615887023516-9b6bcd559e87?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1581291641156-1f2e1da8db6f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1615887026505-00283cf0ff83?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    contactInfo: {
      address: "台中市中區自由路二段6號",
      addressUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.952893558434!2d120.68063399999998!3d24.138292399999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d13b314fc0b%3A0xb630f8aafeb428be!2zNDAw5Y-w5Lit5biC5Lit5Y2A6Ieq55Sx6Lev5LqM5q61NuiZnw!5e0!3m2!1szh-TW!2stw!4v1741878844535!5m2!1szh-TW!2stw",
      phone: "0422221088",
      openingHours: {
        sunday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        wednesday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        thursday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        friday: {
          open: true,
          start: "17:00",
          end: "03:00",
        },
        saturday: {
          open: true,
          start: "17:00",
          end: "03:00",
        },
      },
    },
  },
  {
    id: 5,
    name: "Woo Bar",
    description:
      "位於高雄市前鎮區的 Woo Bar 以其時尚設計和海景露台聞名，是夜生活愛好者的熱門聚點。",
    region: "高雄市",
    type: "音樂",
    isReservable: true,
    likeCount: 91,
    favoriteCount: 52,
    minimum_spend: 550,
    imagesUrl: [
      "https://images.unsplash.com/photo-1590423859012-39c5ee2845bd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1500217052183-bc01eee1a74e?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1607622750671-6cd9a99eabd1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1569924995250-4e0efa9bfb2b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1572302920907-288481a7835e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1615887023520-e20970765ef8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    contactInfo: {
      address: "高雄市苓雅區自強三路20巷14號",
      addressUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.1272811472304!2d120.30122739999999!3d22.6117217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e037ec3a8f55d%3A0xc27a5f7f8c3cf2a6!2zODAy6auY6ZuE5biC6IuT6ZuF5Y2A6Ieq5by35LiJ6LevMjDlt7cxNOiZnw!5e0!3m2!1szh-TW!2stw!4v1741878883360!5m2!1szh-TW!2stw",
      phone: "072693638",
      openingHours: {
        sunday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        wednesday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        thursday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        friday: {
          open: true,
          start: "17:00",
          end: "03:00",
        },
        saturday: {
          open: true,
          start: "17:00",
          end: "03:00",
        },
      },
    },
  },
  {
    id: 6,
    name: "R&D Cocktail Lab",
    description:
      "台北市信義區的 R&D Cocktail Lab 專注於分子調酒技術，帶來令人驚艷的飲酒體驗。",
    region: "台北市",
    type: "複合",
    isReservable: false,
    likeCount: 48,
    favoriteCount: 22,
    minimum_spend: 650,
    imagesUrl: [
      "https://images.unsplash.com/photo-1601673731978-9da3b00d6b54?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1485686531765-ba63b07845a7?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1517334266-b25264dbe6f3?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1615887625746-f3d2aa27e048?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1619111228874-26c73d205227?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1576661929310-a29e8fc38c7f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    contactInfo: {
      address: "台北市大安區嘉興街36號",
      addressUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.0680524907607!2d121.55815030000001!3d25.031764499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abca40909e65%3A0x12a36116b3b4d7be!2zMTA25Y-w5YyX5biC5aSn5a6J5Y2A5ZiJ6IiI6KGXMzbomZ8!5e0!3m2!1szh-TW!2stw!4v1741878917301!5m2!1szh-TW!2stw",
      phone: "0225789533",
      openingHours: {
        sunday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        wednesday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        thursday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        friday: {
          open: true,
          start: "17:00",
          end: "03:00",
        },
        saturday: {
          open: true,
          start: "17:00",
          end: "03:00",
        },
      },
    },
  },
  {
    id: 7,
    name: "Fourplay Cuisine",
    description:
      "台北松山區的 Fourplay Cuisine 結合餐酒館與酒吧，提供精緻料理與手工調酒的完美搭配。",
    region: "台北市",
    type: "運動",
    isReservable: true,
    likeCount: 77,
    favoriteCount: 41,
    minimum_spend: 250,
    imagesUrl: [
      "https://images.unsplash.com/photo-1582819509237-d5b75f20ff7a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1597241693839-07d7fb803af1?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1612325508365-22caba7bb69e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1617538031312-0d54d0258822?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1622827855145-0afff4452387?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1572299448190-d7a84f6e6bc9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    contactInfo: {
      address: "台北市大安區東豐街49號",
      addressUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.9378453165646!2d121.54693639999998!3d25.036183299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abd18cbb0f9f%3A0x9ba4f32d5aa4b020!2zMTA25Y-w5YyX5biC5aSn5a6J5Y2A5p2x6LGQ6KGXNDnomZ8!5e0!3m2!1szh-TW!2stw!4v1741878950346!5m2!1szh-TW!2stw",
      phone: "0227083898",
      openingHours: {
        sunday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        wednesday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        thursday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        friday: {
          open: true,
          start: "17:00",
          end: "03:00",
        },
        saturday: {
          open: true,
          start: "17:00",
          end: "03:00",
        },
      },
    },
  },
  {
    id: 8,
    name: "Mood Swing",
    description:
      "台南市中西區的 Mood Swing 是一家以爵士音樂為主題的酒吧，氛圍輕鬆且充滿懷舊情調。",
    region: "台南市",
    type: "音樂",
    isReservable: false,
    likeCount: 63,
    favoriteCount: 30,
    minimum_spend: 350,
    imagesUrl: [
      "https://images.unsplash.com/photo-1540224769541-7e6e20a42330?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1615887584283-91f1be7fdc34?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1569924995012-c4c706bfcd51?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1534232470104-d4188dec5137?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1501817931860-6b22e34ca1a8?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1516458464372-eea4ab222b31?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    contactInfo: {
      address: "台南市東區裕農路117號",
      addressUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.0173764517563!2d120.22766579999998!3d22.9863885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e7697e4e240a1%3A0x4b45db1494834324!2zNzAx5Y-w5Y2X5biC5p2x5Y2A6KOV6L6y6LevMTE36Jmf!5e0!3m2!1szh-TW!2stw!4v1741878998106!5m2!1szh-TW!2stw",
      phone: "0972638000",
      openingHours: {
        sunday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        wednesday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        thursday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        friday: {
          open: true,
          start: "17:00",
          end: "03:00",
        },
        saturday: {
          open: true,
          start: "17:00",
          end: "03:00",
        },
      },
    },
  },
  {
    id: 9,
    name: "Le Bistro",
    description:
      "高雄市鼓山區的 Le Bistro 提供法式風情的葡萄酒與小份料理，是浪漫約會的理想地點。",
    region: "高雄市",
    type: "複合",
    isReservable: true,
    likeCount: 55,
    favoriteCount: 27,
    minimum_spend: 450,
    imagesUrl: [
      "https://images.unsplash.com/photo-1437418747212-8d9709afab22?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1508253730651-e5ace80a7025?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1574879948818-1cfda7aa5b1a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1607857530433-585362935ff9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1543007631-283050bb3e8c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    contactInfo: {
      address: "高雄市苓雅區中興街172號",
      addressUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.9159532434146!2d120.30342700000001!3d22.6196135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e0483e0edd2f9%3A0xf0fc7b10fbea6365!2zODAy6auY6ZuE5biC6IuT6ZuF5Y2A5Lit6IiI6KGXMTcy6Jmf!5e0!3m2!1szh-TW!2stw!4v1741879030962!5m2!1szh-TW!2stw",
      phone: "073386988",
      openingHours: {
        sunday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        wednesday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        thursday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        friday: {
          open: true,
          start: "17:00",
          end: "03:00",
        },
        saturday: {
          open: true,
          start: "17:00",
          end: "03:00",
        },
      },
    },
  },
  {
    id: 10,
    name: "The Speakeasy",
    description:
      "台北大安區的 The Speakeasy 是一家隱密酒吧，靈感來自禁酒令時代，提供濃厚復古氛圍。",
    region: "台北市",
    type: "熱門",
    isReservable: false,
    likeCount: 69,
    favoriteCount: 33,
    minimum_spend: 550,
    imagesUrl: [
      "https://images.unsplash.com/photo-1468056961052-15507578a50d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1568644396922-5c3bfae12521?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1583227061267-8428fb76fbfd?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1485872299829-c673f5194813?q=80&w=2054&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    contactInfo: {
      address: "台北市大安區光復南路554號",
      addressUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.986402954548!2d121.557316!3d25.0345355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abc99f340209%3A0xcf38fefb30208415!2zMTA25Y-w5YyX5biC5aSn5a6J5Y2A5YWJ5b6p5Y2X6LevNTU06Jmf!5e0!3m2!1szh-TW!2stw!4v1741879074352!5m2!1szh-TW!2stw",
      phone: "0227050300",
      openingHours: {
        sunday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        wednesday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        thursday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        friday: {
          open: true,
          start: "17:00",
          end: "03:00",
        },
        saturday: {
          open: true,
          start: "17:00",
          end: "03:00",
        },
      },
    },
  },
  {
    id: 11,
    name: "Bitter & Sweet",
    description:
      "台中北區的 Bitter & Sweet 以苦甜交織的調酒為特色，搭配舒適的工業風裝潢。",
    region: "台中市",
    type: "熱門",
    isReservable: true,
    likeCount: 84,
    favoriteCount: 47,
    minimum_spend: 650,
    imagesUrl: [
      "https://images.unsplash.com/photo-1539639885136-56332d18071d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1556741574-0ddb65d14311?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1575444758702-4a6b9222336e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    contactInfo: {
      address: "台中市西區民權路161-1號",
      addressUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.8358760436295!2d120.67437429999998!3d24.142401299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d0cd90d06f1%3A0xc0a4683d704a0658!2zNDAz5Y-w5Lit5biC6KW_5Y2A5rCR5qyK6LevMTYx6Jmf!5e0!3m2!1szh-TW!2stw!4v1741879139032!5m2!1szh-TW!2stw",
      phone: "0937564227",
      openingHours: {
        sunday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        wednesday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        thursday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        friday: {
          open: true,
          start: "17:00",
          end: "03:00",
        },
        saturday: {
          open: true,
          start: "17:00",
          end: "03:00",
        },
      },
    },
  },
  {
    id: 12,
    name: "TCRC",
    description:
      "台南東區的 TCRC（The Checkered Record Club）以其溫暖燈光和創意調酒聞名，是當地文青最愛。",
    region: "台南市",
    type: "特色",
    isReservable: false,
    likeCount: 95,
    favoriteCount: 58,
    minimum_spend: 250,
    imagesUrl: [
      "https://images.unsplash.com/photo-1597290282695-edc43d0e7129?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1556741533-f6acd6474059?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1556745763-1a6f0ddb0250?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1525268323446-0505b6fe7778?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    contactInfo: {
      address: "台南市中西區新美街117號",
      addressUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.7337117120005!2d120.2009001!3d22.996817600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e766160a5a395%3A0x753f15589b3cf907!2zNzAw5Y-w5Y2X5biC5Lit6KW_5Y2A5paw576O6KGXMTE36Jmf!5e0!3m2!1szh-TW!2stw!4v1741879166588!5m2!1szh-TW!2stw",
      phone: "062228716",
      openingHours: {
        sunday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        wednesday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        thursday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        friday: {
          open: true,
          start: "17:00",
          end: "03:00",
        },
        saturday: {
          open: true,
          start: "17:00",
          end: "03:00",
        },
      },
    },
  },
  {
    id: 13,
    name: "The Speakeasy",
    description:
      "台北大安區的 The Speakeasy 是一家隱密酒吧，靈感來自禁酒令時代，提供濃厚復古氛圍。",
    region: "台北市",
    type: "熱門",
    isReservable: false,
    likeCount: 69,
    favoriteCount: 33,
    minimum_spend: 350,
    imagesUrl: [
      "https://images.unsplash.com/photo-1468056961052-15507578a50d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1568644396922-5c3bfae12521?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1583227061267-8428fb76fbfd?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1485872299829-c673f5194813?q=80&w=2054&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    contactInfo: {
      address: "台北市大安區光復南路554號",
      addressUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.986402954548!2d121.557316!3d25.0345355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abc99f340209%3A0xcf38fefb30208415!2zMTA25Y-w5YyX5biC5aSn5a6J5Y2A5YWJ5b6p5Y2X6LevNTU06Jmf!5e0!3m2!1szh-TW!2stw!4v1741879201812!5m2!1szh-TW!2stw",
      phone: "0227050300",
      openingHours: {
        sunday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        wednesday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        thursday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        friday: {
          open: true,
          start: "17:00",
          end: "03:00",
        },
        saturday: {
          open: true,
          start: "17:00",
          end: "03:00",
        },
      },
    },
  },
  {
    id: 14,
    name: "Fourplay Cuisine",
    description:
      "台北大安區的 Fourplay Cuisine 結合餐酒館與酒吧，提供精緻料理與手工調酒的完美搭配。",
    region: "台北市",
    type: "熱門",
    isReservable: true,
    likeCount: 77,
    favoriteCount: 41,
    minimum_spend: 450,
    imagesUrl: [
      "https://images.unsplash.com/photo-1582819509237-d5b75f20ff7a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1597241693839-07d7fb803af1?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1612325508365-22caba7bb69e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1617538031312-0d54d0258822?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1622827855145-0afff4452387?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1572299448190-d7a84f6e6bc9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    contactInfo: {
      address: "台北市大安區東豐街49號",
      addressUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.9378453165646!2d121.5469364!3d25.03618330000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abd18cbb0f9f%3A0x9ba4f32d5aa4b020!2zMTA25Y-w5YyX5biC5aSn5a6J5Y2A5p2x6LGQ6KGXNDnomZ8!5e0!3m2!1szh-TW!2stw!4v1741879238588!5m2!1szh-TW!2stw",
      phone: "0227083898",
      openingHours: {
        sunday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        wednesday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        thursday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        friday: {
          open: true,
          start: "17:00",
          end: "03:00",
        },
        saturday: {
          open: true,
          start: "17:00",
          end: "03:00",
        },
      },
    },
  },
  {
    id: 15,
    name: "R&D Cocktail Lab",
    description:
      "台北市大安區的 R&D Cocktail Lab 專注於分子調酒技術，帶來令人驚艷的飲酒體驗。",
    region: "台北市",
    type: "特色",
    isReservable: false,
    likeCount: 48,
    favoriteCount: 22,
    minimum_spend: 550,
    imagesUrl: [
      "https://images.unsplash.com/photo-1601673731978-9da3b00d6b54?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1485686531765-ba63b07845a7?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1517334266-b25264dbe6f3?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1615887625746-f3d2aa27e048?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1619111228874-26c73d205227?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1576661929310-a29e8fc38c7f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    contactInfo: {
      address: "台北市大安區嘉興街36號",
      addressUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.0680524907607!2d121.55815030000001!3d25.031764499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abca40909e65%3A0x12a36116b3b4d7be!2zMTA25Y-w5YyX5biC5aSn5a6J5Y2A5ZiJ6IiI6KGXMzbomZ8!5e0!3m2!1szh-TW!2stw!4v1741879272834!5m2!1szh-TW!2stw",
      phone: "0227859654",
      openingHours: {
        sunday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        monday: {
          open: false,
        },
        tuesday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        wednesday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        thursday: {
          open: true,
          start: "17:00",
          end: "02:00",
        },
        friday: {
          open: true,
          start: "17:00",
          end: "03:00",
        },
        saturday: {
          open: true,
          start: "17:00",
          end: "03:00",
        },
      },
    },
  },
];

export default barsData;
