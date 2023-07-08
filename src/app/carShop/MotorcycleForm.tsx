'use client';
import { useState } from 'react';
import { registerVehicle, updateVehicle } from './api';
import { MotorcycleType } from './interfaces';

type MotorcycleFormProps = {
    updateVehicleState: (vehicleType: string) => Promise<void>;
    setShowForm: (formStatus: boolean) => void;
    motorcycleData?: MotorcycleType;
}

export default function MotorcycleForm({ updateVehicleState, setShowForm, motorcycleData }: MotorcycleFormProps) {
    const [registerValues, setRegisterValues] = useState(motorcycleData || {
        model: '',
        year: 1,
        color: '',
        buyValue: 1,
        category: '',
        engineCapacity: 1,
    });

    const handleChange = ({ target: { name, value } }: any) => {
        setRegisterValues({ ...registerValues, [name]: value });
    };

    const closeForm = () => {
        setShowForm(false);
    };

    const handleSubmit = async(e: any) => {
        e.preventDefault();
        if (motorcycleData && motorcycleData.id) {
            await updateVehicle('motorcycles', registerValues, motorcycleData.id);
        } else {
            await registerVehicle('motorcycles', registerValues);
        }
        setShowForm && setShowForm(false);
        updateVehicleState('motorcycles');
    };

    return (
        <div className=" bg-gray-400 w-[250px] h-72 flex flex-col rounded-lg shadow-lg">
            <form
                method="post"
                onSubmit={ (e) => handleSubmit(e) }
                className='flex flex-col gap-2'
            >
                <div className="flex w-full justify-between">
                    <button 
                        type="submit"
                        className="bg-green-700 p-3 text-white rounded z-10 px-2"

                    >
                      V
                    </button>
                    <button
                        className="bg-red-900 p-3 text-white rounded z-10 px-2" 
                        onClick={ closeForm }
                    >
                      X
                    </button>
                </div>
                <div className="px-4">
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
                    <label className='flex justify-between' htmlFor="category">
                        <p>categoria</p>
                        <input
                            type="text"
                            name="category"
                            placeholder="categoria"
                            value={ registerValues.category }
                            onChange={ handleChange }
                            className='w-[120px]'
                        />
                    </label>
                    <label className='flex justify-between' htmlFor="engineCapacity">
                        <p>capacidade do motor:</p>
                        <input
                            type="number"
                            name="engineCapacity"
                            placeholder="capacidade do motor"
                            value={ registerValues.engineCapacity }
                            onChange={ handleChange }
                            className='w-[120px]'
                        />
                    </label>
                </div>
            </form>
        </div>
    );
}
