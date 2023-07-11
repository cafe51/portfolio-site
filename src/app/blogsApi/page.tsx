'use client';
import { useEffect, useState } from 'react';
import Posts from './Posts';
import { PostType } from './interfaces';
import postMock from './mocks/postsMocks.json';

export default function Home() {
    const [posts, setPosts] = useState<PostType[]>([]);

    useEffect(() => {
        setPosts(postMock);
    }, []);

    return(
        <div>
            <Posts posts={ posts }/>
        </div>
    );
}