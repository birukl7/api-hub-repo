import { Hono } from "hono";
import { cors } from "hono/cors";

import github from "./routes/github";
import crypto from "./routes/crypto";
import apicagent from "./routes/apicagent";
import apotd from "./routes/apotd";
import bible from "./routes/bible";
import chucknorris from "./routes/chucknorris";
import flixquest from "./routes/flixquest";
import googlebooks from "./routes/googlebooks";
import hackernews from "./routes/hackernews";
import jsonplaceholder from "./routes/jsonplaceholder";
import lyrics from "./routes/lyrics";
import mealdb from "./routes/mealdb";
import moviedb from "./routes/moviedb";
import news from "./routes/news";
import newyorktimes from "./routes/newyorktimes";
import randomuser from "./routes/randomuser";
import reddit from "./routes/reddit";
import restcountries from "./routes/restcountries";
import tvmaze from "./routes/tvmaze";
import weather from "./routes/weather";
import youtube from "./routes/youtube";

export type ApiHubConfig = {
  weatherApiKey?: string;
  apotdApiKey?: string;
  bibleApiKey?: string;
  MovieDBApiKey?: string;
  NewsAPIKey?: string;
  NYTIMESAPIKey?: string;
  youtubeApiKey?: string;
};

export type ApiHubEnv = {
  Variables: {
    config: ApiHubConfig;
  };
};

export function createApiHub(config: ApiHubConfig) {
  const app = new Hono<ApiHubEnv>();

  //* CORS middleware
  app.use("*", cors());

  //* Make config available to routes
  app.use("*", async (c, next) => {
    c.set("config", config);
    await next();
  });

  //* Intro route
  app.get("/", (c) => c.text("Welcome to API Hub!"));

  //* Route mounting
  app.route("/github", github);
  app.route("/crypto", crypto);
  app.route("/apicagent", apicagent);
  app.route("/apotd", apotd);
  app.route("/bible", bible);
  app.route("/chucknorris", chucknorris);
  app.route("/flixquest", flixquest);
  app.route("/googlebooks", googlebooks);
  app.route("/hackernews", hackernews);
  app.route("/jsonplaceholder", jsonplaceholder);
  app.route("/lyrics", lyrics);
  app.route("/mealdb", mealdb);
  app.route("/moviedb", moviedb);
  app.route("/news", news);
  app.route("/newyorktimes", newyorktimes);
  app.route("/randomuser", randomuser);
  app.route("/reddit", reddit);
  app.route("/restcountries", restcountries);
  app.route("/tvmaze", tvmaze);
  app.route("/weather", weather);
  app.route("/youtube", youtube);

  //* Error handling
  app.onError((err, c) => {
    console.error(err);
    return c.json({ error: err.message }, 500);
  });

  return app;
}
