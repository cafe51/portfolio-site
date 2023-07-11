import { PostType } from './interfaces';

type PostCardProps = {
    postData: PostType;
}

export default function PostCard({ postData }: PostCardProps) {
    return(
        <div className=''>
            <div>
                <h1>{ postData.title }</h1>
                <p>{ postData.published }</p>
                <div>
                    <p>{ postData.content }</p>
                </div>
                <div>
                    {
                        postData.categories.map((category) => (<div key={ category.id }>{ category.name }</div>))
                    }
                </div>
                <p>Atualizado pela última vez em: { postData.published }</p>
            </div>
            <div>
                <div>
                    <a href={ postData.users.image }/>
                </div>
                <div className='flex flex-col'>
                    <h2>{ postData.users.display_name }</h2>
                    <p>{ postData.users.email }</p>
                </div>
            </div>
        </div>
    );
}