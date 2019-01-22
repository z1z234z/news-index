import axios from 'axios';
let qs = require('qs');

axios.defaults.withCredentials = true;

let baseUrl = 'http://localhost:8080';

/**
 * get 请求
 */
const httpGet = function (url = '', data = {}) {
    const token = window.localStorage.getItem('token') || '';
    const instance = axios.create({
        baseURL: baseUrl,
        headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json;charset=UTF-8',
        'content-type': 'application/json'
        }
    });
    return instance.get(url, {
        params: data
    }).then((result) => {
        var res = result.data;
        if (res) {
        return Promise.resolve(res);
        } else {
            console.log('请求成功');
        }
    }).catch(() => {
        console.log('网络请求错误');
    })
}


/** 
 * post 请求
 */
const httpPost = function (url = '', data = {}) {
    const token = window.localStorage.getItem('token') || '';
    const instance = axios.create({
        baseURL: baseUrl,
        headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json;charset=UTF-8',
        'content-type': 'application/json'
        }
    });
    return instance.post(url, qs.stringify(data)).then((result) => {
        var res = result.data;
        if(res) {
            return Promise.resolve(res);
        } else {
            console.log('请求成功');
        }
    }).catch(() => {
            console.log('网络请求错误');
    })
}

export {
  baseUrl,
  httpGet,
  httpPost
}