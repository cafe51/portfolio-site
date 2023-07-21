'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Dispatch, UserType } from './types';
import CategoriesList from './CategoriesList';
import { updateCategoriesFromApiStateThunkAction } from './redux/actions';
import { useDispatch } from 'react-redux';


export default function Home() {
    const dispatch: Dispatch = useDispatch();
    const router = useRouter();
    const [ userData, setUserData ] = useState<{user: UserType, token: string} | null>(null);

    const handleLogOut = () => {
        localStorage.removeItem('userData');
        router.push('blogapi/login');
    };

 
    useEffect(() => {
        const userFromLocalStorage = localStorage.getItem('userData');
        const userData = userFromLocalStorage ? JSON.parse(userFromLocalStorage) : null;
        if (!userData || !userData.token) {
            router.push('blogapi/login');
        } else {
            setUserData(userData);
        }
    
    }, [router]);

    useEffect(() => {
        if (userData && userData.token) {
            dispatch(updateCategoriesFromApiStateThunkAction(userData.token));
        }
    
    }, [userData, dispatch]);


    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <button className='bg-red-400 p-2 rounded shadow-md text-white hover:bg-red-600' onClick={ handleLogOut }>Sair</button>
            <div className='flex flex-col gap-4'>
                { userData ? <CategoriesList /> : 'Loading...' }
                Initial Page
                <p className='w-96 overflow-wrap break-words'>{ userData?.token }</p>
            </div>
        </main>
    );
}
