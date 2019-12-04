import axios from "./index";

export function getSliders() {
    return axios.get("/sliders");
}
export function getLessons(currentCategory: string = "all", offset: number, limit: number) {
    return axios.get(`/getLessons/${currentCategory}?offset=${offset}&limit=${limit}`);
}
