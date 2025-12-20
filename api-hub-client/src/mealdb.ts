import { HttpClient } from "./httpClient";

export const mealdbApi = (client: HttpClient) => ({
  /**
   * Search for meals by query
   */
  search(searchQuery: string) {
    return client.get(`/mealdb/search/${encodeURIComponent(searchQuery)}`);
  },

  /**
   * Get a specific meal by ID
   */
  getMeal(mealID: string) {
    return client.get(`/mealdb/meal/${encodeURIComponent(mealID)}`);
  },

  /**
   * Get all categories
   */
  getCategories() {
    return client.get("/mealdb/categories");
  },

  /**
   * Get meals by category
   */
  getByCategory(category: string) {
    return client.get(`/mealdb/category/${encodeURIComponent(category)}`);
  },
});

