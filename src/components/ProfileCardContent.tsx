import { useContext } from "react";
import { ProfileContext } from "../context";

const ProfileCardContent = () => {
  const profile = useContext(ProfileContext)
  if (profile === null) {
    return null;
  }
  return <p>{profile.bio}</p>;
};

export default ProfileCardContent;
