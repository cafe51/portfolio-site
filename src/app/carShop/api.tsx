import axios from 'axios';
import { CarType } from './interfaces';

const axiosInstance = axios.create({
    baseURL: 'https://car-shop-japhe.up.railway.app',
});

export const getCars = async() => {
    const { data } = await axiosInstance.get('cars/');
    return data as CarType[];
};

