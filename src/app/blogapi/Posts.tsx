'use client';
import { PostType, ReduxState, UserType } from './types';
import { useSelector } from 'react-redux';
import RenderPostCard from './RenderPostCard';

interface PostProps {
  userData: {user: UserType, token: string};
}

export default function Posts({ userData }: PostProps) {
    const { postsFromApi } = useSelector((state: ReduxState) => state.postsReducer);

    return(
        <section className='flex flex-col w-full items-center gap-2 p-4'>
            { postsFromApi ? postsFromApi.map((post: PostType) => (<RenderPostCard key={ post.id } postData={ post } userData={ userData }/>)) : 'loading...' }
        </section>
    );
}