import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

import useMediaQuery from "../hooks/useMediaQuery"
import AnchorLink from "react-anchor-link-smooth-scroll"

const About = ({ setSelectedPage }) => {
  const isAboveMd = useMediaQuery("(min-width: 992px)")
  const isLandscapeMobile = useMediaQuery(
    "(max-height: 440px) and (orientation: landscape)"
  )
  const [scrollPosition, setScrollPosition] = useState(0)
  const aboutBgRef = useRef() // Ref for the background div

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Calculate the background position
  const parallaxStyle = {
    backgroundPosition: `center ${scrollPosition * 0.27}px`,
  }

  const [isOpen, setIsOpen] = useState({})

  const toggleOpen = id => {
    setIsOpen(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }))
  }

  return (
    <section id="about" className="h-[100svh]">
      <div className="h-full pt-20">
        <div className="h-full flex flex-col ss:pb-8">
          <div className="carousel py-4 bg-zinc-900 rounded-full m-auto mb-4 lg:mb-6 px-12">
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
              <p className="text-shadow text-gray-100 text-center text-2xl md:text-2xl font-bold font-heebo ">
                About Us
              </p>
            </motion.div>
          </div>{" "}
          {isAboveMd ? <div className="w-full h-8 bg-zinc-900"></div> : ""}
          <div
            className="h-full about-bg"
            ref={aboutBgRef}
            style={parallaxStyle}
          >
            {isAboveMd ? (
              <div className="w-5/6 h-full m-auto flex flex-col">
                <div className="carousel w-2/5 lg:w-1/3 flex flex-col justify-center my-auto bg-zinc-800 p-4 rounded-xl">
                  {" "}
                  <p className=" text-zinc-300 text-2xl">
                    Welcome to{" "}
                    <span className="text-zinc-100 font-montserrat font-semibold">
                      Cotter Carpentry
                    </span>
                  </p>
                  <div className="h-[1px] w-full mb-4 mt-1 bg-gray-400"></div>
                  <p className="pb-8">
                    We proudly serve the Bradenton/Sarasota region of Central
                    Florida. In a landscape where quality can be elusive, your
                    search for reliable craftsmanship ends with us. Experience
                    the advantage of swift, impeccable service. Trust in Cotter
                    Construction—where excellence is standard. Connect with us
                    today!
                  </p>
                  <AnchorLink
                    onClick={() => setSelectedPage("contact")}
                    href="#contact"
                    className="ml-auto mr-8"
                  >
                    <button className="sunset-glow text-gray-900 bg-zinc-50 rounded-full py-3 px-8  font-heebo shadow-4 hover:text-gray-50 hover:bg-gradient-sunset">
                      Contact Us
                    </button>{" "}
                  </AnchorLink>
                </div>
              </div>
            ) : (
              // MOBILE VIEW========================================================================
              <div className="h-full flex flex-col justify-start items-center w-full">
                <div className="bg-bg-gray bg-opacity-40 w-full rounded-b-xl">
                  {" "}
                  <div className="w-full ">
                    <AnimatePresence>
                      {isOpen["faq1"] && (
                        <motion.div
                          className="px-4 bg-bg-gray bg-opacity-80 backdrop-blur-sm flex flex-col gap-4 landscape-mobile:gap-2"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{
                            opacity: 0,
                            height: 0,
                            transition: {
                              opacity: { duration: 0.2 },
                            },
                          }}
                          transition={{
                            duration: 0.2,
                            ease: "easeOut",
                            opacity: { duration: 0.2, delay: 0.2 },
                          }}
                        >
                          {" "}
                          <p className=" text-zinc-950 text-2xl pt-4">
                            Welcome to {""}
                            <span className=" font-montserrat font-bold">
                              Cotter Carpentry
                            </span>
                          </p>
                          {isLandscapeMobile ? (
                            <p className=" text-zinc-800 text-lg">
                              Welcome to Cotter Carpentry, proudly serving the
                              Bradenton/Sarasota region of Central Florida.
                              Trust in Cotter Carpentry—where excellence is
                              standard. Connect with us today!
                            </p>
                          ) : (
                            <p className="mb-16 text-zinc-800 text-lg">
                              Welcome to Cotter Carpentry, proudly serving the
                              Bradenton/Sarasota region of Central Florida. In a
                              landscape where quality can be elusive, your
                              search for reliable craftsmanship ends with us.
                              Trust in Cotter Carpentry—where excellence is
                              standard. Connect with us today!
                            </p>
                          )}
                          <AnchorLink
                            onClick={() => setSelectedPage("contact")}
                            href="#contact"
                          >
                            <button className="landscape-mobile:hidden w-full sunset-glow text-gray-900 bg-zinc-100 rounded-full py-3 px-8  font-heebo shadow-4 hover:text-gray-50 hover:bg-gradient-sunset mb-4">
                              Contact Us
                            </button>{" "}
                          </AnchorLink>
                        </motion.div>
                      )}
                    </AnimatePresence>{" "}
                    <button
                      onClick={() => toggleOpen("faq1")}
                      className="flex flex-col items-center justify-center w-full text-left py-2 bg-bg-gray rounded-b-xl "
                    >
                      <div className="h-1 w-6 rounded-full bg-zinc-600 m-2"></div>
                    </button>
                  </div>{" "}
                </div>{" "}
              </div>
            )}
          </div>
          <div className="w-full h-8 bg-zinc-900"></div>
        </div>
      </div>
    </section>
  )
}

export default About
