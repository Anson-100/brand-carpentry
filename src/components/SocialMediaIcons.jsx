import facebookIcon from "../assets/facebook.png"
import instagramIcon from "../assets/instagram.png"
import linkedIcon from "../assets/linkedin.png"

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start pt-4 my-6 gap-7">
      {" "}
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src={facebookIcon} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={linkedIcon} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src={instagramIcon} />
      </a>
    </div>
  )
}

export default SocialMediaIcons
