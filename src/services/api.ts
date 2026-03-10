// ============================================================
//  MOCK API — All backend replaced. No real HTTP calls.
//  Demo credentials: demo@kisanai.com / demo123
// ============================================================
import {
  DUMMY_USER,
  mockRecommendations,
  mockWeatherData,
  mockForecastData,
  mockAdvisories,
  mockHealthSummary,
  mockReportText,
  mockTransactions,
  computeSummary,
  computeChartData,
  computeCategoryBreakdown,
} from "./mockData";

const delay = (ms = 400) => new Promise((resolve) => setTimeout(resolve, ms));

// In-memory mutable state (survives component re-renders within session)
let _transactions = [...mockTransactions];
let _recommendations = [...mockRecommendations];
let _idCounter = 1000;

const nextId = () => `mock_${++_idCounter}`;

// ---- Route handlers -----------------------------------------------

async function handleGet(url: string, config?: any): Promise<{ data: any }> {
  await delay();

  // Predict history
  if (url.startsWith("/predict/history")) {
    return { data: [..._recommendations].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()) };
  }

  // External weather
  if (url.startsWith("/external/weather")) {
    return { data: mockWeatherData };
  }

  // External forecast
  if (url.startsWith("/external/forecast")) {
    return { data: mockForecastData };
  }

  // Finance summary
  if (url.startsWith("/finance/summary")) {
    const summary = computeSummary(_transactions);
    const chartData = computeChartData(_transactions);
    const categoryBreakdown = computeCategoryBreakdown(_transactions);
    return { data: { summary, chartData, categoryBreakdown } };
  }

  // Finance transactions
  if (url.startsWith("/finance/transactions")) {
    return {
      data: {
        transactions: [..._transactions].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        ),
      },
    };
  }

  throw { response: { data: { message: `Mock: no GET handler for ${url}` } } };
}

async function handlePost(url: string, data?: any): Promise<{ data: any }> {
  await delay();

  // Auth login
  if (url.startsWith("/auth/login")) {
    const { email, password } = data || {};
    if (email === DUMMY_USER.email && password === DUMMY_USER.password) {
      const userPayload = { ...DUMMY_USER };
      delete (userPayload as any).password;
      return { data: userPayload };
    }
    throw { response: { data: { message: "Invalid credentials. Use demo@kisanai.com / demo123" } } };
  }

  // Auth register
  if (url.startsWith("/auth/register")) {
    const newUser = {
      _id: nextId(),
      name: data?.name || "New Farmer",
      email: data?.email || "new@example.com",
      city: "",
      state: "",
      image: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(data?.name || "user")}`,
      token: "mock_token_registered_" + nextId(),
    };
    return { data: newUser };
  }

  // Predict save
  if (url.startsWith("/predict/save")) {
    const rec = {
      _id: nextId(),
      fieldName: data?.fieldName || "My Field",
      predictedCrop: data?.predictedCrop || "rice",
      nitrogen: data?.nitrogen ?? 80,
      phosphorus: data?.phosphorus ?? 40,
      potassium: data?.potassium ?? 40,
      temperature: data?.temperature ?? 25,
      humidity: data?.humidity ?? 65,
      ph: data?.ph ?? 6.5,
      rainfall: data?.rainfall ?? 100,
      createdAt: new Date().toISOString(),
      status: "Completed",
    };
    _recommendations.unshift(rec);
    return { data: rec };
  }

  // Predict health summary
  if (url.startsWith("/predict/health-summary")) {
    return { data: { summary: mockHealthSummary } };
  }

  // Predict report (PDF generation)
  if (url.startsWith("/predict/report")) {
    return { data: { report: mockReportText } };
  }

  // Agricultural advisory
  if (url.startsWith("/predict/agricultural-advisory")) {
    return { data: { advisories: mockAdvisories } };
  }

  // Finance create transaction
  if (url.startsWith("/finance/transactions")) {
    const txn = {
      _id: nextId(),
      type: data?.type || "EXPENSE",
      category: data?.category || "Other",
      amount: Number(data?.amount) || 0,
      date: data?.date || new Date().toISOString().split("T")[0],
      description: data?.description || "",
      paymentMethod: data?.paymentMethod || "CASH",
      tags: data?.tags || [],
    };
    _transactions.unshift(txn as any);
    return { data: txn };
  }

  throw { response: { data: { message: `Mock: no POST handler for ${url}` } } };
}

async function handlePut(url: string, data?: any): Promise<{ data: any }> {
  await delay();

  // Auth profile update
  if (url.startsWith("/auth/profile")) {
    const stored = localStorage.getItem("user");
    const existing = stored ? JSON.parse(stored) : { ...DUMMY_USER };
    // data may be FormData or plain object
    let updatedFields: any = {};
    if (data instanceof FormData) {
      data.forEach((val, key) => { if (key !== "image") updatedFields[key] = val; });
      const imageUrl = data.get("imageUrl") as string;
      if (imageUrl) updatedFields.image = imageUrl;
    } else if (data && typeof data === "object") {
      updatedFields = { ...data };
    }
    const updated = { ...existing, ...updatedFields, token: existing.token };
    localStorage.setItem("user", JSON.stringify(updated));
    return { data: updated };
  }

  // Finance update transaction
  const financeUpdateMatch = url.match(/^\/finance\/transactions\/(.+)$/);
  if (financeUpdateMatch) {
    const id = financeUpdateMatch[1];
    const idx = _transactions.findIndex((t) => t._id === id);
    if (idx !== -1) {
      _transactions[idx] = { ..._transactions[idx], ...data } as any;
      return { data: _transactions[idx] };
    }
    throw { response: { data: { message: "Transaction not found" } } };
  }

  throw { response: { data: { message: `Mock: no PUT handler for ${url}` } } };
}

async function handleDelete(url: string): Promise<{ data: any }> {
  await delay();

  const financeDeleteMatch = url.match(/^\/finance\/transactions\/(.+)$/);
  if (financeDeleteMatch) {
    const id = financeDeleteMatch[1];
    _transactions = _transactions.filter((t) => t._id !== id);
    return { data: { message: "Deleted" } };
  }

  throw { response: { data: { message: `Mock: no DELETE handler for ${url}` } } };
}

// ---- Mock API object (axios-compatible interface) ----------------
const api = {
  get: (url: string, config?: any) => handleGet(url, config),
  post: (url: string, data?: any, config?: any) => handlePost(url, data),
  put: (url: string, data?: any, config?: any) => handlePut(url, data),
  delete: (url: string, config?: any) => handleDelete(url),
  // Stub interceptors so any code referencing them doesn't crash
  interceptors: {
    request: { use: () => {} },
    response: { use: () => {} },
  },
};

export default api;
