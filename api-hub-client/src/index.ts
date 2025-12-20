import { HttpClient } from "./httpClient";
import { githubApi } from "./github";
import { cryptoApi } from "./crypto";
import { youtubeApi } from "./youtube";

export class ApiHubClient {
  github;
  crypto;
  youtube;

  constructor({ baseUrl }: { baseUrl: string }) {
    const client = new HttpClient(baseUrl);
    this.github = githubApi(client);
    this.crypto = cryptoApi(client);
    this.youtube = youtubeApi(client);
  }
}
