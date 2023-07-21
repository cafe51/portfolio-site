import { PostType } from './types';

type PostCardProps = {
    postData: PostType;
    setEditMode: (mode: boolean) => void;
}

const defaultPhoto = 'https://media.istockphoto.com/id/587805156/pt/vetorial/profile-picture-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=9LD7Wx4KupKWbEddmEAI-HqJT8orG6l_1qPKUE9FvMg=';

export default function PostCard({ postData, setEditMode }: PostCardProps) {
    return(
        <div className='bg-gray-200 p-4 md:w-3/5 gap-6 rounded shadow flex flex-col justify-center'>
            <button
                className='p-1 rounded shadow-sm bg-blue-500 hover:bg-blue-700 text-white self-end w-1/3'
                onClick={ () => setEditMode(true) }
            >
                Edit
            </button>
            <div className='flex flex-row items-center justify-between gap-4 w-full '>
                <div className='flex flex-row items-center gap-4'>
                    <img
                        className='w-[50px] h-[50px]'
                        src={ postData.users?.image ? postData.users.image : defaultPhoto }
                        alt='profile-image'
                        width={ 50 }
                        height={ 50 }
                    />
                    <div className='flex flex-col'>
                        <h2>{ postData.users ? postData.users.display_name : '...' }</h2>
                        <p>{ postData.users ? postData.users.email : '...' }</p>
                    </div>
                </div>
                <div>
                    <p className=''>{ postData.published }</p>
                </div>
            </div>
            <div className='flex flex-col items-center gap-4'>
                <h1>{ postData.title }</h1>
                
                <div className=''>
                    <p>{ postData.content }</p>
                </div>
                <div className='flex'>
                    {
                        postData.categories.map((category) => (
                            <div
                                key={ category.id }
                                className="bg-blue-900 text-white text-sm py-1 px-2 mr-2 mb-2 rounded"
                            >
                                { category.name }
                            </div>
                        ))
                    }
                </div>
                <p>Atualizado pela última vez em: { postData.published }</p>
            </div>
        </div>
    );
}