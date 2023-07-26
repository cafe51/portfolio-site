'use client';
import { useRouter } from 'next/navigation';
import { UserType } from './blogapi/types';
import { ProfileImage } from './blogapi/profileImage';
import { useEffect, useRef, useState } from 'react';
import { deleteAccountApi } from './blogapi/api';
import { AiFillSetting } from 'react-icons/ai';

interface SettingsProps {
    userData: {user: UserType, token: string};
}

export default function Settings({ userData }: SettingsProps) {
    const menuRef = useRef<HTMLDivElement>(null);
    const { user, token } = userData;
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [deleteWarning, setDeleteWarning] = useState(false);

    const handleLogOut = () => {
        localStorage.removeItem('userData');
        router.push('blogapi/login');
    };

    const handleDeleteAccount = async() => {
        await deleteAccountApi(token);
        localStorage.removeItem('userData');
        router.push('blogapi/login');
        
    };

    const handleInteractionOutside = (event: MouseEvent | TouchEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsMenuOpen(false);
            setDeleteWarning(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleInteractionOutside);
        document.addEventListener('touchmove', handleInteractionOutside);

        return () => {
            document.removeEventListener('mousedown', handleInteractionOutside);
            document.removeEventListener('touchmove', handleInteractionOutside);
        };
    }, []);
    


    return (
        <div className='flex flex-col items-center'>
            {
                deleteWarning && 
                <div ref={ menuRef } className='w-full md:w-auto container fixed flex flex-col items-center gap-2 p-8 text-center bg-gray-200 rounded shadow-lg right-0.5 z-50'>
                    <h1>Tem certeza?</h1>
                    <p>Todos as suas postagens serão excluídas</p>
                    <div className='flex gap-2'>
                        <button
                            className='w-full p-2 text-white bg-green-400 rounded shadow-md hover:bg-green-600'
                            onClick={ () => setDeleteWarning(false) }
                        >
                            Não
                        </button>
                        <button
                            className='w-full p-2 text-white bg-red-400 rounded shadow-md hover:bg-red-600'
                            onClick={ handleDeleteAccount }
                        >
                            Sim
                        </button>
                    </div>
                </div>
            }
            <button
                className='w-full p-2 text-white bg-blue-400 rounded shadow-md hover:bg-blue-600'
                onClick={ () => setIsMenuOpen(true) }
            >
                <AiFillSetting size={ 20 }/>
            </button>
            {
                isMenuOpen &&
            <div ref={ menuRef } className='container md:w-auto fixed flex flex-col items-center justify-between w-full gap-2 p-8 bg-gray-200 rounded shadow-lg right-0.5 z-50'>
                <ProfileImage height='h-[50px]' width='w-[50px]' imageUrl={ user.image } />
                <button
                    className='w-full p-2 text-white bg-red-400 rounded shadow-md hover:bg-red-600'
                    onClick={ handleLogOut }
                >
                    Sair
                </button>
                <button
                    className='w-full p-2 text-white bg-red-400 rounded shadow-md hover:bg-red-600'
                    onClick={ () => {
                        setDeleteWarning(true);
                        setIsMenuOpen(false);
                    } }
                >
                    Excluir Minha Conta
                </button>
                <button className='w-full p-2 text-white bg-blue-400 rounded shadow-md hover:bg-blue-600' onClick={ () => setIsMenuOpen(false) }>Fechar</button>
            </div>
            }

        </div>
    );
}
