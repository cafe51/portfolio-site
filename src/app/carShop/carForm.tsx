'use client';
import { useState } from 'react';
import { carRegister } from './api';

type CarFormProps = {
  updateCars: () => Promise<void>;
}


export default function CarForm({ updateCars }: CarFormProps) {
    const [registerValues, setRegisterValues] = useState({
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

    const handleSubmit = async(e: any) => {
        e.preventDefault();
        console.log('cadastrou', registerValues);
        await carRegister(registerValues);
        updateCars();
    };

    return (
        <div className=" bg-gray-400 w-[250px] flex flex-col rounded-lg shadow-lg">
            <form
                method="post"
                onSubmit={ (e) => handleSubmit(e) }
                className='mt-2 px-3 flex flex-col gap-2'
            >
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
                <div className='self-center'>
                    <button
                        className=" bg-green-700 p-3 text-white rounded h-fit"
                        type="submit"
                        // disabled={ isDisabled }
                    >
            Cadastrar
                    </button>
                </div>
            </form>
        </div>
    );
}
