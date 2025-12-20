import { HttpClient } from "./httpClient";
import { githubApi } from "./github";

export class ApiHubClient {
  github;

  constructor({ baseUrl }: { baseUrl: string }) {
    const client = new HttpClient(baseUrl);
    this.github = githubApi(client);
  }
}
