import { useState } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import useMediaQuery from "../hooks/useMediaQuery"
import menuIcon from "../assets/menu-icon.svg"
import closeIcon from "../assets/close-icon.svg"

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase()
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-gold transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

const Navbar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  return (
    <nav id="NAVBAR" className="z-40 fixed top-0 w-full bg-white">
      <div className="flex items-center justify-between mx-auto w-5/6 py-4">
        <h4 className="text-gold font-semibold font-heebo text-[1.75rem] lg:text-[2.5rem]">
          Cotter Carpentry
        </h4>
        {/* DESKTOP NAVBAR */}
        {isDesktop ? (
          <div className="font-heebo text-[1.5rem] text-darker-blue flex gap-4">
            <Link page="gallery" />
            <Link page="contact" />
            <Link page="about" />
            <Link page="services" />
          </div>
        ) : (
          <button
            className="rounded-full bg-grayish p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src={menuIcon} />
          </button>
        )}

        {/* BURGER MENU */}
        {!isDesktop && (
          <div
            className={`fixed right-0 bottom-0 h-full bg-grayish w-[300px] transform transition-transform duration-300 ${
              isMenuToggled ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="close-icon" src={closeIcon} />
              </button>
            </div>
            <div className="flex flex-col font-heebo ml-[33%] text-2xl text-darker-blue gap-10">
              <Link page="gallery" />
              <Link page="contact" />
              <Link page="about" />
              <Link page="services" />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar