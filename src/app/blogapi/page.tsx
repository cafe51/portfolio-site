'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { UserType } from './types';


export default function Home() {



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



    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <button className='bg-red-400 p-2 rounded shadow-md text-white hover:bg-red-600' onClick={ handleLogOut }>Sair</button>
            <div className='flex flex-col gap-4'>
                Initial Page
                { userData?.token }
            </div>
        </main>
    );
}
