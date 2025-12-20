import { HttpClient } from "./httpClient";

export const newyorktimesApi = (client: HttpClient) => ({
  /**
   * Get archived articles by year and month
   */
  getArchive(year: number, month: number) {
    return client.get(`/newyorktimes/archive/${year}/${month}`);
  },

  /**
   * Search articles with optional filters
   */
  searchArticles(q: string, options?: {
    fq?: string;
    begin_date?: string;
    end_date?: string;
    facet?: string;
    facet_fields?: string;
    facet_filter?: string;
    sort?: string;
    fl?: string;
    page?: string;
  }) {
    let path = `/newyorktimes/articles/search/${encodeURIComponent(q)}`;
    if (options) {
      const params = new URLSearchParams();
      if (options.fq) params.append("fq", options.fq);
      if (options.begin_date) params.append("begin_date", options.begin_date);
      if (options.end_date) params.append("end_date", options.end_date);
      if (options.facet) params.append("facet", options.facet);
      if (options.facet_fields) params.append("facet_fields", options.facet_fields);
      if (options.facet_filter) params.append("facet_filter", options.facet_filter);
      if (options.sort) params.append("sort", options.sort);
      if (options.fl) params.append("fl", options.fl);
      if (options.page) params.append("page", options.page);
      const queryString = params.toString();
      if (queryString) path += `?${queryString}`;
    }
    return client.get(path);
  },

  /**
   * Get bestseller books by list name
   */
  getBestsellerBooks(listName: string, options?: {
    bestsellers_date?: string;
    published_date?: string;
    offset?: string;
  }) {
    let path = `/newyorktimes/bestsellers/books/${encodeURIComponent(listName)}`;
    if (options) {
      const params = new URLSearchParams();
      if (options.bestsellers_date) params.append("bestsellers-date", options.bestsellers_date);
      if (options.published_date) params.append("published-date", options.published_date);
      if (options.offset) params.append("offset", options.offset);
      const queryString = params.toString();
      if (queryString) path += `?${queryString}`;
    }
    return client.get(path);
  },

  /**
   * Get bestseller books by date and list name
   */
  getBestsellerBooksByDate(bestsellerDate: string, listName: string, offset?: string) {
    let path = `/newyorktimes/bestsellers/books/${encodeURIComponent(bestsellerDate)}/${encodeURIComponent(listName)}`;
    if (offset) {
      path += `?offset=${encodeURIComponent(offset)}`;
    }
    return client.get(path);
  },

  /**
   * Get bestseller list names
   */
  getBestsellerListNames() {
    return client.get("/newyorktimes/bestsellers/books/names");
  },

  /**
   * Get books overview by published date
   */
  getBooksOverview(publishedDate?: string) {
    let path = "/newyorktimes/bestsellers/books/overview";
    if (publishedDate) {
      path += `?published-date=${encodeURIComponent(publishedDate)}`;
    }
    return client.get(path);
  },

  /**
   * Get top 5 bestseller books
   */
  getTop5BestsellerBooks(publishedDate?: string) {
    let path = "/newyorktimes/bestsellers/books/overview/top5";
    if (publishedDate) {
      path += `?published-date=${encodeURIComponent(publishedDate)}`;
    }
    return client.get(path);
  },

  /**
   * Get popular articles based on views
   */
  getPopularViewed(period: string) {
    return client.get(`/newyorktimes/popular/viewed/${encodeURIComponent(period)}`);
  },

  /**
   * Get popular articles based on shares
   */
  getPopularShared(period: string) {
    return client.get(`/newyorktimes/popular/shared/${encodeURIComponent(period)}`);
  },

  /**
   * Get popular articles shared via specific social media
   */
  getPopularSharedBySource(period: string, source: string) {
    return client.get(`/newyorktimes/popular/shared/${encodeURIComponent(period)}/${encodeURIComponent(source)}`);
  },

  /**
   * Get top stories by section
   */
  getTopStories(section: string) {
    return client.get(`/newyorktimes/topstories/${encodeURIComponent(section)}`);
  },
});

