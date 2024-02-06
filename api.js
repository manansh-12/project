import axios from "axios";
const apiKey = "AIzaSyCgc5KKOjL8DULolyjT3vyaW4Baw3gKL00";
// import {REACT_APP_yt_API_KEY} from ""
const request = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    key: apiKey,
  },
});
export default request;
