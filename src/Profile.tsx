import { ProfileData } from "./common";
import ProfileCard from "./ProfileCard";

const Profile = ({ profile }: { profile: ProfileData }) => {
  return (
    <section className="profile">
      <div>Wow, check out this really cool person below</div>
      <ProfileCard profile={profile} />
    </section>
  );
};

export default Profile;
