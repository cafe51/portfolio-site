import Image from 'next/image';

type ProfileProps = {
    tailwindClassInDiv: string,
    tailwindClassInImgTag: string,
    imageSize: number;
    isMobile: boolean
}

const ProfileImageCard = ({ tailwindClassInDiv, tailwindClassInImgTag, isMobile, imageSize }: ProfileProps) => {
    const imgSrc = isMobile ? '/images/profile_mobile7.png' : '/images/ProfileImageSite2.png';
    return (
        <div className={ `${tailwindClassInDiv}` }>
            <Image
                className={ `
                ${ tailwindClassInImgTag }
                rounded-full
                shadow
                ` }
                src={ imgSrc }
                alt="Sua imagem"
                width={ imageSize }
                // fill={ true }
                height={ 0 }
            />
        </div>
    );
}; 
            
export default ProfileImageCard;