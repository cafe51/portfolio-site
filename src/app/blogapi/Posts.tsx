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
            <section className='container flex flex-col items-center gap-2 rounded shadow md:w-[700px]'>
                { posts ? [...posts].reverse().map((post) => (<RenderPostCard key={ post.id } postData={ post } userData={ userData }/>)) : 'loading...' }
            </section>
            : ''
    );
}