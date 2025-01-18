import { ProfileData } from "../common-types";
import { useProfile } from "../ProfileContext";

const ProfileCardContent = () => {
  const profile = useProfile();
  return <p>{profile.bio}</p>;
};

export default ProfileCardContent;
