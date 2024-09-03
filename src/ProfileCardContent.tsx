import { ProfileData } from "./common";

const ProfileCardContent = ({ profile }: { profile: ProfileData }) => {
  return <p>{profile.bio}</p>;
};

export default ProfileCardContent;
