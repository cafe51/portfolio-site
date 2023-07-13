// import Image from 'next/image';
import { PostType } from './interfaces';

type PostCardProps = {
    postData: PostType;
}

export default function PostCard({ postData }: PostCardProps) {
    return(
        <div className='bg-gray-200 p-4 md:w-3/5 gap-6 rounded shadow flex flex-col justify-center'>
            <div className='flex flex-row items-center justify-between gap-4 w-full '>
                <div className='flex flex-row items-center gap-4'>
                    <img
                        className='w-[50px] h-[50px]'
                        src={ postData.users.image ? postData.users.image : '' }
                        alt='profile-image'
                        width={ 50 }
                        height={ 50 }
                    />
                    <div className='flex flex-col'>
                        <h2>{ postData.users.display_name }</h2>
                        <p>{ postData.users.email }</p>
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