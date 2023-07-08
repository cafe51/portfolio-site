import axios from 'axios';
import { CarType, IMotorcycle } from './interfaces';

const USER_CONFLICT = 409;

const axiosInstance = axios.create({
    baseURL: 'https://car-shop-japhe.up.railway.app',
});

export const getVehicle = async(vehicle: string) => {
    const { data } = await axiosInstance.get(`${vehicle}/`);
    return data as CarType[];
};

export const registerVehicle = async(vehicle: string, registerValues: CarType | IMotorcycle) => {
    const request = await axiosInstance.post(`${vehicle}/`, registerValues);
    if (request.status === USER_CONFLICT) {
        return request.status;
    }
    return request;
};

export const deleteVehicle = async(vehicle: string, id: string) => {
    await axiosInstance.delete(`${vehicle}/${id}`);
};

export const updateVehicle = async(vehicle: string, newValues: CarType | IMotorcycle, id: string) => {
    const { data } = await axiosInstance.put(`${vehicle}/${id}`, newValues);
    return data;
};
