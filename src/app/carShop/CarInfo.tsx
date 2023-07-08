import { CarType } from './interfaces';

type CarInfoProps = {
    carData: CarType;
}

export default function CarInfo({ carData }: CarInfoProps) {
    return (
        <div className="flex flex-col gap-2">
            <div className="">{ carData.model }</div>
            <div>ano: { carData.year }</div>
            <div>cor: { carData.color }</div>
            <div>Portas: { carData.doorsQty }</div>
            <div>Assentos:{ carData.seatsQty }</div>
            <div className="">R$ { carData.buyValue } </div>
        </div>
    );
}