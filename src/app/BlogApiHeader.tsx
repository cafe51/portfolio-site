import { useRouter } from 'next/navigation';
import { UserType } from './blogapi/types';
import { ProfileImage } from './blogapi/profileImage';
import { useState } from 'react';

interface BlogApiHeaderProps {
    userData: {user: UserType, token: string};
}

export default function BlogApiHeader({ userData }: BlogApiHeaderProps) {
    const { user } = userData;
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [deleteWarning, setDeleteWarning] = useState(false);

    const handleLogOut = () => {
        localStorage.removeItem('userData');
        router.push('blogapi/login');
    };

    const handleDeleteAccount = () => {
        console.log('a');
        setDeleteWarning(true);
        setIsMenuOpen(false);
    };


    return (
        <section className='p-4 flex flex-col items-center self-end'>
            {
                deleteWarning && 
                <div className='flex flex-col items-center text-center gap-2 absolute bg-white p-4 border border-red-500'>
                    <h1>Tem certeza?</h1>
                    <p>Todos as suas postagens serão excluídas</p>
                    <div className='flex gap-2'>
                        <button className='bg-red-400 p-2 rounded shadow-md text-white hover:bg-red-600 w-full'>Sim</button>
                        <button className='bg-green-400 p-2 rounded shadow-md text-white hover:bg-green-600 w-full' onClick={ () => setDeleteWarning(false) }>Voltar</button>
                    </div>
                </div>
            }
            <button
                className='bg-blue-400 p-2 rounded shadow-md text-white hover:bg-blue-600 w-full'
                onClick={ () => setIsMenuOpen(true) }
            >
                Configurações
            </button>
            {
                isMenuOpen &&
            <div className='flex flex-col items-center gap-2 justify-between absolute bg-white p-4'>
                <ProfileImage imageUrl={ user.image } />
                <button className='bg-red-400 p-2 rounded shadow-md text-white hover:bg-red-600 w-full' onClick={ handleLogOut }>Sair</button>
                <button className='bg-red-400 p-2 rounded shadow-md text-white hover:bg-red-600 w-full' onClick={ handleDeleteAccount }>Excluir Minha Conta</button>
                <button className='bg-blue-400 p-2 rounded shadow-md text-white hover:bg-blue-600 w-full' onClick={ () => setIsMenuOpen(false) }>Fechar</button>
            </div>
            }

        </section>
    );
}