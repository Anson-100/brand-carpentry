import useMediaQuery from "../hooks/useMediaQuery"
import useScrollPosition from "../hooks/useScrollPosition"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Landing = ({ isTopOfPage, setSelectedPage }) => {
  const [fadeClass1, fadeClass2] = useScrollPosition([200, 100], false)

  const landingBorder = isTopOfPage ? "" : "border-opacity-0"

  return (
    <section id="home" className="h-[100svh]">
      <div className="h-full flex flex-col">
        <div
          className={`${landingBorder} mt-24 gap-8 sm:mt-20 flex-grow m-5 flex justify-center flex-col items-center border-[1px] border-white rounded-lg p-3 transition-all duration-300`}
        >
          <div>
            {" "}
            <p
              className={`${fadeClass1} transition duration-300 text-gray-200 text-center text-[2rem] lg:text-[2.5rem] landscape-mobile:text-[1.75rem] slogan font-great-vibes`}
            >
              Welcome to
            </p>
            <p
              className={`${fadeClass1} transition duration-300 text-gray-50 text-center slogan text-[50px] md:text-[100px] lg:text-[120px] landscape-mobile:text-[60px] font-heebo font-bold`}
            >
              COTTER CARPENTRY
            </p>
          </div>{" "}
          <AnchorLink
            onClick={() => setSelectedPage("contact")}
            href="#contact"
            className=""
          >
            <button className="my-auto sunset-glow text-gray-900 bg-zinc-200 rounded-full py-3 px-8 landscape:py-2 landscape:px-6 text-lg font-heebo shadow-4 hover:text-gray-50 hover:bg-gradient-sunset">
              Contact Us
            </button>{" "}
          </AnchorLink>
        </div>
      </div>
    </section>
  )
}

export default Landing
