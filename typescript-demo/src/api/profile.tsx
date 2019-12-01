import axios from './index';

export function validate() {
    return axios.get('/validate')
}

export function register(values: any) {
    return axios.post('/register', values)
}
export function login(values: any) {
    return axios.post('/login', values)
}