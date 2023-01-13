import axios from "axios";
import { serverPath } from "./path";

export const get = (url, params) => {
  if (params === undefined) {
    params = "";
  }
  return axios.get(serverPath + url + params);
};

export const post = (url, data) => {
  return axios.post(serverPath + url, data);
};

export const formDataPost = (url, data) => {
  return axios.post(serverPath + url, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
