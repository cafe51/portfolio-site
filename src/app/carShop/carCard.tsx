import { CarType } from './interfaces';
import { deleteCar } from './api';

type CardCarProps = {
    carData: CarType;
    updateCars: () => Promise<void>;
}
  
export default function CardCar({ carData, updateCars }: CardCarProps){

    const handleDelete = async() => {
        carData.id ? await deleteCar(carData.id) : '';
        updateCars();
    };

    return (
        <div className=" bg-gray-400 w-[200px] flex flex-col items-center rounded-lg shadow-lg">
            <button className="absolute bg-blue-900 p-3 text-white rounded self-start z-10 px-2" >E</button>
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
