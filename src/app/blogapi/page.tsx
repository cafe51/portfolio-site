/* eslint-disable react/jsx-curly-spacing */
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
import { LoadingProfilePresentation } from './loadingComponents/LoadingProfilePresentation';
import { BlogApiNavBar } from './BlogApiNavBar';
import { LoadingBlogApiNavBar } from './loadingComponents/LoadingBlogApiNavBar';
import LoadingForm from './loadingComponents/LoadingForm';
import LoadingPostCard from './loadingComponents/LoadingPostCard';
import { getUsersApi } from './api';

export default function Home() {
    const dispatch: Dispatch = useDispatch();
    const { postsFromApi } = useSelector((state: ReduxState) => state.postsReducer);
    const router = useRouter();
    const [ userData, setUserData ] = useState<{user: UserType, token: string} | undefined>(undefined);

 
    useEffect(() => {
        const userFromLocalStorage = localStorage.getItem('userData');
        const userData = userFromLocalStorage ? JSON.parse(userFromLocalStorage) : null;
        if (!userData || !userData.token) {
            router.push('blogapi/login');
        } else {
            const verifyUsers = async() => {
                const usersFromApi: UserType[] = await getUsersApi(userData.token);
                const userVerified = usersFromApi.some((userFromApi) => userFromApi.email === userData.user.email);
                if(userVerified) {
                    setUserData(userData);
                } else {
                    router.push('blogapi/login');
                    localStorage.removeItem('userData');
                }
            };
            verifyUsers();
        }
    
    }, [router]);

    useEffect(() => {
        if (userData && userData.token) {
            dispatch(updateCategoriesStateFromApiStateThunkAction(userData.token));
            dispatch(updatePostsStateFromApiStateThunkAction(userData.token));
        }
    
    }, [userData, dispatch]);



    return (
        userData ?
            <main className="container flex flex-col items-center self-center justify-between gap-2 p-2 m-auto justify-self-center">
                <header className="container fixed z-50 flex flex-col items-center w-full">
                    <BlogApiMainHeader />
                    <BlogApiNavBar userData={ userData }/>
                </header>

                <div className='container flex flex-col items-center w-full gap-4 py-32'>
                    <ProfilePresentation userData={ userData.user }/>
                    <PostForm userData={ userData }/>
                    <Posts userData={ userData } posts={ postsFromApi }/>
                </div>

            </main>
            :
            <main className="container flex flex-col items-center self-center justify-between gap-2 p-2 m-auto justify-self-center">
                <BlogApiMainHeader />
                <LoadingBlogApiNavBar />
        
                <div className='container flex flex-col items-center gap-4'>
                    <LoadingProfilePresentation />
                    <LoadingForm />
                    <LoadingPostCard />
                </div>

            </main>
    );
}
