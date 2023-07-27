import { ProfileImage } from '../profileImage';

export default function LoadingPostCard() {

    return(
        <div className='container flex flex-col justify-center gap-6 p-4 bg-gray-200 rounded shadow-lg md:w-1/2 lg:1/4'>
            <div className='flex flex-row items-center justify-between gap-4 '>
                <div className='flex flex-row items-center w-full gap-4'>
                    <ProfileImage height='h-[50px]' width='w-[50px]' imageUrl={ '' } isLoading={ true }/>
                    <div className='flex flex-col w-full gap-2'>
                        <div className='w-3/4 p-1 text-xs text-white bg-white animate-pulse'>.</div>
                        <div className='w-3/4 p-1 text-xs text-white bg-white animate-pulse'>.</div>
                    </div>
                </div>

            </div>
            <div className='flex flex-col items-center justify-center w-full gap-4'>
                <div className='flex flex-col items-center justify-center w-full gap-1 text-center'>
                    <div className='w-3/4 p-1 text-lg text-white bg-white animate-pulse'>.</div>

                    <div className='w-2/4 p-0 text-xs text-white bg-white animate-pulse'>.</div>

                </div>
                
                <div className='flex justify-center w-full'>
                    <div className='w-3/4 p-1 py-8 text-lg text-white bg-white animate-pulse'>.</div>

                </div>
                <div className='flex'>
                    {
                        ['....', '....', '....', '....'].map((category, index) => (
                            <div
                                key={ index }
                                className="px-4 py-1 mb-2 mr-2 text-xs text-white bg-white rounded animate-pulse"
                            >
                                { category }
                            </div>
                        ))
                        
                    }
                </div>
                <div className='w-3/4 p-0 text-xs text-white bg-white animate-pulse'>.</div>

            </div>
        </div>
    );
}