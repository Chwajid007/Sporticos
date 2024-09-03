import SimpleToast from 'react-native-simple-toast';
import { BASE_URL } from './constants';
import axios from 'axios';
import store from '../redux/store';
import { setLoader } from '../redux/reducer/appSliceReducer';




function getUrl(route, baseurl) {
    if (baseurl == false) {
        return route;
    } else {
        return `${BASE_URL}${route}`
    }
}

function getToken() {
    return store.getState().authReducer?.token
}

const apiCall = async (method, payload, route, baseurl, onSuccess, onError, stopLoader) => {
    try {
        const url = getUrl(route, baseurl);
        let response = null
        const token = getToken();
        let config = {
            method: method,
            maxBodyLength: Infinity,
            data: payload,
            url: url,
            headers: token ? { 'Authorization': `Bearer ${token}` } : {},
        };
        response = await axios.request(config);
        console.log('response',response)
        if (response?.status == 200 || response?.status == 201) {
            onSuccess(response.data);
            stopLoader && store.dispatch(setLoader(false));
            return { status: 200, response: response.data };
        } else {
            onError(response);
            SimpleToast.show(typeof e.response?.errors == 'string' ? e.response?.errors : 'Server error');
            stopLoader && store.dispatch(setLoader(false));
            return response;
        }
    }
    catch (e) {
        store.dispatch(setLoader(false));
        console.log('e',e)
        SimpleToast.show(typeof e.response?.data.message == 'string' ? e.response?.data.message : 'Server error');
        onError(e.response?.data);
        return {
            status: 400,
            response: e?.response?.data ? e?.response?.data : { message: e.toString() },
        };
    }
}

export const getRequest = async (payload, route, baseurl, onSuccess = (res) => { }, onError = (err) => { }, stopLoader = true) => {

    const response = await apiCall('get', payload, route, baseurl, onSuccess, onError, stopLoader);
    return response;
};

export const postRequest = async (payload, route, baseurl, onSuccess = (res) => { }, onError = (err) => { }, stopLoader = true) => {

    const response = await apiCall('post', payload, route, baseurl, onSuccess, onError, stopLoader);
    return response;
};

export const patchRequest = async (payload, route, baseurl, onSuccess = (res) => { }, onError = (err) => { }, stopLoader = true) => {

    const response = await apiCall('patch', payload, route, baseurl, onSuccess, onError, stopLoader);
    return response;
};

export const putRequest = async (payload, route, baseurl, onSuccess = () => { }, onError = () => { }, stopLoader = true) => {


    const response = await apiCall('put', payload, route, baseurl, onSuccess, onError, stopLoader);
    return response;

};

export const deleteRequest = async (payload, route, baseurl, onSuccess = (res) => { }, onError = (err) => { }) => {
    try {
        const url = getUrl(route, baseurl);
        const token = getToken();
        let response = null;
        let config = {
            method: 'delete',
            maxBodyLength: Infinity,
            data: payload,
            url: url,
            headers:
                token ? { 'bearer': token } : null
        }
        response = await axios.request(config);

        if (response?.data?.code == 200) {
            onSuccess(response.data);
            store.dispatch(setLoader(false));
            return { status: 200, response: response.data };
        } else {
            onError(response);
            store.dispatch(setLoader(false));
            return response;
        }
    }
    catch (e) {
        onError(e.response?.data);
        store.dispatch(setLoader(false))
        SimpleToast.show(typeof e.response?.data.message == 'string' ? e.response?.data.message : 'Server error');
        return {
            status: 400,
            response: e?.response?.data ? e?.response?.data : { message: e.toString() },
        };
    }
};

export const putRequestFormData = async (payload, route, baseurl, onSuccess = (res) => { }, onError = (res) => { }, stopLoader = true) => {
    try {

        const url = getUrl(route, baseurl);
        const formData = new FormData();
        const token = getToken();
        let response = null;
        const headers = {
            'Content-Type': 'multipart/form-data',
            'bearer': token
        };
        for (let key in payload) {
            formData.append(key, payload[key])
        }
        response = await axios.put(url, formData, { headers })
        if (response?.data?.code == 200) {
            onSuccess(response.data);
            stopLoader && store.dispatch(setLoader(false));
            return { status: 200, response: response.data };
        } else {
            // console.log('error___', response)
            onError(response);
            stopLoader && store.dispatch(setLoader(false));
            return response;
        }
    }
    catch (e) {
        onError(e);
        console.log('__post request form data error', e.response?.data)
        SimpleToast.show(typeof e.response?.data.message == 'string' ? e.response?.data.message : 'Server error');
        return {
            status: 400,
            response: e?.response?.data ? e?.response?.data : { message: e.toString() },
        };
    }
};


export const postRequestFormData = async (payload, route, baseurl, onSuccess = (res) => { }, onError = (res) => { }, stopLoader = true) => {
    try {

        const url = getUrl(route, baseurl);
        const formData = new FormData();
        const token = getToken();
        let response = null;

        for (let key in payload) {
            formData.append(key, payload[key])
        }

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            data: formData,
            url: url,
            headers: {
                'Content-Type': 'multipart/form-data',
                'bearer': token
            }
        }
        console.log('configs are', config)

        // const headers = {
        //     'Content-Type': 'multipart/form-data',
        //     'x-sh-auth': token
        // };



        response = await axios.request(config);

        // response = await axios.post(url, formData, { headers })


        if (response?.data?.code == 200) {
            onSuccess(response.data);
            stopLoader && store.dispatch(setLoader(false));
            return { status: 200, response: response.data };
        } else {
            // console.log('error___', response)
            onError(response);
            stopLoader && store.dispatch(setLoader(false));
            return response;
        }
    }
    catch (e) {
        onError(e);
        console.log('__post request form data error', e.response?.data)
        stopLoader && store.dispatch(setLoader(false));
        SimpleToast.show(typeof e.response?.data.message == 'string' ? e.response?.data.message : 'Server error');
        return {
            status: 400,
            response: e?.response?.data ? e?.response?.data : { message: e.toString() },
        };
    }
};

