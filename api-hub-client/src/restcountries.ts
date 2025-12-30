import { HttpClient } from "./httpClient";

export const restCountriesApi = (client: HttpClient) => ({
  /**
   * Fetch all countries
   */
  getAll() {
    return client.get("/restcountries/all");
  },

  /**
   * Fetch country by name
   */
  getByName(name: string) {
    return client.get(`/restcountries/${encodeURIComponent(name)}`);
  },

  /**
   * Fetch country by ISO code
   */
  getByCode(code: string) {
    return client.get(`/restcountries/code/${encodeURIComponent(code)}`);
  },

  /**
   * Fetch multiple countries by codes (comma-separated)
   */
  getByCodes(codes: string) {
    return client.get(`/restcountries/codes/${encodeURIComponent(codes)}`);
  },

  /**
   * Fetch countries by currency
   */
  getByCurrency(currency: string) {
    return client.get(`/restcountries/currency/${encodeURIComponent(currency)}`);
  },

  /**
   * Fetch countries by language
   */
  getByLanguage(language: string) {
    return client.get(`/restcountries/language/${encodeURIComponent(language)}`);
  },

  /**
   * Fetch countries by capital city
   */
  getByCapital(capital: string) {
    return client.get(`/restcountries/capital/${encodeURIComponent(capital)}`);
  },

  /**
   * Fetch countries by region
   */
  getByRegion(region: string) {
    return client.get(`/restcountries/region/${encodeURIComponent(region)}`);
  },

  /**
   * Fetch countries by subregion
   */
  getBySubregion(subregion: string) {
    return client.get(`/restcountries/subregion/${encodeURIComponent(subregion)}`);
  },
});
