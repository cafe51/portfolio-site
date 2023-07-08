import axios from 'axios';
import { CarType } from './interfaces';

const USER_CONFLICT = 409;

const axiosInstance = axios.create({
    baseURL: 'https://car-shop-japhe.up.railway.app',
});

export const getCars = async() => {
    const { data } = await axiosInstance.get('cars/');
    return data as CarType[];
};

export const carRegister = async(registerValues: CarType) => {
    const request = await axiosInstance.post('/cars', registerValues);
    if (request.status === USER_CONFLICT) {
        return request.status;
    }
    return request;
};

export const deleteCar = async(id: string) => {
    await axiosInstance.delete(`cars/${id}`);
};

export const updateCar = async(newValues: CarType, id: string) => {
    const { data } = await axiosInstance.put(`cars/${id}`, newValues);
    return data;
};
