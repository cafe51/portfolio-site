/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';

interface ProfileImageProps {
    imageUrl?: string;
    signUp?: boolean;
}

export function ProfileImage({ imageUrl, signUp }: ProfileImageProps) {
    const defaultPhoto = 'https://media.istockphoto.com/id/587805156/pt/vetorial/profile-picture-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=9LD7Wx4KupKWbEddmEAI-HqJT8orG6l_1qPKUE9FvMg=';
    const [displayUrl, setDisplayUrl] = useState(imageUrl || defaultPhoto);
    const [imageError, setImageError] = useState(false);

    useEffect(() => {
        setImageError(false);
        const imageObj = new Image();
        imageObj.src = imageUrl || defaultPhoto;
        imageObj.onerror = () => {
            setDisplayUrl(defaultPhoto);
            setImageError(true);
        };
        imageObj.onload = () => {
            setDisplayUrl(imageUrl || defaultPhoto);
            setImageError(false);
        };
    }, [imageUrl]);

    return (
        <div className='flex flex-col items-center'>
            <img
                className='w-[50px] h-[50px]'
                src={ displayUrl }
                alt='profile-image'
                width={ 50 }
                height={ 50 }
            />
            { imageError
                ? signUp && <p className='text-red-500 text-xs'>A URL da imagem inserida é inválida.</p>
                : signUp && <p className='text-xs'>Insira um link para uma imagem</p> }
        </div>
    );
}
