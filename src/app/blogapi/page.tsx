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
        userData 
            ? <main className="container flex flex-col items-center self-center justify-between gap-2 p-2 m-auto justify-self-center">
                <BlogApiMainHeader />
                <BlogApiNavBar userData={ userData }/>
            

                <div className='container flex flex-col items-center gap-4'>
                    <ProfilePresentation userData={ userData.user }/>
                    <PostForm userData={ userData }/>
                    <Posts userData={ userData } posts={ postsFromApi }/>
                </div>

            </main>
            : 'Loading...'
    );
}
