'use client';

import { useState } from 'react';
// import { getUsersApi, loginRequestApi } from '../api';

export default function Login() {
    const [loginErrorMessage, setLoginErrorMessage] = useState(false);
    const [registerValues, setRegisterValues] = useState({
        email: '',
        password: '',
    });
    
    const isDisable = () => {
        const email = registerValues.email.length > 0;
        const password = registerValues.password.length > 0;
        const properties = [email, password];
        return !properties.every(property => property);
    };
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setRegisterValues({ ...registerValues, [name]: value });
    };
    
    const handleSubmit = async(e: any) => {
        try {
            e.preventDefault();
            // const { response } = await loginRequestApi(registerValues);
            // const userResponse = await getUsersApi();
            // console.log('LOGIN BEM SUCEDIDO', response);
            // console.log('USERS', userResponse);
        } catch({ response }: any) {
            console.log(response.request.status, response.request.statusText, response.data.message || response.data.error);

            setLoginErrorMessage(true);
        }

    };
    return(
        <section className='w-full h-screen flex flex-col justify-center items-center'>
            <div className='bg-gray-200 rounded shadow md:w-2/5'>
                <form 
                    className='flex flex-col gap-10 p-6 justify-center items-center'
                    method="post"
                    onSubmit={ (e) => handleSubmit(e) }
                >

                    <label className='flex gap-4' htmlFor="email">
                        <h2>e-mail</h2>
                        <input
                            type="text"
                            name="email"
                            placeholder="insira seu email"
                            minLength={ 6 }
                            maxLength={ 28 }
                            onInvalid={ event => {
                                const target = event.target as HTMLInputElement;
                                target.setCustomValidity('Por favor, insira um email válido.');
                            } }
                            onInput={ event => {
                                const target = event.target as HTMLInputElement;
                                target.setCustomValidity('');
                            } }
                            value={ registerValues.email }
                            onChange={ handleChange }
                            className='text-center'
                        />
                    </label>

                    <label className='flex gap-4' htmlFor="password">
                        <h2>senha</h2>
                        <input
                            type="password"
                            name="password"
                            placeholder="insira sua senha"
                            minLength={ 6 }
                            maxLength={ 16 }
                            onInvalid={ event => {
                                const target = event.target as HTMLInputElement;
                                target.setCustomValidity('Por favor, insira uma senha válida.');
                            } }
                            onInput={ event => {
                                const target = event.target as HTMLInputElement;
                                target.setCustomValidity('');
                            } }
                            value={ registerValues.password }
                            onChange={ handleChange }
                            className='text-center'
                        />
                    </label>
                    { loginErrorMessage && (
                        <p
                            className="text-red-600"
                        >
            Usuário ou senha inválidos
                        </p>
                    ) }
                    <button
                        type="submit"
                        className={ `${ isDisable() ? 'bg-gray-300 ' : 'bg-green-700 ' }p-3 text-white rounded` }
                        disabled={ isDisable() }
                    >
                        Login
                    </button>
                </form>
            </div>
        </section>
    );
}

