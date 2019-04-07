import axios from 'axios';


const httpClient = axios.create();
httpClient.defaults.timeout = 30000;

const _request = (url, method, data, config = {}) => {
    return httpClient({url, method, data}).then((res) => {
        if(res.status === 200 || res.status === 201 || res.status === 204) return res.data;
        else throw (res.data);
    }).catch(errorResponse => {
        throw (errorResponse.response || {status: 500})
    })
};

export const get = (url) => _request(url, "GET");