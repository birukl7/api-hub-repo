import { HttpClient } from "./httpClient";
import { githubApi } from "./github";
import { cryptoApi } from "./crypto";
import { youtubeApi } from "./youtube";
import { lyricsApi } from "./lyrics";
import { mealdbApi } from "./mealdb";
import { moviedbApi } from "./moviedb";
import { newsApi } from "./news";
import { newyorktimesApi } from "./newyorktimes";

export class ApiHubClient {
  github;
  crypto;
  youtube;
  lyrics;
  mealdb;
  moviedb;
  news;
  newyorktimes;

  constructor({ baseUrl }: { baseUrl: string }) {
    const client = new HttpClient(baseUrl);
    this.github = githubApi(client);
    this.crypto = cryptoApi(client);
    this.youtube = youtubeApi(client);
    this.lyrics = lyricsApi(client);
    this.mealdb = mealdbApi(client);
    this.moviedb = moviedbApi(client);
    this.news = newsApi(client);
    this.newyorktimes = newyorktimesApi(client);
  }
}
