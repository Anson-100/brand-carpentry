import useMediaQuery from "../hooks/useMediaQuery"
import useScrollPosition from "../hooks/useScrollPosition"

const Landing = ({ isTopOfPage }) => {
  const [fadeClass1, fadeClass2] = useScrollPosition([200, 100], false)

  const landingBorder = isTopOfPage ? "" : "border-opacity-0"

  return (
    <section id="home" className="h-full pt-[74px] lg:pt-[92px] flex">
      <div
        className={`${landingBorder} h-[95%] w-[95%] m-auto flex justify-center flex-col items-center  border-[1px] border-white rounded-lg p-3 transition-all duration-300`}
      >
        <div>
          {" "}
          <p
            className={`${fadeClass1} transition duration-300 text-center slogan text-[90px] lg:text-[120px] font-heebo font-bold`}
          >
            WE GET SHIT DONE.
          </p>
        </div>{" "}
        <div>
          <button
            className={`${fadeClass2} contact font-sarabun text-[1.5rem] bg-opacity-20 hover:bg-opacity-30 text-grayish bg-white rounded-lg px-2 transition-all duration-300`}
          >
            contact us
          </button>
        </div>
      </div>
    </section>
  )
}

export default Landing
