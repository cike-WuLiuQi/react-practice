import axios from './index';

export function getSliders() {
    return axios.get('/sliders')
}
export function getLessons() {
    return axios.get('/getlesson')
}
