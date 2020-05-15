import curry from  'lodash/curry';

const URL = {
    getCity: '',
    getFlights: ''
};

export const fetchData = (method, url, params) => {
    const requestPromise = new Promise((resolve, reject) => {
        const handler = () => {
            if (xhr.readyState !== 4) {
                return;
            }
            if (xhr.status === 200) {
                resolve(xhr.response);
            } else {
                reject(new Error(xhr.statusText));
            }
        };
        const xhr = new XMLHttpRequest();
        const host = './';
        const path = host + url;
        xhr.open(method, path);
        xhr.onreadystatechange = handler;
        xhr.responseType = 'json';
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        const json = JSON.stringify(params);
        // 超时处理
        xhr.timeout = 1000;
        xhr.ontimeout(reject(new Error('request timeout')));
        json ? xhr.send(json) : xhr.send();
    });
    return requestPromise;
};

// export const getCitys = params =>
//     getData(URL['getCity']);

const curriedFetchData = curry(fetchData); // 赋予fetchData逐步收集参数的能力
const getPostData = curriedFetchData('POST'); // 指定method
const getGetData = curriedFetchData('GET'); // 指定method

// 获取城市列表
export const getCitys = getPostData(URL.getCity); // 指定API name, 等待收集params调用
// 获取航班列表
export const getFlights = getPostData(URL.getFlights);
export const getImg = getGetData(URL.getImg);
