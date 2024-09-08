import ProfileCard from "./ProfileCard";
import { useSecondsElapsed } from "../hooks/useSecondsElapsed";
import { useProfile } from "../hooks/useProfile";

const Profile = () => {
  const profile = useProfile();

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
