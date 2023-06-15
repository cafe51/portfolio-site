/* eslint-disable react/jsx-curly-spacing */

type ProfileAndTitleCardProps = {
    ProfileAndTitleCardClasses: string,
}

const ProfileTitleCard = ({ ProfileAndTitleCardClasses }: ProfileAndTitleCardProps) => {
    
    return (
        <div className={ProfileAndTitleCardClasses}>
            {/* <div className="flex flex-col items-start"> */}
            {/* <h1 className="mb-2">Japhé Nogueira</h1> */}
            <h1 className="mb-2 text-5xl text font-bold">Desenvolvedor Web Full Stack</h1>
            {/* <h1 className="mb-2 text-start text-4xl text font-bold">Full Stack</h1> */}
            {/* </div> */}
        </div>

    );
};
  
export default ProfileTitleCard;