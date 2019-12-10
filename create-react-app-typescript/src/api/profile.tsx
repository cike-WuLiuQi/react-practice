import axios from "./index";

export function logout() {
  return axios.get("/logout");
}
export function validate() {
  return axios.get("/validate");
}
export function register(value: any) {
  return axios.post("/register", value);
}
export function login(value: any) {
  return axios.post("/login", value);
}
