import { useRouter } from 'next/navigation';
import { UserType } from './blogapi/types';
import { ProfileImage } from './blogapi/profileImage';
import { useState } from 'react';
import { deleteAccountApi } from './blogapi/api';
import { AiFillSetting } from 'react-icons/ai';

interface SettingsProps {
    userData: {user: UserType, token: string};
}

export default function Settings({ userData }: SettingsProps) {
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


    return (
        <section className='flex flex-col items-center p-4'>
            {
                deleteWarning && 
                <div className='absolute flex flex-col items-center gap-2 p-4 text-center bg-white border border-red-500'>
                    <h1>Tem certeza?</h1>
                    <p>Todos as suas postagens serão excluídas</p>
                    <div className='flex gap-2'>
                        <button
                            className='w-full p-2 text-white bg-red-400 rounded shadow-md hover:bg-red-600'
                            onClick={ handleDeleteAccount }
                        >
                            Sim
                        </button>
                        <button
                            className='w-full p-2 text-white bg-green-400 rounded shadow-md hover:bg-green-600'
                            onClick={ () => setDeleteWarning(false) }
                        >
                            Voltar
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
            <div className='absolute flex flex-col items-center justify-between gap-2 p-4 bg-white'>
                <ProfileImage imageUrl={ user.image } />
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

        </section>
    );
}