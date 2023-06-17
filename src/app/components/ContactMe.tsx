/* eslint-disable react/jsx-curly-spacing */
import { NextPage } from 'next';
import ScrollDownButton from '../subComponents/ScrollDownButton';
import { FaGithub } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import ContactCard from '../subComponents/ContactCard';

const Contact: NextPage = () => {
    return (
        <section id="contact" className="bg-gray-200 p-4 md:p-8 lg:p-8 relative shadow-xl rounded-md md:h-full">

            <div className="absolute bg-blue-900 w-fit p-3 text-white md:p-6 rounded z-10">
                <h1 className='md:text-5xl'>Fale comigo</h1>
            </div>

            <div className="bg-white flex flex-col items-center pt-14 lg:pt-20 md:pt-20 md:h-[80vh]">
                <div className='text-center pt-8 w-fit flex flex-col items-center '>
                    <h1 className=' text-[60px] font-bold'>Não se acanhe!</h1>
                    <h1 className=' text-[60px] font-bold'>👇</h1>
                </div>

                <div className="flex flex-row justify-center items-center gap-4 flex-wrap">
                    <ContactCard 
                        title='WhatsApp'
                        icon={<IoLogoWhatsapp size={50}/>}
                        description='Mande um zap.'
                        phoneNumber='5592988065301'
                        wppMessage='Olá! Estou entrando em contato através do seu site.'
                    />
                    <ContactCard 
                        title='Email'
                        icon={<MdEmail size={50}/>}
                        description='Envie-me uma mensagem.'
                        email='cafecafe51@@hotmail.com'
                        emailSubject='[CONTATO PELO SEU SITE]'
                        emailBody='Olá! Estou entrando em contato através do seu site.'
                    />
                    <ContactCard 
                        title='Linkedin'
                        icon={<BsLinkedin size={50}/>}
                        description='Conecte-se comigo'
                        url='https://www.linkedin.com/in/japh%C3%A9-nogueira-67aa7b1a8/'
                    />
                    <ContactCard 
                        title='GitHub'
                        icon={<FaGithub size={50}/>}
                        description='Confira meus repositórios'
                        url='https://github.com/cafe51/'
                    />
                </div>

            </div>
            <ScrollDownButton href="#japhe" />
        </section>
    );
};

export default Contact;
