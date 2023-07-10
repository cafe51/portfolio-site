'use client';
import { useState, useEffect } from 'react';
import { getVehicle } from './api';
import CardVehicle from './CardVehicle';
import CarForm from './CarForm';
import { CarType, MotorcycleType } from './interfaces';
import MotorcycleForm from './MotorcycleForm';
// import { BsFillPlusCircleFill } from 'react-icons/bs';
import { BsPlusCircle } from 'react-icons/bs';

export default function CarShop(){
    const [vehicles, setVehicles] = useState('cars');
    const [showForm, setShowForm] = useState(false);
    const [cars, setCars] = useState<CarType[]>([]);
    const [motorcycles, setMotorcycles] = useState<MotorcycleType[]>([]);

    const changeForCars = () => {
        setVehicles('cars');
    };

    const changeForMotorcycles = () => {
        setVehicles('motorcycles');
    };


    const updateVehicleState = async(vehicleType: string) => {
        const vehicleData = await getVehicle(vehicleType);
        vehicleType === 'cars' ? setCars(vehicleData) : setMotorcycles(vehicleData);
    };

    const newCard = () => {
        setShowForm(true);
    };


    useEffect(() => {
        updateVehicleState(vehicles);
    }, [vehicles]);

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

                { vehicles === 'cars'
                    ? cars.map((carData) => <CardVehicle key={ carData.id } vehicleData={ carData } updateVehicleState={ updateVehicleState } vehicleType={ vehicles } />)
                    : motorcycles.map((motorcycleData) => <CardVehicle key={ motorcycleData.id } vehicleData={ motorcycleData } updateVehicleState={ updateVehicleState } vehicleType={ vehicles } />)
                }
                <div className=" w-fit h-44 flex flex-col items-center justify-center">
                    <button
                        className=" bg-green-700 rounded-full text-white h-fit"
                        onClick={ newCard }
                    >
                        <BsPlusCircle size='50'/>
                    </button>
                </div>
                { showForm
                    ? 
                    vehicles === 'cars'
                        ? <CarForm updateVehicleState={ updateVehicleState } setShowForm={ setShowForm } />
                        : <MotorcycleForm updateVehicleState={ updateVehicleState } setShowForm={ setShowForm } />
                    : '' }
            </div>
        </div>
    );
}
