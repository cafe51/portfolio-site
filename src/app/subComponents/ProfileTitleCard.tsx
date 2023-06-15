/* eslint-disable react/jsx-curly-spacing */

type ProfileAndTitleCardProps = {
    profileAndTitleCardDivClasses: string,
    titleClasses: string,
}

const ProfileTitleCard = ({ profileAndTitleCardDivClasses, titleClasses }: ProfileAndTitleCardProps) => {
    
    return (
        <div className={profileAndTitleCardDivClasses}>
            <h1 className={titleClasses}>Desenvolvedor Web Full Stack</h1>
        </div>

    );
};
  
export default ProfileTitleCard;