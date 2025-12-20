import { HttpClient } from "./httpClient";

export const cryptoApi = (client: HttpClient) => ({
  /**
   * Get current crypto market prices (USD)
   */
  getMarket() {
    return client.get("/crypto/market");
  },
});
