import { HttpClient } from "./httpClient";

export const bibleApi = (client: HttpClient) => ({
  getBooks() {
    return client.get(`/bible/books`);
  },

  getChapter(book: string, chapter: number | string) {
    return client.get(`/bible/${encodeURIComponent(book)}/${chapter}`);
  },

  getVerses(book: string, chapter: number | string, from: number | string, to: number | string) {
    return client.get(`/bible/${encodeURIComponent(book)}/${chapter}/${from}/${to}`);
  },

  getVerse(book: string, chapter: number | string, verse: number | string) {
    return client.get(`/bible/${encodeURIComponent(book)}/${chapter}/${verse}`);
  },
});
