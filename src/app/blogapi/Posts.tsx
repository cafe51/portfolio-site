'use client';
import { PostType, UserType } from './types';
import RenderPostCard from './RenderPostCard';

interface PostProps {
  userData: {user: UserType, token: string};
  posts: PostType[]
}

export default function Posts({ userData, posts }: PostProps) {
    return(
        <section className='flex flex-col items-center w-full gap-2 '>
            { posts ? posts.map((post) => (<RenderPostCard key={ post.id } postData={ post } userData={ userData }/>)) : 'loading...' }
        </section>
    );
}