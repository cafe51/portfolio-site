import { IMotorcycle } from './interfaces';

type MotorcycleInfoProps = {
    motorcycleData: IMotorcycle;
}

export default function MotorcycleInfo({ motorcycleData }: MotorcycleInfoProps) {
    return (
        <div className="flex flex-col gap-2">
            <div className="">{ motorcycleData.model }</div>
            <div>ano: { motorcycleData.year }</div>
            <div>cor: { motorcycleData.color }</div>
            <div>Portas: { motorcycleData.category }</div>
            <div>Assentos:{ motorcycleData.engineCapacity }</div>
            <div className="">R$ { motorcycleData.buyValue } </div>
        </div>
    );
}