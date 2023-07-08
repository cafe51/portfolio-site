import { CarType } from './interfaces';
import { deleteCar } from './api';
import { useState } from 'react';
import CarForm from './carForm';

type CardCarProps = {
    carData: CarType;
    updateCars: () => Promise<void>;
}
  
export default function CardCar({ carData, updateCars }: CardCarProps){
    const [editMode, setEditMode] = useState(false);

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleDelete = async() => {
        carData.id ? await deleteCar(carData.id) : '';
        updateCars();
    };

    return (
        editMode ? 
            <CarForm updateCars={ updateCars } carData={ carData } setShowForm={ setEditMode } /> :
            <div className=" bg-gray-400 w-[200px] h-44 flex flex-col items-center rounded-lg shadow-lg">
                <button 
                    onClick={ handleEdit } 
                    className="absolute bg-blue-900 p-3 text-white rounded self-start z-10 px-2" 
                >
                E
                </button>
                <button
                    onClick={ handleDelete }
                    className="absolute bg-red-900 p-3 text-white rounded self-end z-10 px-2"
                >
                X
                </button>
                <div>
                    <div className="mt-2">{ carData.model }</div>
                </div>
                <div>
                    <div>ano: { carData.year }</div>
                    <div>cor: { carData.color }</div>
                    <div>Portas: { carData.doorsQty }</div>
                    <div>Assentos:{ carData.seatsQty }</div>
                </div>
                <div>
                    <div className="mb-2">R$ { carData.buyValue } </div>
                </div>

            </div>
    );
}
