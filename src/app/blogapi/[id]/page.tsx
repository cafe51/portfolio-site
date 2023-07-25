/* eslint-disable react/jsx-curly-spacing */
'use client';

import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, ReduxState, UserType } from '../types';
import { useEffect, useState } from 'react';
import Posts from '../Posts';
import { useRouter } from 'next/navigation';
import { updateCategoriesStateFromApiStateThunkAction, updatePostsStateFromApiStateThunkAction } from '../redux/actions';
import { BlogApiNavBar } from '../BlogApiNavBar';
import BlogApiMainHeader from '../BlogApiMainHeader';
import { ProfilePresentation } from '../ProfilePresentation';

export default function UserPosts({ params }: { params: { id: string } }) {
    const dispatch: Dispatch = useDispatch();
    const router = useRouter();
    const { postsFromApi } = useSelector((state: ReduxState) => state.postsReducer);
    const [ userData, setUserData ] = useState<{user: UserType, token: string} | null>(null);

    useEffect(() => {
        if (userData && userData.token) {
            dispatch(updateCategoriesStateFromApiStateThunkAction(userData.token));
            dispatch(updatePostsStateFromApiStateThunkAction(userData.token));
        }

    
    }, [userData, dispatch]);


 
    useEffect(() => {
        const userFromLocalStorage = localStorage.getItem('userData');
        const userData = userFromLocalStorage ? JSON.parse(userFromLocalStorage) : null;
        if (!userData || !userData.token) {
            router.push('blogapi/login');
        } else {
            setUserData(userData);
        }
    
    }, [router]);

    const posts = postsFromApi.filter((post) => post.user_id.toString() === params.id);
    const { users } = posts[0];

    return (
        <div className="flex flex-col items-center justify-between p-2 gap-2">
            <BlogApiMainHeader />
            { userData ? <BlogApiNavBar userData={ userData }/> : 'Loading...' }
            { users &&  <ProfilePresentation userData={users} />}
            { userData ? <Posts userData={ userData } posts={ posts }/> : 'Loading...' }
        </div>

    );
}