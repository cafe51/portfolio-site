import { MotorcycleType } from './interfaces';

type MotorcycleInfoProps = {
    motorcycleData: MotorcycleType;
}

export default function MotorcycleInfo({ motorcycleData }: MotorcycleInfoProps) {
    return (
        <div className="flex flex-col gap-2 mt-2">
            <div className=""><h2>{ motorcycleData.model }</h2></div>
            <div><strong>Ano:</strong> { motorcycleData.year }</div>
            <div><strong>Cor:</strong> { motorcycleData.color }</div>
            <div><strong>Categoria:</strong> { motorcycleData.category }</div>
            <div><strong>Capacidade do motor:</strong> { motorcycleData.engineCapacity }</div>
            <div className=""><h2>R$ { motorcycleData.buyValue }</h2> </div>
        </div>
    );
}