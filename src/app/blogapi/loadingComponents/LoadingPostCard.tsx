import { ProfileImage } from '../profileImage';

export default function LoadingPostCard() {

    return(
        <div className='container flex flex-col justify-center gap-6 p-4 bg-gray-200 rounded shadow-lg'>
            <div className='flex justify-between'>
                <button
                    className='self-end p-2 px-4 text-white bg-red-500 rounded shadow-sm hover:bg-red-700'
                >
                    Excluir
                </button>
                <button
                    className='self-end p-2 px-4 text-white bg-blue-500 rounded shadow-sm hover:bg-blue-700'
                >
                    Editar
                </button>
            </div>

            <div className='flex flex-row items-center justify-between w-full gap-4 '>
                <div className='flex flex-row items-center gap-4'>
                    <ProfileImage height='h-[50px]' width='w-[50px]' imageUrl={ '' } isLoading={ true } />
                    <div className='flex flex-col'>
                        <h2>nome</h2>
                        <p>email</p>
                    </div>
                </div>

            </div>
            <div className='flex flex-col items-center w-full gap-4'>
                <div className='text-center '>
                    <h1>titulo</h1>
                    <p className='text-xs'>data</p>
                </div>
                
                <div className=''>
                    <p>content</p>
                </div>
                <div className='flex'>
                    {
                        ['....', '....', '....', '....'].map((category, index) => (
                            <div
                                key={ index }
                                className="px-2 py-1 mb-2 mr-2 text-xs text-white bg-blue-900 rounded"
                            >
                                { category }
                            </div>
                        ))
                        
                    }
                </div>
                <p className='w-full text-xs text-center'>Última atualização: da dadada dada adadada</p>
            </div>
        </div>
    );
}