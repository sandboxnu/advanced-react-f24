import ProfileCard from "./ProfileCard";
import { useSecondsElapsed } from "../hooks/useSecondsElapsed";
import { useContext } from "react";
import { ProfileContext } from "../context";

const Profile = () => {
  const profile = useContext(ProfileContext);
  if (profile === null) {
    return null;
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
