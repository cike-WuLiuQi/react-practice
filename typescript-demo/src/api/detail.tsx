import axios from "./index";

export function getLesson(id: string) {
  return axios.get(`/getlesson?id=${id}`);
}
export function getLessons(
  currentCategory: string = "all",
  offset: number,
  limit: number
) {
  return axios.get(
    `/getLessons/${currentCategory}?offset=${offset}&limit=${limit}`
  );
}
