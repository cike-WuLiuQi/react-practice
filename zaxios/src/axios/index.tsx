import Axios, { AxiosRequestConfig } from "./axios";

function createInstance(config: AxiosRequestConfig) {
    let context = new Axios();
    let instance = Axios.prototype.request.bind(context)
    instance = Object.assign(instance, Axios.prototype, context);
    return instance
}