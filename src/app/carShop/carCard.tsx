import { CarType } from './interfaces';

type CardCarProps = {
    carData: CarType;
  }
  
export default async function CardCar({ carData }: CardCarProps){

    return (
        <div className=" bg-gray-400 w-[200px] flex flex-col items-center rounded-lg shadow-lg">
            <button className="absolute bg-blue-900 p-3 text-white rounded self-start z-10 px-2" >E</button>
            <button className="absolute bg-red-900 p-3 text-white rounded self-end z-10 px-2" >X</button>
            <div>
                <div className="mt-2">{ carData.model }</div>
            </div>
            <div>
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


