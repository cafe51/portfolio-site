'use client';
import { useState, useEffect } from 'react';
import { getVehicle } from './api';
import CardCar from './carCard';
import CarForm from './carForm';
import { CarType } from './interfaces';

export default function CarShop(){
    const [vehicles, setVehicles] = useState('cars');
    const [showForm, setShowForm] = useState(false);
    const [cars, setCars] = useState<CarType[]>([]);

    const changeForCars = () => {
        setVehicles('cars');
    };

    const changeForMotorcycles = () => {
        setVehicles('motorcycles');
    };


    const updateVehicleState = async() => {
        const carsData = await getVehicle('cars');
        setCars(carsData);
    };

    const newCard = () => {
        setShowForm(true);
    };


    useEffect(() => {
        updateVehicleState();
    }, []);

    return (
        <div>
            <div className=" flex gap-4 items-center justify-center">
                <button
                    className=" bg-green-700 p-3 text-white rounded h-fit"
                    disabled={ vehicles == 'motorcycles' ? false : true }
                    onClick={ changeForCars }
                >
            Carros
                </button>
                <button
                    className=" bg-green-700 p-3 text-white rounded h-fit"
                    onClick={ changeForMotorcycles }
                    disabled={ vehicles == 'cars' ? false : true }
                >
            Motos
                </button>
            </div>
            <div className='text-center'>
                <h1>{ vehicles == 'cars' ? 'Carros' : 'Motos' }</h1>
            </div>
            <div className="bg-gray-200 flex flex-wrap items-center gap-4 p-4">

                { cars.map((carData) => <CardCar key={ carData.id } carData={ carData } updateVehicleState={ updateVehicleState } />) }
                <div className=" w-fit h-44 flex flex-col items-center justify-center">
                    <button
                        className=" bg-green-700 p-3 text-white rounded h-fit"
                        onClick={ newCard }
                    >
                    +
                    </button>
                </div>
                { showForm ? <CarForm updateVehicleState={ updateVehicleState } setShowForm={ setShowForm } /> : '' }
            </div>
        </div>
    );
}
