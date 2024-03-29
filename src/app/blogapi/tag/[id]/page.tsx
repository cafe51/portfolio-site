/* eslint-disable react/jsx-curly-spacing */
'use client';

import { useDispatch, useSelector } from 'react-redux';
import { CategoryType, Dispatch, PostType, ReduxState, UserType } from '../../types';
import { useEffect, useState } from 'react';
import Posts from '../../Posts';
import { useRouter } from 'next/navigation';
import { updateCategoriesStateFromApiStateThunkAction, updatePostsStateFromApiStateThunkAction } from '../../redux/actions';
import { BlogApiNavBar } from '../../BlogApiNavBar';
import BlogApiMainHeader from '../../BlogApiMainHeader';
import { LoadingBlogApiNavBar } from '../../loadingComponents/LoadingBlogApiNavBar';
import LoadingPostCard from '../../loadingComponents/LoadingPostCard';

export default function UserPosts({ params }: { params: { id: string } }) {
    const dispatch: Dispatch = useDispatch();
    const router = useRouter();
    const { postsFromApi } = useSelector((state: ReduxState) => state.postsReducer);
    const { categoriesFromApi } = useSelector((state: ReduxState) => state.categoriesReducer);
    const [posts, setPosts] = useState<PostType[]>(postsFromApi);
    const [ userData, setUserData ] = useState<{user: UserType, token: string} | null>(null);
    const [categories, setCategories] = useState<CategoryType[]>(categoriesFromApi);



    useEffect(() => {
        if (userData && userData.token) {
            dispatch(updateCategoriesStateFromApiStateThunkAction(userData.token));
            dispatch(updatePostsStateFromApiStateThunkAction(userData.token));
        }

    
    }, [userData, dispatch]);


 
    useEffect(() => {
        const userFromLocalStorage = localStorage.getItem('userData');
        const userData = userFromLocalStorage ? JSON.parse(userFromLocalStorage) : null;
        if (!userData || !userData.token || !postsFromApi || postsFromApi.length === 0 || !categoriesFromApi || categoriesFromApi.length === 0) {
            router.push('blogapi/');
        } else {
            setUserData(userData);
            setPosts(postsFromApi.filter((post) => post.categories.some((category) => category.id?.toString() === params.id)));
            setCategories(categoriesFromApi.filter((category) => category.id?.toString() === params.id));

        }
    
    }, [router]);


    return (
        <div className="flex flex-col items-center justify-between gap-2 p-2">
            <BlogApiMainHeader />
            { userData ? <BlogApiNavBar userData={ userData }/> : <LoadingBlogApiNavBar /> }
            { userData ? <h1>{ categories[0].name }</h1> : <div className='w-1/4 p-2 bg-gray-200 animate-pulse'>.</div> }
            {posts &&  posts.length >= 0 && <h2>{`${posts.length} ${ posts.length > 1 ? 'postagens' : 'postagem' }`}</h2>}
            { userData ? <Posts userData={ userData } posts={ posts }/> : <LoadingPostCard /> }
        </div>

    );
}