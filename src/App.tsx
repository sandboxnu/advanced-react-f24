import { useEffect, useState } from "react";
import Profile from "./Profile";
import { ProfileData } from "./common";
import "./styles.css";

const users: ProfileData[] = [
  {
    avatar: "https://avatars.githubusercontent.com/u/1",
    job: "Steampunk Inventor",
    bio: "Oliver, the ingenious steampunk inventor, spends his days tinkering away in a labyrinthine workshop filled with whirring gears and glowing gauges. His greatest creation? A sandbox-powered airship that soars the skies, perchance discovering new realms hidden within the clouds. When he's not perfecting his steam-driven contraptions, Oliver is busy charting fantastical maps of the world, each annotated with notes on where to find the rarest cogs and the finest brass. With a penchant for pocket watches and goggles, Oliver believes that time is the greatest adventure of all, and he never sets out without his trusty wrench and a twinkle in his eye.",
    firstName: "Oliver",
    lastName: "Kainoa",
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/2",
    job: "Forest Mystic",
    bio: "Liam, the enigmatic forest mystic, wanders the woods barefoot, whispering secrets to the ancient oaks and gathering herbs by moonlight. His sanctuary is a sacred sandbox hidden deep in the heart of the forest, where he concocts potions that, perchance, might grant a glimpse into the future. Liam’s affinity for nature’s wonders is unparalleled, as he communes with the animals, understanding their languages as if they were his own. Draped in robes woven from leaves and vines, Liam believes that every stone, stream, and shadow holds a story, and he spends his nights inscribing them into the bark of the trees, preserving them for eternity.",
    firstName: "Liam",
    lastName: "Huxley",
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/3",
    job: "Cosmic Dreamer",
    bio: "Felix, the cosmic dreamer, lives with his head in the stars and his feet firmly planted on the ground, in a sandbox where the grains of sand glitter like distant galaxies. He spends his evenings lying beneath the night sky, perchance catching a glimpse of a shooting star to wish upon. With a telescope in one hand and a quill in the other, Felix records the celestial tales that unfold above, each constellation sparking a new story in his ever-expanding universe. A believer in the power of dreams, Felix is on a lifelong quest to unlock the mysteries of the cosmos, convinced that somewhere out there, among the stars, lies the answer to every question he’s ever asked.",
    firstName: "Felix",
    lastName: "Brady",
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/4",
    job: "Toy Maker",
    bio: "Graham, the toymaker extraordinaire, operates out of a delightfully cluttered shop where imagination runs wild, and every toy comes to life. His sandbox is a place of endless creativity, where wooden blocks stack themselves into castles, and clockwork creatures spring to life, perchance leading their own tiny revolutions. Graham's hands are always busy crafting, carving, and painting, his workshop a whirlwind of sawdust and laughter. With a heart as light as a feather and a mind full of whimsy, Graham believes that the best toys are those that inspire endless play, and he pours his soul into every creation, hoping to bring a little bit of magic into the lives of children everywhere.",
    firstName: "Graham",
    lastName: "Frost",
  },
];

const App = () => {
  useEffect(() => {
    // This useEffect hook is just for demonstration purposes
    console.log("[DEBUG]", "App component mounted");
    return () => {
      console.log("[DEBUG]", "App component unmounted");
    };
  }, []);

  console.log("rendering app");

  const [profilesViewed, setProfilesViewed] = useState(0);
  const [profileData, setProfileData] = useState<ProfileData>(
    () => users[Math.floor(Math.random() * users.length)]
  );
  const [fullName, setFullName] = useState<string>();

  useEffect(() => {
    setFullName(`${profileData.firstName} ${profileData.lastName}`);
  }, [profileData.firstName, profileData.lastName]);

  useEffect(() => {
    setProfilesViewed((prevProfilesViewed) => prevProfilesViewed + 1);
  }, [profileData]);

  return (
    <main>
      <h1>Welcome to {fullName}'s Page</h1>
      <button
        onClick={() =>
          setProfileData(
            (prevProfileData) =>
              users.filter(
                (user) => user.firstName !== prevProfileData.firstName
              )[Math.floor(Math.random() * (users.length - 1))]
          )
        }
      >
        Change User
      </button>
      <div>Profiles viewed: {profilesViewed}</div>
      <Profile profile={profileData} />
    </main>
  );
};

export default App;
