import Image from 'next/image';

type ProfileProps = {
    tailwindClassInDiv: string,
    tailwindClassInImgTag: string,
    isMobile: boolean
}

const ProfileImageCard = ({ tailwindClassInDiv, tailwindClassInImgTag, isMobile }: ProfileProps) => {
    const imgSrc = isMobile ? '/images/profile_mobile6.png' : '/images/ProfileImageSite2.png';
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
                width='250'
                // fill={ true }
                height={ 0 }
            />
        </div>
    );
}; 
            
export default ProfileImageCard;