import Image from 'next/image';
import Link from 'next/link';
import GithubIcon from '../../../public/github-142-svgrepo-com.svg';
import OpenExternal from '../../../public/open-external-svgrepo-com.svg';

type ProjectCardProps = {
    projectData : {
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

const ProjectCard = ({ projectData }: ProjectCardProps) => {
    return (
        <div>
            <Image
                src={ projectData.image }
                alt={ projectData.imageAlt }
                width={ 400 }
                height={ 200 }
                className="rounded"
            />
            <h3>{ projectData.title }</h3>
            <p>{ projectData.description }</p>
            <div>
                { projectData.skills.map((skill, index) => (
                    <span key={ index }>
                        { skill }
                    </span>
                )) }
            </div>
            <div>
                <Link href={ projectData.github }>
                    <Image
                        src={ GithubIcon }
                        alt="GitHub"
                        width={ 20 }
                        height={ 20 }
                    />
                </Link>
                <Link href={ projectData.link }>
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