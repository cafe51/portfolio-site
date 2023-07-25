'use client';

import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, ReduxState, UserType } from '../../types';
import { useEffect, useState } from 'react';
import Posts from '../../Posts';
import { useRouter } from 'next/navigation';
import { updatePostsStateByQueryFromApiStateThunkAction } from '../../redux/actions';
import { BlogApiNavBar } from '../../BlogApiNavBar';
import BlogApiMainHeader from '../../BlogApiMainHeader';

export default function SearchPosts({ params }: { params: { slug: string } }) {
    const dispatch: Dispatch = useDispatch();
    const router = useRouter();
    const { postsFromApi } = useSelector((state: ReduxState) => state.postsReducer);
    const [ userData, setUserData ] = useState<{user: UserType, token: string} | null>(null);



    useEffect(() => {
        if (userData && userData.token) {
            dispatch(updatePostsStateByQueryFromApiStateThunkAction(userData.token, params.slug));
        }

    
    }, [userData, dispatch, params.slug]);


 
    useEffect(() => {
        const userFromLocalStorage = localStorage.getItem('userData');
        const userData = userFromLocalStorage ? JSON.parse(userFromLocalStorage) : null;
        if (!userData || !userData.token || !postsFromApi) {
            router.push('blogapi/');
        } else {
            setUserData(userData);
        }
    
    }, [router, params.slug]);



    return (
        <div className="flex flex-col items-center justify-between gap-2 p-2">
            <BlogApiMainHeader />
            { userData ? <BlogApiNavBar userData={ userData }/> : 'Loading...' }
            { userData && postsFromApi.length !== 0 ? <h1>Resultados de: { params.slug }</h1> : 'Nenhum resultado encontrado' }
            { userData ? <Posts userData={ userData } posts={ postsFromApi }/> : 'Loading...' }
        </div>

    );
}