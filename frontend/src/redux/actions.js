import store from './store';
import axios from 'axios';
import { API_URL } from '../api-config';

export const login = async(user) => {
    try {
        const res = await axios.post(API_URL + 'users/login', user);
        store.dispatch({
            type: 'LOGIN',
            payload: res.data.user
        })
        localStorage.setItem('authToken',res.data.token);
    } catch (error) {
        console.error(error)
    }
}
export const getAllUsers = async() => {
    try {
        const res = await axios.get(API_URL + 'users',{
            headers:{
                Authorization:localStorage.getItem('authToken')
            }
        });
        store.dispatch({
            type:'GET_ALL_USERS',
            payload: res.data
        })
    } catch (error) {
        console.error(error)
    }
}
export const getUserDetail = async() => {
    try {

    } catch (error) {
        console.error(error)
    }
}