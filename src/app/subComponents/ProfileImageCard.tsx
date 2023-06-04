import Image from 'next/image';

const ProfileImageCard = () => {
    return (
        <div>
            <Image
                src="/images/profile.jpg"
                alt="Sua imagem"
                width={ 300 }
                height={ 600 }
            />
        </div>
    );
}; 

export default ProfileImageCard;