import { HttpClient } from "./httpClient";

export const newsApi = (client: HttpClient) => ({
  /**
   * Search for news articles by term
   */
  search(term: string) {
    return client.get(`/news/search/${encodeURIComponent(term)}`);
  },

  /**
   * Get headlines by category and country
   */
  getHeadlines(category?: string, country?: string) {
    let path = "/news/headlines";
    if (category) path += `/${encodeURIComponent(category)}`;
    if (country) path += `/${encodeURIComponent(country)}`;
    return client.get(path);
  },
});

