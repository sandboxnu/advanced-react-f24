import ProfileCard from "./ProfileCard";
import { useSecondsElapsed } from "../hooks/useSecondsElapsed";
import { Context } from "../Context";
import { useContext } from "react";

const Profile = () => {

  const profile = useContext(Context);

  if (!profile) {
    return <div>Loading profile...</div>;
  }
  const secondsElapsed = useSecondsElapsed(profile.firstName);
  return (
    <section className="profile">
      <div>Wow, check out this really cool person below</div>
      <div>Time spent viewing profile: {secondsElapsed} seconds.</div>
      <ProfileCard />
    </section>
  );
};

export default Profile;
