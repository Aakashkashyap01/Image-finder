import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "20259577-c93c75abc878a636931b34317";

// Create axios instance (better practice)
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export const getImages = async (text, count) => {
  try {
    const response = await api.get("/", {
      params: {
        key: API_KEY,
        q: text,
        image_type: "photo",
        per_page: count,
        safesearch: true,
      },
    });

    return response; // always return response
  } catch (error) {
    console.error("Pixabay API Error:", error.message);

    // ✅ Return safe fallback (prevents App crash)
    return {
      data: {
        hits: [],
      },
    };
  }
};