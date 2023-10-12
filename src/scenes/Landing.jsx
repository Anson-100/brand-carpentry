import useMediaQuery from "../hooks/useMediaQuery"

const Landing = ({ isTopOfPage }) => {
  const landingBorder = isTopOfPage ? "" : "border-opacity-0"

  return (
    <section id="home" className="h-full pt-[74px] lg:pt-[92px] flex">
      <div
        className={`${landingBorder} h-[95%] w-[95%] m-auto flex justify-center flex-col items-center  border-[1px] border-white rounded-lg p-3 transition-all duration-300`}
      >
        <div>
          {" "}
          {/* <p className="text-lg font-heebo">
            Welcome to Cotter Construction. We service the Bradenton/Sarasota
            area of central Florida but are willing to travel a little further
            if the money is right. There is no shortage of people who do crappy
            work around here and trying to find someone you can trust is a
            hassle. If you are reading this consider yourself extremely
            fortunate because you can trust us to get shit done fast and get
            shit done right. Contact Cotter Construction today!
          </p> */}
          <p className="text-center slogan text-[90px] lg:text-[120px] font-heebo font-bold">
            WE GET SHIT DONE.
          </p>
        </div>{" "}
        <div>
          <button className="contact font-sarabun text-[1.5rem] bg-opacity-20 hover:bg-opacity-30 text-grayish bg-white rounded-lg px-2 transition-all duration-300">
            contact us
          </button>
        </div>
      </div>
    </section>
  )
}

export default Landing
