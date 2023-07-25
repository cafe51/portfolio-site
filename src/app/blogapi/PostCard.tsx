/* eslint-disable @next/next/no-img-element */
import { useDispatch } from 'react-redux';
import { Dispatch, PostType, UserType } from './types';
import { deletePostOnDataBaseThunkAction } from './redux/actions';
import { ProfileImage } from './profileImage';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface PostCardProps {
    postData: PostType;
    setEditMode: (mode: boolean) => void;
    userData: {user: UserType, token: string};
}

interface DataFormatadaProps {
    dataISO: string;
  }

function formatarData(dataISO: string, agora: Date): string {
    const data = new Date(dataISO);

    const diferencaEmMs = agora.getTime() - data.getTime();
    const diferencaEmMinutos = Math.floor(diferencaEmMs / (1000 * 60));
    const diferencaEmHoras = Math.floor(diferencaEmMs / (1000 * 60 * 60));

    if (diferencaEmMinutos === 0) {
        return 'Agora';
    } else if (diferencaEmMinutos < 60) {
        return `${diferencaEmMinutos} minutos atrás`;
    } else if (diferencaEmHoras < 24) {
        return `${diferencaEmHoras} horas atrás`;
    } else {
        const opcoes: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'America/Sao_Paulo',
        };

        return new Intl.DateTimeFormat('pt-BR', opcoes).format(data);
    }
} 

function DataFormatada({ dataISO }: DataFormatadaProps) {
    const [agora, setAgora] = useState(new Date());
  
    useEffect(() => {
        const timerId = setInterval(() => {
            setAgora(new Date());
        }, 60 * 1000);
  
        return () => clearInterval(timerId);
    }, []);
  
    return <p>{ formatarData(dataISO, agora) }</p>;
}
  

export default function PostCard({ postData, setEditMode, userData }: PostCardProps) {
    const { token } = userData;
    const dispatch: Dispatch = useDispatch();

    const handleDeletePost = () => {
        if(postData?.id) {
            dispatch(deletePostOnDataBaseThunkAction(token, postData.id));
        }
    };

    return(
        <div className='flex flex-col justify-center gap-6 p-4 bg-gray-200 rounded shadow'>
            { postData.user_id === userData.user.id && <div className='flex justify-between'>
                <button
                    className='self-end w-1/3 p-1 text-white bg-red-500 rounded shadow-sm hover:bg-red-700'
                    onClick={ handleDeletePost }
                >
                    delete
                </button>
                <button
                    className='self-end w-1/3 p-1 text-white bg-blue-500 rounded shadow-sm hover:bg-blue-700'
                    onClick={ () => setEditMode(true) }
                >
                    Edit
                </button>
            </div> }

            <div className='flex flex-row items-center justify-between w-full gap-4 '>
                <div className='flex flex-row items-center gap-4'>
                    <Link href={ `blogapi/user/${postData.user_id}` }>
                        <ProfileImage imageUrl={ postData.users?.image } />
                    </Link>
                    <div className='flex flex-col'>
                        <h2>{ postData.users ? postData.users.display_name : '...' }</h2>
                        <p>{ postData.users ? postData.users.email : '...' }</p>
                    </div>
                </div>

            </div>
            <div className='flex flex-col items-center gap-4'>
                <div className='text-center'>
                    <h1>{ postData.title }</h1>
                    <p className=''>{ <DataFormatada dataISO={ postData.published ? postData.published : '' } /> }</p>
                </div>
                
                <div className=''>
                    <p>{ postData.content }</p>
                </div>
                <div className='flex'>
                    {
                        postData.categories.map((category) => (
                            <Link
                                href={ `blogapi/tag/${category.id}` }
                                key={ category.id }
                                className="px-2 py-1 mb-2 mr-2 text-sm text-white bg-blue-900 rounded"
                            >
                                { category.name }
                            </Link>
                        ))
                    }
                </div>
                <p>Atualizado pela última vez: { <DataFormatada dataISO={ postData.updated ? postData.updated : '' } /> }</p>
            </div>
        </div>
    );
}