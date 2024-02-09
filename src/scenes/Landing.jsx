import useMediaQuery from "../hooks/useMediaQuery"
import useScrollPosition from "../hooks/useScrollPosition"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Landing = ({ isTopOfPage, setSelectedPage }) => {
  const [fadeClass1, fadeClass2] = useScrollPosition([200, 100], false)

  const landingBorder = isTopOfPage ? "" : "border-opacity-0"

  return (
    <section id="home" className="h-[100svh]">
      <div className="h-full flex flex-col">
        <div className="h-[77px] md:h-[97px]"></div>
        <div
          className={`${landingBorder} flex-grow m-5 flex justify-center flex-col items-center border-[1px] border-white rounded-lg p-3 transition-all duration-300`}
        >
          <div>
            {" "}
            <p
              className={`${fadeClass1} transition duration-300 text-center slogan text-[80px] sm:text-[120px] font-heebo font-bold`}
            >
              WE GET SHIT DONE.
            </p>
          </div>{" "}
          <div className="">
            <AnchorLink
              onClick={() => setSelectedPage("contact")}
              href="#contact"
              className={` ${fadeClass2} cursor-pointer font-sarabun text-[1.5rem] text-white transition-all duration-300 bg-gold hover:underline rounded-lg px-2 pb-1 active:translate-y-[1px]`}
            >
              contact us
            </AnchorLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing
