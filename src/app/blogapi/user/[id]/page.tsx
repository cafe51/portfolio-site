/* eslint-disable react/jsx-curly-spacing */
'use client';

import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, PostType, ReduxState, UserType } from '../../types';
import { useEffect, useState } from 'react';
import Posts from '../../Posts';
import { useRouter } from 'next/navigation';
import { updatePostsStateFromApiStateThunkAction } from '../../redux/actions';
import { BlogApiNavBar } from '../../BlogApiNavBar';
import BlogApiMainHeader from '../../BlogApiMainHeader';
import { ProfilePresentation } from '../../ProfilePresentation';

export default function UserPosts({ params }: { params: { id: string } }) {
    const dispatch: Dispatch = useDispatch();
    const router = useRouter();
    const { postsFromApi } = useSelector((state: ReduxState) => state.postsReducer);
    const [posts, setPosts] = useState<PostType[]>(postsFromApi);
    const [ userData, setUserData ] = useState<{user: UserType, token: string} | null>(null);

    useEffect(() => {
        if (userData && userData.token) {
            dispatch(updatePostsStateFromApiStateThunkAction(userData.token));
        }

    
    }, [userData, dispatch]);


 
    useEffect(() => {
        const userFromLocalStorage = localStorage.getItem('userData');
        const userData = userFromLocalStorage ? JSON.parse(userFromLocalStorage) : null;
        if (!userData || !userData.token || !postsFromApi || postsFromApi.length === 0) {
            router.push('blogapi/');
        } else {
            setUserData(userData);
            setPosts(postsFromApi.filter((post) => post.user_id.toString() === params.id));
        }
    
    }, [router]);


    return (
        <div className="flex flex-col items-center justify-between gap-2 p-2">
            <BlogApiMainHeader />
            { userData ? <BlogApiNavBar userData={ userData }/> : 'Loading...' }
            { posts[0] &&  <ProfilePresentation userData={posts[0].users} />}
            { userData ? <Posts userData={ userData } posts={ posts }/> : 'Loading...' }
        </div>

    );
}