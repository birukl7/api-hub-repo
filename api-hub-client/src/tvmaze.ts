import { HttpClient } from "./httpClient";

export const tvMazeApi = (client: HttpClient) => ({
  /**
   * Search TV shows by name
   */
  searchShows(query: string) {
    return client.get(`/tvmaze/shows/search/${encodeURIComponent(query)}`);
  },

  /**
   * Get show details by show ID
   */
  getShow(showId: number) {
    return client.get(`/tvmaze/shows/${showId}`);
  },

  /**
   * Get seasons of a show
   */
  getSeasons(showId: number) {
    return client.get(`/tvmaze/shows/${showId}/seasons`);
  },

  /**
   * Get episodes of a season
   */
  getSeasonEpisodes(seasonId: number) {
    return client.get(`/tvmaze/seasons/${seasonId}/episodes`);
  },

  /**
   * Get episode details by episode ID
   */
  getEpisode(episodeId: number) {
    return client.get(`/tvmaze/episodes/${episodeId}`);
  },
});
