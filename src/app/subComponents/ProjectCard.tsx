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
        <div>
            <Image
                src={ assetData.image }
                alt={ assetData.imageAlt }
                width={ 400 }
                height={ 200 }
                className="rounded"
            />
            <h3>{ assetData.title }</h3>
            <p>{ assetData.description }</p>
            <div>
                { assetData.skills.map((skill, index) => (
                    <span key={ index }>
                        { skill }
                    </span>
                )) }
            </div>
            <div>
                <Link href={ assetData.github }>
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