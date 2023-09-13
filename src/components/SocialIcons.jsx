// Imports the necessary social media icons from the react-icons library
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";

// SocialIcons component
export default function SocialIcons() {
  return (
    // Container for social media icons, flex layout with spacing
    <div className="flex items-center justify-center space-x-5 mb-3">
      {/* Facebook icon */}
      <AiFillFacebook className="text-3xl" />
      {/* Instagram icon */}
      <AiOutlineInstagram className="text-3xl" />
      {/* Twitter icon */}
      <AiOutlineTwitter className="text-3xl" />
      {/* YouTube icon */}
      <AiFillYoutube className="text-3xl" />
    </div>
  );
}
