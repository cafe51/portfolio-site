import { ProfileImage } from '../profileImage';


export function LoadingProfilePresentation() {
    return (
        <section className='flex flex-col items-center w-full gap-2 p-4 text-center md:w-2/4 lg:w-1/4'>
            <ProfileImage height='h-[100px]' width='w-[100px]' imageUrl={ undefined } isLoading={ true } bgGray={ true }/>
            <div className='w-2/4 p-1 text-xs text-gray-200 bg-gray-200 animate-pulse'>.</div>
            <div className='w-2/4 text-xs text-gray-200 bg-gray-200 animate-pulse'>.</div>
        </section>
    );
}