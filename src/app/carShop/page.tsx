'use client';
import { useState, useEffect } from 'react';
import { getCars } from './api';
import CardCar from './carCard';
import CarForm from './carForm';
import { CarType } from './interfaces';

export default function CarShop(){
    const [cars, setCars] = useState<CarType[]>([]);

    const updateCars = async() => {
        const carsData = await getCars();
        setCars(carsData);
    };

    useEffect(() => {
        updateCars();
    }, []);

    return (
        <div className="bg-gray-200 flex flex-wrap items-center items-baseline gap-4 p-4">
            { cars.map((carData) => <CardCar key={ carData.id } carData={ carData } updateCars={ updateCars } />) }
            <button className=" bg-green-700 self-center p-3 text-white rounded h-fit">+</button>
            <CarForm updateCars={ updateCars } />
        </div>
    );
}
