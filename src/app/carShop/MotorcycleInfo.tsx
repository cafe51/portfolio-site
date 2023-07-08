import { MotorcycleType } from './interfaces';

type MotorcycleInfoProps = {
    motorcycleData: MotorcycleType;
}

export default function MotorcycleInfo({ motorcycleData }: MotorcycleInfoProps) {
    return (
        <div className="flex flex-col gap-2">
            <div className="">{ motorcycleData.model }</div>
            <div>ano: { motorcycleData.year }</div>
            <div>cor: { motorcycleData.color }</div>
            <div>categoria: { motorcycleData.category }</div>
            <div>capacidade do motor:{ motorcycleData.engineCapacity }</div>
            <div className="">R$ { motorcycleData.buyValue } </div>
        </div>
    );
}