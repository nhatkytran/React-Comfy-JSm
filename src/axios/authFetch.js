import axios from "axios";

const TIMEOUT = 30000;
const BASE_URL = "https://course-api.com";

let cancelTokenSource;
const authFetch = axios.create({
  method: "GET",
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

// Interceptors fix the bug of only one time cancelation
authFetch.interceptors.request.use(async function (config) {
  // it will update cancelToken on every call
  cancelTokenSource = axios.CancelToken.source();
  config.cancelToken = cancelTokenSource.token;

  return config;
});
function handleCancelToken() {
  cancelTokenSource?.cancel();
}

export { handleCancelToken };
export default authFetch;
