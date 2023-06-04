import Image from 'next/image';

type SkillCardProps = {
    skillData: {
        id: number,
        skillsImage: string,
        skillsImageAlt: string,
        skillsName: string,
    },
    key: number
}

const SkillCard = ({ skillData }: SkillCardProps) => {
    return (
        <div className="flex flex-col justify-between items-center">
            <Image
                src={ skillData.skillsImage }
                alt={ skillData.skillsImageAlt }
                width={ 80 }
                height={ 80 }
                className="hover:animate-spin"
            />
            <h3 className="text-xl font-semibold text-center">{ skillData.skillsName }</h3>
        </div>
    );
};

export default SkillCard;
