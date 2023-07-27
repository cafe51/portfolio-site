'use client';
import { PostType, UserType } from './types';
import RenderPostCard from './RenderPostCard';

interface PostProps {
  userData?: {user: UserType, token: string};
  posts: PostType[]
}

export default function Posts({ userData, posts }: PostProps) {
    return(
        userData ?
            <section className='flex flex-col items-center w-full gap-2 rounded shadow md:w-1/2 lg:1/4'>
                { posts ? [...posts].reverse().map((post) => (<RenderPostCard key={ post.id } postData={ post } userData={ userData }/>)) : 'loading...' }
            </section>
            : ''
    );
}