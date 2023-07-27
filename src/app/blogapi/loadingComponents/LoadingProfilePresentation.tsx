import { ProfileImage } from '../profileImage';


export function LoadingProfilePresentation() {
    return (
        <section className='flex flex-col items-center p-4 text-center'>
            <ProfileImage height='h-[100px]' width='w-[100px]' imageUrl={ undefined } isLoading={ true }/>
            <h1>{ 'userData.display_name' }</h1>
            <p>{ 'userData.email' }</p>
        </section>
    );
}