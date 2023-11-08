import SocialMediaIcons from "../components/SocialMediaIcons"

const Footer = () => {
  return (
    <footer className="h-32 bg-grayer">
      <div className="w-10/12 m-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-sarabun font-semibold text-2xl text-darker-blue">
            Cotter Carpentry
          </p>
          <p className="font-sarabun text-md text-darker-blue">
            Anson Hunnell ©2023. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
