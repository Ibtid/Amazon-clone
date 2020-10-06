import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/e-clone-596cb/us-central1/api", //the api url
});

export default instance;
