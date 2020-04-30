import axios from 'axios';
import { API_URL } from '../../api-config';
import store from '../store';

export const getAllPosts = async(page = 0) => {
    try {
        const res = await axios.get(API_URL + 'posts/' + page, {
            headers: {
                Authorization: localStorage.getItem('authToken')
            }
        });
        store.dispatch({
            type: 'GET_ALL_POSTS',
            payload: res.data.posts
        })

        return res;
    } catch (error) {
        console.error(error)
    }
}
export const insert = async(post) => {
    await axios.post(API_URL + 'posts', post, {
        headers: {
            Authorization: localStorage.getItem('authToken')
        }
    });
    return getAllPosts();
}
export const deleteOne = async(post_id) => {
    await axios.delete(API_URL + 'posts/' + post_id, {
        headers: {
            Authorization: localStorage.getItem('authToken')
        }
    });
    return getAllPosts();
}