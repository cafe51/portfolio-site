'use client';
import { PostType, UserType } from './types';
import RenderPostCard from './RenderPostCard';
import { useEffect, useRef, useState } from 'react';

interface PostProps {
    userData?: {user: UserType, token: string};
    posts: PostType[]
  }
  
export default function Posts({ userData, posts }: PostProps) {
    const [displayPosts, setDisplayPosts] = useState<PostType[]>([]);
    const [next, setNext] = useState(4);

    const loadingRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (posts) {
            setDisplayPosts([...[...posts].reverse().slice(0, next)]);
        }
    }, [posts, next]);
  
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    setNext(prevNext => prevNext + 4);
                }
            },
            { threshold: 1 },
        );
        if (loadingRef.current) {
            observer.observe(loadingRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);


  
    return(
        userData ?
            <section className='container flex flex-col items-center gap-2 rounded shadow md:w-[700px]'>
                { displayPosts.length > 0 ? displayPosts.map((post) => (<RenderPostCard key={ post.id } postData={ post } userData={ userData }/>)) : 'loading...' }
                <div ref={ loadingRef }>
                    { displayPosts.length >= posts.length ? '.' : 'Loading...' }
                </div>
            </section>
            : ''
    );
}