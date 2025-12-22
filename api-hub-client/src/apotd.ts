import { HttpClient } from "./httpClient";

export const apotdApi = (client: HttpClient) => ({
  getToday() {
    return client.get(`/apotd/today`);
  },

  getRandom(amount: number) {
    return client.get(`/apotd/random/${amount}`);
  },

  getWeekly() {
    return client.get(`/apotd/weekly`);
  },

  getMonthly() {
    return client.get(`/apotd/monthly`);
  },

  getSpecific(year: number | string, month: number | string, day: number | string) {
    return client.get(`/apotd/specific/${year}/${month}/${day}`);
  },
});
