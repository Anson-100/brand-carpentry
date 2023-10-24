import jacked from "../assets/jacked 1.jpg"
import jackedMobile from "../assets/jacked mobile.jpg"
import useMediaQuery from "../hooks/useMediaQuery"

const About = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)")
  return (
    <section
      id="About"
      className="bg-grayish h-full pt-[74px] lg:pt-[92px] flex"
    >
      {isAboveLarge ? (
        <div className="flex items-center mx-auto w-5/6">
          <div className="m-auto w-2/3">
            <p className="text-[3rem] font-bold text-darker-blue">About Us</p>
            <p className="text-[1.2rem] text-darker-blue font-semibold text-justify my-5">
              Welcome to Cotter Construction. We service the Bradenton/Sarasota
              area of central Florida but are willing to travel a little further
              if the money is right. There is no shortage of people who do
              crappy work around here and finding someone you can trust is a
              hassle. However, if you are reading this consider yourself
              extremely fortunate because you can always trust us to get shit
              done fast and get shit done right. Contact Cotter Construction
              today!{" "}
            </p>
            <button className="contact font-sarabun text-[1.5rem] text-white bg-gold hover:bg-burnt-orange rounded-lg px-2 transition-all duration-300">
              contact us
            </button>
          </div>
          <div className="w-1/3">
            <img
              src={jacked}
              alt="Isaac Jacked Cotter"
              className="rounded-lg ml-auto"
            />
          </div>
        </div>
      ) : (
        // MOBILE VIEW
        <div className="mx-auto w-5/6">
          <p className="text-[3rem] font-bold text-center text-darker-blue">
            About Us
          </p>
          <div className="">
            <img
              src={jackedMobile}
              alt="Isaac Jacked Cotter"
              className="rounded-lg m-auto"
            />
          </div>
          <div className="m-auto text-center">
            <p className="text-[1.2rem] text-darker-blue font-semibold text-justify">
              Welcome to Cotter Construction. We service the Bradenton/Sarasota
              area of central Florida but are willing to travel a little further
              if the money is right. There is no shortage of people who do
              crappy work around here and finding someone you can trust is a
              hassle. However, if you are reading this consider yourself
              extremely fortunate because you can always trust us to get shit
              done fast and get shit done right. Contact Cotter Construction
              today!{" "}
            </p>
            <button className="contact font-sarabun text-[1.5rem] text-white bg-gold hover:bg-burnt-orange rounded-lg my-2 px-2 transition-all duration-300">
              contact us
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default About
