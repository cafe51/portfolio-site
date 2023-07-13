import axios from 'axios';
import { PostType, CategoryType } from './interfaces';

const axiosInstance = axios.create({
    baseURL: 'https://blog-api-japhe.up.railway.app/',
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
        return error.response;
    }
};

export const addNewCategoryApi = async(body: CategoryType) => {
    const { data } = await axiosInstance.post('/post', body);
    return data;
};

export const addNewPostApi = async(body: PostType) => {
    const { data } = await axiosInstance.post('/post', body);
    return data;
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


  

// export const getVehicle = async(vehicle: string) => {
//     const { data } = await axiosInstance.get(`${vehicle}/`);
//     return data;
// };

// export const registerVehicle = async(vehicle: string, registerValues: CarType | MotorcycleType) => {
//     const request = await axiosInstance.post(`${vehicle}/`, registerValues);
//     return request;
// };

// export const deleteVehicle = async(vehicle: string, id: string) => {
//     await axiosInstance.delete(`${vehicle}/${id}`);
// };

// export const updateVehicle = async(vehicle: string, newValues: CarType | MotorcycleType, id: string) => {
//     const { data } = await axiosInstance.put(`${vehicle}/${id}`, newValues);
//     return data;
// };
