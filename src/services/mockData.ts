// ============================================================
//  MOCK DATA — All backend replaced with rich demo content
//  Dummy login: demo@kisanai.com / demo123
// ============================================================

// ---- AUTH -------------------------------------------------------
export const DUMMY_USER = {
  _id: "user_001",
  name: "Rajesh Kumar",
  email: "demo@kisanai.com",
  password: "demo123",
  city: "Pune",
  state: "Maharashtra",
  image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh",
  token: "mock_token_demo_kisanai_2026",
};

// ---- PREDICT HISTORY -------------------------------------------
export let mockRecommendations = [
  {
    _id: "rec_001",
    fieldName: "North Field",
    predictedCrop: "rice",
    nitrogen: 90,
    phosphorus: 42,
    potassium: 43,
    temperature: 25.4,
    humidity: 82,
    ph: 6.5,
    rainfall: 210,
    createdAt: "2026-01-15T10:30:00Z",
    status: "Completed",
  },
  {
    _id: "rec_002",
    fieldName: "South Field",
    predictedCrop: "maize",
    nitrogen: 75,
    phosphorus: 35,
    potassium: 40,
    temperature: 22.1,
    humidity: 65,
    ph: 6.8,
    rainfall: 85,
    createdAt: "2026-02-10T09:15:00Z",
    status: "Completed",
  },
  {
    _id: "rec_003",
    fieldName: "East Plot",
    predictedCrop: "cotton",
    nitrogen: 55,
    phosphorus: 50,
    potassium: 48,
    temperature: 28.7,
    humidity: 55,
    ph: 7.0,
    rainfall: 70,
    createdAt: "2026-03-01T14:20:00Z",
    status: "Completed",
  },
  {
    _id: "rec_004",
    fieldName: "West Orchard",
    predictedCrop: "mango",
    nitrogen: 60,
    phosphorus: 55,
    potassium: 70,
    temperature: 30.2,
    humidity: 50,
    ph: 6.2,
    rainfall: 95,
    createdAt: "2025-11-20T08:00:00Z",
    status: "Completed",
  },
  {
    _id: "rec_005",
    fieldName: "Kharif Plot A",
    predictedCrop: "chickpea",
    nitrogen: 45,
    phosphorus: 60,
    potassium: 55,
    temperature: 18.5,
    humidity: 40,
    ph: 7.2,
    rainfall: 50,
    createdAt: "2025-10-05T11:45:00Z",
    status: "Completed",
  },
];

// ---- WEATHER DATA (Pune) ----------------------------------------
export const mockWeatherData = {
  data: {
    location: {
      name: "Pune",
      country: "IN",
      coordinates: { lat: 18.52, lon: 73.85 },
    },
    weather: { main: "Clear", description: "clear sky", icon: "01d" },
    temperature: { current: 32, feelsLike: 35, min: 24, max: 37 },
    conditions: {
      humidity: 45,
      pressure: 1012,
      visibility: 10,
      windSpeed: 3.5,
      windDirection: 270,
      clouds: 5,
    },
    sun: { sunrise: 1741565400, sunset: 1741609200 },
    timestamp: Date.now(),
  },
};

// ---- FORECAST DATA (5 days, noon readings) ----------------------
export const mockForecastData = {
  data: {
    location: {
      name: "Pune",
      country: "IN",
      coordinates: { lat: 18.52, lon: 73.85 },
    },
    list: [
      {
        timestamp: 1741608000,
        datetime: "2026-03-11 12:00:00",
        temperature: { current: 32, feelsLike: 35, min: 24, max: 37 },
        weather: { main: "Clear", description: "clear sky", icon: "01d" },
        conditions: { humidity: 45, pressure: 1012, windSpeed: 3.5, windDirection: 270, clouds: 5 },
        pop: 0.0,
      },
      {
        timestamp: 1741694400,
        datetime: "2026-03-12 12:00:00",
        temperature: { current: 30, feelsLike: 33, min: 22, max: 35 },
        weather: { main: "Clouds", description: "few clouds", icon: "02d" },
        conditions: { humidity: 52, pressure: 1010, windSpeed: 4.2, windDirection: 250, clouds: 20 },
        pop: 0.1,
      },
      {
        timestamp: 1741780800,
        datetime: "2026-03-13 12:00:00",
        temperature: { current: 28, feelsLike: 30, min: 20, max: 33 },
        weather: { main: "Rain", description: "light rain", icon: "10d" },
        conditions: { humidity: 70, pressure: 1008, windSpeed: 5.1, windDirection: 220, clouds: 75 },
        pop: 0.6,
      },
      {
        timestamp: 1741867200,
        datetime: "2026-03-14 12:00:00",
        temperature: { current: 26, feelsLike: 28, min: 19, max: 31 },
        weather: { main: "Rain", description: "moderate rain", icon: "10d" },
        conditions: { humidity: 80, pressure: 1006, windSpeed: 6.0, windDirection: 200, clouds: 90 },
        pop: 0.75,
      },
      {
        timestamp: 1741953600,
        datetime: "2026-03-15 12:00:00",
        temperature: { current: 29, feelsLike: 31, min: 21, max: 34 },
        weather: { main: "Clouds", description: "scattered clouds", icon: "03d" },
        conditions: { humidity: 60, pressure: 1010, windSpeed: 4.0, windDirection: 240, clouds: 40 },
        pop: 0.2,
      },
    ],
  },
};

// ---- AGRICULTURAL ADVISORIES ------------------------------------
export const mockAdvisories = [
  {
    title: "Irrigation Advisory",
    desc: "Given clear skies and low humidity, increase irrigation frequency for Rabi crops. Early morning watering is recommended to reduce evaporation.",
    icon: "💧",
  },
  {
    title: "Pest Alert",
    desc: "Warm dry conditions may increase aphid activity in cotton and legume fields. Inspect crops weekly and apply neem-based solutions if needed.",
    icon: "🐛",
  },
  {
    title: "Fertilizer Timing",
    desc: "Soil temperature is optimal for nitrogen uptake. Apply top-dressing urea to standing wheat and mustard crops this week for best results.",
    icon: "🌱",
  },
  {
    title: "Harvest Window",
    desc: "Rain expected on March 13–14. Complete any pending harvests before then to avoid crop damage and quality loss.",
    icon: "🌾",
  },
];

// ---- HEALTH SUMMARY ---------------------------------------------
export const mockHealthSummary =
  "Soil health is in good condition across your fields. Nitrogen levels in North Field are optimal for the current rice crop. Phosphorus could be slightly increased in East Plot for better cotton boll development. Overall pH levels are within the ideal range of 6.2–7.2. Regular irrigation and mulching recommended during dry spells.";

// ---- AI REPORT TEXT ---------------------------------------------
export const mockReportText = `
DETAILED SOIL ANALYSIS & CROP RECOMMENDATION REPORT
Generated by KisanAI — Demo Mode

1. SOIL NUTRIENT PROFILE
   Nitrogen (N): Adequate for current crop cycle
   Phosphorus (P): Within optimal range; monitor for depletion
   Potassium (K): Good levels supporting root and grain development

2. CLIMATE CONDITIONS
   Temperature and humidity readings align with the recommended growth range.
   Rainfall is sufficient but supplemental irrigation is advised during dry spells.

3. RECOMMENDATION RATIONALE
   Based on the submitted soil parameters, the AI model has identified the
   predicted crop as the most suitable choice for maximum yield potential,
   disease resistance, and market demand in your region.

4. FARMING BEST PRACTICES
   - Maintain soil pH between 6.0–7.0 with lime or gypsum amendments
   - Incorporate organic matter (farmyard manure) before sowing
   - Use certified seed varieties from state agriculture departments
   - Follow IPM (Integrated Pest Management) for sustainable production

5. EXPECTED YIELD
   Under normal weather conditions, expected yield is 15–20% above the
   regional average based on current soil health scores.

6. NEXT STEPS
   • Conduct a follow-up soil test after harvest
   • Consider cover cropping to restore nitrogen
   • Contact your local Krishi Vigyan Kendra for free soil testing services
`;

// ---- FINANCE / KHATA BOOK ----------------------------------------
export let mockTransactions = [
  {
    _id: "txn_001",
    type: "INCOME" as const,
    category: "Crop Sales",
    amount: 85000,
    date: "2026-03-05T00:00:00Z",
    description: "Wheat sold at Pune mandi",
    paymentMethod: "BANK_TRANSFER",
    tags: ["wheat", "mandi"],
  },
  {
    _id: "txn_002",
    type: "INCOME" as const,
    category: "Crop Sales",
    amount: 42000,
    date: "2026-02-20T00:00:00Z",
    description: "Cotton bale sale",
    paymentMethod: "CASH",
    tags: ["cotton"],
  },
  {
    _id: "txn_003",
    type: "INCOME" as const,
    category: "Livestock Sales",
    amount: 28000,
    date: "2026-02-10T00:00:00Z",
    description: "Sale of 2 bullocks",
    paymentMethod: "CASH",
    tags: ["cattle"],
  },
  {
    _id: "txn_004",
    type: "INCOME" as const,
    category: "Government Subsidy",
    amount: 30000,
    date: "2026-01-25T00:00:00Z",
    description: "PM Kisan Nidhi installment",
    paymentMethod: "BANK_TRANSFER",
    tags: ["subsidy"],
  },
  {
    _id: "txn_005",
    type: "INCOME" as const,
    category: "Dairy Products",
    amount: 15000,
    date: "2026-01-15T00:00:00Z",
    description: "Monthly milk supply to co-op",
    paymentMethod: "BANK_TRANSFER",
    tags: ["dairy", "milk"],
  },
  {
    _id: "txn_006",
    type: "INCOME" as const,
    category: "Crop Sales",
    amount: 38000,
    date: "2025-12-18T00:00:00Z",
    description: "Soybean sale",
    paymentMethod: "CHEQUE",
    tags: ["soybean"],
  },
  {
    _id: "txn_007",
    type: "INCOME" as const,
    category: "Livestock Sales",
    amount: 27000,
    date: "2025-11-30T00:00:00Z",
    description: "Poultry batch sale",
    paymentMethod: "CASH",
    tags: ["poultry"],
  },
  {
    _id: "txn_008",
    type: "INCOME" as const,
    category: "Crop Sales",
    amount: 20000,
    date: "2025-10-22T00:00:00Z",
    description: "Onion harvest sale",
    paymentMethod: "CASH",
    tags: ["onion"],
  },
  {
    _id: "txn_009",
    type: "EXPENSE" as const,
    category: "Labor",
    amount: 18000,
    date: "2026-03-02T00:00:00Z",
    description: "Harvesting labor (10 workers)",
    paymentMethod: "CASH",
    tags: ["harvest", "labor"],
  },
  {
    _id: "txn_010",
    type: "EXPENSE" as const,
    category: "Fertilizers",
    amount: 22000,
    date: "2026-02-15T00:00:00Z",
    description: "DAP and Urea for Rabi season",
    paymentMethod: "BANK_TRANSFER",
    tags: ["fertilizer", "rabi"],
  },
  {
    _id: "txn_011",
    type: "EXPENSE" as const,
    category: "Seeds",
    amount: 12000,
    date: "2026-02-01T00:00:00Z",
    description: "HYV wheat seed purchase",
    paymentMethod: "CASH",
    tags: ["seeds", "wheat"],
  },
  {
    _id: "txn_012",
    type: "EXPENSE" as const,
    category: "Equipment",
    amount: 15000,
    date: "2026-01-20T00:00:00Z",
    description: "Tractor service and repair",
    paymentMethod: "CASH",
    tags: ["tractor", "repair"],
  },
  {
    _id: "txn_013",
    type: "EXPENSE" as const,
    category: "Irrigation",
    amount: 8500,
    date: "2026-01-10T00:00:00Z",
    description: "Drip irrigation maintenance",
    paymentMethod: "CASH",
    tags: ["irrigation"],
  },
  {
    _id: "txn_014",
    type: "EXPENSE" as const,
    category: "Pesticides",
    amount: 9000,
    date: "2025-12-25T00:00:00Z",
    description: "Insecticide and fungicide spray",
    paymentMethod: "CASH",
    tags: ["pesticide"],
  },
  {
    _id: "txn_015",
    type: "EXPENSE" as const,
    category: "Labor",
    amount: 14000,
    date: "2025-12-10T00:00:00Z",
    description: "Sowing season labor",
    paymentMethod: "CASH",
    tags: ["sowing", "labor"],
  },
  {
    _id: "txn_016",
    type: "EXPENSE" as const,
    category: "Seeds",
    amount: 7000,
    date: "2025-11-18T00:00:00Z",
    description: "Cotton Bt seed hybrid",
    paymentMethod: "BANK_TRANSFER",
    tags: ["seeds", "cotton"],
  },
  {
    _id: "txn_017",
    type: "EXPENSE" as const,
    category: "Fertilizers",
    amount: 13000,
    date: "2025-11-08T00:00:00Z",
    description: "MOP potash fertilizer",
    paymentMethod: "CASH",
    tags: ["fertilizer", "kharif"],
  },
  {
    _id: "txn_018",
    type: "EXPENSE" as const,
    category: "Equipment",
    amount: 10000,
    date: "2025-10-30T00:00:00Z",
    description: "Sprayer pump purchase",
    paymentMethod: "CHEQUE",
    tags: ["equipment"],
  },
  {
    _id: "txn_019",
    type: "EXPENSE" as const,
    category: "Irrigation",
    amount: 7000,
    date: "2025-10-15T00:00:00Z",
    description: "Borewell electricity bill",
    paymentMethod: "ONLINE",
    tags: ["irrigation", "electricity"],
  },
  {
    _id: "txn_020",
    type: "EXPENSE" as const,
    category: "Seeds",
    amount: 3000,
    date: "2025-10-05T00:00:00Z",
    description: "Vegetable seeds for kitchen garden",
    paymentMethod: "CASH",
    tags: ["seeds"],
  },
];

// Computed summary
export function computeSummary(transactions: typeof mockTransactions) {
  const totalIncome = transactions
    .filter((t) => t.type === "INCOME")
    .reduce((sum, t) => sum + t.amount, 0);
  const totalExpense = transactions
    .filter((t) => t.type === "EXPENSE")
    .reduce((sum, t) => sum + t.amount, 0);
  const incomeCount = transactions.filter((t) => t.type === "INCOME").length;
  const expenseCount = transactions.filter((t) => t.type === "EXPENSE").length;
  const profit = totalIncome - totalExpense;
  const profitMargin = totalIncome > 0 ? Math.round((profit / totalIncome) * 100) : 0;
  return { totalIncome, totalExpense, profit, incomeCount, expenseCount, profitMargin };
}

export function computeChartData(transactions: typeof mockTransactions) {
  const months = ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];
  const monthNums = [9, 10, 11, 0, 1, 2]; // 0-indexed
  return months.map((month, i) => {
    const m = monthNums[i];
    const income = transactions
      .filter((t) => {
        const d = new Date(t.date);
        return t.type === "INCOME" && d.getMonth() === m;
      })
      .reduce((sum, t) => sum + t.amount, 0);
    const expense = transactions
      .filter((t) => {
        const d = new Date(t.date);
        return t.type === "EXPENSE" && d.getMonth() === m;
      })
      .reduce((sum, t) => sum + t.amount, 0);
    return { month, income, expense };
  });
}

export function computeCategoryBreakdown(transactions: typeof mockTransactions) {
  const build = (type: "INCOME" | "EXPENSE") => {
    const filtered = transactions.filter((t) => t.type === type);
    const total = filtered.reduce((s, t) => s + t.amount, 0);
    const map: Record<string, { total: number; count: number }> = {};
    filtered.forEach((t) => {
      if (!map[t.category]) map[t.category] = { total: 0, count: 0 };
      map[t.category].total += t.amount;
      map[t.category].count += 1;
    });
    return Object.entries(map).map(([category, v]) => ({
      category,
      total: v.total,
      count: v.count,
      percentage: total > 0 ? ((v.total / total) * 100).toFixed(1) : "0",
    }));
  };
  return { income: build("INCOME"), expense: build("EXPENSE") };
}

// ---- MARKET RATES (Maharashtra sample) --------------------------
export const mockMarketRates = [
  { state: "Maharashtra", district: "Pune", market: "Pune APMC", commodity: "Rice", variety: "Common", arrival_date: "11/03/2026", min_price: "1800", max_price: "2200", modal_price: "2000" },
  { state: "Maharashtra", district: "Pune", market: "Pune APMC", commodity: "Wheat", variety: "Lokwan", arrival_date: "11/03/2026", min_price: "2100", max_price: "2600", modal_price: "2350" },
  { state: "Maharashtra", district: "Nashik", market: "Nashik APMC", commodity: "Onion", variety: "Nasik Red", arrival_date: "11/03/2026", min_price: "800", max_price: "1400", modal_price: "1100" },
  { state: "Maharashtra", district: "Nashik", market: "Nashik APMC", commodity: "Tomato", variety: "Local", arrival_date: "11/03/2026", min_price: "600", max_price: "1200", modal_price: "900" },
  { state: "Maharashtra", district: "Kolhapur", market: "Kolhapur APMC", commodity: "Sugarcane", variety: "Co-86032", arrival_date: "11/03/2026", min_price: "290", max_price: "340", modal_price: "310" },
  { state: "Maharashtra", district: "Aurangabad", market: "Aurangabad APMC", commodity: "Cotton", variety: "H-4", arrival_date: "11/03/2026", min_price: "6200", max_price: "7000", modal_price: "6600" },
  { state: "Maharashtra", district: "Nagpur", market: "Nagpur APMC", commodity: "Orange", variety: "Nagpur Mandarin", arrival_date: "11/03/2026", min_price: "2000", max_price: "3500", modal_price: "2750" },
  { state: "Maharashtra", district: "Amravati", market: "Amravati APMC", commodity: "Soybean", variety: "JS-335", arrival_date: "11/03/2026", min_price: "4200", max_price: "4600", modal_price: "4400" },
  { state: "Maharashtra", district: "Latur", market: "Latur APMC", commodity: "Tur Dal", variety: "Local", arrival_date: "11/03/2026", min_price: "9000", max_price: "10500", modal_price: "9800" },
  { state: "Maharashtra", district: "Solapur", market: "Solapur APMC", commodity: "Jowar", variety: "Hybrid", arrival_date: "11/03/2026", min_price: "2200", max_price: "2700", modal_price: "2450" },
  { state: "Maharashtra", district: "Pune", market: "Pune APMC", commodity: "Potato", variety: "Jyoti", arrival_date: "11/03/2026", min_price: "1100", max_price: "1800", modal_price: "1450" },
  { state: "Maharashtra", district: "Satara", market: "Satara APMC", commodity: "Maize", variety: "Hybrid", arrival_date: "11/03/2026", min_price: "1800", max_price: "2100", modal_price: "1950" },
  { state: "Maharashtra", district: "Nanded", market: "Nanded APMC", commodity: "Groundnut", variety: "Bold", arrival_date: "11/03/2026", min_price: "5500", max_price: "6200", modal_price: "5850" },
  { state: "Maharashtra", district: "Jalgaon", market: "Jalgaon APMC", commodity: "Banana", variety: "Grand Naine", arrival_date: "11/03/2026", min_price: "1200", max_price: "1800", modal_price: "1500" },
  { state: "Maharashtra", district: "Dhule", market: "Dhule APMC", commodity: "Bajra", variety: "Hybrid", arrival_date: "11/03/2026", min_price: "2000", max_price: "2400", modal_price: "2200" },
  // Punjab
  { state: "Punjab", district: "Amritsar", market: "Amritsar Grain Market", commodity: "Wheat", variety: "HD-2967", arrival_date: "11/03/2026", min_price: "2200", max_price: "2700", modal_price: "2450" },
  { state: "Punjab", district: "Ludhiana", market: "Ludhiana Mandi", commodity: "Rice", variety: "Basmati", arrival_date: "11/03/2026", min_price: "4500", max_price: "6000", modal_price: "5200" },
  { state: "Punjab", district: "Patiala", market: "Patiala APMC", commodity: "Maize", variety: "Hybrid", arrival_date: "11/03/2026", min_price: "1800", max_price: "2200", modal_price: "2000" },
  // Uttar Pradesh
  { state: "Uttar Pradesh", district: "Agra", market: "Agra Mandi", commodity: "Potato", variety: "Kufri Jyoti", arrival_date: "11/03/2026", min_price: "900", max_price: "1400", modal_price: "1100" },
  { state: "Uttar Pradesh", district: "Lucknow", market: "Lucknow APMC", commodity: "Wheat", variety: "GW-496", arrival_date: "11/03/2026", min_price: "2100", max_price: "2500", modal_price: "2300" },
  { state: "Uttar Pradesh", district: "Varanasi", market: "Varanasi Mandi", commodity: "Rice", variety: "Common", arrival_date: "11/03/2026", min_price: "1900", max_price: "2400", modal_price: "2100" },
  // Gujarat
  { state: "Gujarat", district: "Ahmedabad", market: "Ahmedabad APMC", commodity: "Cotton", variety: "Shankar-6", arrival_date: "11/03/2026", min_price: "6500", max_price: "7200", modal_price: "6850" },
  { state: "Gujarat", district: "Surat", market: "Surat APMC", commodity: "Groundnut", variety: "Bold", arrival_date: "11/03/2026", min_price: "5600", max_price: "6300", modal_price: "5950" },
  // West Bengal
  { state: "West Bengal", district: "Howrah", market: "Howrah Mandi", commodity: "Rice", variety: "Fine", arrival_date: "11/03/2026", min_price: "2200", max_price: "2800", modal_price: "2500" },
  { state: "West Bengal", district: "Bardhaman", market: "Bardhaman APMC", commodity: "Potato", variety: "Local", arrival_date: "11/03/2026", min_price: "800", max_price: "1300", modal_price: "1050" },
];

// ---- CROP PREDICTIONS (mock ML results) -------------------------
export const mockCropPredictions: Record<string, string> = {
  default: "rice",
  high_n: "maize",
  high_p: "chickpea",
  high_k: "banana",
  dry: "cotton",
  wet: "rice",
  cold: "wheat",
  hot: "mango",
};

export function predictCrop(data: { N: number; P: number; K: number; temperature: number; humidity: number; ph: number; rainfall: number }): string {
  if (data.rainfall > 150 && data.humidity > 70) return "rice";
  if (data.temperature < 20 && data.humidity < 60) return "wheat";
  if (data.N > 80) return "maize";
  if (data.temperature > 30 && data.humidity < 50) return "cotton";
  if (data.K > 65 && data.temperature > 28) return "banana";
  if (data.ph < 6.5) return "coffee";
  if (data.P > 55) return "chickpea";
  return "maize";
}

// ---- FERTILIZER PREDICTIONS ------------------------------------
export function predictFertilizer(data: {
  "Temparature": number;
  "Humidity": number;
  "Moisture": number;
  "Soil Type": string;
  "Crop Type": string;
  "Nitrogen": number;
  "Potassium": number;
  "Phosphorous": number;
}): string {
  const n = data.Nitrogen;
  const p = data.Phosphorous;
  const k = data.Potassium;
  if (n < 40) return "Urea";
  if (p < 30) return "DAP";
  if (k < 30) return "MOP";
  if (n > 80 && p > 60 && k > 60) return "17-17-17";
  if (p > 50) return "10-26-26";
  return "28-28";
}
