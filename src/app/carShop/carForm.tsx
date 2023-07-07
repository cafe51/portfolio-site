'use client';
import { useState } from 'react';
import { carRegister } from './api';

export default function CarForm() {
    // const [isDisabled, setIsDisabled] = useState(true);
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
        // setIsDisabled(true);
    };

    const handleSubmit = async(e: any) => {
        e.preventDefault();
        await carRegister(registerValues);
    };

    return (
        <div className=" bg-gray-400 w-fit flex flex-col items-center rounded-lg shadow-lg">
            <form
                method="post"
                onSubmit={ (e) => handleSubmit(e) }
            >
                <label className='flex' htmlFor="model">
                    <p>Modelo:</p>
                    <input
                        type="text"
                        name="model"
                        placeholder="Ex.: Fiat Uno"
                        minLength={ 12 }
                        value={ registerValues.model }
                        onChange={ handleChange }
                    />
                </label>
                <label className='flex' htmlFor="year">
                    <p>Ano:</p>
                    <input
                        type="year"
                        name="year"
                        placeholder="Ex.: 1998"
                        value={ registerValues.year }
                        onChange={ handleChange }
                    />
                </label>
                <label className='flex' htmlFor="buyValue">
                    <p>Senha:</p>
                    <input
                        type="buyValue"
                        name="buyValue"
                        placeholder="Digite um preço"
                        value={ registerValues.buyValue }
                        onChange={ handleChange }
                    />
                </label>
                <label className='flex' htmlFor="doorsQty">
                    <p>Portas</p>
                    <input
                        type="doorsQty"
                        name="doorsQty"
                        placeholder="Quantidade de portas"
                        value={ registerValues.doorsQty }
                        onChange={ handleChange }
                    />
                </label>
                <label className='flex' htmlFor="seatsQty">
                    <p>Senha:</p>
                    <input
                        type="seatsQty"
                        name="seatsQty"
                        placeholder="Quantidade de assentos"
                        value={ registerValues.seatsQty }
                        onChange={ handleChange }
                    />
                </label>
                <div>
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
