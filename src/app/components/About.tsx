import { NextPage } from 'next';
import ProfileImageCard from '../subComponents/ProfileImageCard';
import ProfileTitleCard from '../subComponents/ProfileTitleCard';
import ProfileDescriptionCard from '../subComponents/ProfileDescriptionCard';
import ScrollDownButton from '../subComponents/ScrollDownButton';

const About: NextPage = () => {
    return (
        <section id="about" className="bg-gray-200 md:p-8 lg:p-8 relative shadow-xl rounded-md">
            <div className="bg-white mx-auto sm:p-4 rounded-xl">
                { /* Seção visível apenas em telas pequenas */ }
                <div className="md:hidden">
                    <ProfileTitleCard />
                    <ProfileImageCard
                        isMobile = { true }
                        tailwindClassInDiv={ 'relative z-0 w-4/5 md:w-1/3 mx-auto md:mx-0 mb-6 md:mb-0 md:mr-8 overflow-hidden max-h-64 flex flex-col items-center' }
                        tailwindClassInImgTag = { '' }
                    />
                    <ProfileDescriptionCard />
                </div>
                { /* Seção visível apenas em telas grandes */ }
                <div className="hidden md:flex md:flex-row">
                    <div className="md:w-2/3 p-4">
                        <ProfileTitleCard />
                        <ProfileDescriptionCard />
                    </div>
                    <ProfileImageCard
                        isMobile = { false }
                        tailwindClassInDiv={ 'flex items-center' }
                        tailwindClassInImgTag = { 'max-h-96' }
                    />
                </div>
            </div>
            <ScrollDownButton href="#skills" />
        </section>
    );
};

export default About;
