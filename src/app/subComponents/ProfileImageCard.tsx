import Image from 'next/image';

type ProfileProps = {
    tailwindClassInDiv: string,
    tailwindClassInImgTag: string,
    isMobile: boolean
}

const ProfileImageCard = ({ tailwindClassInDiv, tailwindClassInImgTag, isMobile }: ProfileProps) => {
    const imgSrc = isMobile ? '/images/profile_mobile1.png' : '/images/profile.jpg';
    return (
        <div className={ tailwindClassInDiv }>
            <Image
                className={ `${ tailwindClassInImgTag } rounded-lg shadow ` }
                src={ imgSrc }
                alt="Sua imagem"
                width={ 300 }
                height={ 0 }
            />
        </div>
    );
}; 
            
export default ProfileImageCard;