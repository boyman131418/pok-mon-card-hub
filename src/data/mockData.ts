// Mock data for the entire application

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: string;
  imageUrl: string;
}

export interface HotCard {
  id: string;
  name: string;
  cardNumber: string;
  price: number;
  priceChange: number;
  imageUrl: string;
  rarity: string;
}

export interface LuckyBag {
  id: string;
  name: string;
  description: string;
  price: number;
  totalStock: number;
  remaining: number;
  imageUrl: string;
}

export interface CardForSale {
  id: string;
  name: string;
  cardNumber: string;
  price: number;
  condition: string;
  imageUrl: string;
  seller: string;
}

export const mockNews: NewsItem[] = [
  { id: "1", title: "《Prismatic Evolutions》補充包正式發售", summary: "最新擴充包帶來超過200張全新卡牌，包括多張閃卡伊布家族！", date: "2026-02-28", category: "新品發售", imageUrl: "https://images.pokemontcg.io/sv7/1_hires.png" },
  { id: "2", title: "世界錦標賽2026年資格賽即將開始", summary: "各地區的積分賽即將展開，頂尖選手爭奪世界賽入場券。", date: "2026-02-27", category: "賽事", imageUrl: "https://images.pokemontcg.io/sv6/35_hires.png" },
  { id: "3", title: "噴火龍ex SAR 價格突破歷史新高", summary: "稀有版本噴火龍在拍賣會上以驚人價格成交，收藏界震動。", date: "2026-02-26", category: "市場動態", imageUrl: "https://images.pokemontcg.io/sv4/6_hires.png" },
  { id: "4", title: "新一期Ban List公佈 多張強力卡遭禁", summary: "官方宣布最新禁卡列表，多張環境統治級卡牌被限制使用。", date: "2026-02-25", category: "規則更新", imageUrl: "https://images.pokemontcg.io/sv5/25_hires.png" },
  { id: "5", title: "寶可夢卡牌遊戲Pocket更新3.0版", summary: "手機版PTCG迎來重大更新，新增對戰模式和卡牌交換功能。", date: "2026-02-24", category: "電子遊戲", imageUrl: "https://images.pokemontcg.io/sv3/44_hires.png" },
  { id: "6", title: "日本限定 寶可夢中心25周年特別套組", summary: "慶祝寶可夢中心成立25周年，推出限定豪華禮盒裝。", date: "2026-02-23", category: "限定商品", imageUrl: "https://images.pokemontcg.io/sv2/1_hires.png" },
  { id: "7", title: "夢幻ex全新插畫版本曝光", summary: "知名繪師操刀的夢幻ex特別插畫版引發收藏熱潮。", date: "2026-02-22", category: "新卡情報", imageUrl: "https://images.pokemontcg.io/sv1/68_hires.png" },
  { id: "8", title: "PTCG投資指南：2026年值得關注的卡牌", summary: "分析師推薦今年最具升值潛力的十張寶可夢卡牌。", date: "2026-02-21", category: "投資分析", imageUrl: "https://images.pokemontcg.io/sv3pt5/15_hires.png" },
  { id: "9", title: "台北寶可夢卡牌大型交換會3月舉辦", summary: "亞洲最大規模卡牌交換活動即將在台北國際會議中心舉行。", date: "2026-02-20", category: "活動", imageUrl: "https://images.pokemontcg.io/sv4pt5/10_hires.png" },
  { id: "10", title: "官方宣布新系列「Stellar Crown」詳情", summary: "下一個擴充系列主打傳說寶可夢，預計四月全球同步發售。", date: "2026-02-19", category: "新品預告", imageUrl: "https://images.pokemontcg.io/sv6pt5/20_hires.png" },
];

export const mockHotCards: HotCard[] = [
  { id: "1", name: "噴火龍 ex SAR", cardNumber: "SV4-006", price: 28800, priceChange: 12.5, imageUrl: "https://images.pokemontcg.io/sv4/6_hires.png", rarity: "SAR" },
  { id: "2", name: "皮卡丘 ex UR", cardNumber: "SV3-044", price: 15600, priceChange: -3.2, imageUrl: "https://images.pokemontcg.io/sv3/44_hires.png", rarity: "UR" },
  { id: "3", name: "夢幻 ex SR", cardNumber: "SV1-068", price: 9200, priceChange: 8.1, imageUrl: "https://images.pokemontcg.io/sv1/68_hires.png", rarity: "SR" },
  { id: "4", name: "路卡利歐 ex SAR", cardNumber: "SV5-025", price: 7800, priceChange: 5.4, imageUrl: "https://images.pokemontcg.io/sv5/25_hires.png", rarity: "SAR" },
  { id: "5", name: "超夢 ex AR", cardNumber: "SV2-001", price: 6500, priceChange: -1.8, imageUrl: "https://images.pokemontcg.io/sv2/1_hires.png", rarity: "AR" },
  { id: "6", name: "固拉多 ex SR", cardNumber: "SV6-035", price: 5200, priceChange: 15.3, imageUrl: "https://images.pokemontcg.io/sv6/35_hires.png", rarity: "SR" },
  { id: "7", name: "裂空座 ex UR", cardNumber: "SV3PT5-015", price: 4800, priceChange: 2.7, imageUrl: "https://images.pokemontcg.io/sv3pt5/15_hires.png", rarity: "UR" },
  { id: "8", name: "仙子伊布 ex SAR", cardNumber: "SV4PT5-010", price: 12400, priceChange: 22.1, imageUrl: "https://images.pokemontcg.io/sv4pt5/10_hires.png", rarity: "SAR" },
  { id: "9", name: "蓋歐卡 ex SR", cardNumber: "SV7-001", price: 3900, priceChange: -5.6, imageUrl: "https://images.pokemontcg.io/sv7/1_hires.png", rarity: "SR" },
  { id: "10", name: "阿爾宙斯 VSTAR UR", cardNumber: "SV6PT5-020", price: 8900, priceChange: 6.8, imageUrl: "https://images.pokemontcg.io/sv6pt5/20_hires.png", rarity: "UR" },
];

export const mockLuckyBag: LuckyBag = {
  id: "1",
  name: "PTCG 超級福袋 2026",
  description: "每袋包含至少5張稀有卡牌，有機會抽中價值超過$50,000的噴火龍ex SAR！內含隨機補充包、閃卡、限定周邊，驚喜無限！",
  price: 888,
  totalStock: 1000,
  remaining: 743,
  imageUrl: "",
};

export const mockCardsForSale: CardForSale[] = [
  { id: "1", name: "噴火龍 VMAX", cardNumber: "S4-100", price: 3200, condition: "Near Mint", imageUrl: "https://images.pokemontcg.io/sv4/6_hires.png", seller: "CardMaster" },
  { id: "2", name: "皮卡丘 V", cardNumber: "S3-025", price: 800, condition: "Mint", imageUrl: "https://images.pokemontcg.io/sv3/44_hires.png", seller: "PokeCollector" },
  { id: "3", name: "水躍魚 ex", cardNumber: "SV1-020", price: 450, condition: "Lightly Played", imageUrl: "https://images.pokemontcg.io/sv1/68_hires.png", seller: "TCGPro" },
  { id: "4", name: "妙蛙種子 AR", cardNumber: "SV2-015", price: 1200, condition: "Mint", imageUrl: "https://images.pokemontcg.io/sv2/1_hires.png", seller: "GreenTrader" },
  { id: "5", name: "傑尼龜 ex SR", cardNumber: "SV5-008", price: 2800, condition: "Near Mint", imageUrl: "https://images.pokemontcg.io/sv5/25_hires.png", seller: "BlueWave" },
  { id: "6", name: "伊布 SAR", cardNumber: "SV6-042", price: 5600, condition: "Mint", imageUrl: "https://images.pokemontcg.io/sv6/35_hires.png", seller: "EeveeFan" },
  { id: "7", name: "超夢 GX", cardNumber: "SV3-030", price: 1800, condition: "Excellent", imageUrl: "https://images.pokemontcg.io/sv3pt5/15_hires.png", seller: "PsychicMaster" },
  { id: "8", name: "卡比獸 V", cardNumber: "SV4-055", price: 650, condition: "Near Mint", imageUrl: "https://images.pokemontcg.io/sv4pt5/10_hires.png", seller: "SleepyCards" },
  { id: "9", name: "暴鯉龍 ex UR", cardNumber: "SV7-012", price: 4200, condition: "Mint", imageUrl: "https://images.pokemontcg.io/sv7/1_hires.png", seller: "DragonLord" },
  { id: "10", name: "甲賀忍蛙 ex", cardNumber: "SV6PT5-033", price: 3500, condition: "Near Mint", imageUrl: "https://images.pokemontcg.io/sv6pt5/20_hires.png", seller: "NinjaTrader" },
];
