import axios from "axios";

const KEY = "AIzaSyC0WG1wOglFpjDWu0DbU4o_QRvztUOsMP4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
