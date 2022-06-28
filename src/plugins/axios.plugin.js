import axios from "axios";

axios.interceptors.request.use(
  function (config) {
    console.log("------------------ request send");
    return config;
  },
  function (error) {
    console.log("🚀 reauest Error: ", error.message);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    if (response?.status == 200) {
      console.log("response is ok 200");
    } else
      console.log("🚀 ~ file: axios.plugin.js ~ line 77 ~ response", response);

    return response;
  },
  function (error) {
    console.log("🚀 response Error: ", error.message);
    return Promise.reject(error);
  }
);

export default axios;
