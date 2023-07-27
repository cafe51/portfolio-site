import { FaSearch } from 'react-icons/fa';
import { ImSpinner9 } from 'react-icons/im';

export function LoadingBlogApiNavBar() {
    return(
        <nav className='container flex items-center justify-between w-full p-2 bg-gray-200 md:justify-evenly'>
            <div className=''>
                <button
                    className='p-2 text-white bg-gray-300 rounded shadow-md hover:bg-blue-600'
                >
                    < ImSpinner9 className="text-gray-500 animate-spin" size={ 20 }/>
                </button>
            </div>
            <div className=''>
                <form className="flex items-center justify-center gap-2 animate-pulse"> 
                    <input
                        className='text-center text-white bg-white md:text-2xl'
                        type='text'
                        placeholder='Pesquisar'
                        value={ '' }
                    />
                    <button type="submit" className="text-gray-500 hover:text-gray-700">
                        <FaSearch size={ 20 }/>
                    </button>
                </form>
            </div>
            <button
                className='p-2 text-white bg-gray-300 rounded shadow-md hover:bg-blue-600'
            >
                < ImSpinner9 className="text-gray-500 animate-spin" size={ 20 }/>
            </button>
        </nav>
    );
}
