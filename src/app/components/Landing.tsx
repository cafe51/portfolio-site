import { NextPage } from 'next';
import ScrollDownButton from '../subComponents/ScrollDownButton';
import { HiDocumentArrowDown } from 'react-icons/hi2';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const Landing: NextPage = () => {
    return (
        <section id="landing" className="relative p-4 bg-gray-200 rounded-md md:p-12 md:pt-4 md:mb-10 md:h-full">
            <div className="bg-white flex justify-center items-center md:items-center lg:items-start mx-auto sm:p-4 rounded-xl md:h-[80vh]">
                { /* Seção visível apenas em telas pequenas */ }
                <div className="flex flex-col items-center justify-center md:hidden ">
                    <div className='flex flex-col items-center pt-3'>
                        <div className='flex flex-col justify-center w-full px-2 text-center'>
                            <h1 className=' text-[28px] font-bold'>Desenvolvedor Web Full Stack</h1>
                            
                        </div>
                    </div>
                    <div
                        className={ `
                            bg-[url('/images/profile_mobile7.png')]
                            bg-cover
                            rounded-full
                            relative
                            max-h-72
                            mt-0
                            w-[250px]
                            h-[450px]
                            ` }>
                    </div>
                    <div className='flex flex-col items-center justify-center w-2/4 mb-12 -mt-12 text-base text-center '>
                        <div className='z-50 flex flex-row gap-4'>
                            <a href={ 'https://github.com/cafe51/' } target="_blank" rel="noopener noreferrer" className='hover:scale-110'>
                                <FaGithub size={ 36 }/>
                            </a>
                            <a href={ 'https://www.linkedin.com/in/japhe-full-stack' } target="_blank" rel="noopener noreferrer" className='hover:scale-110'>
                                <BsLinkedin size={ 36 }/>
                            </a>

                            <a href={ '/japhe-cv.pdf' } target="_blank" download rel="noopener noreferrer" className='hover:scale-110'>
                                <HiDocumentArrowDown size={ 38 }/>   
                            </a>
                        </div>
                        <p className='pt-4'>Olá, meu nome é Japhé Nogueira. Sou um Desenvolvedor Web Full Stack e amo muito o que faço.</p>
                    </div>
                </div>
                { /* Seção visível apenas em telas medias */ }
                <div className="flex-col items-center hidden lg:hidden md:flex ">
                    <div className='absolute flex flex-col items-center pt-4 w-fit '>
                        <div className='text-end'>
                            <h1 className=' text-[48px] font-bold'>Desenvolvedor Web</h1>
                            <h1 className=' text-[48px] font-bold'>Full Stack</h1>
                        </div>
                    </div>
                    <div className="flex flex-row items-start justify-center w-full gap-4 pt-20">
                        <div
                            className={ `
                            bg-[url('/images/ProfileImageSite2.png')]
                            bg-cover
                            rounded-full
                            mt-4
                            w-[300px]
                            h-[450px]
                    
                            ` }>
                        </div>
                        <div className='flex flex-col items-start justify-center w-2/6 pt-24 text-xl '>
                            <p>Olá, meu nome é Japhé Nogueira. Sou um Desenvolvedor Web Full Stack e amo muito o que faço.</p>
                            <div className='z-50 flex flex-row gap-4 pt-4'>
                                <a href={ 'https://github.com/cafe51/' } target="_blank" rel="noopener noreferrer" className='hover:scale-110'>
                                    <FaGithub size={ 36 }/>
                                </a>
                                <a href={ 'https://www.linkedin.com/in/japhe-full-stack/' } target="_blank" rel="noopener noreferrer" className='hover:scale-110'>
                                    <BsLinkedin size={ 36 }/>
                                </a>

                                <a href={ '/images/japhe-cv.pdf' } target="_blank" download rel="noopener noreferrer" className='hover:scale-110'>
                                    <HiDocumentArrowDown size={ 38 }/>   
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                { /* Seção visível apenas em telas grandes */ }
                <div className="flex-col items-center hidden lg:flex ">
                    <div className='absolute flex flex-col items-center pt-8 w-fit '>
                        <div className='text-end'>
                            <h1 className=' text-[60px] font-bold'>Desenvolvedor Web</h1>
                            <h1 className=' text-[60px] font-bold'>Full Stack</h1>
                        </div>
                    </div>
                    <div className="flex items-start justify-center w-fit pt-28 ">
                        <div
                            className={ `
                            bg-[url('/images/ProfileImageSite2.png')]
                            bg-cover
                            rounded-full
                            mt-4
                            w-[300px]
                            h-[450px]
                           
                            ` }>
                        </div>
                        <div className='flex flex-col items-start justify-center w-2/6 pl-16 text-2xl pt-36 '>
                            <p>Olá, meu nome é Japhé Nogueira. Sou um Desenvolvedor web Full Stack e amo muito o que faço.</p>
                            <div className='flex flex-row gap-10 pt-6'>
                                <a href={ 'https://github.com/cafe51/' } target="_blank" rel="noopener noreferrer" className='hover:scale-110'>
                                    <FaGithub size={ 40 }/>
                                </a>
                                <a href={ 'https://www.linkedin.com/in/japhe-full-stack/' } target="_blank" rel="noopener noreferrer" className='hover:scale-110'>
                                    <BsLinkedin size={ 40 }/>
                                </a>

                                <a href={ '/japhe-cv.pdf' } target="_blank" download rel="noopener noreferrer" className='hover:scale-110'>
                                    <HiDocumentArrowDown size={ 42 }/>   
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollDownButton href="#about" />
        </section>
    );
};

export default Landing;
