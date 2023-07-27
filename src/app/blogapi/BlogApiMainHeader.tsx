import Link from 'next/link';

const BlogApiMainHeader = () => {

    return (
        <header id="blogApi" className={ 'bg-gray-800 w-full z-50 px-8 md:px-16 py-2 mb-1' }>
            <div className="flex items-center justify-around ">
                <Link
                    href={ '/#projects' }
                    className='p-2 text-2xl font-bold text-white transition-colors duration-300 hover:text-gray-800 hover:bg-gray-200'>
                    Voltar
                </Link>
                <div className='text-2xl font-bold text-white'>
                    Blog
                </div>
            </div>
        </header>
    );
};

export default BlogApiMainHeader;
