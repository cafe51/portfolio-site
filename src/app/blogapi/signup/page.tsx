/* eslint-disable no-useless-escape */
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { addNewUserFromApiStateThunkAction } from '../redux/actions';
import { Dispatch, UserType } from '../types';
import { useDispatch } from 'react-redux';
import { ProfileImage } from '../profileImage';
import { getUsersApi } from '../api';
import BlogApiMainHeader from '../BlogApiMainHeader';

export default function SignUp() {
    const dispatch: Dispatch = useDispatch();
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState('');
    const [registerValues, setRegisterValues] = useState({
        name: '',
        email: '',
        password: '',
        passwordAgain: '',
        image: '',
    });
    const [ editImageMode, setEditImageMode ] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setRegisterValues({ ...registerValues, [name]: value });
    };

    const validateEmail = (email: string) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const isDisable = () => {
        const name = registerValues.name.length > 0;
        const email = validateEmail(registerValues.email);
        const password = registerValues.password.length > 0;
        const passwordAgain = registerValues.passwordAgain.length > 0;
        const isTheSamePassword = (registerValues.password === registerValues.passwordAgain);
        const properties = [email, password, name, passwordAgain, isTheSamePassword];
        return !properties.every(property => property);
    };
    

    useEffect(() => {
        const userFromLocalStorage = localStorage.getItem('userData');
        const userData = userFromLocalStorage ? JSON.parse(userFromLocalStorage) : null;
        if (userData && userData.token) {
            router.push('blogapi/');
        }
    });

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newUserData = {
            displayName: registerValues.name,
            email: registerValues.email,
            password: registerValues.password,
            image: registerValues.image,
        };
        const response = await dispatch(addNewUserFromApiStateThunkAction(newUserData));
        if(response === 409) { setErrorMessage('Email já cadastro');}
        if(response === 400) { setErrorMessage('Insira um email válido');}

        if(response.token) {
            const allUsers = await getUsersApi(response.token);
            const user = allUsers.find((myUser: UserType) => myUser.email === registerValues.email);
    
            const userData = { user, token: response.token };
            localStorage.setItem('userData', JSON.stringify(userData));
    
            router.push('/blogapi');
        }

    };

    return(
        <div className='flex flex-col w-full h-full '>
            <BlogApiMainHeader />

            <section className='flex flex-col items-center self-center justify-center h-full p-6 bg-gray-200 rounded shadow md:w-2/5'>
                <h1>Crie sua conta</h1>
                <div className='flex flex-col items-center gap-2 text-sm'>
                    <ProfileImage height='h-[50px]' width='w-[50px]' imageUrl={ registerValues.image } signUp={ true } />
                    {
                        editImageMode
                            ? 
                            <label className='flex w-full gap-1' htmlFor="image">
                                <input
                                    name='image'
                                    type='text'
                                    className="w-full text-center"
                                    placeholder="https://exemplo.png"
                                    minLength={ 6 }
                                    value={ registerValues.image }
                                    onChange={ handleChange }
                                />
                                <button
                                    className='p-1 px-2 text-white bg-green-600 rounded hover:bg-green-700'
                                    onClick={ () => setEditImageMode(false) }
                                >
                                    Ok
                                </button>
                            </label>

                            :
                            <button
                                className='w-full p-1 px-2 text-white bg-green-600 rounded hover:bg-green-700'
                                onClick={ () => { setEditImageMode(true); } }
                            >
                        Escolher Imagem de Perfil
                            </button>
                            
                    }
                    
                </div>
                <form
                    className='flex flex-col items-center justify-center gap-10 p-6'
                    method="post"
                    onSubmit={ (e) => handleSubmit(e) }
                >
                    <div className="w-full">
                        <label className='flex gap-4' htmlFor="name">
                            <input
                                name='name'
                                type='text'
                                className="w-full text-xl text-center"
                                placeholder="nome"
                                minLength={ 8 }
                                maxLength={ 16 }
                                required
                                onInvalid={ event => {
                                    const target = event.target as HTMLInputElement;
                                    target.setCustomValidity('O nome deve ter entre 2 e 16 caracteres.');
                                } }
                                onInput={ event => {
                                    const target = event.target as HTMLInputElement;
                                    target.setCustomValidity('');
                                } }
                                value={ registerValues.name }
                                onChange={ handleChange }
                            />
                        </label>
                    </div>
                    <div className="flex flex-col items-center w-full">
                        <label className='flex gap-4' htmlFor="email">
                            <input
                                name='email'
                                type='email'
                                className="w-full text-xl text-center"
                                placeholder="email"
                                minLength={ 12 }
                                maxLength={ 28 }
                                required
                                onInvalid={ event => {
                                    const target = event.target as HTMLInputElement;
                                    target.setCustomValidity('O email deve ter entre 6 e 28 caracteres.');
                                } }
                                onInput={ event => {
                                    const target = event.target as HTMLInputElement;
                                    target.setCustomValidity('');
                                } }
                                value={ registerValues.email }
                                onChange={ handleChange }
                            />
                        </label>
                        <p className='text-red-600'>{ errorMessage }</p>
                    </div>
                    <div className="w-full">
                        <label className='flex gap-4' htmlFor="password">
                            <input
                                className="w-full text-xl text-center"
                                name='password'
                                type='password'
                                placeholder="senha"
                                minLength={ 6 }
                                maxLength={ 16 }
                                required
                                onInvalid={ event => {
                                    const target = event.target as HTMLInputElement;
                                    target.setCustomValidity('a senha deve ter entre 6 e 16 caracteres.');
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
                    <div className="w-full">
                        <label className='flex gap-4' htmlFor="passwordAgain">
                            <input
                                name='passwordAgain'
                                type='password'
                                className="w-full text-xl text-center"
                                placeholder="repita a senha"
                                minLength={ 6 }
                                maxLength={ 16 }
                                required
                                onInvalid={ event => {
                                    const target = event.target as HTMLInputElement;
                                    if(registerValues.password !== registerValues.passwordAgain) {
                                        target.setCustomValidity('Repita a mesma senha');
                                    }
                                } }
                                onInput={ event => {
                                    const target = event.target as HTMLInputElement;
                                    
                                    target.setCustomValidity('');
                                } }
                                value={ registerValues.passwordAgain }
                                onChange={ handleChange }
                            />
                        </label>
                    </div>
                    <button
                        className={ `${ isDisable() ? 'bg-gray-300 ' : 'bg-blue-600 hover:bg-blue-800 ' } w-full p-3 text-white rounded` }
                        type="submit"
                        disabled={ isDisable() }
                    >
                        Pronto
                    </button>
                </form>
                <div className="w-full">
                    <p>Já tem uma conta? <a className='text-blue-500' href="/blogapi/login">Entrar</a></p>
                </div>
            </section>
        </div>
    );
}