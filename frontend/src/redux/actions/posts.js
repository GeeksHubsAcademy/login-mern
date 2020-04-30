import axios from 'axios';
import { API_URL } from '../../api-config';
import store from '../store';

export const getAllPosts = async() => {
    try {
        const res = await axios.get(API_URL + 'posts', {
            headers: {
                Authorization: localStorage.getItem('authToken')
            }
        });
        store.dispatch({
            type: 'GET_ALL_POSTS',
            payload: res.data
        })
    } catch (error) {
        console.error(error)
    }
}