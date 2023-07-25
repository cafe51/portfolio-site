import { ProfileImage } from './profileImage';
import { UserType } from './types';

interface ProfilePresentationProps {
    userData: UserType;
  }
  

export function ProfilePresentation({ userData }: ProfilePresentationProps) {
    return (
        <section className='flex flex-col items-center text-center'>
            <ProfileImage imageUrl={ userData.image }/>
            <h1>{ userData.display_name }</h1>
            <p>{ userData.email }</p>
        </section>
    );
}