import { MotorcycleType } from './interfaces';

type MotorcycleInfoProps = {
    motorcycleData: MotorcycleType;
}

export default function MotorcycleInfo({ motorcycleData }: MotorcycleInfoProps) {
    return (
        <div className="flex flex-col gap-2">
            <div className="">{ motorcycleData.model }</div>
            <div>Ano: { motorcycleData.year }</div>
            <div>Cor: { motorcycleData.color }</div>
            <div>Categoria: { motorcycleData.category }</div>
            <div>Capacidade do motor:{ motorcycleData.engineCapacity }</div>
            <div className="">R$ { motorcycleData.buyValue } </div>
        </div>
    );
}