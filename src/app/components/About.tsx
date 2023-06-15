/* eslint-disable react/jsx-curly-spacing */
import { NextPage } from 'next';
import ProfileImageCard from '../subComponents/ProfileImageCard';
import ProfileDescriptionCard from '../subComponents/ProfileDescriptionCard';
import ScrollDownButton from '../subComponents/ScrollDownButton';
import { HiDocumentDownload } from 'react-icons/hi';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import ProfileTitleCard from '../subComponents/ProfileTitleCard';

const About: NextPage = () => {
    return (
        <section id="about" className="bg-gray-200 p-4 md:p-8 lg:p-8 relative shadow-xl rounded-md h-full">
            <div className="bg-white flex justify-center mx-auto sm:p-4 rounded-xl h-4/5">
                { /* Seção visível apenas em telas pequenas */ }
                <div className="md:hidden">
                    <div>
                        <ProfileTitleCard
                            profileAndTitleCardDivClasses=''
                            titleClasses=''
                        />
                    </div>
                    <div>
                        <ProfileImageCard
                            isMobile = { true }
                            tailwindClassInDiv={
                                `
                                relativez-0
                                
                                md:w-1/3
                                mx-auto
                                md:mx-0
                                mb-6
                                md:mb-0
                                md:mr-8
                                overflow-hidden
                                max-h-64
                                flex
                                flex-col
                                items-center
                                `
                            }
                            tailwindClassInImgTag = { '' }
                        />
                    </div>
                    <div>
                        <ProfileDescriptionCard />
                    </div>
                </div>
                { /* Seção visível apenas em telas medias */ }
                <div className="hidden lg:hidden md:flex flex-col items-center ">
                    <div className='pt-4 fixed w-3/4 flex flex-col items-center'>
                        <div className='text-end'>
                            <h1 className=' text-[48px] font-bold'>Desenvolvedor Web</h1>
                            <h1 className=' text-[48px] font-bold'>Full Stack</h1>
                        </div>
                    </div>
                    <div className="w-full flex flex-row items-start justify-center gap-4  pt-20">
                        <ProfileImageCard
                            isMobile = { false }
                            tailwindClassInDiv={ 'flex items-center mt-4' }
                            tailwindClassInImgTag = { 'max-h-96' }
                        />
                        <div className='pt-32 flex flex-col justify-center items-start w-2/6 text-xl  '>
                            <p>Olá, meu nome é Japhé Nogueira. Sou um Desenvolvedor web Full Stack e amo muito o que faço.</p>
                            <div className='flex flex-row gap-4 pt-4  '>
                                <FaGithub size={ 36 }/>
                                <BsLinkedin size={ 36 }/>
                                <HiDocumentDownload size={ 36 }/>
                            </div>
                        </div>
                    </div>
                </div>
                { /* Seção visível apenas em telas grandes */ }
                <div className="hidden lg:flex flex-row w-4/5 justify-center ">
                    <ProfileImageCard
                        isMobile = { false }
                        tailwindClassInDiv={ 'flex items-center' }
                        tailwindClassInImgTag = { 'max-h-96' }
                    />
                    <div className="md:w-2/3 p-4 flex flex-col items-center justify-center">
                        <div className='pt-4 w-5/6 flex flex-col items-center'>
                            <div className='w-full flex flex-row justify-center text-center'>
                                <h1 className=' text-[48px] font-bold'>Desenvolvedor Web Full Stack</h1>

                            </div>
                        </div>
                        <div className='text-center w-full text-2xl '>
                            <p>Olá, meu nome é Japhé Nogueira.</p>
                            <p>Sou um Desenvolvedor web Full Stack</p>
                            <p>e amo muito o que faço.</p>
                            <div className='flex flex-row gap-4 justify-center p-8'>
                                <FaGithub size={ 36 }/>
                                <BsLinkedin size={ 36 }/>
                                <HiDocumentDownload size={ 36 }/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <ScrollDownButton href="#skills" />
        </section>
    );
};

export default About;
