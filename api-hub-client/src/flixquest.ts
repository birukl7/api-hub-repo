import { HttpClient } from "./httpClient";

export type FlixquestProvider = "showbox" | "vidsrcto";

export const flixquestApi = (client: HttpClient) => ({
  getMovieStreamingLinks(tmdbID: string, provider?: FlixquestProvider) {
    const p = provider ?? "showbox";
    return client.get(`/flixquest/movie/${encodeURIComponent(tmdbID)}/${encodeURIComponent(p)}`);
  },

  getTvEpisodeStreamingLinks(
    tmdbID: string,
    season: string | number,
    episode: string | number,
    provider?: FlixquestProvider,
  ) {
    const p = provider ?? "showbox";
    return client.get(
      `/flixquest/tv/${encodeURIComponent(tmdbID)}/${encodeURIComponent(String(season))}/${encodeURIComponent(String(episode))}/${encodeURIComponent(p)}`,
    );
  },
});
