import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

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
        <div className="bg-gray-200  md:p-6 rounded shadow flex flex-row flex-wrap lg:flex-nowrap items-center justify-center">
            <div className= 'w-full flex flex-col items-center'>
                
                <div
                    className="relative w-full  rounded"
                    style={ { paddingBottom: '60.00% ' } }
                >
                    <Image
                        src={ assetData.image }
                        alt={ assetData.imageAlt }
                        fill
                        style={ { objectFit: 'cover' } }
                        className="rounded"
                    />
                </div>
                <div className="flex flex-wrap justify-center my-4 lg:my-8">
                    { assetData.skills.map((skill, index) => (
                        <span key={ index } className="bg-blue-900 text-white text-sm md:text-lg py-1 px-2 mr-2 mb-2 rounded">
                            { skill }
                        </span>
                    )) }
                </div>
            </div>

            <div className= 'w-4/5 flex flex-col items-center text-center md:px-8 lg:px-16 lg:pt-8'>
                <div className='mb-4'>
                    <h3 className="text-xl lg:text-2xl font-semibold mb-2">{ assetData.title }</h3>
                    <p className="text-gray-600 lg:text-xl ">{ assetData.description }</p>
                </div>
                <div className="flex p-4 ">
                    <Link href={ assetData.github } className="mr-4" target="_blank" rel="noopener noreferrer">
                        <FaGithub color="black" size={ 24 }/>
                    </Link>
                    {
                        assetData.link.length > 0
                            ? <Link href={ assetData.link } target="_blank" rel="noopener noreferrer">
                                <FiExternalLink color="black" size={ 24 }/>
                            </Link>
                            : ''
                    }
                </div>
            </div>
        </div>
                        
    );
};

export default ProjectCard;