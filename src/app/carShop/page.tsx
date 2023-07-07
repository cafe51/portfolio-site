import { getCars } from './api';
import CardCar from './carCard';
import { CarType } from './interfaces';

export default async function CarShop(){

    const data: CarType[] = await getCars();
    return (
        <div className=" bg-gray-200">
            <CardCar carData={ data[0] }/>
        </div>
    );
}


