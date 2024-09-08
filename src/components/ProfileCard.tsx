import ProfileCardContent from "./ProfileCardContent";
import ProfileCardHeader from "./ProfileCardHeader";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <ProfileCardHeader />
      <ProfileCardContent />
    </div>
  );
};

export default ProfileCard;
