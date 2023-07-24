import Link from 'next/link';

const BlogApiHeader = () => {

    return (
        <header id="blogApi" className={ 'bg-gray-800 w-full z-50 px-8 md:px-16 py-2' }>
            <div className="flex justify-around items-center ">
                <Link
                    href={ '/#projects' }
                    className='text-2xl font-bold text-white hover:text-gray-800 hover:bg-gray-200 transition-colors duration-300 p-2'>
                    Voltar
                </Link>
                <div className='text-2xl font-bold text-white'>
                    Blog
                </div>
            </div>
        </header>
    );
};

export default BlogApiHeader;
