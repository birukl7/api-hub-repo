import { HttpClient } from "./httpClient";

export const youtubeApi = (client: HttpClient) => ({
  /**
   * Search YouTube videos by title
   */
  search(videoTitle: string) {
    return client.get(`/youtube/search/${encodeURIComponent(videoTitle)}`);
  },
});
