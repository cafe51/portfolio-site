/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';

interface ProfileImageProps {
    imageUrl?: string;
    signUp?: boolean;
    width: string;
    height: string;
    isLoading?: boolean;
    bgGray?: boolean;
}

export function ProfileImage({ imageUrl, signUp, width, height, isLoading, bgGray }: ProfileImageProps) {
    const defaultPhoto = 'https://img.freepik.com/free-icon/user_318-563642.jpg?w=360';
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
                ? <div className={ `${width} ${height} rounded-full animate-pulse ${bgGray ? 'bg-gray-200' : 'bg-white'}` }></div>
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
