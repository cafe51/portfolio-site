import { useState, FormEvent } from 'react';
import Settings from '../Settings';
import { UserType } from './types';
import { useRouter } from 'next/navigation';
import { FaSearch } from 'react-icons/fa'; 
import { AiFillHome } from 'react-icons/ai';

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
        <nav className='container flex items-center justify-between w-full p-2 bg-gray-200 md:justify-evenly'>
            <div className=''>
                <button
                    className='p-2 text-white bg-blue-400 rounded shadow-md hover:bg-blue-600'
                    onClick={ () => router.push('blogapi/') }
                >
                    <AiFillHome size={ 20 }/>
                </button>
            </div>
            <div className=''>
                <form onSubmit={ handleSearch } className="flex items-center justify-center"> 
                    <input
                        className='text-center md:text-2xl'
                        type='text'
                        placeholder='Pesquisar'
                        onChange={ handleChange }
                        value={ searchValue }
                    />
                    <button type="submit" className="text-gray-500 hover:text-gray-700">
                        <FaSearch size={ 20 }/>
                    </button>
                </form>
            </div>
            <Settings userData={ userData }/>
        </nav>
    );
}
