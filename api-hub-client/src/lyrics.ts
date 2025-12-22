import { HttpClient } from "./httpClient";

export const lyricsApi = (client: HttpClient) => ({
  /**
   * Get lyrics for a song by artist and title
   */
  getLyrics(artist: string, title: string) {
    return client.get(`/lyrics/${encodeURIComponent(artist)}/${encodeURIComponent(title)}`);
  },
});

