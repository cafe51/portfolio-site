import { CarType, MotorcycleType } from './interfaces';
import { deleteVehicle } from './api';
import { useState } from 'react';
import CarForm from './CarForm';
import CarInfo from './CarInfo';
import MotorcycleForm from './MotorcycleForm';
import MotorcycleInfo from './MotorcycleInfo';
import { BsFillTrashFill } from 'react-icons/bs';
import { RiEditBoxFill } from 'react-icons/ri';

type CardCarProps = {
    vehicleData: CarType | MotorcycleType;
    updateVehicleState: (vehicleType: string) => Promise<void>;
    vehicleType: string;
}
  
export default function CardVehicle({ vehicleData, updateVehicleState, vehicleType }: CardCarProps){
    const [editMode, setEditMode] = useState(false);

    const handleEdit = () => {
        setEditMode(true);
    };

    const closeEditMode = () => {
        setEditMode(false);
    };

    const handleDelete = async() => {
        vehicleData.id ? await deleteVehicle(vehicleType, vehicleData.id) : '';
        updateVehicleState(vehicleType);
    };

    return (
        editMode
            ? vehicleType === 'cars'
                ? <CarForm updateVehicleState={ updateVehicleState } carData={ vehicleData as CarType }setShowForm={ setEditMode } />
                : <MotorcycleForm updateVehicleState={ updateVehicleState } motorcycleData={ vehicleData as MotorcycleType } setShowForm={ setEditMode } />
            :
            <div className=" bg-gray-400 w-[250px] h-72 flex flex-col items-center rounded-lg shadow-lg">
                <div className="flex w-full justify-between">
                    <button 
                        onClick={ handleEdit } 
                        className="bg-blue-900 p-3 text-white rounded z-10 px-2" 
                    >
                        <RiEditBoxFill />
                    </button>
                    <button
                        onClick={ editMode ? closeEditMode : handleDelete }
                        className="bg-red-900 p-3 text-white rounded z-10 px-2"
                    >
                        <BsFillTrashFill />
                    </button>
                </div>
                
                { vehicleType === 'cars'
                    ?  <CarInfo carData={ vehicleData as CarType } />

                    :  <MotorcycleInfo motorcycleData={ vehicleData as MotorcycleType } /> }

            </div>
    );
}
