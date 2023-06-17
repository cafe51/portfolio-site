import React from 'react';

interface ContactCardProps {
    title: string;
    icon: React.ReactNode;
    description: string;
    phoneNumber?: string;
    wppMessage?: string;
    email?: string;
    emailSubject?: string;
    emailBody?: string;
    url?: string; 
}

interface CardInfoProps {
    title: string;
    icon: React.ReactNode;
    description: string;
}

const CardInfo: React.FC<CardInfoProps> = ({ title, icon, description }) => {
    return (
        <div className='
        flex flex-col items-center p-4 w-[300px] bg-gray-200 rounded-lg shadow-lg
        transition-transform duration-500 ease-in-out transform hover:scale-110
        '>
            <h1>{ title }</h1>
            { icon }
            <p className='p-2'>{ description }</p>
        </div>
    );
};

const ContactCard: React.FC<ContactCardProps> = ({ title, icon, description, phoneNumber, wppMessage, email, emailSubject, emailBody, url }) => {
    if (phoneNumber) {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(wppMessage || '')}`;
        return (
            <a href={ url } target="_blank" rel="noopener noreferrer">
                <CardInfo title={ title } icon={ icon } description={ description }/>
            </a>
        );
    }
    else if (email) {
        const url = `mailto:${email}?subject=${encodeURIComponent(emailSubject || '')}&body=${encodeURIComponent(emailBody || '')}`;
        return (
            <a href={ url } target="_blank" rel="noopener noreferrer">
                <CardInfo title={ title } icon={ icon } description={ description }/>
            </a>
        );
    }
    else {return (
        <a href={ url } target="_blank" rel="noopener noreferrer">
            <CardInfo title={ title } icon={ icon } description={ description }/>
        </a>
    );}
};

export default ContactCard;