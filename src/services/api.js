import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

export const apiService = {
  // Fetch all products
  getAllProducts: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/products`);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },

  // Fetch all categories for the filter
  getCategories: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/products/categories`);
      return response.data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  },

  // Fetch products by a specific category
  getProductsByCategory: async (category) => {
    try {
      const response = await axios.get(`${BASE_URL}/products/category/${category}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching products for category ${category}:`, error);
      throw error;
    }
  }
};