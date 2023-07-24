import Settings from '../Settings';
import { UserType } from './types';
import { useRouter } from 'next/navigation';

interface BlogApiNavBarProps {
    userData: {user: UserType, token: string};
}


export function BlogApiNavBar({ userData }: BlogApiNavBarProps) {
    const router = useRouter();
    return(
        <nav className='flex justify-evenly items-center w-full bg-gray-200'>
            <div className='p-4'>
                <button
                    className='bg-blue-400 p-2 rounded shadow-md text-white hover:bg-blue-600'
                    onClick={ () => router.push('blogapi/') }
                >
                    Home
                </button>
            </div>
            <div className='p-4'>
                <input
                    className='text-center text-2xl'
                    type='text'
                    placeholder='Pesquisar'
                />

            </div>
            <div>
                <Settings userData={ userData }/>
            </div>
        </nav>
    );
}