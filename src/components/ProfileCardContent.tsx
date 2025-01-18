import { Context } from "../Context";
import { useContext } from "react";

const ProfileCardContent = () => {
  const profile = useContext(Context);

  if (!profile) {
    return <div>Loading profile...</div>;
  }

  return <p>{profile.bio}</p>;
};

export default ProfileCardContent;
