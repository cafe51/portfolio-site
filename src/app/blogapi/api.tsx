import axios from 'axios';
import { CategoryType, NewPostType, PostType } from './types';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/',
    // baseURL: 'https://blog-api-japhe.up.railway.app/',
});



export const loginRequestApi = async(body: {email: string, password: string}) => {
    const { data } = await axiosInstance.post('/login', body);
    return data;
};

export const registerRequestApi = async(body: { email: string, password: string }) => {
    const { data } = await axiosInstance.post('/user', body);
    return data;
};

export const getUserByIdApi = async(token: string, id: number) => {
    try {
        const { data } = await axiosInstance.get(`/user${id}`, {
            headers: { Authorization: token },
        });
        return data;
    } catch(error: any) {
        return error.response;
    }
    
};

export const getUsersApi = async(token: string) => {
    try {
        const { data } = await axiosInstance.get('/user', {
            headers: { Authorization: token },
        });

        return data;
    } catch(error: any) {
        return error;
    }
};

export const getCategoriesApi = async(token: string) => {
    try {
        const { data } = await axiosInstance.get('/categories', {
            headers: { Authorization: token },
        });
        return data;
    } catch(error: any) {
        return error.response.statusText;
    }
};

export const createCategoryApi = async(token: string, body: CategoryType) => {
    try {
        const { data } = await axiosInstance.post('/categories', body, {
            headers: { Authorization: token },
        });
        return data;
    } catch(error: any) {
        return error.response;
    }
};

export const createPostApi = async(token:string, body: NewPostType) => {
    try {
        const { data } = await axiosInstance.post('/post', body, {
            headers: { Authorization: token },
        });
        return data;
    } catch(error: any) {
        console.log('ERRRO', error);
        return error.response;
    }
};

export const getPostsApi = async(token: string) => {
    try {
        const { data } = await axiosInstance.get('/post', {
            headers: { Authorization: token },
        });
        return data;
    } catch(error: any) {
        return error.response;
    }
};

export const getPostByIdApi = async(token: string, id: number) => {
    try {
        const { data } = await axiosInstance.get(`/post/${id}`, {
            headers: { Authorization: token },
        });
        return data;
    } catch(error: any) {
        return error.response;
    }
};

export const getPostByQueryApi = async(token: string, query: number) => {
    try {
        const { data } = await axiosInstance.get(`/post/search/?q=${query}`, {
            headers: { Authorization: token },
        });
        return data;
    } catch(error: any) {
        return error.response;
    }
};

export const updatePostApi = async(body: PostType, id: number) => {
    const { data } = await axiosInstance.put(`/post/${id}`, body);
    return data;
};

export const deleteVehicle = async(id: number) => {
    await axiosInstance.delete(`/post/${id}`);
};

