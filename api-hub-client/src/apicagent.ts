import { HttpClient } from "./httpClient";

export const apicagentApi = (client: HttpClient) => ({
  /**
   * Get user-agent information as seen by the server
   */
  getUserAgent() {
    return client.get(`/apicagent/user-agent`);
  },
});
