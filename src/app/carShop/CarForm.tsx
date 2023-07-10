'use client';
import { useState } from 'react';
import { registerVehicle, updateVehicle } from './api';
import { CarType } from './interfaces';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { ImCancelCircle } from 'react-icons/im';

type CarFormProps = {
    updateVehicleState: (vehicleType: string) => Promise<void>;
    setShowForm: (formStatus: boolean) => void;
    carData?: CarType;
}

export default function CarForm({ updateVehicleState, setShowForm, carData }: CarFormProps) {
    const [registerValues, setRegisterValues] = useState(carData || {
        model: '',
        year: 1,
        color: '',
        buyValue: 1,
        doorsQty: 1,
        seatsQty: 1,
    });

    const handleChange = ({ target: { name, value } }: any) => {
        setRegisterValues({ ...registerValues, [name]: value });
    };

    const closeForm = () => {
        setShowForm(false);
    };

    const handleSubmit = async(e: any) => {
        e.preventDefault();
        if (carData && carData.id) {
            await updateVehicle('cars', registerValues, carData.id);
        } else {
            await registerVehicle('cars', registerValues);
        }
        setShowForm && setShowForm(false);
        updateVehicleState('cars');
    };

    return (
        <div className=" bg-gray-400 w-[250px] h-72 flex flex-col rounded-lg shadow-lg p-2">
            <form
                method="post"
                onSubmit={ (e) => handleSubmit(e) }
                className='flex flex-col gap-2'
            >
                <div className="flex w-full justify-between">
                    <button 
                        type="submit"
                        className="bg-green-700 p-3 text-white rounded"

                    >
                        <BsFillCheckCircleFill />
                    </button>
                    <button
                        className="bg-red-900 p-3 text-white rounded" 
                        onClick={ closeForm }
                    >
                        <ImCancelCircle />
                    </button>
                </div>
                <div className="px-4 flex flex-col gap-2">
                    <label className='flex justify-between' htmlFor="model">
                        <p>Modelo:</p>
                        <input
                            type="text"
                            name="model"
                            placeholder="Ex.: Fiat Uno"
                            minLength={ 6 }
                            value={ registerValues.model }
                            onChange={ handleChange }
                            className='w-[120px]'
                        />
                    </label>
                    <label className='flex justify-between' htmlFor="year">
                        <p>Ano:</p>
                        <input
                            type="year"
                            name="year"
                            placeholder="Ex.: 1998"
                            value={ registerValues.year }
                            onChange={ handleChange }
                            className='w-[120px]'
                        />
                    </label>
                    <label className='flex justify-between' htmlFor="color">
                        <p>Cor:</p>
                        <input
                            type="text"
                            name="color"
                            placeholder="Digite uma cor"
                            value={ registerValues.color }
                            onChange={ handleChange }
                            className='w-[120px]'
                        />
                    </label>
                    <label className='flex justify-between' htmlFor="doorsQty">
                        <p>Portas</p>
                        <input
                            type="number"
                            name="doorsQty"
                            placeholder="Quantidade de portas"
                            value={ registerValues.doorsQty }
                            onChange={ handleChange }
                            className='w-[120px]'
                        />
                    </label>
                    <label className='flex justify-between' htmlFor="seatsQty">
                        <p>Assentos:</p>
                        <input
                            type="number"
                            name="seatsQty"
                            placeholder="Quantidade de assentos"
                            value={ registerValues.seatsQty }
                            onChange={ handleChange }
                            className='w-[120px]'
                        />
                    </label>
                    <label className='flex justify-between' htmlFor="buyValue">
                        <p>Preço:</p>
                        <input
                            type="number"
                            name="buyValue"
                            placeholder="Digite um preço"
                            value={ registerValues.buyValue }
                            onChange={ handleChange }
                            className='w-[120px]'
                        />
                    </label>
                </div>
            </form>
        </div>
    );
}
