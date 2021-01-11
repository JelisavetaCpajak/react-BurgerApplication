import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-15731.firebaseio.com/",
});

export default instance;
