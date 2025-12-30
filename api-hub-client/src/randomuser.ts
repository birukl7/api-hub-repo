import { HttpClient } from "./httpClient";

export const randomuserApi = (client: HttpClient) => ({
  getUser() {
    return client.get(`/randomuser/user`);
  },

  getUserNoInfo() {
    return client.get(`/randomuser/user/data`);
  },

  getUsers(count: number) {
    return client.get(`/randomuser/users/${count}`);
  },

  getByGender(gender: string) {
    return client.get(`/randomuser/user/${encodeURIComponent(gender)}`);
  },

  getByNat(nat: string) {
    return client.get(`/randomuser/country/${encodeURIComponent(nat)}`);
  },

  exclude(fields: string) {
    return client.get(`/randomuser/exclude/${encodeURIComponent(fields)}`);
  },

  include(fields: string) {
    return client.get(`/randomuser/include/${encodeURIComponent(fields)}`);
  },

  format(fmt: string) {
    return client.get(`/randomuser/format/${encodeURIComponent(fmt)}`);
  },

  password(strength: string) {
    return client.get(`/randomuser/password/${encodeURIComponent(strength)}`);
  },
});
