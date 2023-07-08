import { CarType } from './interfaces';
import { deleteVehicle } from './api';
import { useState } from 'react';
import CarForm from './carForm';
import CarInfo from './CarInfo';

type CardCarProps = {
    carData: CarType;
    updateVehicleState: () => Promise<void>;
}
  
export default function CardCar({ carData, updateVehicleState }: CardCarProps){
    const [editMode, setEditMode] = useState(false);

    const handleEdit = () => {
        setEditMode(true);
    };

    const closeEditMode = () => {
        setEditMode(false);
    };

    const handleDelete = async() => {
        carData.id ? await deleteVehicle('cars', carData.id) : '';
        updateVehicleState();
    };

    return (
        editMode ? 
            <CarForm updateVehicleState={ updateVehicleState } carData={ carData } setShowForm={ setEditMode } /> :
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
                <CarInfo carData={ carData } />

            </div>
    );
}
