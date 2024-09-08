import { ProfileData } from "../common-types";

const ProfileCardHeader = ({ profile }: { profile: ProfileData }) => {
  return (
    <div className="profile-card-header">
      <h2>{profile.firstName}</h2>
      <img src={profile.avatar} alt={profile.firstName} />
      <div>Profile Views [NOT YET IMPLEMENTED]</div>
    </div>
  );
};

export default ProfileCardHeader;
