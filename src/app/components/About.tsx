import { NextPage } from 'next';
import ProfileImageCard from '../subComponents/ProfileImageCard';
import ProfileTitleCard from '../subComponents/ProfileTitleCard';
import ProfileDescriptionCard from '../subComponents/ProfileDescriptionCard';

const About: NextPage = () => {
    return (
        <section id="about">
            <div>
                { /* Seção visível apenas em telas pequenas */ }
                <div className="flex flex-col md:hidden">
                    <ProfileTitleCard />
                    <ProfileImageCard/>
                    <ProfileDescriptionCard />
                </div>
                { /* Seção visível apenas em telas grandes */ }
                <div className="hidden md:flex md:flex-row">
                    <div className="md:w-2/3 p-4">
                        <ProfileTitleCard />
                        <ProfileDescriptionCard />
                    </div>
                    <ProfileImageCard/>
                </div>
            </div>
        </section>
    );
};

export default About;