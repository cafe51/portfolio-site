import { getCars } from './api';
import CardCar from './carCard';
import { CarType } from './interfaces';
import CarForm from './carForm';

export default async function CarShop(){

    const data: CarType[] = await getCars();
    return (
        <div className="bg-gray-200 flex items-center gap-4 p-4">
            { data.map((carData) => <div key={ carData.id }><CardCar carData={ carData } /></div>) }

            <button className=" bg-green-700 p-3 text-white rounded h-fit">+</button>

            <CarForm />
        </div>
    );
}


