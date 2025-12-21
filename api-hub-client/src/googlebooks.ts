import { HttpClient } from "./httpClient";

export const googlebooksApi = (client: HttpClient) => ({
  search(book: string) {
    return client.get(`/googlebooks/search/${encodeURIComponent(book)}`);
  },

  getVolume(id: string) {
    return client.get(`/googlebooks/volumes/${encodeURIComponent(id)}`);
  },

  searchAdvanced(params: {
    q: string;
    startIndex?: number;
    maxResults?: number;
    orderBy?: string;
    langRestrict?: string;
    printType?: string;
    projection?: string;
  }) {
    const qs = new URLSearchParams();
    qs.set("q", params.q);
    if (params.startIndex !== undefined) qs.set("startIndex", String(params.startIndex));
    if (params.maxResults !== undefined) qs.set("maxResults", String(params.maxResults));
    if (params.orderBy) qs.set("orderBy", params.orderBy);
    if (params.langRestrict) qs.set("langRestrict", params.langRestrict);
    if (params.printType) qs.set("printType", params.printType);
    if (params.projection) qs.set("projection", params.projection);

    return client.get(`/googlebooks/search-advanced/results?${qs.toString()}`);
  },
});
