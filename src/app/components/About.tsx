/* eslint-disable react/jsx-curly-spacing */
import { NextPage } from 'next';
// import ProfileImageCard from '../subComponents/ProfileImageCard';
// import ProfileDescriptionCard from '../subComponents/ProfileDescriptionCard';
import ScrollDownButton from '../subComponents/ScrollDownButton';
import { HiDocumentDownload } from 'react-icons/hi';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
// import ProfileTitleCard from '../subComponents/ProfileTitleCard';

const About: NextPage = () => {
    return (
        <section id="about" className="bg-gray-200 p-4 md:p-12 md:pt-4 md:mb-10 relative rounded-md md:h-full">
            <div className="bg-white flex justify-center items-center md:items-center lg:items-start mx-auto sm:p-4 rounded-xl md:h-[80vh]">
                { /* Seção visível apenas em telas pequenas */ }
                <div className="md:hidden flex flex-col items-center justify-center ">
                    <div className='flex flex-col items-center pt-3'>
                        <div className='w-full flex flex-col justify-center text-center px-2'>
                            <h1 className=' text-[28px] font-bold'>Desenvolvedor Web Full Stack</h1>
                            {/* <h1 className=' text-[28px] font-bold'>Full Stack</h1> */}
                        </div>
                    </div>
                    <div
                        className={`
                            bg-[url('/images/profile_mobile7.png')]
                            bg-cover
                            rounded-full
                            relative
                            max-h-72
                            mt-0
                            w-[250px]
                            h-[450px]
                            `}>
                    </div>
                    <div className='-mt-12 w-2/4 mb-12 flex flex-col justify-center items-center text-center text-base '>
                        <div className='flex flex-row gap-4'>
                            <FaGithub size={ 36 }/>
                            <BsLinkedin size={ 36 }/>
                            <HiDocumentDownload size={ 36 }/>
                        </div>
                        <p className='pt-4'>Olá, meu nome é Japhé Nogueira. Sou um Desenvolvedor web Full Stack e amo muito o que faço.</p>
                    </div>
                </div>
                { /* Seção visível apenas em telas medias */ }
                <div className="hidden lg:hidden md:flex flex-col items-center ">
                    <div className='pt-4 absolute w-fit flex flex-col items-center '>
                        <div className='text-end'>
                            <h1 className=' text-[48px] font-bold'>Desenvolvedor Web</h1>
                            <h1 className=' text-[48px] font-bold'>Full Stack</h1>
                        </div>
                    </div>
                    <div className="w-full flex flex-row items-start justify-center gap-4 pt-20">
                        <div
                            className={`
                            bg-[url('/images/ProfileImageSite2.png')]
                            bg-cover
                            rounded-full
                            mt-4
                            w-[300px]
                            h-[450px]
                    
                            `}>
                        </div>
                        <div className='pt-24 flex flex-col justify-center items-start w-2/6 text-xl  '>
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
                <div className="hidden lg:flex flex-col items-center ">
                    <div className='pt-8 absolute w-fit flex flex-col items-center '>
                        <div className='text-end'>
                            <h1 className=' text-[60px] font-bold'>Desenvolvedor Web</h1>
                            <h1 className=' text-[60px] font-bold'>Full Stack</h1>
                        </div>
                    </div>
                    <div className="w-fit flex items-start justify-center pt-28 ">
                        <div
                            className={`
                            bg-[url('/images/ProfileImageSite2.png')]
                            bg-cover
                            rounded-full
                            mt-4
                            w-[300px]
                            h-[450px]
                           
                            `}>
                        </div>
                        <div className='pt-36 pl-16 flex flex-col justify-center items-start w-2/6 text-2xl  '>
                            <p>Olá, meu nome é Japhé Nogueira. Sou um Desenvolvedor web Full Stack e amo muito o que faço.</p>
                            <div className='flex flex-row gap-10 pt-6'>
                                <FaGithub size={ 40 }/>
                                <BsLinkedin size={ 40 }/>
                                <HiDocumentDownload size={ 40 }/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="hidden lg:flex flex-row w-4/5 justify-center ">
                    <ProfileImageCard
                        imageSize = { 250 }
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
                </div> */}

            </div>
            <ScrollDownButton href="#skills" />
        </section>
    );
};

export default About;
