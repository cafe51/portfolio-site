/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';

interface ProfileImageProps {
    imageUrl?: string;
    signUp?: boolean;
    width: string;
    height: string;
    isLoading?: boolean;
}

export function ProfileImage({ imageUrl, signUp, width, height, isLoading }: ProfileImageProps) {
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
            { isLoading
                ? <div className={ `${width} ${height} bg-white rounded-full animate-pulse` }></div>
                : <img
                    className={ `block object-cover object-center ${width} ${height} rounded-full` }
                    src={ displayUrl }
                    alt='profile-image'
                /> }
            
            { imageError
                ? signUp && <p className='p-1 text-xs text-center text-red-500'>A URL da imagem inserida é inválida.</p>
                : signUp && <p
                    className={ `p-1 text-xs text-center  mt-1 ${isLoading && 'w-full py-0 text-white bg-white animate-pulse'}` }
                >
                    Insira um link para uma imagem
                </p> }

        </div>
    );
}
