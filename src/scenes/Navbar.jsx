import { useState, useMemo } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import useMediaQuery from "../hooks/useMediaQuery"
import logo from "../assets/ccLogo.png"
import logoWhite from "../assets/ccLogo-white.png"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import {
  HomeIcon,
  PhotoIcon,
  WrenchScrewdriverIcon,
  UserCircleIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline"

const Link = ({ page, selectedPage, setSelectedPage, className }) => {
  const lowerCasePage = page.toLowerCase()
  return (
    <AnchorLink
      className={`${className} ${
        selectedPage === lowerCasePage
          ? "bg-zinc-200  text-zinc-900 hover:bg-zinc-300 hover:text-zinc-100"
          : ""
      } inline-block py-2 px-4 hover:bg-zinc-500 rounded-full`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

const LinkMobile = ({
  page,
  selectedPage,
  setSelectedPage,
  Icon,
  toggleMenu,
}) => {
  const lowerCasePage = page.toLowerCase()

  // Use useMemo to avoid unnecessary recalculations of the icon component
  const PageIcon = useMemo(() => (Icon ? Icon : null), [Icon])

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-gray-100" : "text-gray-400"
      } py-2 px-4 flex items-center gap-2 hover:bg-gray4`} // Add flex and gap for icon alignment
      href={`#${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage)
        if (toggleMenu) toggleMenu() // Toggle the menu when a link is clicked
      }}
    >
      {PageIcon && <PageIcon className="h-6 w-6 mr-3" />}{" "}
      {/* Render icon if provided */}
      {page}
    </AnchorLink>
  )
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 992px)")
  const navbarBackground = isTopOfPage
    ? "bg-zinc-950 bg-opacity-80 backdrop-blur-md"
    : "bg-zinc-950 bg-opacity-80 backdrop-blur-md"

  return (
    <nav id="NAVBAR" className={`${navbarBackground} z-40 fixed top-0 w-full`}>
      <div className="flex items-center justify-between mx-auto w-5/6 py-2 ">
        <p className="font-montserrat text-2xl">Cotter Carpentry</p>
        {/* <img src={logo} alt="CC Logo" className="md:h-[65px] h-[48px]" /> */}
        {/* DESKTOP NAVBAR */}
        {isDesktop ? (
          <div className="font-montserrat text-md flex gap-2">
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
              isTopOfPage ? "bg-zinc-100" : "bg-zinc-100"
            } rounded-full p-2 z-50`}
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            {" "}
            {!isMenuToggled ? (
              <Bars3Icon
                className={`${
                  isTopOfPage ? "text-zinc-900" : "text-zinc-900"
                } w-[1.75rem]`}
              />
            ) : (
              <XMarkIcon
                className={`${
                  isTopOfPage ? "text-zinc-900" : "text-zinc-900"
                } w-[1.75rem]`}
              />
            )}
          </button>
        )}

        {/* BURGER MENU */}
        {!isDesktop && isMenuToggled && (
          <div
            id="nav-menu"
            className={`fixed right-2 top-14 h-auto bg-zinc-950 rounded-lg w-3/4 transform transition-transform duration-[400ms] ${
              isMenuToggled ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* <div className="h-4 bg-gray-300 rounded-t-lg"></div> */}
            <div className="flex flex-col font-heebo text-center text-xl text-white gap-8 py-8 landscape-mobile:gap-2 landscape-mobile:py-3">
              <LinkMobile
                className="navlink"
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                Icon={HomeIcon}
                toggleMenu={() => setIsMenuToggled(false)}
              />
              <div className="w-full h-[1px] bg-gray-700 m-auto" />
              <LinkMobile
                className="navlink"
                page="Services"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                Icon={WrenchScrewdriverIcon}
                toggleMenu={() => setIsMenuToggled(false)}
              />
              <div className="w-full h-[1px] bg-gray-700 m-auto" />
              <LinkMobile
                className="navlink"
                page="Gallery"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                Icon={PhotoIcon}
                toggleMenu={() => setIsMenuToggled(false)}
              />
              <div className="w-full h-[1px] bg-gray-700 m-auto" />
              <LinkMobile
                className="navlink"
                page="About"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                Icon={UserCircleIcon}
                toggleMenu={() => setIsMenuToggled(false)}
              />{" "}
              <div className="w-full h-[1px] bg-gray-700 m-auto" />
              <LinkMobile
                className="navlink"
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                Icon={PaperAirplaneIcon}
                toggleMenu={() => setIsMenuToggled(false)}
              />
            </div>
            {/* <div className="h-4 bg-gray-300 rounded-b-lg"></div> */}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
