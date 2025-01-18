import { useContext } from "react";
import { useProfileViews } from "../hooks/useProfileViews";
import { ProfileContext } from "../context";

const ProfileCardHeader = () => {
  const profile = useContext(ProfileContext)
  if (profile === null) {
    return null;
  }
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
