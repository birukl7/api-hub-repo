import { HttpClient } from "./httpClient";

type RedditListing =
  | "new"
  | "hot"
  | "rising"
  | "best"
  | "random"
  | "top";

type RedditTime =
  | "hour"
  | "day"
  | "week"
  | "month"
  | "year"
  | "all";

export const redditApi = (client: HttpClient) => ({
  /**
   * Fetch subreddit data
   */
  getSubreddit(
    subreddit: string,
    options?: {
      listing?: RedditListing;
      time?: RedditTime;
      limit?: number;
    }
  ) {
    const listing = options?.listing ?? "top";
    const time = options?.time ?? "week";
    const limit = options?.limit ?? 20;

    return client.get(
      `/reddit/${encodeURIComponent(subreddit)}/${listing}/${time}/${limit}`
    );
  },
});
