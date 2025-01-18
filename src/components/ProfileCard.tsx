import { ProfileData } from "../common-types";
import ProfileCardContent from "./ProfileCardContent";
import ProfileCardHeader from "./ProfileCardHeader";
import { useProfile } from "../ProfileContext";

const ProfileCard = () => {
  const profile = useProfile();
  return (
    <div className="profile-card">
      <ProfileCardHeader />
      <ProfileCardContent  />
    </div>
  );
};

export default ProfileCard;
