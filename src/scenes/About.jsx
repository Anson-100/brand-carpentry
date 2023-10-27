import { motion } from "framer-motion"
import jacked from "../assets/jacked 1.jpg"
import jackedMobile from "../assets/jacked mobile.jpg"
import useMediaQuery from "../hooks/useMediaQuery"
import AnchorLink from "react-anchor-link-smooth-scroll"

const About = ({ setSelectedPage }) => {
  const isAboveMd = useMediaQuery("(min-width: 768px)")
  return (
    <section id="about" className="pt-20 md:pt-24 h-screen">
      <div className="h-full py-4 flex">
        <div className="border-2 border-gold rounded-xl p-3 bg-white flex flex-col h-full w-full my-auto">
          {/* DESKTOP LAYOUT */}
          {isAboveMd ? (
            <div className="h-full flex">
              <div className="flex flex-col justify-center flex-1">
                <div>
                  {" "}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <p className="text-darker-blue text-center text-[2.5rem] font-bold font-heebo">
                      About
                    </p>
                  </motion.div>
                </div>
                <p className="text-4 text-darker-blue font-heebo text-justify my-5 w-5/6 mx-auto">
                  Welcome to Cotter Construction. We service the
                  Bradenton/Sarasota area of central Florida but are willing to
                  travel a little further if the money is right. There is no
                  shortage of people who do crappy work around here and finding
                  someone you can trust is a hassle. However, if you are reading
                  this consider yourself extremely fortunate because you can
                  always trust us to get shit done fast and get shit done right.
                  Contact Cotter Construction today!{" "}
                </p>
                <div className="w-5/6 mx-auto flex justify-center">
                  <AnchorLink
                    onClick={() => setSelectedPage("contact")}
                    href="#contact"
                    className="cursor-pointer contact font-sarabun text-[1.5rem] text-white bg-light-blue hover:bg-darker-blue rounded-lg px-2 transition-all active:translate-y-[1px] duration-200"
                  >
                    contact us
                  </AnchorLink>
                </div>
              </div>
              <div className="flex-1 my-auto">
                <img
                  src={jacked}
                  alt="Isaac Jacked Cotter"
                  className="rounded-lg border-2 m-auto border-gold"
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col h-full">
              <div className="">
                {" "}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <p className="text-darker-blue text-center text-[2.5rem] font-bold font-heebo">
                    About
                  </p>
                </motion.div>
                <div className="m-auto w-2/3 se:w-1/2">
                  <img
                    src={jackedMobile}
                    alt="Isaac Jacked Cotter Mobile"
                    className="rounded-lg border-2 m-auto border-gold"
                  />
                </div>
                <p className="text-[1rem] text-darker-blue font-heebo text-justify my-5 mx-auto">
                  Welcome to Cotter Construction. We service the
                  Bradenton/Sarasota area of central Florida but are willing to
                  travel a little further if the money is right. There is no
                  shortage of people who do crappy work around here and finding
                  someone you can trust is a hassle. However, if you are reading
                  this consider yourself extremely fortunate because you can
                  always trust us to get shit done fast and get shit done right.
                  Contact Cotter Construction today!{" "}
                </p>
              </div>
              <div className="flex justify-center my-auto">
                <AnchorLink
                  onClick={() => setSelectedPage("contact")}
                  href="#contact"
                  className="cursor-pointer contact font-sarabun text-[1.5rem] text-white bg-light-blue hover:bg-darker-blue rounded-lg px-2 transition-all duration-200"
                >
                  contact us
                </AnchorLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default About
