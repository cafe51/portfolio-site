import Image from 'next/image';

const ProfileImageCard = () => {
    return (
        <div>
            <Image
                src="/images/profile.jpg"
                alt="Sua imagem"
            />
        </div>
    );
}; 

export default ProfileImageCard;