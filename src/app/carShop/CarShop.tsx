'use client';
import { useState, useEffect } from 'react';
import { getVehicle } from './api';
import CardVehicle from './CardVehicle';
import CarForm from './CarForm';
import MotorcycleForm from './MotorcycleForm';
import { CarType, MotorcycleType } from './interfaces';
import { BsPlusCircle } from 'react-icons/bs';

export default function CarShop() {
    const [vehiclesType, setVehiclesType] = useState<'cars' | 'motorcycles'>('cars');
    const [showForm, setShowForm] = useState(false);
    const [vehicles, setVehicles] = useState<CarType[] | MotorcycleType[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const changeVehicleType = (type: 'cars' | 'motorcycles') => {
        setIsLoading(true);
        setIsLoading(false);
        setVehiclesType(type);
    };

    const updateVehicleState = async() => {
        const vehicleData = await getVehicle(vehiclesType);
        setVehicles(vehicleData);
    };

    const newCard = () => {
        setShowForm(true);
        setTimeout(() => {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }, 200);

    };

    useEffect(() => {
        setIsLoading(true);
        updateVehicleState();
        setIsLoading(false);
    }, [vehiclesType]);

    return (
        <div className='w-full'>
            <div className="flex gap-4 items-center justify-center p-4">
                <button
                    className={ `${vehiclesType == 'cars' ? 'bg-green-900 border-2 border-green-600': 'bg-green-700'} p-3 text-white rounded h-fit` }
                    disabled={ vehiclesType == 'motorcycles' ? false : true }
                    onClick={ () => changeVehicleType('cars') }
                >
                    Carros
                </button>
                <button
                    className={ `${vehiclesType == 'motorcycles' ? 'bg-green-900 border-2 border-green-600' : 'bg-green-700'} p-3 text-white rounded h-fit` }
                    disabled={ vehiclesType == 'cars' ? false : true }
                    onClick={ () => changeVehicleType('motorcycles') }
                >
                    Motos
                </button>
            </div>
            <div className='text-center p-4'>
                <h1>{ vehiclesType === 'cars' ? 'Carros' : 'Motos' }</h1>
            </div>
            <div className="bg-gray-200 flex flex-wrap items-center justify-center md:justify-start gap-4 p-4 text-center">
                { isLoading ? (
                    <h2>Loading...</h2>
                ) : (
                    <div className="bg-gray-200 flex flex-col md:flex md:flex-row md:flex-wrap justify-center items-center gap-4 p-4 text-center">
                        { vehicles.map((vehicleData) => <CardVehicle key={ vehicleData.id } vehicleData={ vehicleData } updateVehicleState={ updateVehicleState } vehicleType={ vehiclesType } />) }

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
                            vehiclesType === 'cars'
                                ? <CarForm updateVehicleState={ updateVehicleState } setShowForm={ setShowForm } />
                                : <MotorcycleForm updateVehicleState={ updateVehicleState } setShowForm={ setShowForm } />
                            : '' }
                    </div>
                ) }
            </div>
        </div>
    );
}
