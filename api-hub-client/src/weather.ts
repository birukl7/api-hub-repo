import { HttpClient } from "./httpClient";

export const weatherApi = (client: HttpClient) => ({
  /**
   * Get weather forecast by city/location name
   */
  forecastByLocation(location: string, days: number) {
    return client.get(
      `/weather/forecast/${encodeURIComponent(location)}/${days}`
    );
  },

  /**
   * Get weather forecast by latitude & longitude
   */
  forecastByCoords(latitude: number, longitude: number) {
    return client.get(
      `/weather/forecast/${latitude}/${longitude}`
    );
  },

  /**
   * Search for a location
   */
  search(location: string) {
    return client.get(
      `/weather/search/${encodeURIComponent(location)}`
    );
  },
});
