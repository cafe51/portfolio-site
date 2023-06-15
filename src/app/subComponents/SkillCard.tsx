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
        <div className="flex flex-col justify-between items-center transition-transform duration-500 ease-in-out transform hover:scale-110 w-fit">
            <Image
                src={ assetData.skillsImage }
                alt={ assetData.skillsImageAlt }
                width={ 80 }
                height={ 80 }
                className="transition-transform duration-500 ease-in-out transform hover:scale-110"
            />
            <h3 className="text-xl font-semibold text-center">{ assetData.skillsName }</h3>
        </div>
    );
};

export default SkillCard;
