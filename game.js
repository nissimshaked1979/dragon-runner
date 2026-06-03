const STORAGE_KEY = "dragonRunnerStateV1";
const ADMIN_PIN = "גלעדשקדהמלך20";
const ADMIN_REVEAL_HOLD_MS = 10000;
const SCORE_GAIN_PER_TICK = 0.25;
const SHOP_POINTS_GRACE_SCORE = 42;
const SKIN_VISUAL_SCALE = 1.12;
const MAX_TRAIL_PARTICLES = 90;
const TRAIL_SHOP_VERSION = 2;

const DAILY_REGULAR_MISSIONS = [
  {
    id: "daily-jumps-50",
    type: "jumps",
    target: 50,
    reward: 5000,
    title: "קפוץ 50 פעמים",
    englishTitle: "Jump 50 times",
    description: "קפיצות בכל המשחקים של היום נספרות ביחד.",
    englishDescription: "Jumps from all runs today count together.",
  },
  {
    id: "daily-runs-5",
    type: "runs",
    target: 5,
    reward: 6500,
    title: "שחק 5 משחקים",
    englishTitle: "Play 5 runs",
    description: "כל התחלת משחק נספרת למשימה.",
    englishDescription: "Every started run counts toward this mission.",
  },
  {
    id: "daily-score-300",
    type: "bestScore",
    target: 300,
    reward: 8500,
    title: "תגיע ל-300 ניקוד ריצה",
    englishTitle: "Reach 300 run score",
    description: "צריך להגיע לזה במשחק אחד.",
    englishDescription: "Reach this score in one run.",
  },
  {
    id: "daily-seconds-180",
    type: "totalSeconds",
    target: 180,
    reward: 10000,
    title: "שרוד 3 דקות היום",
    englishTitle: "Survive 3 minutes today",
    description: "הזמן מכל המשחקים של היום מתחבר.",
    englishDescription: "Time from all runs today adds up.",
  },
  {
    id: "daily-score-700",
    type: "bestScore",
    target: 700,
    reward: 16000,
    title: "תגיע ל-700 ניקוד ריצה",
    englishTitle: "Reach 700 run score",
    description: "משימה קשה עם פרס גדול.",
    englishDescription: "A hard mission with a big reward.",
  },
  {
    id: "daily-jumps-120",
    type: "jumps",
    target: 120,
    reward: 13000,
    title: "קפוץ 120 פעמים",
    englishTitle: "Jump 120 times",
    description: "כל קפיצה היום מקדמת אותך.",
    englishDescription: "Every jump today moves you forward.",
  },
  {
    id: "daily-runs-10",
    type: "runs",
    target: 10,
    reward: 14000,
    title: "שחק 10 משחקים",
    englishTitle: "Play 10 runs",
    description: "משימה לשחקנים שלא מוותרים.",
    englishDescription: "A mission for players who keep going.",
  },
];

const DAILY_SECRET_MISSIONS = [
  {
    id: "secret-jumps-67",
    type: "jumps",
    target: 67,
    reward: 6700,
    title: "קפצת בדיוק לכיוון הטרנד",
    englishTitle: "You jumped into the trend",
    hint: "המספר הכי טרנדי יעזור לך.",
    englishHint: "The trendiest number will help you.",
    description: "קפוץ 67 פעמים ביום אחד.",
    englishDescription: "Jump 67 times in one day.",
  },
  {
    id: "secret-score-777",
    type: "bestScore",
    target: 777,
    reward: 16700,
    title: "שיא מזל סודי",
    englishTitle: "Secret lucky score",
    hint: "שלושה מספרים של מזל במסלול.",
    englishHint: "Three lucky numbers on the track.",
    description: "תגיע ל-777 ניקוד ריצה במשחק אחד.",
    englishDescription: "Reach 777 run score in one run.",
  },
  {
    id: "secret-runs-7",
    type: "runs",
    target: 7,
    reward: 7700,
    title: "שבע ריצות סודיות",
    englishTitle: "Seven secret runs",
    hint: "נסה את מספר המזל הקלאסי.",
    englishHint: "Try the classic lucky number.",
    description: "שחק 7 משחקים ביום אחד.",
    englishDescription: "Play 7 runs in one day.",
  },
  {
    id: "secret-seconds-267",
    type: "totalSeconds",
    target: 267,
    reward: 16000,
    title: "זמן סודי במסלול",
    englishTitle: "Secret track time",
    hint: "תשרוד 2 ואז 67.",
    englishHint: "Survive 2 and then 67.",
    description: "שרוד 267 שניות בסך הכול היום.",
    englishDescription: "Survive 267 total seconds today.",
  },
  {
    id: "secret-score-1000",
    type: "bestScore",
    target: 1000,
    reward: 22000,
    title: "אלף במסלול",
    englishTitle: "One thousand on the track",
    hint: "מספר עגול וגדול מחכה לך.",
    englishHint: "A big round number is waiting.",
    description: "תגיע ל-1000 ניקוד ריצה במשחק אחד.",
    englishDescription: "Reach 1000 run score in one run.",
  },
  {
    id: "secret-jumps-150",
    type: "jumps",
    target: 150,
    reward: 15000,
    title: "קפיצות בלי סוף",
    englishTitle: "Endless jumps",
    hint: "הרבה יותר מ-100 קפיצות.",
    englishHint: "Much more than 100 jumps.",
    description: "קפוץ 150 פעמים ביום אחד.",
    englishDescription: "Jump 150 times in one day.",
  },
];

const TRAILS = [
  { id: "fire", name: "שביל אש", englishName: "Fire Trail", tier: "מתחיל", englishTier: "Beginner", cost: 80000, kind: "fire", color: "#ff7a18", accent: "#ffd166", yOffset: 44, spread: 16, size: 18 },
  { id: "hearts", name: "שביל לבבות", englishName: "Heart Trail", tier: "יפה", englishTier: "Pretty", cost: 150000, kind: "heart", color: "#f472b6", accent: "#ffffff", yOffset: 38, spread: 18, size: 13 },
  { id: "gold-sparkles", name: "שביל ניצוצות זהב", englishName: "Gold Sparkle Trail", tier: "מבריק", englishTier: "Shiny", cost: 240000, kind: "sparkle", color: "#facc15", accent: "#ffffff", yOffset: 36, spread: 18, size: 14 },
  { id: "embers", name: "שביל גחלים", englishName: "Ember Trail", tier: "חם", englishTier: "Hot", cost: 330000, kind: "ember", color: "#fb923c", accent: "#fed7aa", yOffset: 40, spread: 18, size: 14 },
  { id: "leaves", name: "שביל עלים", englishName: "Leaf Trail", tier: "טבע", englishTier: "Nature", cost: 430000, kind: "leaf", color: "#22c55e", accent: "#166534", yOffset: 50, spread: 12, size: 15 },
  { id: "feathers", name: "שביל נוצות", englishName: "Feather Trail", tier: "נדיר", englishTier: "Rare", cost: 540000, kind: "feather", color: "#2563eb", accent: "#fef08a", yOffset: 32, spread: 22, size: 17 },
  { id: "snow", name: "שביל שלג", englishName: "Snow Trail", tier: "קפוא", englishTier: "Frozen", cost: 660000, kind: "snow", color: "#bae6fd", accent: "#ffffff", yOffset: 40, spread: 20, size: 15 },
  { id: "moon", name: "שביל ירח", englishName: "Moon Trail", tier: "לילה", englishTier: "Night", cost: 790000, kind: "moon", color: "#cbd5e1", accent: "#475569", yOffset: 34, spread: 18, size: 15 },
  { id: "tiger-stripes", name: "שביל פסים", englishName: "Stripe Trail", tier: "טורף", englishTier: "Predator", cost: 930000, kind: "stripe", color: "#f97316", accent: "#111827", yOffset: 42, spread: 18, size: 17 },
  { id: "hoof-clouds", name: "שביל פרסות", englishName: "Hoof Trail", tier: "מהיר", englishTier: "Fast", cost: 1080000, kind: "hoof", color: "#a16207", accent: "#fde68a", yOffset: 58, spread: 8, size: 15 },
  { id: "giant-dust", name: "שביל ענני אבק", englishName: "Dust Cloud Trail", tier: "גדול", englishTier: "Big", cost: 1250000, kind: "dust", color: "#94a3b8", accent: "#e2e8f0", yOffset: 58, spread: 12, size: 18 },
  { id: "gems", name: "שביל יהלומים", englishName: "Gem Trail", tier: "יוקרתי", englishTier: "Luxury", cost: 1450000, kind: "gem", color: "#dc2626", accent: "#facc15", yOffset: 36, spread: 20, size: 16 },
  { id: "waves", name: "שביל גלים", englishName: "Wave Trail", tier: "ים", englishTier: "Sea", cost: 1650000, kind: "wave", color: "#38bdf8", accent: "#ffffff", yOffset: 44, spread: 18, size: 16 },
  { id: "ribbons", name: "שביל סרטים", englishName: "Ribbon Trail", tier: "אפי", englishTier: "Epic", cost: 1900000, kind: "ribbon", color: "#f9a8d4", accent: "#fff7ed", yOffset: 32, spread: 22, size: 17 },
  { id: "smoke", name: "שביל עשן ירוק", englishName: "Green Smoke Trail", tier: "מסתורי", englishTier: "Mystery", cost: 2150000, kind: "smoke", color: "#84cc16", accent: "#f8fafc", yOffset: 38, spread: 18, size: 17 },
  { id: "pulse", name: "שביל פעימות", englishName: "Pulse Trail", tier: "חזק", englishTier: "Power", cost: 2400000, kind: "pulse", color: "#b45309", accent: "#facc15", yOffset: 44, spread: 16, size: 16 },
  { id: "coffee", name: "שביל קפה", englishName: "Coffee Trail", tier: "סודי", englishTier: "Secret", cost: 2650000, kind: "coffee", color: "#92400e", accent: "#ffedd5", yOffset: 34, spread: 18, size: 16 },
  { id: "cactus", name: "שביל קקטוסים", englishName: "Cactus Trail", tier: "מדבר", englishTier: "Desert", cost: 2900000, kind: "cactus", color: "#22c55e", accent: "#fef3c7", yOffset: 48, spread: 12, size: 15 },
  { id: "peppers", name: "שביל פלפלים", englishName: "Pepper Trail", tier: "חריף", englishTier: "Spicy", cost: 3150000, kind: "pepper", color: "#ef4444", accent: "#facc15", yOffset: 40, spread: 18, size: 15 },
  { id: "forest", name: "שביל יער", englishName: "Forest Trail", tier: "אגדי", englishTier: "Legendary", cost: 3450000, kind: "forest", color: "#15803d", accent: "#a3e635", yOffset: 44, spread: 16, size: 16 },
  { id: "rainbow", name: "שביל קשת", englishName: "Rainbow Trail", tier: "הכי יפה", englishTier: "Most Beautiful", cost: 3750000, kind: "rainbow", color: "#38bdf8", accent: "#f0abfc", yOffset: 34, spread: 22, size: 18 },
  { id: "sixty-seven", name: "שביל 67", englishName: "67 Trail", tier: "הכי יקר", englishTier: "Most Expensive", cost: 5000000, kind: "number", color: "#2563eb", accent: "#facc15", yOffset: 34, spread: 20, size: 18 },
];

const OBSTACLE_TYPES = [
  { type: "crystal", minWidth: 26, maxWidth: 42, minHeight: 42, maxHeight: 68 },
  { type: "tower", minWidth: 32, maxWidth: 45, minHeight: 58, maxHeight: 84 },
  { type: "log", minWidth: 44, maxWidth: 64, minHeight: 28, maxHeight: 40 },
  { type: "flame", minWidth: 30, maxWidth: 44, minHeight: 46, maxHeight: 66, hitInsetX: 8, hitInsetTop: 8 },
  { type: "spikes", minWidth: 52, maxWidth: 76, minHeight: 28, maxHeight: 40, hitInsetX: 6, hitInsetTop: 10 },
  { type: "boulder", minWidth: 38, maxWidth: 56, minHeight: 38, maxHeight: 52, hitInsetX: 7, hitInsetTop: 7 },
  { type: "portal", minWidth: 42, maxWidth: 56, minHeight: 58, maxHeight: 78, hitInsetX: 11, hitInsetTop: 7 },
  { type: "bone", minWidth: 54, maxWidth: 74, minHeight: 28, maxHeight: 38, hitInsetX: 8, hitInsetTop: 7 },
];

const SKINS = [
  {
    id: "classic",
    name: "דרקון קלאסי",
    englishName: "Classic Dragon",
    tier: "חינם",
    englishTier: "Free",
    cost: 0,
    motif: "dragon",
    palette: {
      body: "#31c985",
      dark: "#16885b",
      wing: "#8edff0",
      belly: "#fff2a6",
      horn: "#f2b84b",
      eye: "#151a22",
    },
  },
  {
    id: "rabbit",
    name: "ארנב",
    englishName: "Rabbit",
    tier: "מתחיל",
    englishTier: "Beginner",
    cost: 2250,
    motif: "rabbit",
    palette: {
      body: "#f2f4f7",
      dark: "#98a2b3",
      wing: "#f9a8d4",
      belly: "#ffffff",
      horn: "#fda4af",
      eye: "#171923",
    },
  },
  {
    id: "cat",
    name: "חתול",
    englishName: "Cat",
    tier: "מתקדם",
    englishTier: "Advanced",
    cost: 6750,
    motif: "cat",
    palette: {
      body: "#f59e0b",
      dark: "#92400e",
      wing: "#fbbf24",
      belly: "#fffbeb",
      horn: "#fef3c7",
      eye: "#111827",
    },
  },
  {
    id: "fox",
    name: "שועל",
    englishName: "Fox",
    tier: "נדיר",
    englishTier: "Rare",
    cost: 13500,
    motif: "fox",
    palette: {
      body: "#f97316",
      dark: "#9a3412",
      wing: "#fed7aa",
      belly: "#fff7ed",
      horn: "#ffffff",
      eye: "#111827",
    },
  },
  {
    id: "turtle",
    name: "צב",
    englishName: "Turtle",
    tier: "אפי",
    englishTier: "Epic",
    cost: 22500,
    motif: "turtle",
    palette: {
      body: "#22c55e",
      dark: "#166534",
      wing: "#854d0e",
      belly: "#dcfce7",
      horn: "#a16207",
      eye: "#020617",
    },
  },
  {
    id: "parrot",
    name: "תוכי",
    englishName: "Parrot",
    tier: "אגדי",
    englishTier: "Legendary",
    cost: 33750,
    motif: "parrot",
    palette: {
      body: "#16a34a",
      dark: "#15803d",
      wing: "#2563eb",
      belly: "#fef08a",
      horn: "#f97316",
      eye: "#111827",
    },
  },
  {
    id: "penguin",
    name: "פינגווין",
    englishName: "Penguin",
    tier: "מיוחד",
    englishTier: "Special",
    cost: 45000,
    motif: "penguin",
    palette: {
      body: "#111827",
      dark: "#020617",
      wing: "#1f2937",
      belly: "#f8fafc",
      horn: "#f59e0b",
      eye: "#f8fafc",
    },
  },
  {
    id: "wolf",
    name: "זאב",
    englishName: "Wolf",
    tier: "עילית",
    englishTier: "Elite",
    cost: 58500,
    motif: "wolf",
    palette: {
      body: "#64748b",
      dark: "#334155",
      wing: "#94a3b8",
      belly: "#e2e8f0",
      horn: "#cbd5e1",
      eye: "#0f172a",
    },
  },
  {
    id: "tiger",
    name: "נמר",
    englishName: "Tiger",
    tier: "טורף",
    englishTier: "Predator",
    cost: 72000,
    motif: "tiger",
    palette: {
      body: "#f59e0b",
      dark: "#111827",
      wing: "#fb923c",
      belly: "#fffbeb",
      horn: "#111827",
      eye: "#111827",
    },
  },
  {
    id: "horse",
    name: "סוס",
    englishName: "Horse",
    tier: "מהיר",
    englishTier: "Fast",
    cost: 85500,
    motif: "horse",
    palette: {
      body: "#8b5e34",
      dark: "#422006",
      wing: "#a16207",
      belly: "#fde68a",
      horn: "#111827",
      eye: "#111827",
    },
  },
  {
    id: "elephant",
    name: "פיל",
    englishName: "Elephant",
    tier: "כבד",
    englishTier: "Heavy",
    cost: 99000,
    motif: "elephant",
    palette: {
      body: "#94a3b8",
      dark: "#475569",
      wing: "#cbd5e1",
      belly: "#e2e8f0",
      horn: "#f8fafc",
      eye: "#0f172a",
    },
  },
  {
    id: "agama",
    name: "חרדון",
    englishName: "Agama",
    tier: "הכי יקר",
    englishTier: "Most Expensive",
    cost: 135000,
    motif: "agama",
    palette: {
      body: "#eab308",
      dark: "#7c2d12",
      wing: "#fb7185",
      belly: "#fef3c7",
      horn: "#dc2626",
      eye: "#111827",
    },
  },
  {
    id: "trend-tralalero",
    name: "טרללו טרלה",
    englishName: "Tralalero Tralala",
    tier: "טרנד נדיר",
    englishTier: "Rare Trend",
    cost: 180000,
    motif: "trend-tralalero",
    palette: {
      body: "#60a5fa",
      dark: "#1f2937",
      wing: "#f8fafc",
      belly: "#dbeafe",
      horn: "#2563eb",
      eye: "#020617",
    },
  },
  {
    id: "trend-ballerina",
    name: "בלרינה קפוצ'יני",
    englishName: "Ballerina Cappuccina",
    tier: "טרנד קפה",
    englishTier: "Coffee Trend",
    cost: 200000,
    motif: "trend-ballerina",
    palette: {
      body: "#c08457",
      dark: "#5c2e12",
      wing: "#f9a8d4",
      belly: "#fff7ed",
      horn: "#fef3c7",
      eye: "#111827",
    },
  },
  {
    id: "trend-sixty-seven",
    name: "67",
    englishName: "67",
    tier: "טרנד מספרים",
    englishTier: "Number Trend",
    cost: 210000,
    motif: "trend-sixty-seven",
    palette: {
      body: "#2563eb",
      dark: "#111827",
      wing: "#ffffff",
      belly: "#dbeafe",
      horn: "#facc15",
      eye: "#020617",
    },
  },
  {
    id: "trend-bombardino",
    name: "בומברדינו קרוקודילו",
    englishName: "Bombardino Crocodilo",
    tier: "טרנד אגדי",
    englishTier: "Legendary Trend",
    cost: 230000,
    motif: "trend-bombardino",
    palette: {
      body: "#84cc16",
      dark: "#14532d",
      wing: "#94a3b8",
      belly: "#f8fafc",
      horn: "#ef4444",
      eye: "#020617",
    },
  },
  {
    id: "trend-tung",
    name: "טונג טונג סהור",
    englishName: "Tung Tung Sahur",
    tier: "טרנד עץ",
    englishTier: "Wood Trend",
    cost: 245000,
    motif: "trend-tung",
    palette: {
      body: "#b45309",
      dark: "#451a03",
      wing: "#facc15",
      belly: "#fed7aa",
      horn: "#eab308",
      eye: "#111827",
    },
  },
  {
    id: "trend-cappuccino",
    name: "קפוצ'ינו אססינו",
    englishName: "Cappuccino Assassino",
    tier: "טרנד סודי",
    englishTier: "Secret Trend",
    cost: 260000,
    motif: "trend-cappuccino",
    palette: {
      body: "#92400e",
      dark: "#1f2937",
      wing: "#0f172a",
      belly: "#ffedd5",
      horn: "#f8fafc",
      eye: "#fef3c7",
    },
  },
  {
    id: "trend-lirili",
    name: "לירילי לרילה",
    englishName: "Lirili Larila",
    tier: "טרנד חלומי",
    englishTier: "Dream Trend",
    cost: 275000,
    motif: "trend-lirili",
    palette: {
      body: "#22c55e",
      dark: "#166534",
      wing: "#94a3b8",
      belly: "#fef3c7",
      horn: "#d97706",
      eye: "#111827",
    },
  },
  {
    id: "trend-bobrito",
    name: "בוריטו בנדיטו",
    englishName: "Burrito Bandito",
    tier: "טרנד טאקו",
    englishTier: "Taco Trend",
    cost: 290000,
    motif: "trend-bobrito",
    palette: {
      body: "#d6a15f",
      dark: "#1f2937",
      wing: "#facc15",
      belly: "#fef3c7",
      horn: "#7c2d12",
      eye: "#f8fafc",
    },
  },
  {
    id: "trend-brbr",
    name: "ברר ברר פטפים",
    englishName: "Brr Brr Patapim",
    tier: "טרנד יער",
    englishTier: "Forest Trend",
    cost: 305000,
    motif: "trend-brbr",
    palette: {
      body: "#7c4a2d",
      dark: "#3f2412",
      wing: "#15803d",
      belly: "#fbbf24",
      horn: "#a3e635",
      eye: "#111827",
    },
  },
  {
    id: "trend-trippi",
    name: "טריפי טרופי",
    englishName: "Trippi Troppi",
    tier: "טרנד עליון",
    englishTier: "Top Trend",
    cost: 320000,
    motif: "trend-trippi",
    palette: {
      body: "#f59e0b",
      dark: "#9a3412",
      wing: "#38bdf8",
      belly: "#fffbeb",
      horn: "#f0abfc",
      eye: "#111827",
    },
  },
];

const BASE_COLORS = [
  "#31c985",
  "#2f80ed",
  "#ff6b6b",
  "#f4c45b",
  "#14b8a6",
  "#f97316",
  "#8b5cf6",
  "#263445",
];

const elements = {
  playerName: document.querySelector("#playerName"),
  renameCurrentBtn: document.querySelector("#renameCurrentBtn"),
  scoreValue: document.querySelector("#scoreValue"),
  bestValue: document.querySelector("#bestValue"),
  pointsValue: document.querySelector("#pointsValue"),
  dailyMissionDate: document.querySelector("#dailyMissionDate"),
  dailyMissionGrid: document.querySelector("#dailyMissionGrid"),
  playBtn: document.querySelector("#playBtn"),
  pauseBtn: document.querySelector("#pauseBtn"),
  canvas: document.querySelector("#gameCanvas"),
  gameStatus: document.querySelector("#gameStatus"),
  leaderboardBody: document.querySelector("#leaderboardBody"),
  leaderboardCount: document.querySelector("#leaderboardCount"),
  openLeaderboardBtn: document.querySelector("#openLeaderboardBtn"),
  leaderboardModal: document.querySelector("#leaderboardModal"),
  closeLeaderboardBtn: document.querySelector("#closeLeaderboardBtn"),
  openDuelBtn: document.querySelector("#openDuelBtn"),
  duelModal: document.querySelector("#duelModal"),
  closeDuelBtn: document.querySelector("#closeDuelBtn"),
  duelStatusLabel: document.querySelector("#duelStatusLabel"),
  duelCanvas: document.querySelector("#duelCanvas"),
  startDuelBtn: document.querySelector("#startDuelBtn"),
  duelP1Score: document.querySelector("#duelP1Score"),
  duelP2Score: document.querySelector("#duelP2Score"),
  openDailyMissionsBtn: document.querySelector("#openDailyMissionsBtn"),
  dailyMissionsModal: document.querySelector("#dailyMissionsModal"),
  closeDailyMissionsBtn: document.querySelector("#closeDailyMissionsBtn"),
  openCreatorMessageBtn: document.querySelector("#openCreatorMessageBtn"),
  creatorMessageModal: document.querySelector("#creatorMessageModal"),
  closeCreatorMessageBtn: document.querySelector("#closeCreatorMessageBtn"),
  creatorMessageText: document.querySelector("#creatorMessageText"),
  sendCreatorMessageBtn: document.querySelector("#sendCreatorMessageBtn"),
  activeSkinName: document.querySelector("#activeSkinName"),
  baseColorSwatches: document.querySelector("#baseColorSwatches"),
  skinGrid: document.querySelector("#skinGrid"),
  openTrailShopBtn: document.querySelector("#openTrailShopBtn"),
  trailShopModal: document.querySelector("#trailShopModal"),
  closeTrailShopBtn: document.querySelector("#closeTrailShopBtn"),
  activeTrailName: document.querySelector("#activeTrailName"),
  trailGrid: document.querySelector("#trailGrid"),
  openShopBtn: document.querySelector("#openShopBtn"),
  shopModal: document.querySelector("#shopModal"),
  closeShopBtn: document.querySelector("#closeShopBtn"),
  openSettingsBtn: document.querySelector("#openSettingsBtn"),
  settingsModal: document.querySelector("#settingsModal"),
  closeSettingsBtn: document.querySelector("#closeSettingsBtn"),
  jumpSoundToggle: document.querySelector("#jumpSoundToggle"),
  jumpSoundState: document.querySelector("#jumpSoundState"),
  adminPanel: document.querySelector("#adminPanel"),
  adminState: document.querySelector("#adminState"),
  adminLogin: document.querySelector("#adminLogin"),
  adminTools: document.querySelector("#adminTools"),
  adminPin: document.querySelector("#adminPin"),
  adminLoginBtn: document.querySelector("#adminLoginBtn"),
  adminPlayer: document.querySelector("#adminPlayer"),
  adminNewName: document.querySelector("#adminNewName"),
  renamePlayerBtn: document.querySelector("#renamePlayerBtn"),
  mergePlayerBtn: document.querySelector("#mergePlayerBtn"),
  adminPoints: document.querySelector("#adminPoints"),
  addPointsBtn: document.querySelector("#addPointsBtn"),
  subtractPointsBtn: document.querySelector("#subtractPointsBtn"),
  adminBest: document.querySelector("#adminBest"),
  raiseBestBtn: document.querySelector("#raiseBestBtn"),
  subtractBestBtn: document.querySelector("#subtractBestBtn"),
  adminSkin: document.querySelector("#adminSkin"),
  applyAdminSkinBtn: document.querySelector("#applyAdminSkinBtn"),
  removeAdminSkinBtn: document.querySelector("#removeAdminSkinBtn"),
  adminMissionSummary: document.querySelector("#adminMissionSummary"),
  playerReportSummary: document.querySelector("#playerReportSummary"),
  creatorMessageSummary: document.querySelector("#creatorMessageSummary"),
  adminLogoutBtn: document.querySelector("#adminLogoutBtn"),
};

const ctx = elements.canvas.getContext("2d");
const duelCtx = elements.duelCanvas.getContext("2d");

let state = loadState();
let adminPanelVisible = state.admin;
let statusTimer = 0;
let dailyMissionRefreshTimer = 0;
let rafId = 0;
let lastTime = 0;
let spawnTimer = 0;
let view = { width: 960, height: 360, dpr: 1 };
let adminRevealTimeout = 0;
let jumpAudioContext = null;
const heldAdminRevealKeys = new Set();

const game = {
  running: false,
  paused: false,
  over: false,
  score: 0,
  shopScore: 0,
  pace: 0,
  speed: 7,
  groundY: 292,
  clouds: [],
  obstacles: [],
  trailParticles: [],
  trailTimer: 0,
  dailySecondBuffer: 0,
  dragon: {
    x: 92,
    y: 224,
    width: 72,
    height: 68,
    vy: 0,
    onGround: true,
  },
};

let duelRafId = 0;
let duelLastTime = 0;

const DUEL_WIDTH = 960;
const DUEL_HEIGHT = 430;

const duel = {
  running: false,
  over: false,
  score: 0,
  pace: 0,
  speed: 6.6,
  spawnTimer: 700,
  obstacles: [],
  clouds: [],
  players: [
    {
      name: "שחקן 1",
      englishName: "Player 1",
      key: "W",
      x: 94,
      y: 0,
      width: 62,
      height: 58,
      groundY: 176,
      vy: 0,
      onGround: true,
      alive: true,
      score: 0,
      palette: { body: "#31c985", dark: "#16885b", belly: "#fff2a6", horn: "#f2b84b", eye: "#151a22" },
    },
    {
      name: "שחקן 2",
      englishName: "Player 2",
      key: "↑",
      x: 94,
      y: 0,
      width: 62,
      height: 58,
      groundY: 364,
      vy: 0,
      onGround: true,
      alive: true,
      score: 0,
      palette: { body: "#2f80ed", dark: "#1d4ed8", belly: "#dbeafe", horn: "#facc15", eye: "#111827" },
    },
  ],
};

function loadState() {
  const fallback = {
    currentPlayer: "שחקן",
    admin: false,
    jumpSoundEnabled: true,
    players: {},
    playerReports: [],
    creatorMessages: [],
    hiddenAdminMissionInfo: [],
    trailShopVersion: TRAIL_SHOP_VERSION,
  };

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return withDefaultPlayer(fallback);
    const parsed = JSON.parse(raw);
    const merged = {
      currentPlayer: normalizeName(parsed.currentPlayer || "שחקן"),
      admin: false,
      jumpSoundEnabled: parsed.jumpSoundEnabled !== false,
      players: parsed.players && typeof parsed.players === "object" ? parsed.players : {},
      playerReports: Array.isArray(parsed.playerReports) ? parsed.playerReports : [],
      creatorMessages: Array.isArray(parsed.creatorMessages) ? parsed.creatorMessages : [],
      hiddenAdminMissionInfo: Array.isArray(parsed.hiddenAdminMissionInfo) ? parsed.hiddenAdminMissionInfo : [],
      trailShopVersion: Number.isFinite(Number(parsed.trailShopVersion)) ? Number(parsed.trailShopVersion) : 1,
    };
    return withDefaultPlayer(merged);
  } catch {
    return withDefaultPlayer(fallback);
  }
}

function withDefaultPlayer(nextState) {
  const name = normalizeName(nextState.currentPlayer || "שחקן");
  nextState.currentPlayer = name;
  nextState.jumpSoundEnabled = nextState.jumpSoundEnabled !== false;
  const legacyFreeTrailShop = Number(nextState.trailShopVersion || 1) < TRAIL_SHOP_VERSION;
  nextState.trailShopVersion = TRAIL_SHOP_VERSION;
  if (!nextState.players[name]) {
    nextState.players[name] = createPlayer(name);
  }

  Object.entries(nextState.players).forEach(([playerName, player]) => {
    player.name = normalizeName(player.name || playerName);
    player.points = Number.isFinite(Number(player.points)) ? Math.max(0, Math.floor(Number(player.points))) : 0;
    player.best = Number.isFinite(Number(player.best)) ? Math.max(0, Math.floor(Number(player.best))) : 0;
    player.skinId = SKINS.some((skin) => skin.id === player.skinId) ? player.skinId : "classic";
    player.baseColor = BASE_COLORS.includes(player.baseColor) ? player.baseColor : BASE_COLORS[0];
    player.skinColors = player.skinColors && typeof player.skinColors === "object" ? player.skinColors : {};
    if (!player.skinColors.classic) {
      player.skinColors.classic = player.baseColor;
    }
    Object.keys(player.skinColors).forEach((skinId) => {
      if (!SKINS.some((skin) => skin.id === skinId) || !BASE_COLORS.includes(player.skinColors[skinId])) {
        delete player.skinColors[skinId];
      }
    });
    player.ownedSkins = Array.isArray(player.ownedSkins) ? player.ownedSkins : ["classic"];
    if (!player.ownedSkins.includes("classic")) player.ownedSkins.push("classic");
    player.ownedTrails = legacyFreeTrailShop || !Array.isArray(player.ownedTrails) ? [] : player.ownedTrails;
    player.ownedTrails = player.ownedTrails.filter((trailId) => TRAILS.some((trail) => trail.id === trailId));
    player.trailId = player.ownedTrails.includes(player.trailId) ? player.trailId : "";
    ensureDailyMissionState(player);
  });

  nextState.playerReports = Array.isArray(nextState.playerReports)
    ? nextState.playerReports
        .filter((report) => report && typeof report === "object")
        .map((report) => ({
          from: normalizeName(report.from || ""),
          to: normalizeName(report.to || ""),
          at: typeof report.at === "string" ? report.at : "",
        }))
        .filter((report) => report.from && report.to)
        .slice(-50)
    : [];

  nextState.creatorMessages = Array.isArray(nextState.creatorMessages)
    ? nextState.creatorMessages
        .filter((message) => message && typeof message === "object")
        .map((message) => ({
          from: normalizeName(message.from || ""),
          text: String(message.text || "").trim().slice(0, 500),
          at: typeof message.at === "string" ? message.at : "",
        }))
        .filter((message) => message.from && message.text)
        .slice(-50)
    : [];

  nextState.hiddenAdminMissionInfo = Array.isArray(nextState.hiddenAdminMissionInfo)
    ? nextState.hiddenAdminMissionInfo
        .filter((item) => item && typeof item === "object")
        .map((item) => ({
          date: typeof item.date === "string" ? item.date : "",
          slot: item.slot === "regular" || item.slot === "secret" ? item.slot : "",
        }))
        .filter((item) => item.date && item.slot)
        .slice(-20)
    : [];

  return nextState;
}

function saveState() {
  try {
    const persistedState = {
      ...state,
      admin: false,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(persistedState));
  } catch {
    setStatus("שמירה מקומית לא זמינה", true, true, "Local save unavailable");
  }
}

function normalizeName(value) {
  const name = String(value || "")
    .trim()
    .replace(/\s+/g, " ");
  return name || "שחקן";
}

function createPlayer(name) {
  return {
    name,
    points: 0,
    best: 0,
    skinId: "classic",
    trailId: "",
    baseColor: BASE_COLORS[0],
    skinColors: { classic: BASE_COLORS[0] },
    ownedSkins: ["classic"],
    ownedTrails: [],
    dailyMissions: createDailyMissionState(),
  };
}

function ensurePlayer(name) {
  const cleanName = normalizeName(name);
  if (!state.players[cleanName]) {
    state.players[cleanName] = createPlayer(cleanName);
  }
  ensureDailyMissionState(state.players[cleanName]);
  return state.players[cleanName];
}

function getCurrentPlayer() {
  return ensurePlayer(state.currentPlayer);
}

function getSkinById(id) {
  return SKINS.find((skin) => skin.id === id) || SKINS[0];
}

function getTrailById(id) {
  return TRAILS.find((trail) => trail.id === id) || null;
}

function getDailyDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getNextLocalMidnightDelay(date = new Date()) {
  const nextMidnight = new Date(date);
  nextMidnight.setHours(24, 0, 0, 0);
  return Math.max(1000, nextMidnight.getTime() - date.getTime() + 250);
}

function scheduleDailyMissionRefresh() {
  if (dailyMissionRefreshTimer) {
    window.clearTimeout(dailyMissionRefreshTimer);
  }
  dailyMissionRefreshTimer = window.setTimeout(() => {
    refreshDailyMissionsForNewDay(true);
  }, getNextLocalMidnightDelay());
}

function refreshDailyMissionsForNewDay(showStatus = false) {
  const player = getCurrentPlayer();
  const previousDate = player.dailyMissions?.date || "";
  const daily = ensureDailyMissionState(player);
  if (daily.date !== previousDate) {
    saveState();
    renderAll();
    if (showStatus) {
      setStatus("המשימות היומיות התחלפו", true, true, "Daily missions changed");
    }
  } else {
    renderDailyMissions();
    renderAdminMissionSummary();
  }
  scheduleDailyMissionRefresh();
}

function hashDailyKey(dateKey) {
  return [...dateKey].reduce((total, char) => total + char.charCodeAt(0), 0);
}

function getDailyDayNumber(dateKey) {
  const [year, month, day] = String(dateKey)
    .split("-")
    .map((part) => Number(part));
  if (!Number.isInteger(year) || !Number.isInteger(month) || !Number.isInteger(day)) {
    return hashDailyKey(dateKey);
  }
  return Math.floor(Date.UTC(year, month - 1, day) / 86400000);
}

function getDailyMissionSet(dateKey = getDailyDateKey()) {
  const dayNumber = getDailyDayNumber(dateKey);
  return {
    regular: DAILY_REGULAR_MISSIONS[dayNumber % DAILY_REGULAR_MISSIONS.length],
    secret: DAILY_SECRET_MISSIONS[(dayNumber + 2) % DAILY_SECRET_MISSIONS.length],
  };
}

function createDailyMissionState(dateKey = getDailyDateKey()) {
  return {
    date: dateKey,
    stats: {
      jumps: 0,
      runs: 0,
      bestScore: 0,
      totalSeconds: 0,
    },
    claimed: {
      regular: false,
      secret: false,
    },
  };
}

function ensureDailyMissionState(player) {
  const today = getDailyDateKey();
  if (!player.dailyMissions || player.dailyMissions.date !== today) {
    player.dailyMissions = createDailyMissionState(today);
    return player.dailyMissions;
  }

  const daily = player.dailyMissions;
  daily.stats = daily.stats && typeof daily.stats === "object" ? daily.stats : {};
  daily.claimed = daily.claimed && typeof daily.claimed === "object" ? daily.claimed : {};
  ["jumps", "runs", "bestScore", "totalSeconds"].forEach((key) => {
    daily.stats[key] = Number.isFinite(Number(daily.stats[key])) ? Math.max(0, Math.floor(Number(daily.stats[key]))) : 0;
  });
  daily.claimed.regular = Boolean(daily.claimed.regular);
  daily.claimed.secret = Boolean(daily.claimed.secret);
  return daily;
}

function mergeStoredPlayers(sourceName, targetName) {
  const source = normalizeName(sourceName);
  const target = normalizeName(targetName);
  if (source === target || !state.players[source]) return false;

  if (!state.players[target]) {
    state.players[target] = {
      ...state.players[source],
      name: target,
    };
  } else {
    const sourcePlayer = state.players[source];
    const targetPlayer = state.players[target];
    targetPlayer.best = Math.max(targetPlayer.best, sourcePlayer.best);
    targetPlayer.points = Math.max(0, targetPlayer.points + sourcePlayer.points);
    targetPlayer.ownedSkins = Array.from(new Set([...targetPlayer.ownedSkins, ...sourcePlayer.ownedSkins]));
    targetPlayer.ownedTrails = Array.from(new Set([...(targetPlayer.ownedTrails || []), ...(sourcePlayer.ownedTrails || [])]));
    if (sourcePlayer.skinId && sourcePlayer.skinId !== "classic") {
      targetPlayer.skinId = sourcePlayer.skinId;
    }
    if (sourcePlayer.trailId) {
      targetPlayer.trailId = sourcePlayer.trailId;
    }
    targetPlayer.baseColor = sourcePlayer.baseColor || targetPlayer.baseColor;
    targetPlayer.skinColors = {
      ...(targetPlayer.skinColors || {}),
      ...(sourcePlayer.skinColors || {}),
    };
    targetPlayer.dailyMissions = targetPlayer.dailyMissions || sourcePlayer.dailyMissions;
  }

  delete state.players[source];
  if (state.currentPlayer === source) {
    state.currentPlayer = target;
  }
  return true;
}

function applyPlayerMerges() {
  const merged = mergeStoredPlayers("שחקן", "גלעד היוצר של המשחק");
  if (merged) saveState();
}

function shadeColor(hex, amount) {
  const value = hex.replace("#", "");
  const number = parseInt(value, 16);
  const red = Math.min(255, Math.max(0, (number >> 16) + amount));
  const green = Math.min(255, Math.max(0, ((number >> 8) & 0xff) + amount));
  const blue = Math.min(255, Math.max(0, (number & 0xff) + amount));
  return `#${((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)}`;
}

function paletteForSkin(player, skin) {
  const palette = { ...skin.palette };
  const selectedColor = player.skinColors?.[skin.id] || (skin.id === "classic" ? player.baseColor : null);
  if (selectedColor) {
    palette.body = selectedColor;
    palette.dark = shadeColor(selectedColor, -54);
  }
  return palette;
}

function activePalette(player = getCurrentPlayer()) {
  return paletteForSkin(player, getSkinById(player.skinId));
}

function setStatus(text, visible = true, autoHide = false, englishText = "") {
  clearTimeout(statusTimer);
  elements.gameStatus.innerHTML = "";
  if (englishText) {
    elements.gameStatus.innerHTML = bilingualHtml(text, englishText);
  } else {
    elements.gameStatus.textContent = text;
  }
  elements.gameStatus.classList.toggle("visible", Boolean(visible && text));
  if (autoHide) {
    statusTimer = window.setTimeout(() => {
      if (game.running && !game.paused && !game.over) {
        elements.gameStatus.classList.remove("visible");
      }
    }, 1200);
  }
}

function renderAll() {
  const player = getCurrentPlayer();
  elements.playerName.value = state.currentPlayer;
  elements.scoreValue.textContent = Math.floor(game.score).toString();
  elements.bestValue.textContent = player.best.toString();
  elements.pointsValue.textContent = player.points.toString();
  elements.activeSkinName.innerHTML = skinNameHtml(getSkinById(player.skinId));
  const activeTrail = getTrailById(player.trailId);
  elements.activeTrailName.innerHTML = activeTrail ? trailNameHtml(activeTrail) : bilingualHtml("בלי שביל", "No Trail");
  elements.leaderboardCount.textContent = Object.keys(state.players).length.toString();
  elements.jumpSoundToggle.checked = state.jumpSoundEnabled;
  elements.jumpSoundState.innerHTML = state.jumpSoundEnabled ? bilingualHtml("פעיל", "On") : bilingualHtml("כבוי", "Off");
  elements.adminPanel.classList.toggle("hidden", !(state.admin || adminPanelVisible));
  elements.adminState.textContent = state.admin ? "פעיל" : "נעול";
  elements.adminLogin.classList.toggle("hidden", state.admin);
  elements.adminTools.classList.toggle("hidden", !state.admin);
  if (state.admin && !elements.adminPlayer.value) {
    elements.adminPlayer.value = state.currentPlayer;
  }
  renderLeaderboard();
  renderDailyMissions();
  renderColorSwatches();
  renderSkins();
  renderTrails();
  renderAdminSkinOptions();
  renderAdminMissionSummary();
  renderPlayerReportSummary();
  renderCreatorMessageSummary();
  draw();
}

function renderDailyMissions() {
  const player = getCurrentPlayer();
  const daily = ensureDailyMissionState(player);
  const missions = getDailyMissionSet(daily.date);
  elements.dailyMissionDate.textContent = daily.date;
  elements.dailyMissionGrid.innerHTML = [
    renderDailyMissionCard("regular", missions.regular, daily),
    renderDailyMissionCard("secret", missions.secret, daily),
  ].join("");

  elements.dailyMissionGrid.querySelectorAll("[data-claim-mission]").forEach((button) => {
    button.addEventListener("click", () => claimDailyMission(button.dataset.claimMission));
  });
}

function renderDailyMissionCard(slot, mission, daily) {
  const progress = getDailyMissionProgress(mission, daily);
  const complete = progress >= mission.target;
  const claimed = Boolean(daily.claimed[slot]);
  const secretHidden = slot === "secret" && !complete && !claimed;
  const title = secretHidden ? { he: "משימה סודית", en: "Secret Mission" } : { he: mission.title, en: mission.englishTitle };
  const description = secretHidden
    ? { he: `רמז: ${mission.hint}`, en: `Hint: ${mission.englishHint}` }
    : { he: mission.description, en: mission.englishDescription };
  const percent = Math.min(100, Math.floor((progress / mission.target) * 100));
  const progressText = secretHidden
    ? bilingualHtml("התקדמות סודית", "Secret progress")
    : bilingualHtml(`${Math.min(progress, mission.target)} / ${mission.target}`, `${Math.min(progress, mission.target)} / ${mission.target}`);
  const reward = bilingualHtml(`פרס: ${mission.reward} נקודות חנות`, `Reward: ${mission.reward} shop points`);
  const buttonText = claimed
    ? bilingualHtml("נאסף", "Claimed")
    : complete
      ? bilingualHtml("קבל פרס", "Claim Reward")
      : bilingualHtml("עדיין לא הושלם", "Not Complete Yet");

  return `
    <article class="daily-mission-card ${slot} ${complete ? "complete" : ""}">
      <div class="daily-mission-top">
        <strong>${bilingualHtml(title.he, title.en)}</strong>
        <span>${slot === "secret" ? bilingualHtml("סודית", "Secret") : bilingualHtml("רגילה", "Regular")}</span>
      </div>
      <p>${bilingualHtml(description.he, description.en)}</p>
      <div class="mission-progress" aria-hidden="true"><span style="width:${percent}%"></span></div>
      <div class="daily-mission-meta">
        <span>${progressText}</span>
        <span>${reward}</span>
      </div>
      <button class="${complete && !claimed ? "primary-action" : "ghost-action"}" data-claim-mission="${slot}" type="button" ${complete && !claimed ? "" : "disabled"}>${buttonText}</button>
    </article>
  `;
}

function getDailyMissionProgress(mission, daily) {
  return Math.floor(Number(daily.stats?.[mission.type] || 0));
}

function isDailyMissionComplete(mission, daily) {
  return getDailyMissionProgress(mission, daily) >= mission.target;
}

function claimDailyMission(slot) {
  const player = getCurrentPlayer();
  const daily = ensureDailyMissionState(player);
  const missions = getDailyMissionSet(daily.date);
  const mission = slot === "secret" ? missions.secret : missions.regular;
  if (!mission || daily.claimed[slot] || !isDailyMissionComplete(mission, daily)) return;

  daily.claimed[slot] = true;
  player.points += mission.reward;
  saveState();
  renderAll();
  setStatus(`קיבלת ${mission.reward} נקודות חנות`, true, true, `You got ${mission.reward} shop points`);
}

function updateDailyMissionProgress(type, value) {
  const player = getCurrentPlayer();
  const daily = ensureDailyMissionState(player);
  const missions = getDailyMissionSet(daily.date);
  const regularCompleteBefore = isDailyMissionComplete(missions.regular, daily);
  const secretCompleteBefore = isDailyMissionComplete(missions.secret, daily);

  if (type === "bestScore") {
    daily.stats.bestScore = Math.max(daily.stats.bestScore, Math.floor(value));
  } else {
    daily.stats[type] = Math.max(0, Math.floor((daily.stats[type] || 0) + value));
  }

  const regularCompleteAfter = isDailyMissionComplete(missions.regular, daily);
  const secretCompleteAfter = isDailyMissionComplete(missions.secret, daily);
  saveState();
  renderDailyMissions();

  if (!regularCompleteBefore && regularCompleteAfter && !daily.claimed.regular) {
    setStatus("משימה יומית הושלמה", true, true, "Daily mission complete");
  }
  if (!secretCompleteBefore && secretCompleteAfter && !daily.claimed.secret) {
    setStatus("גילית את המשימה הסודית", true, true, "Secret mission discovered");
  }
}

function isAdminMissionInfoHidden(date, slot) {
  return (state.hiddenAdminMissionInfo || []).some((item) => item.date === date && item.slot === slot);
}

function renderAdminMissionSummary() {
  if (!elements.adminMissionSummary) return;

  const player = getCurrentPlayer();
  const daily = ensureDailyMissionState(player);
  const date = getDailyDateKey();
  const missions = getDailyMissionSet(date);
  const rows = [
    { slot: "regular", label: "משימה רגילה", mission: missions.regular },
    { slot: "secret", label: "משימה סודית", mission: missions.secret },
  ].filter((row) => !isAdminMissionInfoHidden(date, row.slot));

  if (!rows.length) {
    elements.adminMissionSummary.innerHTML = "אין משימות להצגה";
    return;
  }

  elements.adminMissionSummary.innerHTML = rows
    .map(({ slot, label, mission }) => {
      const progress = Math.min(getDailyMissionProgress(mission, daily), mission.target);
      const targetText = Number(mission.target).toLocaleString("he-IL");
      const rewardText = Number(mission.reward).toLocaleString("he-IL");
      const hint = slot === "secret" && mission.hint ? `<span>רמז: ${escapeHtml(mission.hint)}</span>` : "";

      return `
        <div class="report-summary-item admin-mission-item">
          <button class="report-delete-action" data-hide-admin-mission="${slot}" type="button" title="הסתרה" aria-label="הסתרת משימה">×</button>
          <div class="admin-mission-copy">
            <strong>${escapeHtml(label)}: ${escapeHtml(mission.title)}</strong>
            <span>מה צריך לעשות: ${escapeHtml(mission.description)}</span>
            <span>יעד: ${escapeHtml(targetText)} | פרס: ${escapeHtml(rewardText)} נקודות חנות</span>
            <span>התקדמות השחקן הנוכחי: ${escapeHtml(progress.toLocaleString("he-IL"))} / ${escapeHtml(targetText)}</span>
            ${hint}
          </div>
        </div>
      `;
    })
    .join("");

  elements.adminMissionSummary.querySelectorAll("[data-hide-admin-mission]").forEach((button) => {
    button.addEventListener("click", () => hideAdminMissionInfo(button.dataset.hideAdminMission));
  });
}

function hideAdminMissionInfo(slot) {
  if (slot !== "regular" && slot !== "secret") return;

  const date = getDailyDateKey();
  state.hiddenAdminMissionInfo = state.hiddenAdminMissionInfo || [];
  if (!isAdminMissionInfoHidden(date, slot)) {
    state.hiddenAdminMissionInfo.push({ date, slot });
    state.hiddenAdminMissionInfo = state.hiddenAdminMissionInfo.slice(-20);
  }
  saveState();
  renderAdminMissionSummary();
  setStatus("המשימה הוסתרה מהאדמין", true, true, "Mission hidden from admin");
}

function renderLeaderboard() {
  const players = Object.values(state.players).sort((a, b) => {
    if (b.best !== a.best) return b.best - a.best;
    return a.name.localeCompare(b.name, "he");
  });

  if (!players.length) {
    elements.leaderboardBody.innerHTML = `<tr><td colspan="6">${bilingualHtml("אין שחקנים עדיין", "No players yet")}</td></tr>`;
    return;
  }

  elements.leaderboardBody.innerHTML = players
    .map((player, index) => {
      const current = player.name === state.currentPlayer ? "current" : "";
      return `
        <tr class="${current}">
          <td>${index + 1}</td>
          <td>${escapeHtml(player.name)}</td>
          <td>${player.best}</td>
          <td>${player.points}</td>
          <td>${skinNameHtml(getSkinById(player.skinId))}</td>
          <td><button class="player-report-action" data-report-player="${escapeHtml(player.name)}" type="button">${bilingualHtml("דווח", "Report")}</button></td>
        </tr>
      `;
    })
    .join("");

  elements.leaderboardBody.querySelectorAll("[data-report-player]").forEach((button) => {
    button.addEventListener("click", () => reportPlayer(button.dataset.reportPlayer));
  });
}

function reportPlayer(targetName) {
  const reporter = getCurrentPlayer().name;
  const target = normalizeName(targetName);

  if (!state.players[target]) {
    setStatus("השחקן לא נמצא", true, true, "Player not found");
    return;
  }
  state.playerReports = state.playerReports || [];
  const alreadyReported = state.playerReports.some((report) => report.from === reporter && report.to === target);
  if (alreadyReported) {
    setStatus(`כבר דיווחת על ${target}`, true, true, `Already reported ${target}`);
    return;
  }

  state.playerReports.push({
    from: reporter,
    to: target,
    at: new Date().toISOString(),
  });
  state.playerReports = state.playerReports.slice(-50);
  saveState();
  renderPlayerReportSummary();
  setStatus(`דיווח נשלח על ${target}`, true, true, `Report sent for ${target}`);
}

function renderPlayerReportSummary() {
  const reports = state.playerReports || [];
  if (!reports.length) {
    elements.playerReportSummary.innerHTML = "אין דיווחים";
    return;
  }

  elements.playerReportSummary.innerHTML = reports
    .map((report, index) => ({ ...report, index }))
    .slice(-12)
    .reverse()
    .map((report) => {
      const date = report.at ? new Date(report.at).toLocaleString("he-IL") : "";
      const time = date ? `<span>${escapeHtml(date)}</span>` : "";
      return `
        <div class="report-summary-item">
          <button class="report-delete-action" data-delete-report="${report.index}" type="button" title="מחיקה" aria-label="מחיקת דיווח">×</button>
          <div><strong>${escapeHtml(report.from)}</strong> דיווח על <strong>${escapeHtml(report.to)}</strong>${time}</div>
        </div>
      `;
    })
    .join("");

  elements.playerReportSummary.querySelectorAll("[data-delete-report]").forEach((button) => {
    button.addEventListener("click", () => deletePlayerReport(Number(button.dataset.deleteReport)));
  });
}

function renderCreatorMessageSummary() {
  const messages = state.creatorMessages || [];
  if (!messages.length) {
    elements.creatorMessageSummary.innerHTML = "אין הודעות";
    return;
  }

  elements.creatorMessageSummary.innerHTML = messages
    .map((message, index) => ({ ...message, index }))
    .slice(-12)
    .reverse()
    .map((message) => {
      const date = message.at ? new Date(message.at).toLocaleString("he-IL") : "";
      const time = date ? `<span>${escapeHtml(date)}</span>` : "";
      return `
        <div class="report-summary-item">
          <button class="report-delete-action" data-delete-message="${message.index}" type="button" title="מחיקה" aria-label="מחיקת הודעה">×</button>
          <div><strong>${escapeHtml(message.from)}</strong>: ${escapeHtml(message.text)}${time}</div>
        </div>
      `;
    })
    .join("");

  elements.creatorMessageSummary.querySelectorAll("[data-delete-message]").forEach((button) => {
    button.addEventListener("click", () => deleteCreatorMessage(Number(button.dataset.deleteMessage)));
  });
}

function deletePlayerReport(index) {
  if (!Number.isInteger(index) || !state.playerReports[index]) return;
  state.playerReports.splice(index, 1);
  saveState();
  renderPlayerReportSummary();
  setStatus("הדיווח נמחק", true, true, "Report deleted");
}

function deleteCreatorMessage(index) {
  if (!Number.isInteger(index) || !state.creatorMessages[index]) return;
  state.creatorMessages.splice(index, 1);
  saveState();
  renderCreatorMessageSummary();
  setStatus("ההודעה נמחקה", true, true, "Message deleted");
}

function renderColorSwatches() {
  const player = getCurrentPlayer();
  const skin = getSkinById(player.skinId);
  const palette = paletteForSkin(player, skin);
  elements.baseColorSwatches.innerHTML = BASE_COLORS.map((color) => {
    const active = palette.body === color ? "active" : "";
    return `<button class="swatch ${active}" data-color="${color}" style="background:${color}" type="button" title="${color}" aria-label="${color}"></button>`;
  }).join("");

  elements.baseColorSwatches.querySelectorAll("[data-color]").forEach((button) => {
    button.addEventListener("click", () => {
      const current = getCurrentPlayer();
      current.skinColors = current.skinColors || {};
      current.skinColors[current.skinId] = button.dataset.color;
      if (current.skinId === "classic") {
        current.baseColor = button.dataset.color;
      }
      saveState();
      renderAll();
      setStatus("צבע הסקין עודכן", true, true, "Skin color updated");
    });
  });
}

function renderSkins() {
  const player = getCurrentPlayer();
  elements.skinGrid.innerHTML = SKINS.map((skin) => {
    const owned = player.ownedSkins.includes(skin.id);
    const active = player.skinId === skin.id;
    const canBuy = state.admin || owned || skin.cost === 0 || player.points >= skin.cost;
    const missing = Math.max(0, skin.cost - player.points);
    const buttonClass = active ? "active" : owned || state.admin ? "owned" : canBuy ? "" : "locked";
    const label = active
      ? { he: "פעיל", en: "Active" }
      : owned || state.admin
        ? { he: "בחר", en: "Choose" }
        : canBuy
          ? { he: "רכוש", en: "Buy" }
          : { he: `${missing} חסר`, en: `${missing} missing` };
    const cost = skinCostText(skin);
    const tierAndCost = skin.cost === 0 && skin.tier === "חינם"
      ? cost
      : { he: `${skin.tier} · ${cost.he}`, en: `${skin.englishTier} · ${cost.en}` };
    const previewPalette = paletteForSkin(player, skin);

    return `
      <article class="skin-card">
        <div class="skin-preview" aria-hidden="true">${creaturePreviewSvg(previewPalette, skin.motif)}</div>
        <div class="skin-meta">
          <strong>${skinNameHtml(skin)}</strong>
          <span>${bilingualHtml(tierAndCost.he, tierAndCost.en)}</span>
        </div>
        <button class="${buttonClass}" data-skin="${skin.id}" type="button" ${canBuy ? "" : "disabled"}>${bilingualHtml(label.he, label.en)}</button>
      </article>
    `;
  }).join("");

  elements.skinGrid.querySelectorAll("[data-skin]").forEach((button) => {
    button.addEventListener("click", () => buyOrEquipSkin(button.dataset.skin));
  });
}

function renderTrails() {
  const player = getCurrentPlayer();
  elements.trailGrid.innerHTML = TRAILS.map((trail) => {
    const owned = player.ownedTrails.includes(trail.id);
    const active = player.trailId === trail.id;
    const canBuy = state.admin || owned || player.points >= trail.cost;
    const missing = Math.max(0, trail.cost - player.points);
    const buttonClass = active ? "active" : owned || state.admin ? "owned" : canBuy ? "" : "locked";
    const label = active
      ? { he: "פעיל", en: "Active" }
      : owned || state.admin
        ? { he: "בחר", en: "Choose" }
        : canBuy
          ? { he: "רכוש", en: "Buy" }
          : { he: `${missing} חסר`, en: `${missing} missing` };
    const cost = trailCostText(trail);
    const tierAndCost = { he: `${trail.tier} · ${cost.he}`, en: `${trail.englishTier} · ${cost.en}` };

    return `
      <article class="skin-card trail-card">
        <div class="skin-preview trail-preview" aria-hidden="true">${trailPreviewSvg(trail)}</div>
        <div class="skin-meta">
          <strong>${trailNameHtml(trail)}</strong>
          <span>${bilingualHtml(tierAndCost.he, tierAndCost.en)}</span>
        </div>
        <button class="${buttonClass}" data-trail="${trail.id}" type="button" ${canBuy ? "" : "disabled"}>${bilingualHtml(label.he, label.en)}</button>
      </article>
    `;
  }).join("");

  elements.trailGrid.querySelectorAll("[data-trail]").forEach((button) => {
    button.addEventListener("click", () => buyOrEquipTrail(button.dataset.trail));
  });
}

function trailPreviewSvg(trail) {
  const particles = Array.from({ length: 7 }, (_, index) => {
    const x = 18 + index * 20;
    const y = 46 + Math.sin(index * 1.4) * 14;
    const size = 14 + (index % 3) * 3;
    return trailShapeSvg(trail, x, y, size, index);
  }).join("");

  return `
    <svg viewBox="0 0 150 86" role="img" focusable="false">
      <path d="M10 62 C40 30 75 75 140 36" stroke="${trail.color}" stroke-width="4" fill="none" opacity="0.28" stroke-linecap="round" />
      ${particles}
    </svg>
  `;
}

function trailShapeSvg(trail, x, y, size, index) {
  const color = index % 2 ? trail.accent : trail.color;
  const spin = index * 17;
  if (trail.kind === "heart") {
    return `<path d="M${x} ${y + size * 0.28} C${x - size} ${y - size * 0.3} ${x - size * 0.25} ${y - size} ${x} ${y - size * 0.35} C${x + size * 0.25} ${y - size} ${x + size} ${y - size * 0.3} ${x} ${y + size * 0.28} Z" fill="${color}" opacity="0.86" />`;
  }
  if (trail.kind === "sparkle" || trail.kind === "gem") {
    return `<path d="M${x} ${y - size} L${x + size * 0.28} ${y - size * 0.25} L${x + size} ${y} L${x + size * 0.28} ${y + size * 0.25} L${x} ${y + size} L${x - size * 0.28} ${y + size * 0.25} L${x - size} ${y} L${x - size * 0.28} ${y - size * 0.25} Z" fill="${color}" opacity="0.88" />`;
  }
  if (trail.kind === "leaf" || trail.kind === "feather" || trail.kind === "forest") {
    return `<ellipse cx="${x}" cy="${y}" rx="${size * 0.35}" ry="${size}" fill="${color}" opacity="0.86" transform="rotate(${spin} ${x} ${y})" />`;
  }
  if (trail.kind === "number") {
    return `<text x="${x - size * 0.65}" y="${y + size * 0.35}" fill="${color}" font-size="${size * 1.25}" font-weight="900">67</text>`;
  }
  if (trail.kind === "rainbow") {
    return `<circle cx="${x}" cy="${y}" r="${size * 0.58}" fill="none" stroke="#ef4444" stroke-width="3" opacity="0.9" /><circle cx="${x}" cy="${y}" r="${size * 0.38}" fill="none" stroke="#facc15" stroke-width="3" opacity="0.9" /><circle cx="${x}" cy="${y}" r="${size * 0.18}" fill="none" stroke="#22c55e" stroke-width="3" opacity="0.9" />`;
  }
  if (trail.kind === "coffee") {
    return `<ellipse cx="${x}" cy="${y}" rx="${size * 0.74}" ry="${size * 0.48}" fill="${color}" opacity="0.86" /><path d="M${x + size * 0.4} ${y - 2} C${x + size} ${y - 8} ${x + size} ${y + 8} ${x + size * 0.4} ${y + 3}" stroke="${trail.accent}" stroke-width="3" fill="none" />`;
  }
  if (trail.kind === "wave" || trail.kind === "ribbon") {
    return `<path d="M${x - size} ${y} C${x - size * 0.35} ${y - size} ${x + size * 0.35} ${y + size} ${x + size} ${y}" stroke="${color}" stroke-width="5" fill="none" opacity="0.84" stroke-linecap="round" />`;
  }
  return `<circle cx="${x}" cy="${y}" r="${size * 0.55}" fill="${color}" opacity="0.82" />`;
}

function dragonPreviewSvg(palette, motif) {
  return `
    <svg viewBox="0 0 130 72" role="img" focusable="false">
      <path d="M28 44 L6 56 L25 31 Z" fill="${palette.dark}" />
      <ellipse cx="58" cy="42" rx="34" ry="20" fill="${palette.body}" />
      <path d="M42 42 C58 30 74 28 88 40 C76 41 63 48 53 58 Z" fill="${palette.wing}" opacity="0.9" />
      <ellipse cx="66" cy="49" rx="18" ry="8" fill="${palette.belly}" opacity="0.9" />
      <circle cx="91" cy="32" r="18" fill="${palette.body}" />
      <path d="M98 16 L106 4 L108 21 Z" fill="${palette.horn}" />
      <path d="M84 16 L78 5 L76 23 Z" fill="${palette.horn}" />
      <path d="M103 36 L124 40 L102 48 Z" fill="${palette.body}" />
      <circle cx="97" cy="29" r="3" fill="${palette.eye}" />
      <rect x="43" y="58" width="9" height="12" rx="4" fill="${palette.dark}" />
      <rect x="74" y="58" width="9" height="12" rx="4" fill="${palette.dark}" />
      ${dragonPreviewDetails(motif, palette)}
    </svg>
  `;
}

function dragonPreviewDetails(motif, palette) {
  if (motif === "spikes") {
    return `
      <path d="M30 23 L37 8 L44 25 Z M47 20 L55 4 L62 24 Z M66 21 L74 7 L79 27 Z" fill="#ffe08a" />
      <circle cx="108" cy="40" r="5" fill="#7f1d1d" />
    `;
  }
  if (motif === "ice") {
    return `
      <path d="M31 31 L43 8 L48 35 Z M53 29 L63 2 L69 35 Z M75 30 L86 9 L88 37 Z" fill="#dff9ff" opacity="0.95" />
      <path d="M47 47 L60 39 L72 50 L59 56 Z" fill="#ffffff" opacity="0.72" />
      <circle cx="113" cy="25" r="3" fill="#e6fbff" />
    `;
  }
  if (motif === "fire") {
    return `
      <path d="M4 55 C16 49 12 39 22 35 C20 45 33 45 28 58 C21 51 17 67 4 55 Z" fill="#facc15" />
      <path d="M8 56 C17 51 16 44 22 40 C22 49 30 50 26 58 C21 54 17 64 8 56 Z" fill="#ef4444" />
      <circle cx="54" cy="38" r="4" fill="#fde68a" />
      <circle cx="69" cy="44" r="3" fill="#fde68a" />
    `;
  }
  if (motif === "cyber") {
    return `
      <path d="M38 38 H57 V30 H77" stroke="#a3e635" stroke-width="3" fill="none" stroke-linecap="round" />
      <path d="M45 52 H66 V45 H88" stroke="#e879f9" stroke-width="3" fill="none" stroke-linecap="round" />
      <rect x="90" y="25" width="15" height="7" rx="3" fill="#020617" />
      <circle cx="106" cy="28" r="2" fill="#a3e635" />
    `;
  }
  if (motif === "royal") {
    return `
      <path d="M79 15 L84 2 L91 14 L99 2 L104 17 Z" fill="#facc15" />
      <rect x="80" y="15" width="25" height="5" rx="2" fill="#d97706" />
      <path d="M34 51 C48 62 69 62 86 50" stroke="#facc15" stroke-width="5" fill="none" stroke-linecap="round" />
    `;
  }
  if (motif === "shadow") {
    return `
      <path d="M25 55 C36 31 75 24 99 41 C89 68 48 69 25 55 Z" fill="#020617" opacity="0.38" />
      <path d="M21 22 L31 7 L36 28 Z M42 18 L52 1 L57 27 Z" fill="#22d3ee" />
      <circle cx="97" cy="29" r="3" fill="#22d3ee" />
    `;
  }
  return "";
}

function buyOrEquipSkin(skinId) {
  const skin = getSkinById(skinId);
  const player = getCurrentPlayer();
  const owned = player.ownedSkins.includes(skin.id);

  if (!owned && !state.admin) {
    if (player.points < skin.cost) {
      setStatus("אין מספיק נקודות חנות", true, true, "Not enough shop points");
      return;
    }
    player.points -= skin.cost;
    player.ownedSkins.push(skin.id);
  }

  if (!owned && state.admin) {
    player.ownedSkins.push(skin.id);
  }

  player.skinId = skin.id;
  saveState();
  renderAll();
  setStatus("סקין הוחלף", true, true, "Skin changed");
}

function buyOrEquipTrail(trailId) {
  const trail = getTrailById(trailId);
  if (!trail) return;
  const player = getCurrentPlayer();
  const owned = player.ownedTrails.includes(trail.id);

  if (!owned && !state.admin) {
    if (player.points < trail.cost) {
      setStatus("אין מספיק נקודות חנות", true, true, "Not enough shop points");
      return;
    }
    player.points -= trail.cost;
    player.ownedTrails.push(trail.id);
  }

  if (!owned && state.admin) {
    player.ownedTrails.push(trail.id);
  }

  player.trailId = trail.id;
  saveState();
  renderAll();
  setStatus("שביל הוחלף", true, true, "Trail changed");
}

function renderAdminSkinOptions() {
  elements.adminSkin.innerHTML = SKINS.map((skin) => `<option value="${skin.id}">${skin.name} (${skin.cost})</option>`).join("");
}

function creaturePreviewSvg(palette, motif) {
  const svg = (content) => `<svg viewBox="0 0 130 72" role="img" focusable="false">${content}</svg>`;

  if (motif === "dragon") {
    return dragonPreviewSvg(palette, motif);
  }

  if (motif === "rabbit") {
    return svg(`
      <ellipse cx="61" cy="47" rx="35" ry="17" fill="${palette.body}" />
      <circle cx="94" cy="35" r="16" fill="${palette.body}" />
      <path d="M87 22 C78 4 84 -5 96 20 Z" fill="${palette.body}" />
      <path d="M101 21 C99 1 110 0 109 22 Z" fill="${palette.body}" />
      <path d="M90 19 C85 7 88 3 94 18 Z" fill="${palette.wing}" opacity="0.75" />
      <path d="M103 19 C103 7 108 6 107 20 Z" fill="${palette.wing}" opacity="0.75" />
      <circle cx="28" cy="43" r="10" fill="${palette.belly}" />
      <circle cx="100" cy="33" r="3" fill="${palette.eye}" />
      <rect x="42" y="58" width="18" height="8" rx="4" fill="${palette.dark}" />
      <rect x="73" y="58" width="18" height="8" rx="4" fill="${palette.dark}" />
    `);
  }

  if (motif === "cat") {
    return svg(`
      <ellipse cx="59" cy="45" rx="34" ry="18" fill="${palette.body}" />
      <circle cx="94" cy="34" r="17" fill="${palette.body}" />
      <path d="M82 23 L88 7 L96 25 Z" fill="${palette.dark}" />
      <path d="M98 24 L108 8 L109 28 Z" fill="${palette.dark}" />
      <path d="M25 42 C6 28 6 62 28 54" stroke="${palette.dark}" stroke-width="8" fill="none" stroke-linecap="round" />
      <circle cx="100" cy="32" r="3" fill="${palette.eye}" />
      <path d="M102 39 L112 38 M102 43 L112 45" stroke="${palette.dark}" stroke-width="2" />
      <rect x="43" y="58" width="10" height="10" rx="4" fill="${palette.dark}" />
      <rect x="73" y="58" width="10" height="10" rx="4" fill="${palette.dark}" />
    `);
  }

  if (motif === "fox") {
    return svg(`
      <ellipse cx="58" cy="45" rx="33" ry="17" fill="${palette.body}" />
      <path d="M85 35 L104 23 L113 39 L99 50 Z" fill="${palette.body}" />
      <path d="M91 29 L94 9 L103 27 Z" fill="${palette.dark}" />
      <path d="M104 31 L114 14 L113 37 Z" fill="${palette.dark}" />
      <path d="M29 45 C4 25 2 65 31 57 C20 55 17 43 29 45 Z" fill="${palette.body}" />
      <path d="M10 34 C4 42 8 56 24 57 C17 52 17 42 10 34 Z" fill="${palette.horn}" />
      <path d="M101 44 L116 44 L102 51 Z" fill="${palette.horn}" />
      <circle cx="102" cy="34" r="3" fill="${palette.eye}" />
      <rect x="44" y="58" width="9" height="10" rx="4" fill="${palette.dark}" />
      <rect x="72" y="58" width="9" height="10" rx="4" fill="${palette.dark}" />
    `);
  }

  if (motif === "turtle") {
    return svg(`
      <ellipse cx="59" cy="45" rx="36" ry="19" fill="${palette.dark}" />
      <path d="M28 47 C35 21 78 18 91 47 Z" fill="${palette.wing}" />
      <path d="M41 43 L55 28 L71 43 L55 55 Z" fill="${palette.body}" opacity="0.78" />
      <circle cx="99" cy="43" r="13" fill="${palette.body}" />
      <circle cx="104" cy="39" r="3" fill="${palette.eye}" />
      <rect x="29" y="58" width="15" height="8" rx="4" fill="${palette.dark}" />
      <rect x="72" y="58" width="15" height="8" rx="4" fill="${palette.dark}" />
      <path d="M23 48 L9 41 L17 55 Z" fill="${palette.body}" />
    `);
  }

  if (motif === "parrot") {
    return svg(`
      <ellipse cx="58" cy="44" rx="29" ry="20" fill="${palette.body}" />
      <path d="M39 35 C52 19 75 20 82 43 C65 41 53 49 43 62 Z" fill="${palette.wing}" />
      <circle cx="91" cy="31" r="16" fill="${palette.body}" />
      <path d="M103 33 C117 31 118 42 103 43 Z" fill="${palette.horn}" />
      <path d="M43 56 L21 65 L35 48 Z" fill="#dc2626" />
      <path d="M35 48 L15 37 L43 41 Z" fill="#facc15" />
      <circle cx="96" cy="28" r="3" fill="${palette.eye}" />
      <rect x="51" y="59" width="8" height="10" rx="4" fill="${palette.dark}" />
    `);
  }

  if (motif === "penguin") {
    return svg(`
      <ellipse cx="62" cy="43" rx="27" ry="27" fill="${palette.body}" />
      <ellipse cx="66" cy="48" rx="17" ry="19" fill="${palette.belly}" />
      <circle cx="77" cy="23" r="17" fill="${palette.body}" />
      <path d="M88 28 L108 34 L88 40 Z" fill="${palette.horn}" />
      <path d="M38 43 L19 54 L35 58 Z" fill="${palette.wing}" />
      <path d="M88 43 L105 54 L89 58 Z" fill="${palette.wing}" />
      <circle cx="81" cy="22" r="3" fill="${palette.eye}" />
      <rect x="51" y="63" width="17" height="6" rx="3" fill="${palette.horn}" />
      <rect x="72" y="63" width="17" height="6" rx="3" fill="${palette.horn}" />
    `);
  }

  if (motif === "wolf") {
    return svg(`
      <ellipse cx="58" cy="45" rx="35" ry="16" fill="${palette.body}" />
      <path d="M82 34 L99 20 L113 34 L101 49 Z" fill="${palette.body}" />
      <path d="M87 23 L91 6 L99 25 Z" fill="${palette.dark}" />
      <path d="M103 24 L113 8 L113 32 Z" fill="${palette.dark}" />
      <path d="M28 43 L4 31 L20 54 Z" fill="${palette.dark}" />
      <path d="M97 43 L116 43 L100 50 Z" fill="${palette.belly}" />
      <circle cx="101" cy="32" r="3" fill="${palette.eye}" />
      <rect x="39" y="58" width="10" height="10" rx="4" fill="${palette.dark}" />
      <rect x="72" y="58" width="10" height="10" rx="4" fill="${palette.dark}" />
    `);
  }

  if (motif === "tiger") {
    return svg(`
      <ellipse cx="58" cy="45" rx="35" ry="17" fill="${palette.body}" />
      <circle cx="94" cy="34" r="17" fill="${palette.body}" />
      <path d="M82 24 L88 9 L96 25 Z" fill="${palette.dark}" />
      <path d="M99 24 L108 10 L108 29 Z" fill="${palette.dark}" />
      <path d="M37 31 L45 44 M55 28 L61 47 M74 31 L69 48 M90 25 L96 38" stroke="${palette.dark}" stroke-width="4" />
      <path d="M25 43 C5 31 6 60 30 55" stroke="${palette.dark}" stroke-width="7" fill="none" stroke-linecap="round" />
      <circle cx="100" cy="32" r="3" fill="${palette.eye}" />
      <rect x="42" y="58" width="10" height="10" rx="4" fill="${palette.dark}" />
      <rect x="74" y="58" width="10" height="10" rx="4" fill="${palette.dark}" />
    `);
  }

  if (motif === "horse") {
    return svg(`
      <ellipse cx="56" cy="46" rx="37" ry="16" fill="${palette.body}" />
      <path d="M83 39 L93 18 L110 31 L100 50 Z" fill="${palette.body}" />
      <path d="M83 28 C91 18 96 18 101 27 C94 28 89 32 84 39 Z" fill="${palette.dark}" />
      <path d="M25 44 C6 33 4 54 23 55" stroke="${palette.dark}" stroke-width="7" fill="none" stroke-linecap="round" />
      <circle cx="101" cy="31" r="3" fill="${palette.eye}" />
      <rect x="40" y="57" width="9" height="13" rx="4" fill="${palette.dark}" />
      <rect x="60" y="57" width="9" height="13" rx="4" fill="${palette.dark}" />
      <rect x="80" y="55" width="9" height="15" rx="4" fill="${palette.dark}" />
    `);
  }

  if (motif === "elephant") {
    return svg(`
      <ellipse cx="58" cy="44" rx="38" ry="20" fill="${palette.body}" />
      <circle cx="93" cy="36" r="20" fill="${palette.body}" />
      <ellipse cx="79" cy="35" rx="12" ry="16" fill="${palette.wing}" />
      <path d="M107 42 C126 45 119 65 103 57" stroke="${palette.body}" stroke-width="10" fill="none" stroke-linecap="round" />
      <path d="M102 48 L118 47" stroke="${palette.horn}" stroke-width="3" stroke-linecap="round" />
      <circle cx="98" cy="31" r="3" fill="${palette.eye}" />
      <rect x="37" y="57" width="12" height="13" rx="4" fill="${palette.dark}" />
      <rect x="70" y="57" width="12" height="13" rx="4" fill="${palette.dark}" />
    `);
  }

  if (motif === "agama") {
    return svg(`
      <ellipse cx="58" cy="46" rx="38" ry="14" fill="${palette.body}" />
      <path d="M86 37 L105 26 L118 35 L105 47 Z" fill="${palette.body}" />
      <path d="M30 44 L3 55 L27 52 Z" fill="${palette.dark}" />
      <path d="M28 33 L35 16 L42 35 L49 16 L56 35 L64 15 L71 36 L79 17 L85 38" fill="${palette.horn}" opacity="0.95" />
      <path d="M40 49 L55 40 L69 51 L55 57 Z" fill="${palette.belly}" opacity="0.86" />
      <path d="M100 42 L119 42 L102 49 Z" fill="${palette.wing}" />
      <circle cx="105" cy="34" r="3" fill="${palette.eye}" />
      <rect x="39" y="57" width="12" height="9" rx="4" fill="${palette.dark}" />
      <rect x="72" y="57" width="12" height="9" rx="4" fill="${palette.dark}" />
    `);
  }

  const trendPreview = trendPreviewSvg(palette, motif);
  if (trendPreview) return trendPreview;

  return dragonPreviewSvg(palette, motif);
}

function trendPreviewSvg(palette, motif) {
  const svg = (content) => `<svg viewBox="0 0 130 72" role="img" focusable="false">${content}</svg>`;

  if (motif === "trend-tralalero") {
    return svg(`
      <path d="M18 40 C36 16 86 16 112 37 C83 58 42 60 18 40 Z" fill="${palette.body}" />
      <path d="M45 40 C62 51 88 49 108 38 C86 61 45 61 18 40 Z" fill="${palette.belly}" opacity="0.95" />
      <path d="M55 24 L67 4 L73 29 Z" fill="${palette.dark}" />
      <path d="M19 39 L4 29 L9 49 Z" fill="${palette.dark}" />
      <path d="M92 36 L123 34 L96 47 Z" fill="${palette.belly}" />
      <path d="M68 38 L72 60 M52 42 L51 61 M84 39 L91 60" stroke="${palette.dark}" stroke-width="6" stroke-linecap="round" />
      <rect x="42" y="60" width="22" height="9" rx="5" fill="${palette.horn}" />
      <rect x="65" y="60" width="22" height="9" rx="5" fill="${palette.horn}" />
      <rect x="87" y="60" width="22" height="9" rx="5" fill="${palette.horn}" />
      <path d="M47 64 H58 M70 64 H82 M92 64 H104" stroke="#ffffff" stroke-width="2" stroke-linecap="round" />
      <circle cx="91" cy="31" r="3" fill="${palette.eye}" />
      <path d="M35 34 H47 M36 39 H48 M39 44 H50" stroke="${palette.dark}" stroke-width="2" opacity="0.45" />
    `);
  }

  if (motif === "trend-ballerina") {
    return svg(`
      <path d="M55 21 H86 V42 C86 49 55 49 55 42 Z" fill="${palette.belly}" />
      <ellipse cx="70" cy="21" rx="16" ry="7" fill="#ffffff" />
      <ellipse cx="70" cy="20" rx="12" ry="4" fill="${palette.body}" opacity="0.82" />
      <path d="M85 27 C105 26 105 43 86 42" stroke="${palette.belly}" stroke-width="6" fill="none" stroke-linecap="round" />
      <circle cx="65" cy="31" r="2.2" fill="${palette.eye}" />
      <circle cx="76" cy="31" r="2.2" fill="${palette.eye}" />
      <path d="M65 37 Q70 40 76 37" stroke="${palette.dark}" stroke-width="2" fill="none" />
      <path d="M70 45 L77 53 L63 53 Z" fill="${palette.body}" />
      <path d="M39 53 C51 40 90 40 102 53 L87 63 L52 63 Z" fill="${palette.wing}" />
      <path d="M62 53 L53 68 M78 53 L91 68" stroke="${palette.dark}" stroke-width="4" stroke-linecap="round" />
      <path d="M52 68 C44 70 38 68 38 64 C45 63 50 64 52 68 Z" fill="${palette.horn}" />
      <path d="M91 68 C100 70 106 67 105 63 C98 63 93 64 91 68 Z" fill="${palette.horn}" />
      <path d="M46 48 L24 35 M94 48 L119 35" stroke="${palette.wing}" stroke-width="5" stroke-linecap="round" />
    `);
  }

  if (motif === "trend-sixty-seven") {
    return svg(`
      <path d="M40 35 C25 20 14 25 10 38" stroke="${palette.dark}" stroke-width="6" fill="none" stroke-linecap="round" />
      <path d="M90 35 C106 20 118 25 122 38" stroke="${palette.dark}" stroke-width="6" fill="none" stroke-linecap="round" />
      <circle cx="9" cy="39" r="8" fill="${palette.wing}" stroke="${palette.dark}" stroke-width="3" />
      <circle cx="123" cy="39" r="8" fill="${palette.wing}" stroke="${palette.dark}" stroke-width="3" />
      <text x="65" y="51" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="54" font-weight="950" fill="${palette.body}" stroke="${palette.dark}" stroke-width="2.5" paint-order="stroke fill">67</text>
      <path d="M50 55 L43 66 M79 55 L88 66" stroke="${palette.dark}" stroke-width="6" stroke-linecap="round" />
      <ellipse cx="40" cy="66" rx="14" ry="5" fill="${palette.wing}" stroke="${palette.dark}" stroke-width="3" />
      <ellipse cx="91" cy="66" rx="14" ry="5" fill="${palette.wing}" stroke="${palette.dark}" stroke-width="3" />
      <circle cx="54" cy="30" r="3" fill="${palette.eye}" />
      <circle cx="76" cy="30" r="3" fill="${palette.eye}" />
      <path d="M57 40 Q66 46 76 40" stroke="${palette.eye}" stroke-width="3" fill="none" stroke-linecap="round" />
      <path d="M44 16 L51 6 L58 16 Z M74 16 L81 6 L88 16 Z" fill="${palette.horn}" stroke="${palette.dark}" stroke-width="2" />
      <path d="M32 21 L19 13 M101 21 L114 13" stroke="${palette.horn}" stroke-width="4" stroke-linecap="round" />
    `);
  }

  if (motif === "trend-bombardino") {
    return svg(`
      <ellipse cx="58" cy="42" rx="39" ry="15" fill="${palette.wing}" />
      <path d="M24 42 L7 30 L9 52 Z" fill="${palette.dark}" />
      <path d="M48 28 L78 10 L88 30 Z" fill="${palette.belly}" />
      <path d="M46 54 L77 67 L86 51 Z" fill="${palette.belly}" />
      <path d="M83 34 L112 30 L124 40 L112 50 L83 48 Z" fill="${palette.body}" />
      <path d="M91 40 H121" stroke="${palette.dark}" stroke-width="4" stroke-linecap="round" />
      <path d="M96 46 L103 50 L110 46 L117 50" stroke="#ffffff" stroke-width="2" fill="none" />
      <circle cx="101" cy="35" r="3" fill="${palette.eye}" />
      <path d="M34 35 H46 M36 43 H49 M39 50 H51" stroke="${palette.dark}" stroke-width="2" opacity="0.55" />
      <path d="M57 58 L55 70 M75 56 L80 69" stroke="${palette.horn}" stroke-width="5" stroke-linecap="round" />
      <circle cx="24" cy="42" r="7" fill="${palette.dark}" opacity="0.4" />
    `);
  }

  if (motif === "trend-tung") {
    return svg(`
      <rect x="45" y="12" width="34" height="48" rx="13" fill="${palette.body}" />
      <ellipse cx="62" cy="13" rx="17" ry="7" fill="${palette.belly}" />
      <ellipse cx="62" cy="60" rx="17" ry="7" fill="${palette.dark}" />
      <path d="M52 24 H72 M51 36 H73 M54 48 H70" stroke="${palette.dark}" stroke-width="2" opacity="0.45" />
      <circle cx="57" cy="31" r="2.5" fill="${palette.eye}" />
      <circle cx="68" cy="31" r="2.5" fill="${palette.eye}" />
      <path d="M56 40 Q62 44 69 40" stroke="${palette.dark}" stroke-width="2" fill="none" />
      <path d="M44 35 L25 48 M80 35 L98 25" stroke="${palette.dark}" stroke-width="6" stroke-linecap="round" />
      <path d="M93 9 L105 7 L103 40 L92 41 Z" fill="${palette.horn}" />
      <path d="M92 15 H105 M92 30 H104" stroke="${palette.dark}" stroke-width="2" opacity="0.45" />
      <path d="M52 59 L43 69 M72 59 L82 69" stroke="${palette.dark}" stroke-width="5" stroke-linecap="round" />
    `);
  }

  if (motif === "trend-cappuccino") {
    return svg(`
      <path d="M47 19 H82 V44 C82 51 47 51 47 44 Z" fill="${palette.belly}" />
      <ellipse cx="64" cy="19" rx="18" ry="7" fill="#ffffff" />
      <ellipse cx="64" cy="18" rx="13" ry="4" fill="${palette.body}" />
      <path d="M81 27 C99 27 99 43 82 42" stroke="${palette.belly}" stroke-width="6" fill="none" stroke-linecap="round" />
      <path d="M51 31 H78 V40 H51 Z" fill="${palette.dark}" />
      <circle cx="60" cy="35" r="2.3" fill="${palette.eye}" />
      <circle cx="70" cy="35" r="2.3" fill="${palette.eye}" />
      <path d="M49 45 L42 59 L86 59 L80 45 Z" fill="${palette.wing}" />
      <path d="M42 49 L20 36 M86 49 L111 36" stroke="${palette.horn}" stroke-width="5" stroke-linecap="round" />
      <path d="M18 34 L31 33 L23 43 Z M108 34 L121 33 L113 43 Z" fill="${palette.belly}" />
    `);
  }

  if (motif === "trend-lirili") {
    return svg(`
      <rect x="39" y="22" width="33" height="36" rx="13" fill="${palette.body}" />
      <path d="M45 19 V10 M55 21 V7 M66 21 V11" stroke="${palette.horn}" stroke-width="4" stroke-linecap="round" />
      <ellipse cx="82" cy="35" rx="18" ry="16" fill="${palette.wing}" />
      <path d="M96 39 C118 41 112 61 94 53" stroke="${palette.wing}" stroke-width="9" fill="none" stroke-linecap="round" />
      <ellipse cx="69" cy="36" rx="10" ry="13" fill="${palette.wing}" opacity="0.9" />
      <circle cx="86" cy="31" r="3" fill="${palette.eye}" />
      <path d="M44 58 L39 68 M66 58 L72 68" stroke="${palette.dark}" stroke-width="5" stroke-linecap="round" />
      <ellipse cx="38" cy="68" rx="10" ry="4" fill="${palette.horn}" />
      <ellipse cx="73" cy="68" rx="10" ry="4" fill="${palette.horn}" />
      <path d="M32 48 L13 41 L22 55 Z" fill="${palette.body}" />
      <circle cx="50" cy="34" r="2" fill="${palette.belly}" />
      <circle cx="61" cy="44" r="2" fill="${palette.belly}" />
    `);
  }

  if (motif === "trend-bobrito") {
    return svg(`
      <circle cx="34" cy="61" r="10" fill="${palette.dark}" />
      <circle cx="96" cy="61" r="10" fill="${palette.dark}" />
      <circle cx="34" cy="61" r="4" fill="${palette.belly}" />
      <circle cx="96" cy="61" r="4" fill="${palette.belly}" />
      <path d="M34 61 C51 49 80 49 96 61" stroke="${palette.dark}" stroke-width="7" fill="none" stroke-linecap="round" />
      <path d="M57 55 L77 55 L88 61" stroke="${palette.wing}" stroke-width="5" fill="none" stroke-linecap="round" />
      <rect x="45" y="22" width="39" height="40" rx="15" fill="${palette.body}" />
      <path d="M49 24 C55 12 75 12 81 24 Z" fill="${palette.belly}" />
      <path d="M49 44 H84 V57 H49 Z" fill="${palette.dark}" />
      <text x="66" y="54" text-anchor="middle" font-size="10" font-weight="900" fill="${palette.wing}">BB</text>
      <path d="M42 23 C51 8 78 8 88 23 Z" fill="${palette.wing}" />
      <ellipse cx="65" cy="23" rx="34" ry="7" fill="${palette.horn}" />
      <path d="M51 31 H63 M68 31 H80" stroke="${palette.dark}" stroke-width="6" stroke-linecap="round" />
      <path d="M57 39 C61 45 72 45 77 39" stroke="${palette.horn}" stroke-width="5" fill="none" stroke-linecap="round" />
      <path d="M61 40 Q65 43 70 40" stroke="#ffffff" stroke-width="2" fill="none" />
      <path d="M47 47 L31 51 M84 46 L103 49" stroke="${palette.body}" stroke-width="5" stroke-linecap="round" />
      <path d="M51 59 L44 68 M79 59 L87 68" stroke="${palette.dark}" stroke-width="5" stroke-linecap="round" />
      <path d="M41 68 H55 M84 68 H100" stroke="${palette.horn}" stroke-width="5" stroke-linecap="round" />
    `);
  }

  if (motif === "trend-brbr") {
    return svg(`
      <rect x="45" y="20" width="35" height="42" rx="13" fill="${palette.body}" />
      <ellipse cx="62" cy="18" rx="21" ry="9" fill="${palette.wing}" />
      <path d="M47 24 C52 9 74 9 80 24" fill="${palette.wing}" />
      <circle cx="62" cy="34" r="15" fill="${palette.dark}" />
      <ellipse cx="62" cy="39" rx="9" ry="7" fill="${palette.belly}" />
      <circle cx="56" cy="31" r="2.5" fill="${palette.eye}" />
      <circle cx="68" cy="31" r="2.5" fill="${palette.eye}" />
      <ellipse cx="62" cy="38" rx="3.5" ry="5" fill="#f8fafc" />
      <path d="M45 39 L22 47 M80 39 L105 48" stroke="${palette.wing}" stroke-width="8" stroke-linecap="round" />
      <path d="M50 58 L39 68 M73 58 L84 68" stroke="${palette.dark}" stroke-width="6" stroke-linecap="round" />
      <ellipse cx="37" cy="68" rx="13" ry="5" fill="${palette.belly}" />
      <ellipse cx="86" cy="68" rx="13" ry="5" fill="${palette.belly}" />
      <path d="M50 9 H75 L70 18 H55 Z" fill="${palette.belly}" />
    `);
  }

  if (motif === "trend-trippi") {
    return svg(`
      <ellipse cx="59" cy="45" rx="34" ry="17" fill="${palette.body}" />
      <path d="M21 45 L3 29 L7 60 Z" fill="${palette.wing}" />
      <path d="M31 33 C45 18 72 20 81 43 C64 41 51 49 41 61 Z" fill="${palette.wing}" />
      <circle cx="92" cy="34" r="17" fill="${palette.body}" />
      <path d="M80 24 L86 8 L94 25 Z" fill="${palette.dark}" />
      <path d="M99 25 L110 10 L108 30 Z" fill="${palette.dark}" />
      <path d="M99 43 L121 42 L102 51 Z" fill="${palette.belly}" />
      <circle cx="98" cy="32" r="3" fill="${palette.eye}" />
      <path d="M36 41 L24 36 M37 47 L23 50" stroke="${palette.dark}" stroke-width="2" />
      <rect x="43" y="58" width="11" height="9" rx="4" fill="${palette.dark}" />
      <rect x="74" y="58" width="11" height="9" rx="4" fill="${palette.dark}" />
    `);
  }

  return "";
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function bilingualHtml(hebrew, english) {
  return `<span class="bilingual-label"><span>${escapeHtml(hebrew)}</span><span class="label-en">${escapeHtml(english)}</span></span>`;
}

function skinNameHtml(skin) {
  return bilingualHtml(skin.name, skin.englishName || skin.name);
}

function trailNameHtml(trail) {
  return bilingualHtml(trail.name, trail.englishName || trail.name);
}

function skinCostText(skin) {
  return skin.cost === 0
    ? { he: "חינם", en: "Free" }
    : { he: `${skin.cost} נקודות חנות`, en: `${skin.cost} shop points` };
}

function trailCostText(trail) {
  return { he: `${trail.cost} נקודות חנות`, en: `${trail.cost} shop points` };
}

function setDuelStatus(hebrew, english) {
  elements.duelStatusLabel.innerHTML = bilingualHtml(hebrew, english);
}

function updateDuelScoreLabels() {
  elements.duelP1Score.textContent = duel.players[0].score.toString();
  elements.duelP2Score.textContent = duel.players[1].score.toString();
}

function resetDuelRound() {
  cancelAnimationFrame(duelRafId);
  duel.running = false;
  duel.over = false;
  duel.score = 0;
  duel.pace = 0;
  duel.speed = 6.6;
  duel.spawnTimer = 650;
  duel.obstacles = [];
  duel.clouds = [
    { x: 150, y: 42, size: 23, speed: 0.18 },
    { x: 460, y: 238, size: 27, speed: 0.16 },
    { x: 760, y: 58, size: 20, speed: 0.2 },
  ];
  duel.players.forEach((player) => {
    player.y = player.groundY - player.height;
    player.vy = 0;
    player.onGround = true;
    player.alive = true;
    player.score = 0;
  });
  updateDuelScoreLabels();
  drawDuel();
}

function resetDuel() {
  resetDuelRound();
  setDuelStatus("מוכן", "Ready");
  elements.startDuelBtn.innerHTML = bilingualHtml("התחל דו קרב", "Start Duel");
}

function openDuel() {
  resetDuel();
  elements.duelModal.classList.remove("hidden");
  elements.startDuelBtn.focus();
}

function closeDuel() {
  cancelAnimationFrame(duelRafId);
  duel.running = false;
  elements.duelModal.classList.add("hidden");
  elements.openDuelBtn.focus();
}

function startDuel() {
  resetDuelRound();
  duel.running = true;
  duel.over = false;
  setDuelStatus("רצים", "Running");
  elements.startDuelBtn.innerHTML = bilingualHtml("התחל מחדש", "Restart");
  duelLastTime = performance.now();
  duelRafId = requestAnimationFrame(tickDuel);
}

function jumpDuelPlayer(index) {
  if (elements.duelModal.classList.contains("hidden")) return;
  if (!duel.running || duel.over) {
    startDuel();
  }

  const player = duel.players[index];
  if (!player || !player.alive || !player.onGround) return;
  player.vy = -11.6;
  player.onGround = false;
  playJumpDing();
}

function handleDuelPointer(event) {
  if (elements.duelModal.classList.contains("hidden")) return;
  const rect = elements.duelCanvas.getBoundingClientRect();
  const lane = event.clientY - rect.top < rect.height / 2 ? 0 : 1;
  jumpDuelPlayer(lane);
}

function tickDuel(time) {
  if (!duel.running) return;
  const dt = Math.min(34, time - duelLastTime || 16);
  duelLastTime = time;
  updateDuel(dt);
  drawDuel();
  if (duel.running) {
    duelRafId = requestAnimationFrame(tickDuel);
  }
}

function updateDuel(dt) {
  const scale = dt / 16.67;
  const scoreDelta = scale * 0.26;
  duel.score += scoreDelta;
  duel.pace += scale;
  duel.speed = Math.min(13.5, 6.6 + duel.pace / 340);

  duel.players.forEach((player) => {
    if (!player.alive) return;
    player.score = Math.floor(duel.score);
    player.vy += 0.78 * scale;
    player.y += player.vy * scale;
    if (player.y >= player.groundY - player.height) {
      player.y = player.groundY - player.height;
      player.vy = 0;
      player.onGround = true;
    }
  });

  duel.spawnTimer -= dt;
  if (duel.spawnTimer <= 0) {
    spawnDuelObstaclePair();
    duel.spawnTimer = Math.max(560, randomBetween(880, 1320) - duel.pace * 0.45);
  }

  duel.obstacles.forEach((obstacle) => {
    obstacle.x -= duel.speed * scale;
  });
  duel.obstacles = duel.obstacles.filter((obstacle) => obstacle.x + obstacle.width > -40);

  duel.clouds.forEach((cloud) => {
    cloud.x -= cloud.speed * scale;
    if (cloud.x < -100) {
      cloud.x = DUEL_WIDTH + randomBetween(60, 220);
    }
  });

  duel.players.forEach((player, index) => {
    if (!player.alive) return;
    const hit = duel.obstacles.some((obstacle) => obstacle.lane === index && duelCollides(player, obstacle));
    if (hit) {
      player.alive = false;
      player.score = Math.floor(duel.score);
    }
  });

  updateDuelScoreLabels();

  const alivePlayers = duel.players.filter((player) => player.alive);
  if (alivePlayers.length < 2) {
    endDuel();
  }
}

function spawnDuelObstaclePair() {
  const obstacleType = OBSTACLE_TYPES[randomBetween(0, OBSTACLE_TYPES.length - 1)];
  const width = randomBetween(obstacleType.minWidth, obstacleType.maxWidth);
  const height = randomBetween(obstacleType.minHeight, obstacleType.maxHeight);
  duel.players.forEach((player, lane) => {
    duel.obstacles.push({
      type: obstacleType.type,
      lane,
      x: DUEL_WIDTH + 36,
      y: player.groundY - height,
      width,
      height,
      hitInsetX: obstacleType.hitInsetX,
      hitInsetTop: obstacleType.hitInsetTop,
    });
  });
}

function duelCollides(player, obstacle) {
  const playerBox = {
    x: player.x + 12,
    y: player.y + 8,
    width: player.width - 22,
    height: player.height - 10,
  };
  const hitInsetX = obstacle.hitInsetX ?? 5;
  const hitInsetTop = obstacle.hitInsetTop ?? 4;
  const obstacleBox = {
    x: obstacle.x + hitInsetX,
    y: obstacle.y + hitInsetTop,
    width: obstacle.width - hitInsetX * 2,
    height: obstacle.height - hitInsetTop - 2,
  };
  return (
    playerBox.x < obstacleBox.x + obstacleBox.width &&
    playerBox.x + playerBox.width > obstacleBox.x &&
    playerBox.y < obstacleBox.y + obstacleBox.height &&
    playerBox.y + playerBox.height > obstacleBox.y
  );
}

function endDuel() {
  if (duel.over) return;
  duel.running = false;
  duel.over = true;
  cancelAnimationFrame(duelRafId);

  const [playerOne, playerTwo] = duel.players;
  if (playerOne.alive && !playerTwo.alive) {
    setDuelStatus("שחקן 1 ניצח", "Player 1 wins");
  } else if (playerTwo.alive && !playerOne.alive) {
    setDuelStatus("שחקן 2 ניצח", "Player 2 wins");
  } else {
    setDuelStatus("תיקו", "Draw");
  }
  elements.startDuelBtn.innerHTML = bilingualHtml("משחק חדש", "New Match");
  drawDuel();
}

function drawDuel() {
  duelCtx.clearRect(0, 0, DUEL_WIDTH, DUEL_HEIGHT);
  const sky = duelCtx.createLinearGradient(0, 0, 0, DUEL_HEIGHT);
  sky.addColorStop(0, "#b9eff7");
  sky.addColorStop(0.54, "#f8f7df");
  sky.addColorStop(1, "#ffe8b4");
  duelCtx.fillStyle = sky;
  duelCtx.fillRect(0, 0, DUEL_WIDTH, DUEL_HEIGHT);

  duelCtx.fillStyle = "rgba(244, 196, 91, 0.9)";
  duelCtx.beginPath();
  duelCtx.arc(DUEL_WIDTH - 78, 58, 30, 0, Math.PI * 2);
  duelCtx.fill();

  duel.clouds.forEach((cloud) => drawDuelCloud(cloud));
  drawDuelLane(0);
  drawDuelLane(1);
  duel.obstacles.forEach((obstacle) => drawDuelObstacle(obstacle));
  duel.players.forEach((player, index) => drawDuelRunner(player, index));
  drawDuelOverlay();
}

function drawDuelCloud(cloud) {
  duelCtx.fillStyle = "rgba(255, 255, 255, 0.75)";
  duelCtx.beginPath();
  duelCtx.ellipse(cloud.x, cloud.y, cloud.size * 1.2, cloud.size * 0.5, 0, 0, Math.PI * 2);
  duelCtx.ellipse(cloud.x + cloud.size * 0.82, cloud.y + 3, cloud.size, cloud.size * 0.45, 0, 0, Math.PI * 2);
  duelCtx.ellipse(cloud.x - cloud.size * 0.74, cloud.y + 4, cloud.size * 0.88, cloud.size * 0.42, 0, 0, Math.PI * 2);
  duelCtx.fill();
}

function drawDuelLane(index) {
  const player = duel.players[index];
  const top = index === 0 ? 0 : 212;
  const color = index === 0 ? "rgba(31, 157, 106, 0.1)" : "rgba(47, 128, 237, 0.1)";

  duelCtx.fillStyle = color;
  duelCtx.fillRect(0, top, DUEL_WIDTH, 210);
  duelCtx.fillStyle = "#9b6f3a";
  duelCtx.fillRect(0, player.groundY, DUEL_WIDTH, DUEL_HEIGHT - player.groundY);
  duelCtx.fillStyle = "#6d4c2b";
  duelCtx.fillRect(0, player.groundY, DUEL_WIDTH, 5);

  duelCtx.strokeStyle = index === 0 ? "rgba(31, 157, 106, 0.85)" : "rgba(47, 128, 237, 0.85)";
  duelCtx.lineWidth = 3;
  duelCtx.setLineDash([12, 12]);
  duelCtx.beginPath();
  duelCtx.moveTo(0, player.groundY + 26);
  duelCtx.lineTo(DUEL_WIDTH, player.groundY + 26);
  duelCtx.stroke();
  duelCtx.setLineDash([]);

  duelCtx.fillStyle = "rgba(25, 32, 42, 0.78)";
  duelCtx.font = "900 18px Segoe UI, Arial";
  duelCtx.textAlign = "left";
  duelCtx.textBaseline = "top";
  duelCtx.fillText(`${player.englishName} - ${player.key}`, 18, top + 14);
}

function drawDuelObstacle(obstacle) {
  const hue = obstacle.lane === 0 ? "#7c3aed" : "#dc2626";
  duelCtx.save();
  duelCtx.translate(obstacle.x, obstacle.y);
  duelCtx.fillStyle = hue;
  duelCtx.strokeStyle = "#1d2732";
  duelCtx.lineWidth = 3;
  duelCtx.beginPath();
  if (obstacle.type === "spikes" || obstacle.type === "bone") {
    const spikes = Math.max(3, Math.floor(obstacle.width / 18));
    for (let i = 0; i < spikes; i += 1) {
      const x = (obstacle.width / spikes) * i;
      duelCtx.moveTo(x, obstacle.height);
      duelCtx.lineTo(x + obstacle.width / spikes / 2, 0);
      duelCtx.lineTo(x + obstacle.width / spikes, obstacle.height);
    }
  } else if (obstacle.type === "boulder") {
    duelCtx.ellipse(obstacle.width / 2, obstacle.height / 2, obstacle.width / 2, obstacle.height / 2, 0, 0, Math.PI * 2);
  } else {
    duelCtx.roundRect(0, 0, obstacle.width, obstacle.height, 7);
  }
  duelCtx.fill();
  duelCtx.stroke();
  duelCtx.restore();
}

function drawDuelRunner(player, index) {
  const t = duel.score / 8 + index;
  const legA = Math.sin(t) * 5;
  const legB = Math.sin(t + Math.PI) * 5;
  const palette = player.palette;

  duelCtx.save();
  duelCtx.translate(player.x, player.y);
  if (!player.alive) {
    duelCtx.globalAlpha = 0.48;
  }

  duelCtx.fillStyle = palette.dark;
  duelCtx.beginPath();
  duelCtx.moveTo(8, 40);
  duelCtx.quadraticCurveTo(-10, 31, 4, 22);
  duelCtx.quadraticCurveTo(18, 28, 23, 37);
  duelCtx.closePath();
  duelCtx.fill();

  duelCtx.fillStyle = palette.body;
  duelCtx.beginPath();
  duelCtx.ellipse(32, 34, 28, 19, 0, 0, Math.PI * 2);
  duelCtx.fill();

  duelCtx.fillStyle = palette.belly;
  duelCtx.beginPath();
  duelCtx.ellipse(36, 40, 16, 8, 0, 0, Math.PI * 2);
  duelCtx.fill();

  duelCtx.fillStyle = palette.body;
  duelCtx.beginPath();
  duelCtx.ellipse(57, 24, 17, 15, 0, 0, Math.PI * 2);
  duelCtx.fill();

  duelCtx.fillStyle = palette.horn;
  duelCtx.beginPath();
  duelCtx.moveTo(51, 11);
  duelCtx.lineTo(56, 0);
  duelCtx.lineTo(61, 12);
  duelCtx.closePath();
  duelCtx.moveTo(62, 13);
  duelCtx.lineTo(72, 6);
  duelCtx.lineTo(69, 18);
  duelCtx.closePath();
  duelCtx.fill();

  duelCtx.strokeStyle = palette.dark;
  duelCtx.lineWidth = 5;
  duelCtx.lineCap = "round";
  duelCtx.beginPath();
  duelCtx.moveTo(23, 48);
  duelCtx.lineTo(16 + legA, 58);
  duelCtx.moveTo(42, 49);
  duelCtx.lineTo(51 + legB, 58);
  duelCtx.stroke();

  duelCtx.fillStyle = palette.eye;
  duelCtx.beginPath();
  duelCtx.arc(62, 22, 3, 0, Math.PI * 2);
  duelCtx.fill();

  if (!player.alive) {
    duelCtx.globalAlpha = 1;
    duelCtx.strokeStyle = "#ef4444";
    duelCtx.lineWidth = 4;
    duelCtx.beginPath();
    duelCtx.moveTo(53, 16);
    duelCtx.lineTo(70, 32);
    duelCtx.moveTo(70, 16);
    duelCtx.lineTo(53, 32);
    duelCtx.stroke();
  }
  duelCtx.restore();
}

function drawDuelOverlay() {
  if (duel.running) return;

  duelCtx.save();
  duelCtx.fillStyle = "rgba(255, 255, 255, 0.72)";
  duelCtx.fillRect(0, 0, DUEL_WIDTH, DUEL_HEIGHT);
  duelCtx.fillStyle = "#1d2732";
  duelCtx.textAlign = "center";
  duelCtx.textBaseline = "middle";
  duelCtx.font = "950 30px Segoe UI, Arial";
  const title = duel.over ? elements.duelStatusLabel.innerText.split("\n")[0] : "Duel";
  duelCtx.fillText(title, DUEL_WIDTH / 2, DUEL_HEIGHT / 2 - 26);
  duelCtx.font = "850 18px Segoe UI, Arial";
  duelCtx.fillText("Player 1: W    |    Player 2: ↑", DUEL_WIDTH / 2, DUEL_HEIGHT / 2 + 18);
  duelCtx.restore();
}

function savePlayerName() {
  const name = normalizeName(elements.playerName.value);
  if (name === state.currentPlayer) {
    setStatus("זה כבר השם הנוכחי", true, true, "This is already the current name");
    return;
  }
  renamePlayer(state.currentPlayer, name);
}

function openShop() {
  elements.shopModal.classList.remove("hidden");
  elements.closeShopBtn.focus();
}

function closeShop() {
  elements.shopModal.classList.add("hidden");
  elements.openShopBtn.focus();
}

function openTrailShop() {
  renderAll();
  elements.trailShopModal.classList.remove("hidden");
  elements.closeTrailShopBtn.focus();
}

function closeTrailShop() {
  elements.trailShopModal.classList.add("hidden");
  elements.openTrailShopBtn.focus();
}

function openLeaderboard() {
  renderAll();
  elements.leaderboardModal.classList.remove("hidden");
  elements.closeLeaderboardBtn.focus();
}

function closeLeaderboard() {
  elements.leaderboardModal.classList.add("hidden");
  elements.openLeaderboardBtn.focus();
}

function openDailyMissions() {
  renderAll();
  elements.dailyMissionsModal.classList.remove("hidden");
  elements.closeDailyMissionsBtn.focus();
}

function closeDailyMissions() {
  elements.dailyMissionsModal.classList.add("hidden");
  elements.openDailyMissionsBtn.focus();
}

function openCreatorMessage() {
  elements.creatorMessageModal.classList.remove("hidden");
  elements.creatorMessageText.focus();
}

function closeCreatorMessage() {
  elements.creatorMessageModal.classList.add("hidden");
  elements.openCreatorMessageBtn.focus();
}

function sendCreatorMessage() {
  const text = elements.creatorMessageText.value.trim().replace(/\s+/g, " ").slice(0, 500);
  if (!text) {
    setStatus("כתבו הודעה לפני השליחה", true, true, "Write a message before sending");
    elements.creatorMessageText.focus();
    return;
  }

  state.creatorMessages = state.creatorMessages || [];
  state.creatorMessages.push({
    from: getCurrentPlayer().name,
    text,
    at: new Date().toISOString(),
  });
  state.creatorMessages = state.creatorMessages.slice(-50);
  elements.creatorMessageText.value = "";
  saveState();
  renderAll();
  closeCreatorMessage();
  setStatus("ההודעה נשלחה ליוצר", true, true, "Message sent to the creator");
}

function openSettings() {
  renderAll();
  elements.settingsModal.classList.remove("hidden");
  elements.closeSettingsBtn.focus();
}

function closeSettings() {
  elements.settingsModal.classList.add("hidden");
  elements.openSettingsBtn.focus();
}

function setJumpSoundEnabled(enabled) {
  state.jumpSoundEnabled = Boolean(enabled);
  if (!state.jumpSoundEnabled && jumpAudioContext && jumpAudioContext.state === "running") {
    jumpAudioContext.suspend();
  }
  saveState();
  renderAll();
}

function handleAdminLogin() {
  if (elements.adminPin.value.trim() === ADMIN_PIN) {
    state.admin = true;
    adminPanelVisible = true;
    elements.adminPin.value = "";
    elements.adminPlayer.value = state.currentPlayer;
    saveState();
    renderAll();
    setStatus("Admin פעיל", true, true);
    return;
  }
  setStatus("קוד לא תקין", true, true);
}

function logoutAdmin() {
  state.admin = false;
  adminPanelVisible = false;
  saveState();
  renderAll();
  setStatus("Admin נעול", true, true);
}

function changeAdminPoints(direction = 1) {
  if (!state.admin) return;
  const targetName = normalizeName(elements.adminPlayer.value || state.currentPlayer);
  const rawAmount = Number.parseInt(elements.adminPoints.value, 10);
  const amount = direction < 0 ? -Math.abs(rawAmount) : rawAmount;
  if (!Number.isFinite(amount) || amount === 0) {
    setStatus("נקודות חנות לא תקינות", true, true);
    return;
  }
  const player = ensurePlayer(targetName);
  player.points = Math.max(0, player.points + amount);
  saveState();
  renderAll();
  setStatus("נקודות החנות עודכנו", true, true);
}

function addAdminPoints() {
  changeAdminPoints(1);
}

function subtractAdminPoints() {
  changeAdminPoints(-1);
}

function renamePlayer(oldName, newName) {
  if (oldName === newName) {
    setStatus("זה כבר השם הנוכחי", true, true, "This is already the current name");
    return false;
  }
  if (!state.players[oldName]) {
    setStatus("השחקן לא נמצא", true, true, "Player not found");
    return false;
  }
  if (state.players[newName]) {
    const oldPlayer = state.players[oldName];
    const newPlayer = state.players[newName];
    newPlayer.best = Math.max(newPlayer.best, oldPlayer.best);
    newPlayer.points = Math.max(0, newPlayer.points + oldPlayer.points);
    newPlayer.ownedSkins = Array.from(new Set([...newPlayer.ownedSkins, ...oldPlayer.ownedSkins]));
    newPlayer.ownedTrails = Array.from(new Set([...(newPlayer.ownedTrails || []), ...(oldPlayer.ownedTrails || [])]));
    newPlayer.skinId = oldPlayer.skinId || newPlayer.skinId;
    newPlayer.trailId = oldPlayer.trailId || newPlayer.trailId;
    newPlayer.baseColor = oldPlayer.baseColor || newPlayer.baseColor;
    newPlayer.skinColors = {
      ...(newPlayer.skinColors || {}),
      ...(oldPlayer.skinColors || {}),
    };
    delete state.players[oldName];
    if (state.currentPlayer === oldName) {
      state.currentPlayer = newName;
    }
    saveState();
    renderAll();
    setStatus("השמות אוחדו לשחקן אחד", true, true, "Names merged into one player");
    return true;
  }

  state.players[newName] = {
    ...state.players[oldName],
    name: newName,
  };
  delete state.players[oldName];
  if (state.currentPlayer === oldName) {
    state.currentPlayer = newName;
  }
  saveState();
  renderAll();
  setStatus("שם השחקן עודכן", true, true, "Player name updated");
  return true;
}

function renameCurrentPlayer() {
  const oldName = state.currentPlayer;
  const newName = normalizeName(elements.playerName.value);
  renamePlayer(oldName, newName);
}

function renameAdminPlayer() {
  if (!state.admin) return;
  const oldName = normalizeName(elements.adminPlayer.value || state.currentPlayer);
  const newName = normalizeName(elements.adminNewName.value);
  if (renamePlayer(oldName, newName)) {
    elements.adminPlayer.value = newName;
    elements.adminNewName.value = "";
  }
}

function changeAdminBest(direction = 1) {
  if (!state.admin) return;
  const targetName = normalizeName(elements.adminPlayer.value || state.currentPlayer);
  const rawAmount = Number.parseInt(elements.adminBest.value, 10);
  const amount = direction < 0 ? -Math.abs(rawAmount) : rawAmount;
  if (!Number.isFinite(amount) || amount === 0) {
    setStatus("שיא משחק לא תקין", true, true);
    return;
  }
  const player = ensurePlayer(targetName);
  player.best = Math.max(0, player.best + amount);
  saveState();
  renderAll();
  setStatus("שיא המשחק עודכן", true, true);
}

function setAdminBest() {
  changeAdminBest(1);
}

function subtractAdminBest() {
  changeAdminBest(-1);
}

function applyAdminSkin() {
  if (!state.admin) return;
  const targetName = normalizeName(elements.adminPlayer.value || state.currentPlayer);
  const player = ensurePlayer(targetName);
  const skin = getSkinById(elements.adminSkin.value);
  player.skinId = skin.id;
  if (!player.ownedSkins.includes(skin.id)) {
    player.ownedSkins.push(skin.id);
  }
  saveState();
  renderAll();
  setStatus("סקין עודכן", true, true);
}

function removeAdminSkin() {
  if (!state.admin) return;
  const targetName = normalizeName(elements.adminPlayer.value || state.currentPlayer);
  const player = state.players[targetName];
  const skin = getSkinById(elements.adminSkin.value);

  if (!player) {
    setStatus("השחקן לא נמצא", true, true);
    return;
  }
  if (skin.id === "classic") {
    setStatus("אי אפשר להסיר את הסקין הקלאסי", true, true);
    return;
  }
  if (!player.ownedSkins.includes(skin.id)) {
    setStatus("לשחקן אין את הסקין הזה", true, true);
    return;
  }

  player.ownedSkins = player.ownedSkins.filter((skinId) => skinId !== skin.id);
  if (player.skinId === skin.id) {
    player.skinId = "classic";
  }
  saveState();
  renderAll();
  setStatus("הסקין הוסר מהשחקן", true, true);
}

function resetGame() {
  cancelAnimationFrame(rafId);
  game.running = false;
  game.paused = false;
  game.over = false;
  game.score = 0;
  game.shopScore = 0;
  game.pace = 0;
  game.speed = 7;
  game.obstacles = [];
  game.trailParticles = [];
  game.trailTimer = 0;
  game.dailySecondBuffer = 0;
  game.clouds = createClouds();
  game.dragon.vy = 0;
  game.dragon.onGround = true;
  game.dragon.y = game.groundY - game.dragon.height;
  spawnTimer = 500;
  elements.scoreValue.textContent = "0";
  draw();
}

function startGame() {
  resetGame();
  game.running = true;
  game.over = false;
  updateDailyMissionProgress("runs", 1);
  setStatus("", false);
  lastTime = performance.now();
  rafId = requestAnimationFrame(tick);
}

function jumpOrStart() {
  if (!game.running || game.over) {
    startGame();
  }
  jumpDragon();
}

function getJumpAudioContext() {
  const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextCtor) return null;
  if (!jumpAudioContext) {
    jumpAudioContext = new AudioContextCtor();
  }
  return jumpAudioContext;
}

function playJumpDing() {
  if (!state.jumpSoundEnabled) return;
  const audioContext = getJumpAudioContext();
  if (!audioContext) return;
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  const now = audioContext.currentTime;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(1046.5, now);
  oscillator.frequency.exponentialRampToValueAtTime(1568, now + 0.08);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.16, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);

  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start(now);
  oscillator.stop(now + 0.2);
}

function jumpDragon() {
  const dragon = game.dragon;
  if (!dragon.onGround || game.paused) return;
  dragon.vy = -15.8;
  dragon.onGround = false;
  playJumpDing();
  updateDailyMissionProgress("jumps", 1);
}

function togglePause() {
  if (!game.running || game.over) return;
  game.paused = !game.paused;
  if (game.paused) {
    cancelAnimationFrame(rafId);
    setStatus("עצירה", true, false, "Paused");
  } else {
    setStatus("", false);
    lastTime = performance.now();
    rafId = requestAnimationFrame(tick);
  }
}

function tick(time) {
  if (!game.running || game.paused) return;
  const dt = Math.min(34, time - lastTime || 16);
  lastTime = time;
  updateGame(dt);
  draw();
  rafId = requestAnimationFrame(tick);
}

function updateGame(dt) {
  const scale = dt / 16.67;
  const previousScore = game.score;
  const scoreDelta = scale * SCORE_GAIN_PER_TICK;
  game.score += scoreDelta;
  game.pace += scale;
  game.dailySecondBuffer += dt;
  if (game.dailySecondBuffer >= 1000) {
    const seconds = Math.floor(game.dailySecondBuffer / 1000);
    game.dailySecondBuffer -= seconds * 1000;
    updateDailyMissionProgress("totalSeconds", seconds);
  }
  if (previousScore >= SHOP_POINTS_GRACE_SCORE) {
    game.shopScore += scoreDelta;
  } else if (game.score > SHOP_POINTS_GRACE_SCORE) {
    game.shopScore += game.score - SHOP_POINTS_GRACE_SCORE;
  }
  game.speed = Math.min(15, 7 + game.pace / 390);
  elements.scoreValue.textContent = Math.floor(game.score).toString();

  const dragon = game.dragon;
  dragon.vy += 0.82 * scale;
  dragon.y += dragon.vy * scale;
  if (dragon.y >= game.groundY - dragon.height) {
    dragon.y = game.groundY - dragon.height;
    dragon.vy = 0;
    dragon.onGround = true;
  }
  updateTrail(scale);

  spawnTimer -= dt;
  if (spawnTimer <= 0) {
    spawnObstacle();
    spawnTimer = Math.max(500, randomBetween(900, 1450) - game.pace * 0.75);
  }

  game.obstacles.forEach((obstacle) => {
    obstacle.x -= game.speed * scale;
  });
  game.obstacles = game.obstacles.filter((obstacle) => obstacle.x + obstacle.width > -30);

  game.clouds.forEach((cloud) => {
    cloud.x -= cloud.speed * scale;
    if (cloud.x < -120) {
      cloud.x = view.width + randomBetween(40, 220);
      cloud.y = randomBetween(22, view.height * 0.42);
    }
  });

  const hit = game.obstacles.some((obstacle) => collides(dragon, obstacle));
  if (hit) {
    endGame();
  }
}

function endGame() {
  if (game.over) return;
  game.running = false;
  game.over = true;
  cancelAnimationFrame(rafId);

  const score = Math.floor(game.score);
  const earned = Math.floor(game.shopScore);
  const player = getCurrentPlayer();
  const previousBest = player.best;
  updateDailyMissionProgress("bestScore", score);
  player.best = Math.max(previousBest, score);
  player.points += earned;
  saveState();
  renderAll();
  elements.scoreValue.textContent = "0";
  const status = score > previousBest
    ? {
        he: `שיא משחק חדש: ${score} · +${earned} נקודות חנות`,
        en: `New best run: ${score} · +${earned} shop points`,
      }
    : {
        he: `סיום: ${score} · +${earned} נקודות חנות`,
        en: `Game over: ${score} · +${earned} shop points`,
      };
  setStatus(status.he, true, false, status.en);
}

function getTrailStyle(trailId) {
  return getTrailById(trailId);
}

function updateTrail(scale) {
  const player = getCurrentPlayer();
  const palette = activePalette(player);
  const style = getTrailStyle(player.trailId);
  if (!style) {
    game.trailParticles = [];
    game.trailTimer = 0;
    return;
  }

  game.trailTimer += scale * 1.35;
  while (game.trailTimer >= 1) {
    game.trailTimer -= 1;
    emitTrailParticle(style, palette);
  }

  game.trailParticles.forEach((particle) => {
    particle.life -= scale;
    particle.x -= (game.speed * 0.82 + particle.driftX) * scale;
    particle.y += particle.driftY * scale;
    particle.spin += particle.spinSpeed * scale;
    particle.size += particle.grow * scale;
  });
  game.trailParticles = game.trailParticles.filter((particle) => particle.life > 0).slice(-MAX_TRAIL_PARTICLES);
}

function emitTrailParticle(style, palette) {
  const dragon = game.dragon;
  const life = randomBetween(28, 46);
  const yJitter = randomBetween(-style.spread, style.spread);
  const xJitter = randomBetween(-18, 8);
  game.trailParticles.push({
    kind: style.kind,
    x: dragon.x + 8 + xJitter,
    y: dragon.y + style.yOffset + yJitter,
    size: randomBetween(Math.max(6, style.size - 5), style.size + 5),
    color: style.color || palette.body,
    accent: style.accent || palette.belly,
    life,
    totalLife: life,
    driftX: randomBetween(0, 3),
    driftY: randomBetween(-2, 2) / 6,
    spin: randomBetween(0, 628) / 100,
    spinSpeed: randomBetween(-16, 16) / 100,
    grow: randomBetween(-8, 8) / 18,
  });
}

function spawnObstacle() {
  const obstacleType = OBSTACLE_TYPES[randomBetween(0, OBSTACLE_TYPES.length - 1)];
  const width = randomBetween(obstacleType.minWidth, obstacleType.maxWidth);
  const height = randomBetween(obstacleType.minHeight, obstacleType.maxHeight);
  game.obstacles.push({
    type: obstacleType.type,
    x: view.width + 28,
    y: game.groundY - height,
    width,
    height,
    hitInsetX: obstacleType.hitInsetX,
    hitInsetTop: obstacleType.hitInsetTop,
  });
}

function collides(dragon, obstacle) {
  const dragonBox = {
    x: dragon.x + 14,
    y: dragon.y + 10,
    width: dragon.width - 26,
    height: dragon.height - 14,
  };
  const hitInsetX = obstacle.hitInsetX ?? 5;
  const hitInsetTop = obstacle.hitInsetTop ?? 4;
  const obstacleBox = {
    x: obstacle.x + hitInsetX,
    y: obstacle.y + hitInsetTop,
    width: obstacle.width - hitInsetX * 2,
    height: obstacle.height - hitInsetTop - 2,
  };
  return (
    dragonBox.x < obstacleBox.x + obstacleBox.width &&
    dragonBox.x + dragonBox.width > obstacleBox.x &&
    dragonBox.y < obstacleBox.y + obstacleBox.height &&
    dragonBox.y + dragonBox.height > obstacleBox.y
  );
}

function draw() {
  ctx.clearRect(0, 0, view.width, view.height);
  drawBackground();
  drawTrail();
  drawObstacles();
  drawDragon();
  drawForeground();
}

function drawBackground() {
  const sky = ctx.createLinearGradient(0, 0, 0, view.height);
  sky.addColorStop(0, "#b9eff7");
  sky.addColorStop(0.58, "#f7f6df");
  sky.addColorStop(1, "#ffe8b4");
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, view.width, view.height);

  ctx.fillStyle = "rgba(244, 196, 91, 0.9)";
  ctx.beginPath();
  ctx.arc(view.width - 88, 72, 34, 0, Math.PI * 2);
  ctx.fill();

  game.clouds.forEach((cloud) => {
    ctx.fillStyle = "rgba(255, 255, 255, 0.78)";
    ctx.beginPath();
    ctx.ellipse(cloud.x, cloud.y, cloud.size * 1.2, cloud.size * 0.5, 0, 0, Math.PI * 2);
    ctx.ellipse(cloud.x + cloud.size * 0.82, cloud.y + 3, cloud.size, cloud.size * 0.45, 0, 0, Math.PI * 2);
    ctx.ellipse(cloud.x - cloud.size * 0.74, cloud.y + 4, cloud.size * 0.88, cloud.size * 0.42, 0, 0, Math.PI * 2);
    ctx.fill();
  });

  drawMountain(view.width * 0.16, game.groundY, 130, "#93b49d");
  drawMountain(view.width * 0.38, game.groundY, 190, "#6fa59c");
  drawMountain(view.width * 0.72, game.groundY, 160, "#91a8c8");
}

function drawMountain(centerX, baseY, height, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(centerX - height * 1.3, baseY);
  ctx.lineTo(centerX, baseY - height);
  ctx.lineTo(centerX + height * 1.3, baseY);
  ctx.closePath();
  ctx.fill();
}

function drawForeground() {
  ctx.fillStyle = "#9b6f3a";
  ctx.fillRect(0, game.groundY, view.width, view.height - game.groundY);
  ctx.fillStyle = "#6d4c2b";
  ctx.fillRect(0, game.groundY, view.width, 5);

  ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
  const offset = (game.score * game.speed) % 38;
  for (let x = -offset; x < view.width + 38; x += 38) {
    ctx.fillRect(x, game.groundY + 24, 16, 3);
  }
}

function drawTrail() {
  game.trailParticles.forEach((particle) => {
    const alpha = Math.max(0, Math.min(1, particle.life / particle.totalLife));
    drawTrailParticle(particle, alpha);
  });
}

function drawTrailParticle(particle, alpha) {
  const size = Math.max(2, particle.size);
  ctx.save();
  ctx.globalAlpha = alpha * 0.86;
  ctx.translate(particle.x, particle.y);
  ctx.rotate(particle.spin);

  if (particle.kind === "fire" || particle.kind === "ember") {
    ctx.fillStyle = particle.color;
    ctx.beginPath();
    ctx.moveTo(0, -size);
    ctx.bezierCurveTo(size * 0.9, -size * 0.15, size * 0.5, size * 0.85, 0, size);
    ctx.bezierCurveTo(-size * 0.9, size * 0.2, -size * 0.45, -size * 0.45, 0, -size);
    ctx.fill();
    ctx.fillStyle = particle.accent;
    ctx.beginPath();
    ctx.arc(0, size * 0.18, size * 0.32, 0, Math.PI * 2);
    ctx.fill();
  } else if (particle.kind === "heart") {
    ctx.fillStyle = particle.color;
    ctx.beginPath();
    ctx.moveTo(0, size * 0.5);
    ctx.bezierCurveTo(-size * 1.1, -size * 0.2, -size * 0.35, -size * 1.1, 0, -size * 0.38);
    ctx.bezierCurveTo(size * 0.35, -size * 1.1, size * 1.1, -size * 0.2, 0, size * 0.5);
    ctx.fill();
  } else if (particle.kind === "sparkle" || particle.kind === "gem") {
    ctx.fillStyle = particle.color;
    ctx.beginPath();
    ctx.moveTo(0, -size);
    ctx.lineTo(size * 0.28, -size * 0.28);
    ctx.lineTo(size, 0);
    ctx.lineTo(size * 0.28, size * 0.28);
    ctx.lineTo(0, size);
    ctx.lineTo(-size * 0.28, size * 0.28);
    ctx.lineTo(-size, 0);
    ctx.lineTo(-size * 0.28, -size * 0.28);
    ctx.closePath();
    ctx.fill();
  } else if (particle.kind === "leaf" || particle.kind === "feather" || particle.kind === "forest") {
    ctx.fillStyle = particle.color;
    ctx.beginPath();
    ctx.ellipse(0, 0, size * 0.35, size, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = particle.accent;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, -size * 0.72);
    ctx.lineTo(0, size * 0.72);
    ctx.stroke();
  } else if (particle.kind === "snow") {
    ctx.strokeStyle = particle.accent;
    ctx.lineWidth = 2;
    for (let i = 0; i < 3; i += 1) {
      ctx.rotate(Math.PI / 3);
      ctx.beginPath();
      ctx.moveTo(-size * 0.75, 0);
      ctx.lineTo(size * 0.75, 0);
      ctx.stroke();
    }
  } else if (particle.kind === "moon") {
    ctx.fillStyle = particle.color;
    ctx.beginPath();
    ctx.arc(0, 0, size * 0.72, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#f8faf7";
    ctx.beginPath();
    ctx.arc(size * 0.32, -size * 0.12, size * 0.68, 0, Math.PI * 2);
    ctx.fill();
  } else if (particle.kind === "stripe") {
    ctx.strokeStyle = particle.color;
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(-size, -size * 0.35);
    ctx.lineTo(size, size * 0.35);
    ctx.moveTo(-size * 0.5, size * 0.5);
    ctx.lineTo(size * 0.7, -size * 0.6);
    ctx.stroke();
  } else if (particle.kind === "hoof") {
    ctx.strokeStyle = particle.color;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(0, 0, size * 0.62, 0.2, Math.PI - 0.2);
    ctx.stroke();
  } else if (particle.kind === "dust" || particle.kind === "smoke") {
    ctx.fillStyle = particle.color;
    ctx.beginPath();
    ctx.arc(0, 0, size * 0.75, 0, Math.PI * 2);
    ctx.arc(size * 0.55, size * 0.08, size * 0.46, 0, Math.PI * 2);
    ctx.arc(-size * 0.48, size * 0.12, size * 0.42, 0, Math.PI * 2);
    ctx.fill();
  } else if (particle.kind === "wave" || particle.kind === "ribbon") {
    ctx.strokeStyle = particle.color;
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(-size, 0);
    ctx.bezierCurveTo(-size * 0.45, -size, size * 0.45, size, size, 0);
    ctx.stroke();
  } else if (particle.kind === "number") {
    ctx.fillStyle = particle.color;
    ctx.font = `900 ${size * 1.35}px Arial`;
    ctx.fillText("67", -size * 0.7, size * 0.45);
  } else if (particle.kind === "pulse") {
    ctx.strokeStyle = particle.color;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(0, 0, size * 0.72, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = particle.accent;
    ctx.beginPath();
    ctx.arc(0, 0, size * 0.25, 0, Math.PI * 2);
    ctx.fill();
  } else if (particle.kind === "coffee") {
    ctx.fillStyle = particle.color;
    ctx.beginPath();
    ctx.ellipse(0, 0, size * 0.72, size * 0.46, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = particle.accent;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(size * 0.58, 0, size * 0.34, -Math.PI / 2, Math.PI / 2);
    ctx.stroke();
  } else if (particle.kind === "cactus") {
    ctx.strokeStyle = particle.color;
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(0, size * 0.8);
    ctx.lineTo(0, -size * 0.8);
    ctx.moveTo(0, -size * 0.2);
    ctx.lineTo(size * 0.48, -size * 0.48);
    ctx.moveTo(0, size * 0.15);
    ctx.lineTo(-size * 0.45, -size * 0.05);
    ctx.stroke();
  } else if (particle.kind === "pepper") {
    ctx.fillStyle = particle.color;
    ctx.beginPath();
    ctx.ellipse(0, 0, size * 0.44, size * 0.92, 0.45, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = particle.accent;
    ctx.fillRect(-size * 0.12, -size, size * 0.24, size * 0.28);
  } else if (particle.kind === "rainbow") {
    ["#ef4444", "#facc15", "#22c55e", "#38bdf8", "#a855f7"].forEach((color, index) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(0, 0, size * (0.3 + index * 0.14), Math.PI, 0);
      ctx.stroke();
    });
  } else {
    ctx.fillStyle = particle.color;
    ctx.beginPath();
    ctx.arc(0, 0, size * 0.58, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();
}

function drawObstacles() {
  game.obstacles.forEach((obstacle) => {
    if (obstacle.type === "crystal") {
      drawCrystal(obstacle);
    } else if (obstacle.type === "tower") {
      drawTower(obstacle);
    } else if (obstacle.type === "flame") {
      drawFlameObstacle(obstacle);
    } else if (obstacle.type === "spikes") {
      drawSpikes(obstacle);
    } else if (obstacle.type === "boulder") {
      drawBoulder(obstacle);
    } else if (obstacle.type === "portal") {
      drawPortal(obstacle);
    } else if (obstacle.type === "bone") {
      drawBone(obstacle);
    } else {
      drawLog(obstacle);
    }
  });
}

function drawCrystal(obstacle) {
  ctx.fillStyle = "#0e7490";
  ctx.beginPath();
  ctx.moveTo(obstacle.x + obstacle.width / 2, obstacle.y);
  ctx.lineTo(obstacle.x + obstacle.width, obstacle.y + obstacle.height * 0.5);
  ctx.lineTo(obstacle.x + obstacle.width * 0.62, obstacle.y + obstacle.height);
  ctx.lineTo(obstacle.x + obstacle.width * 0.18, obstacle.y + obstacle.height);
  ctx.lineTo(obstacle.x, obstacle.y + obstacle.height * 0.45);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "rgba(255,255,255,0.45)";
  ctx.beginPath();
  ctx.moveTo(obstacle.x + obstacle.width / 2, obstacle.y + 8);
  ctx.lineTo(obstacle.x + obstacle.width * 0.72, obstacle.y + obstacle.height * 0.52);
  ctx.lineTo(obstacle.x + obstacle.width * 0.52, obstacle.y + obstacle.height - 7);
  ctx.closePath();
  ctx.fill();
}

function drawTower(obstacle) {
  ctx.fillStyle = "#263445";
  ctx.fillRect(obstacle.x + obstacle.width * 0.18, obstacle.y + 12, obstacle.width * 0.64, obstacle.height - 12);
  ctx.fillStyle = "#1f9d6a";
  ctx.fillRect(obstacle.x, obstacle.y + 24, obstacle.width, 12);
  ctx.fillStyle = "#d94841";
  ctx.beginPath();
  ctx.moveTo(obstacle.x + obstacle.width / 2, obstacle.y);
  ctx.lineTo(obstacle.x + obstacle.width, obstacle.y + 18);
  ctx.lineTo(obstacle.x, obstacle.y + 18);
  ctx.closePath();
  ctx.fill();
}

function drawLog(obstacle) {
  ctx.fillStyle = "#7c4a2f";
  ctx.beginPath();
  ctx.roundRect(obstacle.x, obstacle.y + 4, obstacle.width, obstacle.height - 4, 8);
  ctx.fill();
  ctx.fillStyle = "#d69e2e";
  ctx.beginPath();
  ctx.ellipse(obstacle.x + obstacle.width - 8, obstacle.y + obstacle.height / 2, 7, obstacle.height / 2 - 5, 0, 0, Math.PI * 2);
  ctx.fill();
}

function drawFlameObstacle(obstacle) {
  const x = obstacle.x + obstacle.width / 2;
  const y = obstacle.y;
  const h = obstacle.height;
  const w = obstacle.width;
  ctx.fillStyle = "#ef4444";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.bezierCurveTo(x + w * 0.7, y + h * 0.36, x + w * 0.42, y + h * 0.9, x, y + h);
  ctx.bezierCurveTo(x - w * 0.7, y + h * 0.82, x - w * 0.34, y + h * 0.3, x, y);
  ctx.fill();

  ctx.fillStyle = "#facc15";
  ctx.beginPath();
  ctx.moveTo(x, y + h * 0.24);
  ctx.bezierCurveTo(x + w * 0.34, y + h * 0.52, x + w * 0.18, y + h * 0.82, x, y + h * 0.9);
  ctx.bezierCurveTo(x - w * 0.35, y + h * 0.72, x - w * 0.16, y + h * 0.46, x, y + h * 0.24);
  ctx.fill();
}

function drawSpikes(obstacle) {
  ctx.fillStyle = "#334155";
  const spikeCount = 4;
  const spikeWidth = obstacle.width / spikeCount;
  for (let i = 0; i < spikeCount; i += 1) {
    const x = obstacle.x + i * spikeWidth;
    ctx.beginPath();
    ctx.moveTo(x, obstacle.y + obstacle.height);
    ctx.lineTo(x + spikeWidth / 2, obstacle.y);
    ctx.lineTo(x + spikeWidth, obstacle.y + obstacle.height);
    ctx.closePath();
    ctx.fill();
  }
  ctx.fillStyle = "#94a3b8";
  ctx.fillRect(obstacle.x, obstacle.y + obstacle.height - 5, obstacle.width, 5);
}

function drawBoulder(obstacle) {
  ctx.fillStyle = "#475569";
  ctx.beginPath();
  ctx.ellipse(obstacle.x + obstacle.width / 2, obstacle.y + obstacle.height / 2, obstacle.width / 2, obstacle.height / 2, -0.12, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "rgba(255,255,255,0.22)";
  ctx.beginPath();
  ctx.arc(obstacle.x + obstacle.width * 0.36, obstacle.y + obstacle.height * 0.32, 7, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#1f2937";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(obstacle.x + obstacle.width * 0.2, obstacle.y + obstacle.height * 0.62);
  ctx.lineTo(obstacle.x + obstacle.width * 0.55, obstacle.y + obstacle.height * 0.48);
  ctx.lineTo(obstacle.x + obstacle.width * 0.78, obstacle.y + obstacle.height * 0.66);
  ctx.stroke();
}

function drawPortal(obstacle) {
  const x = obstacle.x + obstacle.width / 2;
  const y = obstacle.y + obstacle.height / 2;
  ctx.strokeStyle = "#7c3aed";
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.ellipse(x, y, obstacle.width * 0.36, obstacle.height * 0.42, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.strokeStyle = "#22d3ee";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.ellipse(x, y, obstacle.width * 0.24, obstacle.height * 0.3, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fillStyle = "rgba(34,211,238,0.24)";
  ctx.beginPath();
  ctx.ellipse(x, y, obstacle.width * 0.22, obstacle.height * 0.28, 0, 0, Math.PI * 2);
  ctx.fill();
}

function drawBone(obstacle) {
  ctx.fillStyle = "#f8fafc";
  ctx.strokeStyle = "#cbd5e1";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(obstacle.x + 8, obstacle.y + obstacle.height * 0.38, obstacle.width - 16, obstacle.height * 0.24, 7);
  ctx.fill();
  ctx.stroke();
  [
    [obstacle.x + 8, obstacle.y + obstacle.height * 0.38],
    [obstacle.x + obstacle.width - 8, obstacle.y + obstacle.height * 0.38],
  ].forEach(([x, y]) => {
    ctx.beginPath();
    ctx.arc(x, y, 8, 0, Math.PI * 2);
    ctx.arc(x, y + obstacle.height * 0.24, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  });
}

function drawDragon() {
  const dragon = game.dragon;
  const player = getCurrentPlayer();
  const skin = getSkinById(player.skinId);
  const palette = activePalette(player);
  const t = game.score / 8;
  const legA = Math.sin(t) * 5;
  const legB = Math.cos(t) * 5;

  ctx.save();
  ctx.translate(dragon.x, dragon.y);
  ctx.translate(dragon.width / 2, dragon.height);
  ctx.scale(SKIN_VISUAL_SCALE, SKIN_VISUAL_SCALE);
  ctx.translate(-dragon.width / 2, -dragon.height);

  if (skin.motif !== "dragon") {
    drawAnimalCreature(skin.motif, palette, t, legA, legB);
    ctx.restore();
    return;
  }

  ctx.fillStyle = palette.dark;
  ctx.beginPath();
  ctx.moveTo(16, 42);
  ctx.lineTo(-26, 58);
  ctx.lineTo(12, 20);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = palette.body;
  ctx.beginPath();
  ctx.ellipse(36, 42, 31, 20, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = palette.wing;
  ctx.globalAlpha = 0.92;
  ctx.beginPath();
  ctx.moveTo(25, 38);
  ctx.bezierCurveTo(43, 13, 68, 13, 74, 37);
  ctx.bezierCurveTo(57, 35, 42, 45, 32, 58);
  ctx.closePath();
  ctx.fill();
  ctx.globalAlpha = 1;

  ctx.fillStyle = palette.belly;
  ctx.beginPath();
  ctx.ellipse(45, 49, 18, 8, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = palette.body;
  ctx.beginPath();
  ctx.arc(66, 28, 19, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(78, 33);
  ctx.lineTo(104, 39);
  ctx.lineTo(78, 49);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = palette.horn;
  ctx.beginPath();
  ctx.moveTo(59, 13);
  ctx.lineTo(52, 0);
  ctx.lineTo(50, 18);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(72, 12);
  ctx.lineTo(83, -2);
  ctx.lineTo(79, 20);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = palette.eye;
  ctx.beginPath();
  ctx.arc(73, 24, 3.2, 0, Math.PI * 2);
  ctx.fill();

  drawDragonMotif(skin.motif, palette, t);

  ctx.strokeStyle = palette.dark;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(22, 62);
  ctx.lineTo(22 + legA, 69);
  ctx.moveTo(52, 61);
  ctx.lineTo(52 + legB, 69);
  ctx.stroke();

  ctx.restore();
}

function drawAnimalCreature(motif, palette, t, legA, legB) {
  const drawEye = (x, y, color = palette.eye) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, 3.2, 0, Math.PI * 2);
    ctx.fill();
  };
  const drawLegs = (color = palette.dark, height = 11) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(24, 58);
    ctx.lineTo(24 + legA, 58 + height);
    ctx.moveTo(55, 58);
    ctx.lineTo(55 + legB, 58 + height);
    ctx.stroke();
  };

  if (drawTrendCreature(motif, palette, t, legA, legB)) return;

  if (motif === "rabbit") {
    ctx.fillStyle = palette.body;
    ctx.beginPath();
    ctx.ellipse(36, 44, 31, 18, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(68, 31, 17, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(59, 7, 6, 23, -0.28, 0, Math.PI * 2);
    ctx.ellipse(75, 8, 6, 23, 0.24, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = palette.wing;
    ctx.beginPath();
    ctx.ellipse(60, 9, 2.6, 15, -0.25, 0, Math.PI * 2);
    ctx.ellipse(75, 10, 2.6, 15, 0.25, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = palette.belly;
    ctx.beginPath();
    ctx.arc(3, 42, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(35, 50, 15, 7, 0, 0, Math.PI * 2);
    ctx.fill();
    drawEye(73, 27);
    drawLegs(palette.dark, 10);
    return;
  }

  if (motif === "cat") {
    ctx.fillStyle = palette.body;
    ctx.beginPath();
    ctx.ellipse(34, 43, 32, 17, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(68, 31, 17, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = palette.dark;
    ctx.beginPath();
    ctx.moveTo(55, 21);
    ctx.lineTo(61, 4);
    ctx.lineTo(70, 22);
    ctx.closePath();
    ctx.moveTo(72, 22);
    ctx.lineTo(84, 7);
    ctx.lineTo(86, 29);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = palette.dark;
    ctx.lineWidth = 7;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(3, 42);
    ctx.bezierCurveTo(-23, 23, -24, 62, 5, 56);
    ctx.stroke();
    drawEye(74, 29);
    ctx.strokeStyle = palette.dark;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(77, 37);
    ctx.lineTo(92, 35);
    ctx.moveTo(77, 41);
    ctx.lineTo(92, 44);
    ctx.stroke();
    drawLegs(palette.dark, 12);
    return;
  }

  if (motif === "fox") {
    ctx.fillStyle = palette.body;
    ctx.beginPath();
    ctx.ellipse(34, 43, 32, 16, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(61, 31);
    ctx.lineTo(83, 20);
    ctx.lineTo(96, 36);
    ctx.lineTo(80, 50);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = palette.dark;
    ctx.beginPath();
    ctx.moveTo(66, 23);
    ctx.lineTo(70, 4);
    ctx.lineTo(79, 25);
    ctx.closePath();
    ctx.moveTo(82, 26);
    ctx.lineTo(94, 11);
    ctx.lineTo(92, 34);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = palette.body;
    ctx.beginPath();
    ctx.moveTo(8, 43);
    ctx.bezierCurveTo(-22, 20, -27, 69, 10, 58);
    ctx.bezierCurveTo(-2, 55, -3, 44, 8, 43);
    ctx.fill();
    ctx.fillStyle = palette.horn;
    ctx.beginPath();
    ctx.moveTo(-18, 34);
    ctx.bezierCurveTo(-26, 45, -19, 59, 2, 58);
    ctx.bezierCurveTo(-8, 52, -8, 42, -18, 34);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(79, 43);
    ctx.lineTo(102, 43);
    ctx.lineTo(82, 52);
    ctx.closePath();
    ctx.fill();
    drawEye(82, 33);
    drawLegs(palette.dark, 12);
    return;
  }

  if (motif === "turtle") {
    ctx.fillStyle = palette.dark;
    ctx.beginPath();
    ctx.ellipse(36, 46, 36, 17, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = palette.wing;
    ctx.beginPath();
    ctx.moveTo(2, 47);
    ctx.bezierCurveTo(8, 17, 60, 14, 74, 47);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = palette.body;
    ctx.beginPath();
    ctx.moveTo(18, 43);
    ctx.lineTo(34, 27);
    ctx.lineTo(51, 43);
    ctx.lineTo(34, 56);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(82, 43, 13, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(1, 48);
    ctx.lineTo(-16, 40);
    ctx.lineTo(-8, 56);
    ctx.closePath();
    ctx.fill();
    drawEye(87, 39);
    drawLegs(palette.dark, 7);
    return;
  }

  if (motif === "parrot") {
    ctx.fillStyle = palette.body;
    ctx.beginPath();
    ctx.ellipse(35, 43, 27, 20, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = palette.wing;
    ctx.beginPath();
    ctx.moveTo(16, 36);
    ctx.bezierCurveTo(30, 15, 61, 19, 63, 45);
    ctx.bezierCurveTo(47, 42, 35, 52, 25, 65);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = palette.body;
    ctx.beginPath();
    ctx.arc(68, 29, 16, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = palette.horn;
    ctx.beginPath();
    ctx.moveTo(78, 31);
    ctx.bezierCurveTo(97, 29, 95, 43, 77, 42);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#dc2626";
    ctx.beginPath();
    ctx.moveTo(18, 55);
    ctx.lineTo(-8, 68);
    ctx.lineTo(9, 46);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#facc15";
    ctx.beginPath();
    ctx.moveTo(10, 48);
    ctx.lineTo(-14, 37);
    ctx.lineTo(21, 40);
    ctx.closePath();
    ctx.fill();
    drawEye(73, 26);
    drawLegs(palette.dark, 9);
    return;
  }

  if (motif === "penguin") {
    ctx.fillStyle = palette.body;
    ctx.beginPath();
    ctx.ellipse(42, 41, 27, 27, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = palette.belly;
    ctx.beginPath();
    ctx.ellipse(47, 47, 17, 19, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = palette.body;
    ctx.beginPath();
    ctx.arc(57, 21, 17, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = palette.horn;
    ctx.beginPath();
    ctx.moveTo(69, 27);
    ctx.lineTo(91, 34);
    ctx.lineTo(69, 40);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = palette.wing;
    ctx.beginPath();
    ctx.moveTo(20, 41);
    ctx.lineTo(0, 55);
    ctx.lineTo(17, 59);
    ctx.closePath();
    ctx.moveTo(65, 42);
    ctx.lineTo(84, 56);
    ctx.lineTo(66, 59);
    ctx.closePath();
    ctx.fill();
    drawEye(61, 21, palette.eye);
    ctx.fillStyle = palette.horn;
    ctx.fillRect(28, 64, 19, 5);
    ctx.fillRect(52, 64, 19, 5);
    return;
  }

  if (motif === "wolf") {
    ctx.fillStyle = palette.body;
    ctx.beginPath();
    ctx.ellipse(34, 43, 34, 16, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(60, 32);
    ctx.lineTo(80, 19);
    ctx.lineTo(96, 34);
    ctx.lineTo(81, 50);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = palette.dark;
    ctx.beginPath();
    ctx.moveTo(65, 22);
    ctx.lineTo(70, 4);
    ctx.lineTo(78, 25);
    ctx.closePath();
    ctx.moveTo(83, 24);
    ctx.lineTo(94, 7);
    ctx.lineTo(94, 33);
    ctx.closePath();
    ctx.moveTo(8, 43);
    ctx.lineTo(-20, 30);
    ctx.lineTo(-3, 55);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = palette.belly;
    ctx.beginPath();
    ctx.moveTo(80, 43);
    ctx.lineTo(104, 43);
    ctx.lineTo(83, 51);
    ctx.closePath();
    ctx.fill();
    drawEye(83, 32);
    drawLegs(palette.dark, 12);
    return;
  }

  if (motif === "tiger") {
    ctx.fillStyle = palette.body;
    ctx.beginPath();
    ctx.ellipse(34, 43, 34, 17, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(68, 31, 17, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = palette.dark;
    ctx.beginPath();
    ctx.moveTo(55, 22);
    ctx.lineTo(61, 7);
    ctx.lineTo(70, 25);
    ctx.closePath();
    ctx.moveTo(73, 23);
    ctx.lineTo(84, 8);
    ctx.lineTo(85, 30);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = palette.dark;
    ctx.lineWidth = 4;
    [[12, 31, 22, 45], [30, 27, 38, 48], [49, 30, 45, 48], [64, 22, 72, 38]].forEach(([x1, y1, x2, y2]) => {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    });
    ctx.lineWidth = 7;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(4, 42);
    ctx.bezierCurveTo(-21, 28, -18, 61, 8, 56);
    ctx.stroke();
    drawEye(74, 29);
    drawLegs(palette.dark, 12);
    return;
  }

  if (motif === "horse") {
    ctx.fillStyle = palette.body;
    ctx.beginPath();
    ctx.ellipse(34, 44, 36, 16, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(61, 38);
    ctx.lineTo(72, 17);
    ctx.lineTo(92, 31);
    ctx.lineTo(81, 51);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = palette.dark;
    ctx.beginPath();
    ctx.moveTo(61, 28);
    ctx.bezierCurveTo(70, 16, 78, 17, 84, 27);
    ctx.bezierCurveTo(74, 28, 67, 33, 62, 40);
    ctx.fill();
    ctx.strokeStyle = palette.dark;
    ctx.lineWidth = 7;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(2, 43);
    ctx.bezierCurveTo(-18, 32, -20, 54, 2, 56);
    ctx.stroke();
    drawEye(83, 30);
    drawLegs(palette.dark, 15);
    ctx.strokeStyle = palette.dark;
    ctx.beginPath();
    ctx.moveTo(70, 56);
    ctx.lineTo(70 + Math.sin(t) * 4, 70);
    ctx.stroke();
    return;
  }

  if (motif === "elephant") {
    ctx.fillStyle = palette.body;
    ctx.beginPath();
    ctx.ellipse(34, 42, 38, 20, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(70, 34, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = palette.wing;
    ctx.beginPath();
    ctx.ellipse(55, 34, 12, 16, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = palette.body;
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(83, 42);
    ctx.bezierCurveTo(108, 46, 99, 69, 80, 57);
    ctx.stroke();
    ctx.strokeStyle = palette.horn;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(78, 48);
    ctx.lineTo(98, 47);
    ctx.stroke();
    drawEye(74, 29);
    drawLegs(palette.dark, 14);
    return;
  }

  if (motif === "agama") {
    ctx.fillStyle = palette.body;
    ctx.beginPath();
    ctx.ellipse(35, 45, 38, 14, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(63, 36);
    ctx.lineTo(86, 26);
    ctx.lineTo(101, 36);
    ctx.lineTo(85, 48);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = palette.dark;
    ctx.beginPath();
    ctx.moveTo(6, 44);
    ctx.lineTo(-26, 56);
    ctx.lineTo(4, 53);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = palette.horn;
    ctx.beginPath();
    ctx.moveTo(4, 34);
    ctx.lineTo(12, 15);
    ctx.lineTo(19, 36);
    ctx.lineTo(27, 15);
    ctx.lineTo(35, 36);
    ctx.lineTo(44, 13);
    ctx.lineTo(51, 37);
    ctx.lineTo(61, 17);
    ctx.lineTo(67, 38);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = palette.belly;
    ctx.beginPath();
    ctx.moveTo(20, 49);
    ctx.lineTo(37, 39);
    ctx.lineTo(54, 51);
    ctx.lineTo(37, 58);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = palette.wing;
    ctx.beginPath();
    ctx.moveTo(80, 42);
    ctx.lineTo(103, 42);
    ctx.lineTo(83, 50);
    ctx.closePath();
    ctx.fill();
    drawEye(87, 34);
    drawLegs(palette.dark, 8);
  }
}

function drawTrendCreature(motif, palette, t, legA, legB) {
  if (!motif.startsWith("trend-")) return false;

  const drawEye = (x, y, color = palette.eye) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, 3.2, 0, Math.PI * 2);
    ctx.fill();
  };
  const drawLegs = (color = palette.dark, height = 10) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(26, 58);
    ctx.lineTo(26 + legA, 58 + height);
    ctx.moveTo(58, 58);
    ctx.lineTo(58 + legB, 58 + height);
    ctx.stroke();
  };
  const drawTail = (color = palette.dark) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = 7;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(4, 44);
    ctx.bezierCurveTo(-20, 31, -18, 61, 7, 56);
    ctx.stroke();
  };

  if (motif === "trend-tralalero") {
    ctx.fillStyle = palette.body;
    ctx.beginPath();
    ctx.ellipse(42, 41, 40, 17, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = palette.belly;
    ctx.beginPath();
    ctx.moveTo(17, 41);
    ctx.bezierCurveTo(38, 56, 80, 57, 101, 39);
    ctx.bezierCurveTo(78, 58, 41, 60, 17, 41);
    ctx.fill();
    ctx.fillStyle = palette.dark;
    ctx.beginPath();
    ctx.moveTo(33, 25);
    ctx.lineTo(47, 4);
    ctx.lineTo(53, 30);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(16, 40);
    ctx.lineTo(-4, 29);
    ctx.lineTo(1, 50);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = palette.belly;
    ctx.beginPath();
    ctx.moveTo(71, 39);
    ctx.lineTo(105, 36);
    ctx.lineTo(77, 49);
    ctx.closePath();
    ctx.fill();
    drawEye(73, 31);
    ctx.strokeStyle = palette.dark;
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(27, 51);
    ctx.lineTo(24 + legA, 63);
    ctx.moveTo(45, 52);
    ctx.lineTo(45, 66);
    ctx.moveTo(63, 50);
    ctx.lineTo(64 + legB, 63);
    ctx.stroke();
    ctx.fillStyle = palette.horn;
    ctx.beginPath();
    ctx.roundRect(14 + legA, 63, 24, 8, 4);
    ctx.roundRect(34, 66, 24, 8, 4);
    ctx.roundRect(54 + legB, 63, 24, 8, 4);
    ctx.fill();
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(19 + legA, 67);
    ctx.lineTo(31 + legA, 67);
    ctx.moveTo(39, 70);
    ctx.lineTo(51, 70);
    ctx.moveTo(59 + legB, 67);
    ctx.lineTo(72 + legB, 67);
    ctx.stroke();
    return true;
  }

  if (motif === "trend-ballerina") {
    ctx.fillStyle = palette.belly;
    ctx.beginPath();
    ctx.roundRect(34, 18, 35, 26, 7);
    ctx.fill();
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.ellipse(51, 18, 17, 7, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = palette.belly;
    ctx.beginPath();
    ctx.ellipse(51, 17, 12, 4, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = palette.belly;
    ctx.lineWidth = 6;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(68, 27);
    ctx.bezierCurveTo(88, 26, 88, 43, 69, 42);
    ctx.stroke();
    drawEye(46, 30);
    drawEye(57, 30);
    ctx.strokeStyle = palette.dark;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(46, 36);
    ctx.quadraticCurveTo(52, 39, 58, 36);
    ctx.stroke();
    ctx.fillStyle = palette.body;
    ctx.beginPath();
    ctx.moveTo(51, 44);
    ctx.lineTo(58, 52);
    ctx.lineTo(44, 52);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = palette.wing;
    ctx.beginPath();
    ctx.moveTo(17, 52);
    ctx.bezierCurveTo(34, 39, 78, 39, 96, 52);
    ctx.lineTo(80, 63);
    ctx.lineTo(32, 63);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = palette.dark;
    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(30, 49);
    ctx.lineTo(7, 37);
    ctx.moveTo(72, 49);
    ctx.lineTo(96, 37);
    ctx.moveTo(45, 53);
    ctx.lineTo(35 + legA, 68);
    ctx.moveTo(58, 53);
    ctx.lineTo(73 + legB, 68);
    ctx.stroke();
    ctx.fillStyle = palette.horn;
    ctx.beginPath();
    ctx.ellipse(34 + legA, 68, 10, 4, -0.2, 0, Math.PI * 2);
    ctx.ellipse(75 + legB, 68, 10, 4, 0.2, 0, Math.PI * 2);
    ctx.fill();
    return true;
  }

  if (motif === "trend-sixty-seven") {
    ctx.strokeStyle = palette.dark;
    ctx.lineWidth = 6;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(28, 36);
    ctx.bezierCurveTo(13, 20, 2, 27, -2, 40);
    ctx.moveTo(75, 36);
    ctx.bezierCurveTo(92, 21, 103, 28, 108, 40);
    ctx.stroke();

    ctx.fillStyle = palette.wing;
    ctx.strokeStyle = palette.dark;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(-3, 41, 8, 0, Math.PI * 2);
    ctx.arc(109, 41, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.strokeStyle = palette.dark;
    ctx.lineWidth = 2.8;
    ctx.fillStyle = palette.body;
    ctx.font = "950 54px Segoe UI, Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.strokeText("67", 52, 39);
    ctx.fillText("67", 52, 39);

    ctx.strokeStyle = palette.dark;
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(39, 54);
    ctx.lineTo(31 + legA, 67);
    ctx.moveTo(65, 54);
    ctx.lineTo(76 + legB, 67);
    ctx.stroke();

    ctx.fillStyle = palette.wing;
    ctx.strokeStyle = palette.dark;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(29 + legA, 68, 14, 5, -0.08, 0, Math.PI * 2);
    ctx.ellipse(80 + legB, 68, 14, 5, 0.08, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    drawEye(43, 29);
    drawEye(62, 29);
    ctx.strokeStyle = palette.eye;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(44, 40);
    ctx.quadraticCurveTo(53, 47, 65, 40);
    ctx.stroke();

    ctx.fillStyle = palette.horn;
    ctx.strokeStyle = palette.dark;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(33, 15);
    ctx.lineTo(40, 5);
    ctx.lineTo(47, 15);
    ctx.closePath();
    ctx.moveTo(63, 15);
    ctx.lineTo(70, 5);
    ctx.lineTo(77, 15);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    return true;
  }

  if (motif === "trend-bombardino") {
    ctx.fillStyle = palette.wing;
    ctx.beginPath();
    ctx.ellipse(38, 42, 39, 15, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = palette.belly;
    ctx.beginPath();
    ctx.moveTo(28, 30);
    ctx.lineTo(60, 10);
    ctx.lineTo(72, 31);
    ctx.closePath();
    ctx.moveTo(30, 53);
    ctx.lineTo(61, 68);
    ctx.lineTo(72, 51);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = palette.dark;
    ctx.beginPath();
    ctx.moveTo(9, 42);
    ctx.lineTo(-10, 30);
    ctx.lineTo(-8, 53);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = palette.body;
    ctx.beginPath();
    ctx.moveTo(69, 34);
    ctx.lineTo(100, 30);
    ctx.lineTo(113, 40);
    ctx.lineTo(100, 50);
    ctx.lineTo(69, 48);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = palette.dark;
    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(81, 42);
    ctx.lineTo(110, 42);
    ctx.stroke();
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(88, 47);
    ctx.lineTo(95, 50);
    ctx.lineTo(102, 47);
    ctx.lineTo(109, 50);
    ctx.stroke();
    drawEye(86, 35);
    ctx.strokeStyle = palette.horn;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(44, 57);
    ctx.lineTo(42 + legA, 70);
    ctx.moveTo(64, 55);
    ctx.lineTo(69 + legB, 69);
    ctx.stroke();
    return true;
  }

  if (motif === "trend-tung") {
    ctx.fillStyle = palette.body;
    ctx.beginPath();
    ctx.roundRect(34, 13, 35, 48, 13);
    ctx.fill();
    ctx.fillStyle = palette.belly;
    ctx.beginPath();
    ctx.ellipse(51, 13, 17, 7, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = palette.dark;
    ctx.beginPath();
    ctx.ellipse(51, 61, 17, 7, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = palette.dark;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(42, 24);
    ctx.lineTo(62, 24);
    ctx.moveTo(41, 36);
    ctx.lineTo(63, 36);
    ctx.moveTo(44, 48);
    ctx.lineTo(60, 48);
    ctx.stroke();
    drawEye(46, 31);
    drawEye(57, 31);
    ctx.strokeStyle = palette.dark;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(46, 41);
    ctx.quadraticCurveTo(52, 44, 58, 41);
    ctx.stroke();
    ctx.strokeStyle = palette.dark;
    ctx.lineWidth = 6;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(35, 36);
    ctx.lineTo(18, 49);
    ctx.moveTo(68, 35);
    ctx.lineTo(88, 24);
    ctx.stroke();
    ctx.fillStyle = palette.horn;
    ctx.beginPath();
    ctx.moveTo(84, 10);
    ctx.lineTo(98, 8);
    ctx.lineTo(95, 42);
    ctx.lineTo(84, 43);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = palette.dark;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(43, 59);
    ctx.lineTo(35 + legA, 69);
    ctx.moveTo(61, 59);
    ctx.lineTo(70 + legB, 69);
    ctx.stroke();
    return true;
  }

  if (motif === "trend-cappuccino") {
    ctx.fillStyle = palette.belly;
    ctx.beginPath();
    ctx.roundRect(36, 18, 35, 26, 7);
    ctx.fill();
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.ellipse(53, 18, 18, 7, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = palette.belly;
    ctx.beginPath();
    ctx.ellipse(53, 17, 13, 4, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = palette.dark;
    ctx.lineWidth = 6;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(70, 27);
    ctx.bezierCurveTo(88, 28, 88, 42, 71, 41);
    ctx.stroke();
    ctx.fillStyle = palette.dark;
    ctx.fillRect(41, 30, 28, 10);
    drawEye(49, 35, palette.eye);
    drawEye(60, 35, palette.eye);
    ctx.fillStyle = palette.wing;
    ctx.beginPath();
    ctx.moveTo(38, 45);
    ctx.lineTo(27, 61);
    ctx.lineTo(82, 61);
    ctx.lineTo(69, 45);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = palette.horn;
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(31, 50);
    ctx.lineTo(9, 37);
    ctx.moveTo(79, 50);
    ctx.lineTo(104, 37);
    ctx.stroke();
    ctx.fillStyle = palette.belly;
    ctx.beginPath();
    ctx.moveTo(7, 35);
    ctx.lineTo(21, 34);
    ctx.lineTo(13, 44);
    ctx.closePath();
    ctx.moveTo(101, 35);
    ctx.lineTo(115, 34);
    ctx.lineTo(107, 44);
    ctx.closePath();
    ctx.fill();
    drawLegs(palette.dark, 8);
    return true;
  }

  if (motif === "trend-lirili") {
    ctx.fillStyle = palette.body;
    ctx.beginPath();
    ctx.roundRect(28, 22, 34, 36, 13);
    ctx.fill();
    ctx.strokeStyle = palette.horn;
    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(34, 20);
    ctx.lineTo(34, 10);
    ctx.moveTo(45, 20);
    ctx.lineTo(46, 7);
    ctx.moveTo(56, 21);
    ctx.lineTo(56, 11);
    ctx.stroke();
    ctx.fillStyle = palette.wing;
    ctx.beginPath();
    ctx.ellipse(76, 35, 18, 16, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(62, 35, 10, 13, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = palette.wing;
    ctx.lineWidth = 9;
    ctx.beginPath();
    ctx.moveTo(90, 39);
    ctx.bezierCurveTo(113, 42, 105, 63, 87, 53);
    ctx.stroke();
    drawEye(80, 31);
    ctx.fillStyle = palette.belly;
    ctx.beginPath();
    ctx.arc(38, 34, 2.2, 0, Math.PI * 2);
    ctx.arc(52, 44, 2.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = palette.dark;
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(35, 58);
    ctx.lineTo(29 + legA, 68);
    ctx.moveTo(55, 58);
    ctx.lineTo(64 + legB, 68);
    ctx.stroke();
    ctx.fillStyle = palette.horn;
    ctx.beginPath();
    ctx.ellipse(28 + legA, 68, 10, 4, 0, 0, Math.PI * 2);
    ctx.ellipse(66 + legB, 68, 10, 4, 0, 0, Math.PI * 2);
    ctx.fill();
    return true;
  }

  if (motif === "trend-bobrito") {
    ctx.fillStyle = palette.dark;
    ctx.beginPath();
    ctx.arc(15, 62, 10, 0, Math.PI * 2);
    ctx.arc(80, 62, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = palette.belly;
    ctx.beginPath();
    ctx.arc(15, 62, 4, 0, Math.PI * 2);
    ctx.arc(80, 62, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = palette.dark;
    ctx.lineWidth = 7;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(15, 62);
    ctx.bezierCurveTo(31, 50, 62, 50, 80, 62);
    ctx.stroke();
    ctx.strokeStyle = palette.wing;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(47, 55);
    ctx.lineTo(63, 55);
    ctx.lineTo(79, 62);
    ctx.stroke();

    ctx.fillStyle = palette.body;
    ctx.beginPath();
    ctx.roundRect(35, 21, 39, 41, 15);
    ctx.fill();
    ctx.fillStyle = palette.belly;
    ctx.beginPath();
    ctx.moveTo(39, 24);
    ctx.bezierCurveTo(45, 12, 64, 12, 71, 24);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = palette.dark;
    ctx.fillRect(39, 44, 35, 14);
    ctx.fillStyle = palette.wing;
    ctx.font = "900 10px Segoe UI, Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("BB", 57, 52);
    ctx.fillStyle = palette.horn;
    ctx.beginPath();
    ctx.moveTo(31, 23);
    ctx.bezierCurveTo(39, 7, 68, 7, 79, 23);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(54, 23, 35, 7, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = palette.dark;
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(42, 31);
    ctx.lineTo(54, 31);
    ctx.moveTo(59, 31);
    ctx.lineTo(71, 31);
    ctx.stroke();
    ctx.strokeStyle = palette.horn;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(47, 39);
    ctx.bezierCurveTo(52, 46, 64, 46, 69, 39);
    ctx.stroke();
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(51, 40);
    ctx.quadraticCurveTo(57, 43, 65, 40);
    ctx.stroke();

    ctx.strokeStyle = palette.body;
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(38, 47);
    ctx.lineTo(20, 51);
    ctx.moveTo(73, 46);
    ctx.lineTo(95, 50);
    ctx.stroke();

    ctx.strokeStyle = palette.dark;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(43, 58);
    ctx.lineTo(35 + legA, 69);
    ctx.moveTo(70, 58);
    ctx.lineTo(78 + legB, 69);
    ctx.stroke();
    ctx.strokeStyle = palette.horn;
    ctx.beginPath();
    ctx.moveTo(32 + legA, 69);
    ctx.lineTo(47 + legA, 69);
    ctx.moveTo(76 + legB, 69);
    ctx.lineTo(92 + legB, 69);
    ctx.stroke();
    return true;
  }

  if (motif === "trend-brbr") {
    ctx.fillStyle = palette.body;
    ctx.beginPath();
    ctx.roundRect(34, 21, 35, 41, 13);
    ctx.fill();
    ctx.fillStyle = palette.wing;
    ctx.beginPath();
    ctx.ellipse(51, 18, 21, 9, 0, 0, Math.PI * 2);
    ctx.moveTo(36, 25);
    ctx.bezierCurveTo(41, 9, 63, 9, 70, 25);
    ctx.fill();
    ctx.fillStyle = palette.dark;
    ctx.beginPath();
    ctx.arc(52, 35, 15, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = palette.belly;
    ctx.beginPath();
    ctx.ellipse(52, 40, 9, 7, 0, 0, Math.PI * 2);
    ctx.fill();
    drawEye(46, 32);
    drawEye(58, 32);
    ctx.fillStyle = "#f8fafc";
    ctx.beginPath();
    ctx.ellipse(52, 39, 3.5, 5, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = palette.belly;
    ctx.beginPath();
    ctx.moveTo(40, 8);
    ctx.lineTo(66, 8);
    ctx.lineTo(61, 18);
    ctx.lineTo(45, 18);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = palette.wing;
    ctx.lineWidth = 8;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(35, 39);
    ctx.lineTo(12, 48);
    ctx.moveTo(69, 39);
    ctx.lineTo(94, 48);
    ctx.stroke();
    ctx.strokeStyle = palette.dark;
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(43, 58);
    ctx.lineTo(34 + legA, 68);
    ctx.moveTo(61, 58);
    ctx.lineTo(72 + legB, 68);
    ctx.stroke();
    ctx.fillStyle = palette.belly;
    ctx.beginPath();
    ctx.ellipse(32 + legA, 68, 13, 5, 0, 0, Math.PI * 2);
    ctx.ellipse(75 + legB, 68, 13, 5, 0, 0, Math.PI * 2);
    ctx.fill();
    return true;
  }

  if (motif === "trend-trippi") {
    ctx.fillStyle = palette.body;
    ctx.beginPath();
    ctx.ellipse(35, 44, 35, 18, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = palette.wing;
    ctx.beginPath();
    ctx.moveTo(0, 45);
    ctx.lineTo(-19, 29);
    ctx.lineTo(-15, 61);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(20, 34);
    ctx.bezierCurveTo(31, 17, 60, 17, 63, 42);
    ctx.bezierCurveTo(48, 40, 36, 49, 25, 63);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = palette.body;
    ctx.beginPath();
    ctx.arc(68, 32, 17, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = palette.dark;
    ctx.beginPath();
    ctx.moveTo(56, 23);
    ctx.lineTo(62, 7);
    ctx.lineTo(70, 24);
    ctx.closePath();
    ctx.moveTo(73, 24);
    ctx.lineTo(85, 9);
    ctx.lineTo(84, 30);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = palette.belly;
    ctx.beginPath();
    ctx.moveTo(78, 42);
    ctx.lineTo(104, 41);
    ctx.lineTo(82, 51);
    ctx.closePath();
    ctx.fill();
    drawEye(74, 30);
    ctx.strokeStyle = palette.dark;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(75, 38);
    ctx.lineTo(91, 36);
    ctx.moveTo(75, 42);
    ctx.lineTo(91, 45);
    ctx.stroke();
    drawLegs(palette.dark, 10);
    return true;
  }

  return true;
}

function drawDragonMotif(motif, palette, t) {
  if (motif === "spikes") {
    ctx.fillStyle = "#ffe08a";
    [
      [22, 27, 29, 9, 36, 27],
      [39, 22, 48, 3, 56, 25],
      [58, 24, 67, 7, 74, 30],
    ].forEach(([x1, y1, x2, y2, x3, y3]) => {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.lineTo(x3, y3);
      ctx.closePath();
      ctx.fill();
    });
    ctx.fillStyle = "#7f1d1d";
    ctx.beginPath();
    ctx.arc(98, 39, 6, 0, Math.PI * 2);
    ctx.fill();
    return;
  }

  if (motif === "ice") {
    ctx.fillStyle = "rgba(223, 249, 255, 0.95)";
    [
      [20, 34, 34, 7, 40, 36],
      [43, 30, 55, 0, 64, 36],
      [66, 31, 81, 11, 82, 39],
    ].forEach(([x1, y1, x2, y2, x3, y3]) => {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.lineTo(x3, y3);
      ctx.closePath();
      ctx.fill();
    });
    ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
    ctx.beginPath();
    ctx.moveTo(34, 50);
    ctx.lineTo(48, 40);
    ctx.lineTo(62, 52);
    ctx.lineTo(48, 60);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "#e6fbff";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(95, 12 + Math.sin(t) * 2);
    ctx.lineTo(103, 18);
    ctx.moveTo(103, 12);
    ctx.lineTo(95, 18);
    ctx.stroke();
    return;
  }

  if (motif === "fire") {
    ctx.fillStyle = "#facc15";
    ctx.beginPath();
    ctx.moveTo(-30, 55);
    ctx.bezierCurveTo(-16, 49, -20, 37, -8, 33);
    ctx.bezierCurveTo(-9, 44, 8, 45, 1, 59);
    ctx.bezierCurveTo(-7, 51, -14, 71, -30, 55);
    ctx.fill();
    ctx.fillStyle = "#ef4444";
    ctx.beginPath();
    ctx.moveTo(-24, 56);
    ctx.bezierCurveTo(-14, 51, -13, 43, -7, 39);
    ctx.bezierCurveTo(-6, 49, 4, 50, -1, 59);
    ctx.bezierCurveTo(-8, 54, -13, 65, -24, 56);
    ctx.fill();
    ctx.fillStyle = "#fde68a";
    [[34, 38, 4], [50, 46, 3], [61, 36, 2.5]].forEach(([x, y, r]) => {
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    });
    return;
  }

  if (motif === "cyber") {
    ctx.strokeStyle = "#a3e635";
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(21, 39);
    ctx.lineTo(41, 39);
    ctx.lineTo(41, 31);
    ctx.lineTo(64, 31);
    ctx.stroke();
    ctx.strokeStyle = "#e879f9";
    ctx.beginPath();
    ctx.moveTo(30, 53);
    ctx.lineTo(51, 53);
    ctx.lineTo(51, 46);
    ctx.lineTo(76, 46);
    ctx.stroke();
    ctx.fillStyle = "#020617";
    ctx.beginPath();
    ctx.roundRect(66, 20, 19, 8, 4);
    ctx.fill();
    ctx.fillStyle = "#a3e635";
    ctx.beginPath();
    ctx.arc(82, 24, 2, 0, Math.PI * 2);
    ctx.fill();
    return;
  }

  if (motif === "royal") {
    ctx.fillStyle = "#facc15";
    ctx.beginPath();
    ctx.moveTo(53, 11);
    ctx.lineTo(58, -5);
    ctx.lineTo(65, 10);
    ctx.lineTo(73, -5);
    ctx.lineTo(80, 12);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#d97706";
    ctx.beginPath();
    ctx.roundRect(53, 11, 28, 6, 2);
    ctx.fill();
    ctx.strokeStyle = "#facc15";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(22, 52);
    ctx.bezierCurveTo(38, 66, 62, 65, 83, 50);
    ctx.stroke();
    return;
  }

  if (motif === "shadow") {
    ctx.fillStyle = "rgba(2, 6, 23, 0.42)";
    ctx.beginPath();
    ctx.moveTo(11, 57);
    ctx.bezierCurveTo(21, 31, 62, 22, 91, 41);
    ctx.bezierCurveTo(82, 73, 36, 73, 11, 57);
    ctx.fill();
    ctx.fillStyle = "#22d3ee";
    [
      [13, 24, 24, 5, 31, 29],
      [35, 18, 47, -2, 55, 28],
    ].forEach(([x1, y1, x2, y2, x3, y3]) => {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.lineTo(x3, y3);
      ctx.closePath();
      ctx.fill();
    });
    ctx.fillStyle = "#22d3ee";
    ctx.beginPath();
    ctx.arc(73, 24, 3.4, 0, Math.PI * 2);
    ctx.fill();
  }
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createClouds() {
  return Array.from({ length: 5 }, (_, index) => ({
    x: randomBetween(80, Math.max(180, view.width - 40)) + index * 110,
    y: randomBetween(30, Math.max(90, Math.floor(view.height * 0.38))),
    size: randomBetween(18, 34),
    speed: randomBetween(0.22, 0.44),
  }));
}

function resizeCanvas() {
  const rect = elements.canvas.getBoundingClientRect();
  view.dpr = Math.min(window.devicePixelRatio || 1, 2);
  view.width = Math.max(320, rect.width);
  view.height = Math.max(260, rect.height);
  elements.canvas.width = Math.floor(view.width * view.dpr);
  elements.canvas.height = Math.floor(view.height * view.dpr);
  ctx.setTransform(view.dpr, 0, 0, view.dpr, 0, 0);
  game.groundY = view.height - 58;
  if (game.dragon.onGround || !game.running) {
    game.dragon.y = game.groundY - game.dragon.height;
  }
  if (!game.clouds.length) {
    game.clouds = createClouds();
  }
  draw();
}

function isTypingTarget(target) {
  return Boolean(
    target &&
      typeof target.matches === "function" &&
      (target.matches("input, textarea, select") || target.isContentEditable)
  );
}

function isJumpKey(event) {
  return event.code === "Space" || event.code === "ArrowUp" || event.code === "KeyW" || event.key.toLowerCase() === "w";
}

function isAdminRevealKey(event) {
  return ["KeyF", "Digit1", "KeyA", "Digit2", "F1"].includes(event.code);
}

function hasAdminRevealCombo() {
  const literalCombo = ["KeyF", "Digit1", "KeyA", "Digit2"].every((code) => heldAdminRevealKeys.has(code));
  const functionKeyCombo = ["F1", "KeyA", "Digit2"].every((code) => heldAdminRevealKeys.has(code));
  return literalCombo || functionKeyCombo;
}

function cancelAdminRevealHold() {
  if (!adminRevealTimeout) return;
  clearTimeout(adminRevealTimeout);
  adminRevealTimeout = 0;
}

function revealAdminPanel() {
  adminRevealTimeout = 0;
  heldAdminRevealKeys.clear();
  adminPanelVisible = true;
  renderAll();
  elements.adminPin.focus();
}

function handleAdminRevealKeydown(event) {
  if (state.admin || adminPanelVisible || !isAdminRevealKey(event)) return false;

  event.preventDefault();
  heldAdminRevealKeys.add(event.code);
  if (hasAdminRevealCombo() && !adminRevealTimeout) {
    adminRevealTimeout = window.setTimeout(revealAdminPanel, ADMIN_REVEAL_HOLD_MS);
  }
  return true;
}

function handleAdminRevealKeyup(event) {
  if (!isAdminRevealKey(event)) return;
  heldAdminRevealKeys.delete(event.code);
  if (!hasAdminRevealCombo()) {
    cancelAdminRevealHold();
  }
}

elements.renameCurrentBtn.addEventListener("click", renameCurrentPlayer);
elements.playerName.addEventListener("keydown", (event) => {
  if (event.key === "Enter") savePlayerName();
});
elements.openShopBtn.addEventListener("click", openShop);
elements.closeShopBtn.addEventListener("click", closeShop);
elements.shopModal.addEventListener("click", (event) => {
  if (event.target === elements.shopModal) closeShop();
});
elements.openTrailShopBtn.addEventListener("click", openTrailShop);
elements.closeTrailShopBtn.addEventListener("click", closeTrailShop);
elements.trailShopModal.addEventListener("click", (event) => {
  if (event.target === elements.trailShopModal) closeTrailShop();
});
elements.openLeaderboardBtn.addEventListener("click", openLeaderboard);
elements.closeLeaderboardBtn.addEventListener("click", closeLeaderboard);
elements.leaderboardModal.addEventListener("click", (event) => {
  if (event.target === elements.leaderboardModal) closeLeaderboard();
});
elements.openDuelBtn.addEventListener("click", openDuel);
elements.closeDuelBtn.addEventListener("click", closeDuel);
elements.startDuelBtn.addEventListener("click", startDuel);
elements.duelCanvas.addEventListener("pointerdown", handleDuelPointer);
elements.duelModal.addEventListener("click", (event) => {
  if (event.target === elements.duelModal) closeDuel();
});
elements.openDailyMissionsBtn.addEventListener("click", openDailyMissions);
elements.closeDailyMissionsBtn.addEventListener("click", closeDailyMissions);
elements.dailyMissionsModal.addEventListener("click", (event) => {
  if (event.target === elements.dailyMissionsModal) closeDailyMissions();
});
elements.openCreatorMessageBtn.addEventListener("click", openCreatorMessage);
elements.closeCreatorMessageBtn.addEventListener("click", closeCreatorMessage);
elements.creatorMessageModal.addEventListener("click", (event) => {
  if (event.target === elements.creatorMessageModal) closeCreatorMessage();
});
elements.sendCreatorMessageBtn.addEventListener("click", sendCreatorMessage);
elements.creatorMessageText.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
    sendCreatorMessage();
  }
});
elements.openSettingsBtn.addEventListener("click", openSettings);
elements.closeSettingsBtn.addEventListener("click", closeSettings);
elements.settingsModal.addEventListener("click", (event) => {
  if (event.target === elements.settingsModal) closeSettings();
});
elements.jumpSoundToggle.addEventListener("change", () => {
  setJumpSoundEnabled(elements.jumpSoundToggle.checked);
});
elements.playBtn.addEventListener("click", jumpOrStart);
elements.pauseBtn.addEventListener("click", togglePause);
elements.canvas.addEventListener("pointerdown", jumpOrStart);
elements.adminLoginBtn.addEventListener("click", handleAdminLogin);
elements.adminPin.addEventListener("keydown", (event) => {
  if (event.key === "Enter") handleAdminLogin();
});
elements.addPointsBtn.addEventListener("click", addAdminPoints);
elements.subtractPointsBtn.addEventListener("click", subtractAdminPoints);
elements.renamePlayerBtn.addEventListener("click", renameAdminPlayer);
elements.mergePlayerBtn.addEventListener("click", renameAdminPlayer);
elements.raiseBestBtn.addEventListener("click", setAdminBest);
elements.subtractBestBtn.addEventListener("click", subtractAdminBest);
elements.applyAdminSkinBtn.addEventListener("click", applyAdminSkin);
elements.removeAdminSkinBtn.addEventListener("click", removeAdminSkin);
elements.adminLogoutBtn.addEventListener("click", logoutAdmin);

window.addEventListener("resize", resizeCanvas);
document.addEventListener("keydown", (event) => {
  if (!elements.duelModal.classList.contains("hidden")) {
    if (event.code === "Escape") {
      event.preventDefault();
      closeDuel();
      return;
    }
    if (event.code === "KeyW") {
      event.preventDefault();
      jumpDuelPlayer(0);
      return;
    }
    if (event.code === "ArrowUp") {
      event.preventDefault();
      jumpDuelPlayer(1);
      return;
    }
    if (event.code === "Enter") {
      event.preventDefault();
      startDuel();
      return;
    }
    return;
  }
  if (!elements.shopModal.classList.contains("hidden")) {
    if (event.code === "Escape") {
      event.preventDefault();
      closeShop();
    }
    return;
  }
  if (!elements.trailShopModal.classList.contains("hidden")) {
    if (event.code === "Escape") {
      event.preventDefault();
      closeTrailShop();
    }
    return;
  }
  if (!elements.leaderboardModal.classList.contains("hidden")) {
    if (event.code === "Escape") {
      event.preventDefault();
      closeLeaderboard();
    }
    return;
  }
  if (!elements.dailyMissionsModal.classList.contains("hidden")) {
    if (event.code === "Escape") {
      event.preventDefault();
      closeDailyMissions();
    }
    return;
  }
  if (!elements.creatorMessageModal.classList.contains("hidden")) {
    if (event.code === "Escape") {
      event.preventDefault();
      closeCreatorMessage();
    }
    return;
  }
  if (!elements.settingsModal.classList.contains("hidden")) {
    if (event.code === "Escape") {
      event.preventDefault();
      closeSettings();
    }
    return;
  }
  if (isTypingTarget(event.target)) return;

  if (handleAdminRevealKeydown(event)) return;

  if (isJumpKey(event)) {
    event.preventDefault();
    jumpOrStart();
  }
  if (event.code === "KeyP") {
    togglePause();
  }
});
document.addEventListener("keyup", handleAdminRevealKeyup);
window.addEventListener("blur", () => {
  heldAdminRevealKeys.clear();
  cancelAdminRevealHold();
});
window.addEventListener("focus", () => refreshDailyMissionsForNewDay(false));
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    refreshDailyMissionsForNewDay(false);
  }
});

applyPlayerMerges();
renderAll();
scheduleDailyMissionRefresh();
resizeCanvas();
resetGame();
resetDuel();
setStatus("מוכן לריצה", true, false, "Ready to run");
