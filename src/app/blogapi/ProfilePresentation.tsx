import { ProfileImage } from './profileImage';
import { UserType } from './types';

interface ProfilePresentationProps {
    userData: {user: UserType, token: string};
  }
  

export function ProfilePresentation({ userData }: ProfilePresentationProps) {
    return (
        <section className='flex flex-col items-center text-center'>
            <ProfileImage imageUrl={ userData.user.image }/>
            <h1>{ userData.user.display_name }</h1>
            <p>{ userData.user.email }</p>
        </section>
    );
}