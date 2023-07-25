import { useState, FormEvent } from 'react';
import Settings from '../Settings';
import { UserType } from './types';
import { useRouter } from 'next/navigation';
import { FaSearch } from 'react-icons/fa'; // Adicione a biblioteca de ícones react-icons caso ainda não tenha.

interface BlogApiNavBarProps {
    userData: {user: UserType, token: string};
}

export function BlogApiNavBar({ userData }: BlogApiNavBarProps) {
    const [searchValue, setSearchValue] = useState('');
    const router = useRouter();

    const handleChange = (e: any) => {
        setSearchValue(e.target.value);
    };

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();
        router.push(`/blogapi/search/${searchValue}`);
    };
    
    return(
        <nav className='flex items-center w-full bg-gray-200 justify-evenly'>
            <div className='p-4'>
                <button
                    className='p-2 text-white bg-blue-400 rounded shadow-md hover:bg-blue-600'
                    onClick={ () => router.push('blogapi/') }
                >
                    Home
                </button>
            </div>
            <div className='p-4'>
                <form onSubmit={ handleSearch } className="flex items-center justify-center"> 
                    <input
                        className='text-2xl text-center'
                        type='text'
                        placeholder='Pesquisar'
                        onChange={ handleChange }
                        value={ searchValue }
                    />
                    <button type="submit" className="ml-2 text-gray-500 hover:text-gray-700">
                        <FaSearch size={ 20 }/>
                    </button>
                </form>
            </div>
            <div>
                <Settings userData={ userData }/>
            </div>
        </nav>
    );
}
