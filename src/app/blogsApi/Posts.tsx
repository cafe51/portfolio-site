import { PostType } from './interfaces';
import PostCard from './PostCard';

type PostsProps = {
    posts: PostType[];
}

export default function Posts({ posts }: PostsProps) {
    return(
        <section className='flex flex-col gap-2'>
            { posts.map((post) => (<PostCard key={ post.id } postData={ post }/>)) }
        </section>
    );
}