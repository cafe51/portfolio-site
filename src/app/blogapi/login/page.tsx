'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { UserType } from '../types';
import { getUsersApi, loginRequestApi } from '../api';
import BlogApiMainHeader from '../BlogApiMainHeader';
import { ImSpinner9 } from 'react-icons/im';

export default function Login() {
    const router = useRouter();
    const [loadingButton, setLoadingButton] = useState(true);
    const [loadingComponent, setLoadingComponent] = useState(true);
    const [loginErrorMessage, setLoginErrorMessage] = useState(false);
    const [registerValues, setRegisterValues] = useState({
        email: '',
        password: '',
    });

    useEffect(() => {
        setLoadingButton(false);
        setLoadingComponent(false);
        
    }, []);

    useEffect(() => {
        const userFromLocalStorage = localStorage.getItem('userData');
        const userData = userFromLocalStorage ? JSON.parse(userFromLocalStorage) : null;
        if (userData && userData.token) {
            setLoadingButton(true);
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
            setLoadingButton(true);
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
            setLoadingButton(false);
        }

    };
    
    return(
        <div className='flex flex-col items-center w-full h-full gap-2'>
            <BlogApiMainHeader />
            <section className='flex flex-col items-center gap-4 p-4 bg-gray-200 md:w-2/5 '>
                <div className='flex flex-col items-center justify-center text-center '>
                    <h1>Bem vindo ao Blog!</h1>
                    <p>Essa é uma interface feita para interagir com a API que eu desenvolvi.
                    Você pode fazer um cadastro, login e explorar a aplicação. É possível criar, editar e deletar posts.
                    Abaixo os links para a API e para o repositório com o código fonte</p>
                </div>
                <div className='flex flex-col self-start w-full gap-2 px-4 pb-4 bg-gray-200 text-start'>
                    <p><strong>API:</strong> <a className='text-blue-600 underline' href='https://car-shop-japhe.up.railway.app/'>https://blog-api-japhe.up.railway.app/</a></p>
                    <p><strong>Repositório:</strong> <a className='text-blue-600 underline' href='https://github.com/cafe51/car-shop'>https://github.com/cafe51/blog-api</a></p>
                </div>
            </section>
            <section className='flex flex-col items-center self-center justify-center w-full h-full p-4 bg-gray-200 rounded shadow md:w-2/5'>
                <h1>Entre na sua conta</h1>
                <form 
                    className='flex flex-col items-center justify-center gap-10 p-6'
                    method="post"
                    onSubmit={ (e) => handleSubmit(e) }
                >
                    <div className="w-full">
                        <label className={ `flex gap-4 ${loadingComponent ? 'animate-pulse' : ''}` } htmlFor="email">
                            <input
                                type="email"
                                name="email"
                                className='w-full p-2 text-xl text-center bg-white'
                                placeholder={ `${loadingComponent ? '' : 'insira seu email'}` }
                                disabled={ loadingComponent }
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
                        <label className={ `flex gap-4 ${loadingComponent ? 'animate-pulse' : ''}` } htmlFor="password">
                            <input
                                className='w-full p-2 text-xl text-center bg-white'
                                type="password"
                                name="password"
                                placeholder={ `${loadingComponent ? '' : 'insira sua senha'}` }
                                disabled={ loadingComponent }
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
                        className={ `${ isDisable() || loadingButton ? 'bg-gray-300 ' : 'bg-green-700 ' }p-3 text-white flex justify-center text-center rounded w-full` }
                        type="submit"
                        disabled={ isDisable() }
                    >
                        { loadingButton ? (
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
            <div className='flex flex-col items-center justify-center gap-2 p-4 text-center bg-gray-200 md:w-2/5'>
                <p>cadastre-se ou logue com a conta de visitante:</p>
                <div className='text-start'>
                    <p><strong>email: </strong>visitante@email.com</p>
                    <p><strong>senha: </strong>123456</p>
                </div>
            </div>
        </div>
        
    );
}

