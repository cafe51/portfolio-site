'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Dispatch, UserType } from './types';
// import CategoriesList from './CategoriesList';
import { updateCategoriesStateFromApiStateThunkAction, updatePostsStateFromApiStateThunkAction } from './redux/actions';
import { useDispatch } from 'react-redux';
import PostForm from './PostForm';
import Posts from './Posts';
import BlogApiMainHeader from './BlogApiMainHeader';
import BlogApiHeader from '../BlogApiHeader';


export default function Home() {
    const dispatch: Dispatch = useDispatch();
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
        <main className="flex flex-col items-center justify-between p-2">
            <BlogApiMainHeader />
            { userData ? <BlogApiHeader userData={ userData }/> : 'Loading...' }
            
            <div className='flex flex-col gap-4'>
                { /* { userData ? <CategoriesList /> : 'Loading...' } */ }
                { userData ? <PostForm userData={ userData }/> : 'Loading...' }
                { userData ? <Posts userData={ userData } /> : 'Loading...' }
            </div>
        </main>
    );
}
