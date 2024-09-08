import { ProfileData } from "../common-types";

const ProfileCardContent = ({ profile }: { profile: ProfileData }) => {
  return <p>{profile.bio}</p>;
};

export default ProfileCardContent;
