'use client';
import { useEffect, useState } from 'react';
import Posts from './Posts';
import { PostType } from './interfaces';
import postMock from './mocks/postsMocks.json';
import userMock from './mocks/usersMocks.json';
import PostForm from './PostForm';

export default function Home() {
    const [posts, setPosts] = useState<PostType[]>([]);
    // const [user, setUser] = useState<UserType[]>([]);

    useEffect(() => {
        setPosts(postMock);
        // setUser(userMock);
    }, []);

    return(
        <div className='flex flex-col gap-6'>
            <PostForm userData={ userMock[0] }/>
            <Posts posts={ posts }/>
        </div>
    );
}