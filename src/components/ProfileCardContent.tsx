import { useProfile } from "../hooks/useProfile";

const ProfileCardContent = () => {
  const profile = useProfile();
  return <p>{profile.bio}</p>;
};

export default ProfileCardContent;
