import { HttpClient } from "./httpClient";

export const jsonplaceholderApi = (client: HttpClient) => ({
  getPosts(page?: number, limit?: number) {
    if (page !== undefined || limit !== undefined) {
      const p = page ?? 1;
      const l = limit ?? 5;
      return client.get(`/jsonplaceholder/posts/${p}/${l}`);
    }
    return client.get("/jsonplaceholder/posts");
  },

  getPost(id: number | string) {
    return client.get(`/jsonplaceholder/post/${encodeURIComponent(String(id))}`);
  },

  getPostComments(id: number | string) {
    return client.get(`/jsonplaceholder/post/${encodeURIComponent(String(id))}/comments`);
  },

  getComments() {
    return client.get("/jsonplaceholder/comments");
  },

  getAlbums(page?: number, limit?: number) {
    if (page !== undefined || limit !== undefined) {
      const p = page ?? 1;
      const l = limit ?? 5;
      return client.get(`/jsonplaceholder/albums/${p}/${l}`);
    }
    return client.get("/jsonplaceholder/albums");
  },

  getAlbum(id: number | string) {
    return client.get(`/jsonplaceholder/album/${encodeURIComponent(String(id))}`);
  },

  getAlbumPhotos(id: number | string) {
    return client.get(`/jsonplaceholder/album/${encodeURIComponent(String(id))}/photos`);
  },

  getPhotos(page?: number, limit?: number) {
    if (page !== undefined || limit !== undefined) {
      const p = page ?? 1;
      const l = limit ?? 5;
      return client.get(`/jsonplaceholder/photos/${p}/${l}`);
    }
    return client.get("/jsonplaceholder/photos");
  },

  getPhoto(id: number | string) {
    return client.get(`/jsonplaceholder/photo/${encodeURIComponent(String(id))}`);
  },

  getTodos() {
    return client.get("/jsonplaceholder/todos");
  },

  getUsers(page?: number, limit?: number) {
    if (page !== undefined || limit !== undefined) {
      const p = page ?? 1;
      const l = limit ?? 5;
      return client.get(`/jsonplaceholder/users/${p}/${l}`);
    }
    return client.get("/jsonplaceholder/users");
  },

  getUser(id: number | string) {
    return client.get(`/jsonplaceholder/user/${encodeURIComponent(String(id))}`);
  },

  getUserPosts(id: number | string) {
    return client.get(`/jsonplaceholder/user/${encodeURIComponent(String(id))}/posts`);
  },

  getUserTodos(id: number | string) {
    return client.get(`/jsonplaceholder/user/${encodeURIComponent(String(id))}/todos`);
  },

  getUserAlbums(id: number | string) {
    return client.get(`/jsonplaceholder/user/${encodeURIComponent(String(id))}/albums`);
  },
});
