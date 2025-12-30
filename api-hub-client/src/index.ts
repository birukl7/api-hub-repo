import { HttpClient } from "./httpClient";
import { githubApi } from "./github";
import { cryptoApi } from "./crypto";
import { youtubeApi } from "./youtube";
import { apicagentApi } from "./apicagent";
import { apotdApi } from "./apotd";
import { bibleApi } from "./bible";
import { chucknorrisApi } from "./chucknorris";
import { randomuserApi } from "./randomuser";
import { lyricsApi } from "./lyrics";
import { mealdbApi } from "./mealdb";
import { moviedbApi } from "./moviedb";
import { newsApi } from "./news";
import { newyorktimesApi } from "./newyorktimes";
import { flixquestApi } from "./flixquest";
import { googlebooksApi } from "./googlebooks";
import { hackernewsApi } from "./hackernews";
import { jsonplaceholderApi } from "./jsonplaceholder";
import {restCountriesApi} from "./restcountries";
import {tvMazeApi} from "./tvmaze";
import {weatherApi} from "./weather";
import {redditApi} from "./reddit";


export class ApiHubClient {
  github;
  crypto;
  flixquest;
  googlebooks;
  hackernews;
  jsonplaceholder;
  youtube;
  apicagent;
  apotd;
  bible;
  chucknorris;
  randomuser;
  lyrics;
  mealdb;
  moviedb;
  news;
  newyorktimes;

  restcountries;
  tvmaze;
  weather;
  reddit;
  constructor({ baseUrl }: { baseUrl: string }) {
    const client = new HttpClient(baseUrl);
    this.github = githubApi(client);
    this.crypto = cryptoApi(client);
    this.flixquest = flixquestApi(client);
    this.googlebooks = googlebooksApi(client);
    this.hackernews = hackernewsApi(client);
    this.jsonplaceholder = jsonplaceholderApi(client);
    this.youtube = youtubeApi(client);
    this.apicagent = apicagentApi(client);
    this.apotd = apotdApi(client);
    this.bible = bibleApi(client);
    this.chucknorris = chucknorrisApi(client);
    this.randomuser = randomuserApi(client);
    this.lyrics = lyricsApi(client);
    this.mealdb = mealdbApi(client);
    this.moviedb = moviedbApi(client);
    this.news = newsApi(client);
    this.newyorktimes = newyorktimesApi(client);
    this.restcountries = restCountriesApi(client);
    this.tvmaze = tvMazeApi(client);
    this.weather = weatherApi(client);
    this.reddit = redditApi(client);
  }
}
