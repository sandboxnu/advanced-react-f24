import { useProfileViews } from "../hooks/useProfileViews";
import { Context } from "../Context";
import { useContext } from "react";

const ProfileCardHeader = () => {
  const profile = useContext(Context);

  if (!profile) {
    return <div>Loading profile...</div>;
  }
  
  return (
    <div className="profile-card-header">
      <h2>{profile.firstName}</h2>
      <img src={profile.avatar} alt={profile.firstName} />
      <div>Profile Views {useProfileViews(profile.firstName)}</div>
    </div>
  );
};

export default ProfileCardHeader;
