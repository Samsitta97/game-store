import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fdaa6012d5fd4100844a962874b2e023",
  },
});