'use client';
import { useEffect, useState } from 'react';
import Posts from './Posts';
import { PostType, UserType } from './interfaces';
// import postMock from './mocks/postsMocks.json';
// import userMock from './mocks/usersMocks.json';
import PostForm from './PostForm';
import { getPostsApi, getUsersApi } from './api';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();
    const [posts, setPosts] = useState<PostType[]>([]);
    const [user, setUser] = useState<UserType | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const userEmailLocalStorage = localStorage.getItem('user');

        if (!token || !userEmailLocalStorage) {
            router.push('/blogsApi/login');
        } else {
            const email = JSON.parse(userEmailLocalStorage);

            const fetchData = async() => {
                try {
                    const users = await getUsersApi(token);
                    const posts = await getPostsApi(token);
                    const userFinded = users.find((u: UserType) => u.email === email);
                    
                    if (userFinded) {
                        setUser(userFinded);
                    } else {
                        // Adicionar um objeto de usuário padrão ou tratar o erro aqui
                        console.error('User not found');
                    }
                    
                    setPosts(posts);
                    setLoading(false);
                } catch (error) {
                    // Tratamento de erro adequado
                    console.error('Error while fetching users: ', error);
                }
            };

            fetchData();
        }
    }, []);



    if (loading) {
        return <div>Loading...</div>; // Você pode substituir isso por um componente de carregamento
    }

    return(
        <div className='flex flex-col gap-6'>
            { user && <PostForm userData={ user }/> }
            <Posts posts={ posts }/>
        </div>
    );
}