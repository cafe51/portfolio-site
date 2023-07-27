/* eslint-disable @next/next/no-img-element */
import { useDispatch } from 'react-redux';
import { Dispatch, PostType, UserType } from './types';
import { deletePostOnDataBaseThunkAction } from './redux/actions';
import { ProfileImage } from './profileImage';
import Link from 'next/link';
import DataFormat from './DataFormat';

interface PostCardProps {
    postData: PostType;
    setEditMode: (mode: boolean) => void;
    userData: {user: UserType, token: string};
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
        <div className='container flex flex-col justify-center gap-6 p-4 bg-gray-200 rounded shadow-lg'>
            { postData.user_id === userData.user.id &&
            <div className='flex justify-between'>
                <button
                    className='self-end p-2 px-4 text-white bg-red-500 rounded shadow-sm hover:bg-red-700'
                    onClick={ handleDeletePost }
                >
                    Excluir
                </button>
                <button
                    className='self-end p-2 px-4 text-white bg-blue-500 rounded shadow-sm hover:bg-blue-700'
                    onClick={ () => setEditMode(true) }
                >
                    Editar
                </button>
            </div> }

            <div className='flex flex-row items-center justify-between w-full gap-4 '>
                <div className='flex flex-row items-center gap-4'>
                    <Link href={ `blogapi/user/${postData.user_id}` }>
                        <ProfileImage height='h-[50px]' width='w-[50px]' imageUrl={ postData.users?.image } />
                    </Link>
                    <div className='flex flex-col'>
                        <h2>{ postData.users ? postData.users.display_name : '...' }</h2>
                        <p>{ postData.users ? postData.users.email : '...' }</p>
                    </div>
                </div>

            </div>
            <div className='flex flex-col items-center w-full gap-4 overflow-hidden'>
                <div className='text-center '>
                    <h1>{ postData.title }</h1>
                    <p className='text-xs'>{ <DataFormat dataISO={ postData.published ? postData.published : '' } /> }</p>
                </div>
                <p className='break-all'>{ postData.content }</p>
                <div className='flex'>
                    {
                        postData.categories.map((category) => (
                            <Link
                                href={ `blogapi/tag/${category.id}` }
                                key={ category.id }
                                className="px-2 py-1 mb-2 mr-2 text-xs text-white bg-blue-900 rounded"
                            >
                                { category.name }
                            </Link>
                        ))
                    }
                </div>
                <p className='w-full text-xs text-center'>Última atualização: { <DataFormat dataISO={ postData.updated ? postData.updated : '' } /> }</p>
            </div>
        </div>
    );
}