'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { UserType } from '../types';
import { getUsersApi, loginRequestApi } from '../api';

export default function Login() {
    const router = useRouter();
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
            const { token } = await loginRequestApi(registerValues);
            const allUsers = await getUsersApi(token);
            const user = allUsers.find((myUser: UserType) => myUser.email === registerValues.email);
            const userData = { user, token };
            localStorage.setItem('userData', JSON.stringify(userData));


            router.push('/blogapi');

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
                <div>
                    <p>Não tem uma conta? <a href="/blogapi/signup">Cadastre-se</a></p>
                </div>
            </div>
        </section>
    );
}

