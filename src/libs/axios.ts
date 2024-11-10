import axios from "axios";


export const api = axios.create({
  baseURL: import.meta.env.SERVER_URL,

})
