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
import { ImSpinner9 } from 'react-icons/im';


export default function SignUp() {
    const dispatch: Dispatch = useDispatch();
    const [loadingButton, setLoadingButton] = useState(true);
    const [loadingComponent, setLoadingComponent] = useState(true);


    const router = useRouter();
    const [emailErrorMessage, setEmailErroMessage] = useState('');
    const [passwordErrorMessage, setPasswordErroMessage] = useState('');

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
        setLoadingButton(false);
        setLoadingComponent(false);
        
    }, []);

    useEffect(() => {
        if (registerValues.password !== registerValues.passwordAgain) {
            setPasswordErroMessage('A senhas devem ser as mesmas');
        } else {
            setPasswordErroMessage('');
        }
    }, [registerValues]);

    useEffect(() => {
        try {
            const userFromLocalStorage = localStorage.getItem('userData');
            const userData = userFromLocalStorage ? JSON.parse(userFromLocalStorage) : null;
            if (userData && userData.token) {
                setLoadingButton(true);
                router.push('blogapi/');
            }
        } catch(error) {
            console.log('erro no login: ', error);
        }
    });

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            setLoadingButton(true);
            const newUserData = {
                displayName: registerValues.name,
                email: registerValues.email,
                password: registerValues.password,
                image: registerValues.image,
            };
            const response = await dispatch(addNewUserFromApiStateThunkAction(newUserData));
            if(response === 409) { setEmailErroMessage('Email já cadastro');}
            if(response === 400) { setEmailErroMessage('Insira um email válido');}

            if(response.token) {
                const allUsers = await getUsersApi(response.token);
                const user = allUsers.find((myUser: UserType) => myUser.email === registerValues.email);
    
                const userData = { user, token: response.token };
                localStorage.setItem('userData', JSON.stringify(userData));
    
                router.push('/blogapi');
            }
        } catch(error) {
            console.log('erro no login: ', error);
        } finally {
            setLoadingButton(false);
            
        }

    };

    return(
        <div className='container flex flex-col items-center justify-between w-full h-full p-2 m-auto'>
            <BlogApiMainHeader />
            <section className='container flex flex-col items-center self-center justify-center p-6 bg-gray-200 rounded shadow md:w-2/5'>
                <h1>Crie sua conta</h1>
                <div className='flex flex-col items-center w-full gap-2 p-6 text-sm'>
                    <ProfileImage
                        height='h-[100px]'
                        width='w-[100px]'
                        imageUrl={ registerValues.image }
                        signUp={ true }
                        isLoading={ loadingComponent }
                    />
                    {
                        editImageMode
                            ? 
                            <label className='flex w-full gap-1' htmlFor="image">
                                <input
                                    name='image'
                                    type='text'
                                    className="w-full text-center"
                                    placeholder="https://exemplo.png"
                                    minLength={ 4 }
                                    value={ registerValues.image }
                                    onChange={ handleChange }
                                />
                                <button
                                    className='p-2 text-white bg-green-600 rounded hover:bg-green-700'
                                    onClick={ () => setEditImageMode(false) }
                                >
                                    Ok
                                </button>
                            </label>

                            :
                            <button
                                className={ `${ loadingButton ? 'bg-gray-300 ' : 'bg-green-600 hover:bg-green-700 ' }p-3 text-white flex justify-center text-center rounded w-full` }
                                onClick={ () => { setEditImageMode(true); } }
                            >
                                { loadingComponent ? (
                                    < ImSpinner9 className="text-gray-500 animate-spin"/>
                                ) : (
                                    'Escolher Imagem de Perfil'
                                ) }
                        
                            </button>
                    }
                </div>
                <form
                    className='flex flex-col items-center justify-center w-full gap-10 p-6'
                    method="post"
                    onSubmit={ (e) => handleSubmit(e) }
                >
                    <div className="w-full">
                        <label className={ `flex gap-4 ${loadingComponent ? 'animate-pulse' : ''}` } htmlFor="name">
                            <input
                                name='name'
                                type='text'
                                className='w-full p-2 text-xl text-center bg-white'
                                placeholder={ `${loadingComponent ? '' : 'nome'}` }
                                minLength={ 8 }
                                maxLength={ 16 }
                                required
                                disabled={ loadingComponent }
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
                    <div className="w-full">
                        <label className={ `flex gap-4 ${loadingComponent ? 'animate-pulse' : ''}` } htmlFor="email">
                            <input
                                name='email'
                                type='email'
                                className='w-full p-2 text-xl text-center bg-white'
                                placeholder={ `${loadingComponent ? '' : 'email'}` }
                                minLength={ 12 }
                                maxLength={ 28 }
                                required
                                disabled={ loadingComponent }
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
                        <p className='text-center text-red-600'>{ emailErrorMessage }</p>
                    </div>
                    <div className="w-full">
                        <label className={ `flex gap-4 ${loadingComponent ? 'animate-pulse' : ''}` } htmlFor="password">
                            <input
                                className='w-full p-2 text-xl text-center bg-white'
                                name='password'
                                type='password'
                                placeholder={ `${loadingComponent ? '' : 'senha'}` }
                                minLength={ 6 }
                                maxLength={ 16 }
                                required
                                disabled={ loadingComponent }
                                onInvalid={ event => {
                                    const target = event.target as HTMLInputElement;
                                    target.setCustomValidity('A senha deve ter entre 6 e 16 caracteres.');
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
                        <label className={ `flex gap-4 ${loadingComponent ? 'animate-pulse' : ''}` } htmlFor="passwordAgain">
                            <input
                                name='passwordAgain'
                                type='password'
                                className='w-full p-2 text-xl text-center bg-white'
                                placeholder={ `${loadingComponent ? '' : 'password'}` }
                                minLength={ 6 }
                                maxLength={ 16 }
                                required
                                disabled={ loadingComponent }
                                onInvalid={ event => {
                                    const target = event.target as HTMLInputElement;
                                    if(registerValues.password !== registerValues.passwordAgain) {
                                        target.setCustomValidity('Repita a sua senha');
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
                        <p className='text-center text-red-600'>{ passwordErrorMessage }</p>
                    </div>
                    <button
                        className={ `${ isDisable() || loadingButton ? 'bg-gray-300 ' : 'bg-green-600 hover:bg-green-700 ' } p-3 text-white flex justify-center text-center rounded w-full` }

                        type="submit"
                        disabled={ isDisable() }
                    >
                        { loadingButton || loadingComponent ? (
                            < ImSpinner9 className="text-gray-500 animate-spin"/>
                        ) : (
                            'Próximo'
                        ) }
                    </button>
                </form>
                <div className="w-full text-center">
                    <p>Já tem uma conta? <a className='text-blue-500' href="/blogapi/login">Entrar</a></p>
                </div>
            </section>
        </div>
    );
}