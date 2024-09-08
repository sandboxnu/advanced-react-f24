import { ProfileData } from "../common-types";
import ProfileCard from "./ProfileCard";
import { useSecondsElapsed } from "../hooks/useSecondsElapsed";

const Profile = ({ profile }: { profile: ProfileData }) => {
  const secondsElapsed = useSecondsElapsed(profile.firstName);
  return (
    <section className="profile">
      <div>Wow, check out this really cool person below</div>
      <div>Time spent viewing profile: {secondsElapsed} seconds.</div>
      <ProfileCard profile={profile} />
    </section>
  );
};

export default Profile;
