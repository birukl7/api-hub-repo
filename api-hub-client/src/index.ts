import { HttpClient } from "./httpClient";
import { githubApi } from "./github";
import { cryptoApi } from "./crypto";
import { youtubeApi } from "./youtube";
import { apicagentApi } from "./apicagent";
import { apotdApi } from "./apotd";
import { bibleApi } from "./bible";
import { chucknorrisApi } from "./chucknorris";
import { randomuserApi } from "./randomuser";

export class ApiHubClient {
  github;
  crypto;
  youtube;
  apicagent;
  apotd;
  bible;
  chucknorris;
  randomuser;

  constructor({ baseUrl }: { baseUrl: string }) {
    const client = new HttpClient(baseUrl);
    this.github = githubApi(client);
    this.crypto = cryptoApi(client);
    this.youtube = youtubeApi(client);
    this.apicagent = apicagentApi(client);
    this.apotd = apotdApi(client);
    this.bible = bibleApi(client);
    this.chucknorris = chucknorrisApi(client);
    this.randomuser = randomuserApi(client);
  }
}
