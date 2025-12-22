import { HttpClient } from "./httpClient";

export const moviedbApi = (client: HttpClient) => ({
  /**
   * Discover movies
   */
  discoverMovies(page?: number) {
    const path = page ? `/moviedb/movies/discover/${page}` : "/moviedb/movies/discover";
    return client.get(path);
  },

  /**
   * Search movies by title
   */
  searchMovies(title: string, year?: string, page?: number) {
    let path = `/moviedb/movies/search/${encodeURIComponent(title)}`;
    if (year) path += `/${encodeURIComponent(year)}`;
    if (page) path += `/${page}`;
    return client.get(path);
  },

  /**
   * Get movie details by ID
   */
  getMovieDetails(movieId: string) {
    return client.get(`/moviedb/movies/details/${encodeURIComponent(movieId)}`);
  },

  /**
   * Get trending movies
   */
  getTrendingMovies(page?: number) {
    const path = page ? `/moviedb/movies/trending/${page}` : "/moviedb/movies/trending";
    return client.get(path);
  },

  /**
   * Get top-rated movies
   */
  getTopRatedMovies(page?: number) {
    const path = page ? `/moviedb/movies/top-rated/${page}` : "/moviedb/movies/top-rated";
    return client.get(path);
  },

  /**
   * Discover TV shows
   */
  discoverTV(page?: number) {
    const path = page ? `/moviedb/tv/discover/${page}` : "/moviedb/tv/discover";
    return client.get(path);
  },

  /**
   * Search TV shows by title
   */
  searchTV(title: string, year?: string, page?: number) {
    let path = `/moviedb/tv/search/${encodeURIComponent(title)}`;
    if (year) path += `/${encodeURIComponent(year)}`;
    if (page) path += `/${page}`;
    return client.get(path);
  },

  /**
   * Get TV show details by ID
   */
  getTVDetails(id: string) {
    return client.get(`/moviedb/tv/details/${encodeURIComponent(id)}`);
  },

  /**
   * Get TV season details
   */
  getTVSeasonDetails(id: string, seasonNumber: string) {
    return client.get(`/moviedb/tv/details/${encodeURIComponent(id)}/season/${encodeURIComponent(seasonNumber)}`);
  },

  /**
   * Get TV episode details
   */
  getTVEpisodeDetails(id: string, seasonNumber: string, episodeNumber?: string) {
    let path = `/moviedb/tv/details/${encodeURIComponent(id)}/season/${encodeURIComponent(seasonNumber)}/episode`;
    if (episodeNumber) path += `/${encodeURIComponent(episodeNumber)}`;
    return client.get(path);
  },

  /**
   * Get trending TV shows
   */
  getTrendingTV(page?: number) {
    const path = page ? `/moviedb/tv/trending/${page}` : "/moviedb/tv/trending";
    return client.get(path);
  },

  /**
   * Get top-rated TV shows
   */
  getTopRatedTV(page?: number) {
    const path = page ? `/moviedb/tv/top-rated/${page}` : "/moviedb/tv/top-rated";
    return client.get(path);
  },
});

