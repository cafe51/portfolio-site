'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Dispatch, ReduxState, UserType } from './types';
import { updateCategoriesStateFromApiStateThunkAction, updatePostsStateFromApiStateThunkAction } from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import PostForm from './PostForm';
import Posts from './Posts';
import BlogApiMainHeader from './BlogApiMainHeader';
import { ProfilePresentation } from './ProfilePresentation';
import { BlogApiNavBar } from './BlogApiNavBar';


export default function Home() {
    const dispatch: Dispatch = useDispatch();
    const { postsFromApi } = useSelector((state: ReduxState) => state.postsReducer);
    const router = useRouter();
    const [ userData, setUserData ] = useState<{user: UserType, token: string} | null>(null);


 
    useEffect(() => {
        const userFromLocalStorage = localStorage.getItem('userData');
        const userData = userFromLocalStorage ? JSON.parse(userFromLocalStorage) : null;
        if (!userData || !userData.token) {
            router.push('blogapi/login');
        } else {
            setUserData(userData);
        }
    
    }, [router]);

    useEffect(() => {
        if (userData && userData.token) {
            dispatch(updateCategoriesStateFromApiStateThunkAction(userData.token));
            dispatch(updatePostsStateFromApiStateThunkAction(userData.token));
        }
    
    }, [userData, dispatch]);


    return (
        <main className="flex flex-col items-center justify-between p-2 gap-2">
            <BlogApiMainHeader />
            { userData ? <BlogApiNavBar userData={ userData }/> : 'Loading...' }
            
            <div className='flex flex-col gap-4'>
                { userData ? <ProfilePresentation userData={ userData }/> : 'Loading...' }
                { userData ? <PostForm userData={ userData }/> : 'Loading...' }
                { userData ? <Posts userData={ userData } posts={ postsFromApi }/> : 'Loading...' }
            </div>
        </main>
    );
}
