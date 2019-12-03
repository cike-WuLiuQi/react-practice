import axios from 'axios';
import qs from "qs";

axios.defaults.baseURL = 'http://localhost:9000';
axios.defaults.withCredentials = true;
axios.defaults.transformRequest = (data = {}) => qs.stringify(data);
axios.interceptors.response.use(result => result.data);

export default axios;