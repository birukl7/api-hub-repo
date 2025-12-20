import { HttpClient } from "./httpClient";

export const githubApi = (client: HttpClient) => ({
  /**
   * Get GitHub user profile + repositories
   */
  getUser(username: string) {
    return client.get(`/github/user/${username}`);
  },

  /**
   * Get a specific GitHub repository
   */
  getRepo(username: string, repository: string) {
    return client.get(`/github/repo/${username}/${repository}`);
  },

  /**
   * Search GitHub users
   */
  searchUsers(username: string) {
    return client.get(`/github/search/users/${username}`);
  },

  /**
   * Search GitHub repositories
   */
  searchRepos(repository: string) {
    return client.get(`/github/search/repos/${repository}`);
  },
});
