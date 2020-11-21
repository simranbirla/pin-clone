import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID fxE-dIuby0ZXMx-DEJswQQhchIUE09Xpz0jmaurVc44",
  },
});
