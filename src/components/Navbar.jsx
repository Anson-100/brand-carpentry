import AnchorLink from "react-anchor-link-smooth-scroll"

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
  return (
    <nav id="NAVBAR" className="z-40 fixed top-0 w-full bg-white">
      <div className="flex items-center justify-between mx-auto w-5/6 py-4">
        <h4 className="text-gold font-semibold font-heebo text-[2.5rem]">
          Cotter Carpentry
        </h4>

        <div className="font-heebo text-[1.5rem] text-darker-blue flex gap-4">
          <Link page="portfolio" />
          <Link page="contact" />
          <Link page="about" />
          <Link page="services" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
