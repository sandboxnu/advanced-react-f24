import { ProfileData } from "../common-types";
import { useProfileViews } from "../hooks/useProfileViews";

const ProfileCardHeader = ({ profile }: { profile: ProfileData }) => {
  const profileViews = useProfileViews(profile.firstName);
  return (
    <div className="profile-card-header">
      <h2>{profile.firstName}</h2>
      <img src={profile.avatar} alt={profile.firstName} />
      <div>Profile Views {profileViews}</div>
    </div>
  );
};

export default ProfileCardHeader;
