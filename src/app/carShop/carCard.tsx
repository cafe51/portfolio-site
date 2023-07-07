import { CarType } from './interfaces';

type CardCarProps = {
    carData: CarType;
  }
  
export default async function CardCar({ carData }: CardCarProps){

    return (
        <div className=" bg-gray-400 w-[200px] flex flex-col items-center p-4 rounded-lg shadow-lg
        transition-transform duration-500 ease-in-out transform hover:scale-110">
            <div>
                <button>X</button>
                <div>{ carData.model }</div>
            </div>
            <div>
                <div>cor: { carData.color }</div>
                <div>Portas: { carData.doorsQty }</div>
                <div>Assentos:{ carData.seatsQty }</div>
            </div>
            <div>
                <div>R$ { carData.buyValue } </div>
            </div>

        </div>
    );
}


