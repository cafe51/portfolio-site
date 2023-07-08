'use client';
import { useState, useEffect } from 'react';
import { getVehicle } from './api';
import CardCar from './carCard';
import CarForm from './carForm';
import { CarType } from './interfaces';

export default function CarShop(){
    const [showForm, setShowForm] = useState(false);
    const [cars, setCars] = useState<CarType[]>([]);

    const updateCars = async() => {
        const carsData = await getVehicle('cars');
        setCars(carsData);
    };

    const newCard = () => {
        setShowForm(true);
    };


    useEffect(() => {
        updateCars();
    }, []);

    return (
        <div>
            <div className=" flex gap-4 items-center justify-center">
                <button className=" bg-green-700 p-3 text-white rounded h-fit">
            Carros
                </button>
                <button className=" bg-green-700 p-3 text-white rounded h-fit">
            Motos
                </button>
            </div>
            <div className='text-center'>
                <h1>Carros</h1>
            </div>
            <div className="bg-gray-200 flex flex-wrap items-center gap-4 p-4">

                { cars.map((carData) => <CardCar key={ carData.id } carData={ carData } updateCars={ updateCars } />) }
                <div className=" w-fit h-44 flex flex-col items-center justify-center">
                    <button
                        className=" bg-green-700 p-3 text-white rounded h-fit"
                        onClick={ newCard }
                    >
                    +
                    </button>
                </div>
                { showForm ? <CarForm updateCars={ updateCars } setShowForm={ setShowForm } /> : '' }
            </div>
        </div>
    );
}
