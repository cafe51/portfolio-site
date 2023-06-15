import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

type ProjectCardProps = {
    assetData : {
        id: number,
        title: string,
        image: string,
        imageAlt: string,
        description: string,
        skills: string[],
        github: string,
        link: string,
    },
}

const ProjectCard = ({ assetData }: ProjectCardProps) => {
    return (
        <div className="bg-gray-200 md:h-[500px] md:p-6 rounded shadow flex flex-col place-content-around items-center transition-transform duration-500 ease-in-out transform hover:scale-110">
            <Image
                src={ assetData.image }
                alt={ assetData.imageAlt }
                width={ 400 }
                height={ 200 }
                className="rounded transition-transform duration-500 ease-in-out transform hover:scale-110"
            />
            <h3 className="text-xl font-semibold mt-4 mb-2">{ assetData.title }</h3>
            <div className='mb-4'>
                <p className="text-gray-600 ">{ assetData.description }</p>
            </div>
            
            <div className="flex flex-wrap mb-4">
                { assetData.skills.map((skill, index) => (
                    <span key={ index } className="bg-blue-900 text-white text-sm py-1 px-2 mr-2 mb-2 rounded">
                        { skill }
                    </span>
                )) }
            </div>
            <div className="flex p-4">
                <Link href={ assetData.github } className="mr-4" target="_blank" rel="noopener noreferrer">
                    <FaGithub color="black" size={ 24 }/>
                </Link>
                <Link href={ assetData.link } target="_blank" rel="noopener noreferrer">
                    <FiExternalLink color="black" size={ 24 }/>
                </Link>
            </div>
        </div>
                        
    );
};

export default ProjectCard;