import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube } from "react-icons/ai"

export default function SocialIcons() {
  return (
    <div className="flex items-center justify-center space-x-5 mb-3">
        <AiFillFacebook className="text-3xl" />
        <AiOutlineInstagram className="text-3xl" />
        <AiOutlineTwitter className="text-3xl" />
        <AiFillYoutube className="text-3xl" />
    </div>
  )
}
