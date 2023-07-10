import { CarType } from './interfaces';

type CarInfoProps = {
    carData: CarType;
}

export default function CarInfo({ carData }: CarInfoProps) {
    return (
        <div className="flex flex-col gap-2 mt-2">
            <div className=""><h2>{ carData.model }</h2></div>
            <div><strong>Ano:</strong>  { carData.year }</div>
            <div><strong>Cor:</strong>  { carData.color }</div>
            <div><strong>Portas:</strong>  { carData.doorsQty }</div>
            <div><strong>Assentos:</strong> { carData.seatsQty }</div>
            <div className=""><h2>R$ { carData.buyValue }</h2> </div>
        </div>
    );
}