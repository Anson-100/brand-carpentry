import { useState } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import useMediaQuery from "../hooks/useMediaQuery"
import logo from "../assets/ccLogo.png"
import logoWhite from "../assets/ccLogo-white.png"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"

const Link = ({ page, selectedPage, setSelectedPage, className }) => {
  const lowerCasePage = page.toLowerCase()
  return (
    <AnchorLink
      className={`${className} ${
        selectedPage === lowerCasePage ? "text-light-blue" : ""
      } hover:text-gold transition duration-300 inline-block`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const navbarBackground = isTopOfPage ? "bg-white" : "bg-white"

  return (
    <nav
      id="NAVBAR"
      className={`${navbarBackground} z-40 fixed top-0 w-full transition-all duration-300`}
    >
      <div className="flex items-center justify-between mx-auto w-5/6 py-4">
        <img src={logo} alt="CC Logo" className="lg:h-[65px] h-[45px]" />
        {/* DESKTOP NAVBAR */}
        {isDesktop ? (
          <div className="font-heebo text-[1.5rem] text-darker-blue flex gap-4">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Services"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Gallery"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />{" "}
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button
            className={`${
              isTopOfPage ? "bg-light-blue" : "bg-light-blue"
            } rounded-full p-2`}
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            {" "}
            {!isMenuToggled ? (
              <Bars3Icon className="w-[1.75rem] text-white" />
            ) : (
              <XMarkIcon className="w-[1.75rem] text-white" />
            )}
          </button>
        )}

        {/* BURGER MENU */}
        {!isDesktop && (
          <div
            id="nav-menu"
            className={`fixed right-0 top-[4.8rem] h-auto pb-[4rem] bg-black bg-opacity-90 rounded-l-xl w-5/6 transform transition-transform duration-[400ms] ${
              isMenuToggled ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col font-heebo text-center text-[1.75rem] text-white gap-20 pt-8">
              <Link
                className="navlink"
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                className="navlink"
                page="Services"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                className="navlink"
                page="Gallery"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                className="navlink"
                page="About"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />{" "}
              <Link
                className="navlink"
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
