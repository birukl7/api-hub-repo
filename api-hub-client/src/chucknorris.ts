import { HttpClient } from "./httpClient";

export const chucknorrisApi = (client: HttpClient) => ({
  getRandom() {
    return client.get(`/chucknorris/jokes/random`);
  },

  getCategories() {
    return client.get(`/chucknorris/jokes/categories`);
  },

  getRandomByCategory(category: string) {
    return client.get(`/chucknorris/jokes/random/${encodeURIComponent(category)}`);
  },

  search(query: string) {
    return client.get(`/chucknorris/jokes/search/${encodeURIComponent(query)}`);
  },
});
