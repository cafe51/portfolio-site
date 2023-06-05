import Image from 'next/image';

type SkillCardProps = {
    assetData: {
        id: number,
        skillsImage: string,
        skillsImageAlt: string,
        skillsName: string,
    },
}

const SkillCard = ({ assetData }: SkillCardProps) => {
    return (
        <div className="flex flex-col justify-between items-center">
            <Image
                src={ assetData.skillsImage }
                alt={ assetData.skillsImageAlt }
                width={ 80 }
                height={ 80 }
                className="hover:animate-spin"
            />
            <h3 className="text-xl font-semibold text-center">{ assetData.skillsName }</h3>
        </div>
    );
};

export default SkillCard;
