import jacked from "../assets/jacked 1.jpg"
import jackedMobile from "../assets/jacked mobile.jpg"
import useMediaQuery from "../hooks/useMediaQuery"
import AnchorLink from "react-anchor-link-smooth-scroll"

const About = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)")
  return (
    <section id="about" className="pt-16 md:pt-24">
      <div className="bg-grayish">
        {isAboveLarge ? (
          <div className="flex items-center mx-auto w-5/6 mt-20 gap-8 border-2 border-gold rounded-xl p-5 bg-white">
            <div className="m-auto w-2/3">
              <p className="text-[3rem] font-bold text-darker-blue">About Us</p>
              <p className="text-[1.2rem] text-darker-blue font-semibold text-justify my-5">
                Welcome to Cotter Construction. We service the
                Bradenton/Sarasota area of central Florida but are willing to
                travel a little further if the money is right. There is no
                shortage of people who do crappy work around here and finding
                someone you can trust is a hassle. However, if you are reading
                this consider yourself extremely fortunate because you can
                always trust us to get shit done fast and get shit done right.
                Contact Cotter Construction today!{" "}
              </p>
              <AnchorLink
                onClick={() => setSelectedPage("contact")}
                href="#contact"
                className="contact font-sarabun text-[1.5rem] text-white bg-light-blue hover:bg-darker-blue rounded-lg px-2 transition-all active:translate-y-[1px] duration-200"
              >
                contact us
              </AnchorLink>
            </div>
            <div className="w-1/3">
              <img
                src={jacked}
                alt="Isaac Jacked Cotter"
                className="rounded-lg ml-auto border-2 border-gold"
              />
            </div>
          </div>
        ) : (
          // MOBILE VIEW
          <div className="flex flex-col mx-auto w-5/6 mt-8 border-2 border-gold rounded-xl p-5 bg-white">
            <p className="text-[3rem] font-bold text-center mb-3 text-darker-blue">
              About Us
            </p>
            <div>
              <img
                src={jackedMobile}
                alt="Isaac Jacked Cotter"
                className="rounded-lg m-auto h-[180px]"
              />
            </div>
            <div className="m-auto text-center">
              <p className="text-[1.2rem] text-darker-blue font-heebo text-justify mb-3">
                Welcome to Cotter Construction. We service the
                Bradenton/Sarasota area of central Florida but are willing to
                travel a little further if the money is right. There is no
                shortage of people who do crappy work around here and finding
                someone you can trust is a hassle. However, if you are reading
                this consider yourself extremely fortunate because you can
                always trust us to get shit done fast and get shit done right.
                Contact Cotter Construction today!{" "}
              </p>
              <AnchorLink
                onClick={() => setSelectedPage("contact")}
                href="#contact"
                className="contact font-sarabun text-[1.5rem] text-white bg-light-blue rounded-lg my-2 px-2 transition-all duration-300"
              >
                contact us
              </AnchorLink>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default About
