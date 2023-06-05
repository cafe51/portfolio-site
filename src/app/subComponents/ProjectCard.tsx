import Image from 'next/image';
import Link from 'next/link';
import GithubIcon from '../../../public/github-142-svgrepo-com.svg';
import OpenExternal from '../../../public/open-external-svgrepo-com.svg';

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
        <div className="bg-gray-100 rounded shadow flex flex-col justify-between items-center">
            <Image
                src={ assetData.image }
                alt={ assetData.imageAlt }
                width={ 400 }
                height={ 200 }
                className="rounded"
            />
            <h3 className="text-xl font-semibold mt-4 mb-2">{ assetData.title }</h3>
            <p className="text-gray-600 mb-4">{ assetData.description }</p>
            <div className="flex flex-wrap mb-4">
                { assetData.skills.map((skill, index) => (
                    <span key={ index } className="bg-blue-900 text-white text-sm py-1 px-2 mr-2 mb-2 rounded">
                        { skill }
                    </span>
                )) }
            </div>
            <div className="flex">
                <Link href={ assetData.github } className="mr-4">
                    <Image
                        src={ GithubIcon }
                        alt="GitHub"
                        width={ 20 }
                        height={ 20 }
                    />
                </Link>
                <Link href={ assetData.link }>
                    <Image
                        src={ OpenExternal }
                        alt="GitHub"
                        width={ 20 }
                        height={ 20 }
                    />
                </Link>
            </div>
        </div>
                        
    );
};

export default ProjectCard;