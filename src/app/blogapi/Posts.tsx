'use client';
import { PostType, UserType } from './types';
import RenderPostCard from './RenderPostCard';

interface PostProps {
  userData: {user: UserType, token: string};
  posts: PostType[]
}

export default function Posts({ userData, posts }: PostProps) {
    return(
        <section className='flex flex-col w-full items-center gap-2 p-4'>
            { posts ? posts.map((post) => (<RenderPostCard key={ post.id } postData={ post } userData={ userData }/>)) : 'loading...' }
        </section>
    );
}