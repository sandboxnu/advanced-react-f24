import { ProfileData } from "./common";
import ProfileCardContent from "./ProfileCardContent";
import ProfileCardHeader from "./ProfileCardHeader";

const ProfileCard = ({ profile }: { profile: ProfileData }) => {
  return (
    <div className="profile-card">
      <ProfileCardHeader profile={profile} />
      <ProfileCardContent profile={profile} />
    </div>
  );
};

export default ProfileCard;
