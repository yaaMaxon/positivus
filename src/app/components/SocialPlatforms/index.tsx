import { socialPlatforms } from "@/app/types/SocialPlatforms";

const SocialPlatforms = () => {
  return (
    <ul className="flex flex-wrap justify-between">
      {socialPlatforms.map(({ icon }, index) => (
        <li key={index}>{icon}</li>
      ))}
    </ul>
  );
};

export default SocialPlatforms;
