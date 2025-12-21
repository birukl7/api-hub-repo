import { HttpClient } from "./httpClient";

export const hackernewsApi = (client: HttpClient) => ({
  newStories(limit?: number) {
    const path = limit ? `/hackernews/newstories?limit=${encodeURIComponent(String(limit))}` : "/hackernews/newstories";
    return client.get(path);
  },

  topStories(limit?: number) {
    const path = limit ? `/hackernews/topstories?limit=${encodeURIComponent(String(limit))}` : "/hackernews/topstories";
    return client.get(path);
  },

  bestStories(limit?: number) {
    const path = limit ? `/hackernews/beststories?limit=${encodeURIComponent(String(limit))}` : "/hackernews/beststories";
    return client.get(path);
  },

  askStories(limit?: number) {
    const path = limit ? `/hackernews/askstories?limit=${encodeURIComponent(String(limit))}` : "/hackernews/askstories";
    return client.get(path);
  },

  showStories(limit?: number) {
    const path = limit ? `/hackernews/showstories?limit=${encodeURIComponent(String(limit))}` : "/hackernews/showstories";
    return client.get(path);
  },

  jobStories(limit?: number) {
    const path = limit ? `/hackernews/jobstories?limit=${encodeURIComponent(String(limit))}` : "/hackernews/jobstories";
    return client.get(path);
  },

  getItem(id: string) {
    return client.get(`/hackernews/item/${encodeURIComponent(id)}`);
  },

  getUser(id: string) {
    return client.get(`/hackernews/user/${encodeURIComponent(id)}`);
  },

  updates() {
    return client.get("/hackernews/updates");
  },

  maxItem() {
    return client.get("/hackernews/maxitem");
  },
});
