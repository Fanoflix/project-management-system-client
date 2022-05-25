import axios from "axios";

const LOCAL_BASE_URL = "http://localhost:5000/";
// const PROD_BASE_URL = "http://localhost:5000/";

// const DEFAULT_HEADERS = { "Content-Type": "application/json" };

// function getHeaders() {}

const processRequest = (uri, method, data, token) => {
  const url = LOCAL_BASE_URL + uri;

  console.log(token);

  if (method.toLowerCase() === "post") {
    if (token) {
      return axios.post(
        url,
        { data },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } else return axios.post(url, { data });
  } else if (method.toLowerCase() === "put") {
    if (token) {
      return axios.put(
        url,
        { data },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } else return axios.put(url, { data });
  } else if (method.toLowerCase() === "get") {
    if (token) {
      return axios.get(url, { headers: { Authorization: `Bearer ${token}` } });
    } else return axios.get(url);
  } else if (method.toLowerCase() === "delete") {
    if (token) {
      return axios.delete(
        url,
        { data },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } else return axios.delete(url);
  }
};

export default processRequest;
