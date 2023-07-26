'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { UserType } from '../types';
import { getUsersApi, loginRequestApi } from '../api';
import BlogApiMainHeader from '../BlogApiMainHeader';
import { ImSpinner9 } from 'react-icons/im';

export default function Login() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [loginErrorMessage, setLoginErrorMessage] = useState(false);
    const [registerValues, setRegisterValues] = useState({
        email: '',
        password: '',
    });

    useEffect(() => {
        const userFromLocalStorage = localStorage.getItem('userData');
        const userData = userFromLocalStorage ? JSON.parse(userFromLocalStorage) : null;
        if (userData && userData.token) {
            setLoading(true);
            router.push('blogapi/');
        }
    
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
    
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            setLoading(true);
            const { token } = await loginRequestApi(registerValues);
            const allUsers = await getUsersApi(token);
            const user = allUsers.find((myUser: UserType) => myUser.email === registerValues.email);
            const userData = { user, token };
            localStorage.setItem('userData', JSON.stringify(userData));


            router.push('/blogapi');

        } catch(error) {
            console.log('erro no login: ', error);

            setLoginErrorMessage(true);
        } finally {
            setLoading(false);
        }
        

    };
    
    return(
        <div className='flex flex-col w-full h-full'>
            <BlogApiMainHeader />
            <section className='flex flex-col items-center self-center justify-center w-full h-full bg-gray-200 rounded shadow md:w-2/5'>
                <h1>Entre na sua conta</h1>
                <form 
                    className='flex flex-col items-center justify-center gap-10 p-6'
                    method="post"
                    onSubmit={ (e) => handleSubmit(e) }
                >
                    <div className="w-full">
                        <label className='flex gap-4' htmlFor="email">
                            <input
                                type="email"
                                name="email"
                                className="w-full p-2 text-xl text-center"
                                placeholder="insira seu email"
                                minLength={ 12 }
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
                            />
                        </label>
                    </div>
                    <div className="w-full">
                        <label className='flex gap-4' htmlFor="password">
                            <input
                                className="w-full p-2 text-xl text-center"
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
                            
                            />
                        </label>
                    </div>

                    { loginErrorMessage && (
                        <p
                            className="text-red-600"
                        >
            Usuário ou senha inválidos
                        </p>
                    ) }
                    <button
                        className={ `${ isDisable() || loading ? 'bg-gray-300 ' : 'bg-green-700 ' }p-3 text-white flex justify-center text-center rounded w-full` }
                        type="submit"
                        disabled={ isDisable() }
                    >
                        { loading ? (
                            < ImSpinner9 className="text-gray-500 animate-spin"/>
                        ) : (
                            'Login'
                        ) }
                    </button>
                </form>
                <div>
                    <p>Não tem uma conta? <a className='text-blue-500' href="/blogapi/signup">Cadastre-se</a></p>
                </div>
            </section>
        </div>
        
    );
}

