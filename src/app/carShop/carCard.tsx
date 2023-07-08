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

    const closeEditMode = () => {
        setEditMode(false);
    };

    const handleDelete = async() => {
        carData.id ? await deleteCar(carData.id) : '';
        updateCars();
    };

    return (
        editMode ? 
            <CarForm updateCars={ updateCars } carData={ carData } setShowForm={ setEditMode } /> :
            <div className=" bg-gray-400 w-[250px] h-72 flex flex-col items-center rounded-lg shadow-lg">
                <div className="flex w-full justify-between">
                    <button 
                        onClick={ handleEdit } 
                        className="bg-blue-900 p-3 text-white rounded z-10 px-2" 
                    >
                    E
                    </button>
                    <button
                        onClick={ editMode ? closeEditMode : handleDelete }
                        className="bg-red-900 p-3 text-white rounded z-10 px-2"
                    >
                    X
                    </button>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="">{ carData.model }</div>
                    <div>ano: { carData.year }</div>
                    <div>cor: { carData.color }</div>
                    <div>Portas: { carData.doorsQty }</div>
                    <div>Assentos:{ carData.seatsQty }</div>
                    <div className="">R$ { carData.buyValue } </div>
                </div>

            </div>
    );
}
