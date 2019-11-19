import axios, { AxiosResponse } from 'axios';

const baseUrl = 'http://localhost:8080';
interface User {
    name: string;
    age: number
}

let user: User = {
    name: 'zhufeng',
    age: 10
}
axios({
    method: 'get',
    url: baseUrl + '/get',
    params: user
}).then((response: AxiosResponse) => {
    console.log(response);

})