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

const anoAtual = () => {
    const dataAtual = new Date();
    const ano = dataAtual.getFullYear();
    return ano;
};

export default function CarForm({ updateVehicleState, setShowForm, carData }: CarFormProps) {
    const [registerValues, setRegisterValues] = useState(carData || {
        model: '',
        year: 2023,
        color: '',
        buyValue: 1,
        doorsQty: 1,
        seatsQty: 1,
    });

    const isDisable = () => {
        const model = registerValues.model.length > 0;
        const year = registerValues.year > 0;
        const color = registerValues.color.length > 0;
        const buyValue = registerValues.buyValue > 0;
        const doorsQty = registerValues.doorsQty > 0;
        const seatsQty = registerValues.seatsQty > 0;
        const properties = [model, year, color, buyValue, doorsQty, seatsQty];
        return !properties.every(property => property);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
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
                        className={ `${ isDisable() ? 'bg-gray-300 ' : 'bg-green-700 ' }p-3 text-white rounded` }
                        disabled={ isDisable() }
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
                            maxLength={ 18 }
                            onInvalid={ event => {
                                const target = event.target as HTMLInputElement;
                                target.setCustomValidity('Por favor, insira ao menos 6 caracteres.');
                            } }
                            onInput={ event => {
                                const target = event.target as HTMLInputElement;
                                target.setCustomValidity('');
                            } }
                            value={ registerValues.model }
                            onChange={ handleChange }
                            className='w-[120px]'
                        />
                    </label>
                    <label className='flex justify-between' htmlFor="year">
                        <p>Ano:</p>
                        <input
                            type="number"
                            name="year"
                            min={ 1886 }
                            max={ anoAtual() }
                            onInvalid={ event => {
                                const target = event.target as HTMLInputElement;
                                if (target.valueAsNumber < 1886) {
                                    target.setCustomValidity('Por favor, insira um ano maior que 1885.');
                                } else if (target.valueAsNumber > anoAtual()) {
                                    target.setCustomValidity(`Por favor, insira um ano menor ou igual a ${anoAtual()}.`);
                                }
                            } }
                            onInput={ event => {
                                const target = event.target as HTMLInputElement;
                                target.setCustomValidity('');
                            } }
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
                            minLength={ 3 }
                            maxLength={ 12 }
                            onInvalid={ event => {
                                const target = event.target as HTMLInputElement;
                                target.setCustomValidity('Por favor, insira ao menos 3 caracteres.');
                            } }
                            onInput={ event => {
                                const target = event.target as HTMLInputElement;
                                target.setCustomValidity('');
                            } }
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
                            min={ 1 }
                            max={ 5 }
                            onInvalid={ event => {
                                const target = event.target as HTMLInputElement;
                                if (target.valueAsNumber < 1886) {
                                    target.setCustomValidity('Por favor, insira um número de portas maior que 0.');
                                } else if (target.valueAsNumber > anoAtual()) {
                                    target.setCustomValidity('Por favor, insira um número de portas menor 6.');
                                }
                            } }
                            onInput={ event => {
                                const target = event.target as HTMLInputElement;
                                target.setCustomValidity('');
                            } }
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
                            min={ 1 }
                            max={ 16 }
                            placeholder="Quantidade de assentos"
                            onInvalid={ event => {
                                const target = event.target as HTMLInputElement;
                                if (target.valueAsNumber < 1886) {
                                    target.setCustomValidity('Por favor, insira um número de assentos maior que 0.');
                                } else if (target.valueAsNumber > anoAtual()) {
                                    target.setCustomValidity('Por favor, insira um número de assentos menor 17.');
                                }
                            } }
                            onInput={ event => {
                                const target = event.target as HTMLInputElement;
                                target.setCustomValidity('');
                            } }
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
                            min={ 1 }
                            placeholder="Digite um preço"
                            value={ registerValues.buyValue }
                            onChange={ handleChange }
                            className='w-[120px]'
                        />
                    </label>
                    { isDisable() ? <p className='text-red-600 text-sm'>Preencha todos os campos</p> : '' }
                </div>
            </form>
        </div>
    );
}
