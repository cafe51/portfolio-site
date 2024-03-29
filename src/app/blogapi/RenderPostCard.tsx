import { useState } from 'react';
import PostCard from './PostCard';
import PostForm from './PostForm';
import { PostType, UserType } from './types';

interface RenderPostCardProps {
    postData: PostType;
    userData: {user: UserType, token: string};
}

export default function RenderPostCard({ postData, userData }: RenderPostCardProps) {
    const [ editMode, setEditMode ] = useState(false);
    return(
        editMode
            ? <PostForm postData={ postData } userData={ userData } editMode={ editMode } setEditMode={ setEditMode }/>
            : <PostCard postData={ postData } userData={ userData } setEditMode={ setEditMode }/>
    );
}