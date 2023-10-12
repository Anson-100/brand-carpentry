import jacked from "../assets/jacked 1.jpg"
import useMediaQuery from "../hooks/useMediaQuery"

const About = () => {
  return (
    <section
      id="About"
      className="bg-grayish h-full pt-[74px] lg:pt-[92px] flex items-center"
    >
      <div className="flex lg:flex-row flex-col-reverse items-center m-auto w-5/6">
        <div className="m-auto w-2/3">
          <p className="text-[3rem] font-bold text-darker-blue">About Us</p>
          <p className="text-[1.2rem]  lg:text-[1.2rem] text-darker-blue font-semibold text-justify my-5">
            Welcome to Cotter Construction. We service the Bradenton/Sarasota
            area of central Florida but are willing to travel a little further
            if the money is right. There is no shortage of people who do crappy
            work around here and finding someone you can trust is a hassle.
            However, if you are reading this consider yourself extremely
            fortunate because you can always trust us to get shit done fast and
            get shit done right. Contact Cotter Construction today!{" "}
          </p>
          <button className="contact font-sarabun text-[1.5rem] text-white bg-gold hover:bg-burnt-orange rounded-lg px-2 transition-all duration-300 border-[2px] border-darker-blue">
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
    </section>
  )
}

export default About
