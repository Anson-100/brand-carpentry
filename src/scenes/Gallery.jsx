import { useState, useRef } from "react"
import { motion } from "framer-motion"
import useMediaQuery from "../hooks/useMediaQuery"
import React from "react"
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid"
import AnchorLink from "react-anchor-link-smooth-scroll"

// IMAGE IMPORTS
import rampBeforeMobile from "../assets/before-ramp-mobile.jpg"
import rampAfterMobile from "../assets/after-ramp-mobile.jpg"
import showerOneMobile from "../assets/shower-after-mobile.jpg"
import pergolaBefore from "../assets/pergola-before-mobile.jpg"
import pergolaAfter from "../assets/pergola-after-mobile.jpg"
import bathroomBefore from "../assets/bathroom-before-mobile.jpg"
import bathroomTwoBefore from "../assets/bathroom2-before-mobile.jpg"
import bathroomTwoAfter from "../assets/bathroom2-after-mobile.jpg"
import bathroomAfter from "../assets/bathroom-after-mobile.jpg"
import deckAtMoms from "../assets/Mom-deck-mobile.jpg"

const Gallery = ({ setSelectedPage }) => {
  const isAboveMd = useMediaQuery("(min-width: 768px)")

  const [currentSlide, setCurrentSlide] = useState(0)
  const viewportRef = useRef(null)
  const totalSlides = 10

  const goToNextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(prevSlide => prevSlide + 1)
    }
  }

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prevSlide => prevSlide - 1)
    }
  }

  return (
    <section id="gallery" className="pt-20 md:pt-24 h-[100svh]">
      <div className="h-full py-4">
        <div className="border-2 border-gold rounded-xl p-3 bg-white h-full flex flex-col">
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
              <p className="text-darker-blue text-center text-[2rem] se:text-[2rem] font-bold font-heebo">
                Gallery
              </p>
              <p className="text-black text-center mb-6 font-heebo text-[1rem] se:text-[1.2rem]">
                Here are some photos of our superb craftsmanship.
              </p>
            </motion.div>
          </div>
          <div className="carousel h-auto w-full overflow-hidden flex">
            <div className="viewport overflow-hidden w-full h-full border-2 border-gold rounded-xl relative">
              <ArrowLeftIcon
                className="w-4 md:w-8 text-black bg-white rounded-full bg-opacity-50 hover:cursor-pointer z-10 absolute top-1/2 left-2 transform -translate-y-1/2"
                onClick={goToPrevSlide}
              />

              <div
                className="slides flex w-full h-full"
                ref={viewportRef}
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                <img className="viewport-img" src={rampBeforeMobile} alt="" />
                <img className="viewport-img" src={rampAfterMobile} alt="" />
                <img className="viewport-img" src={pergolaBefore} alt="" />
                <img className="viewport-img" src={pergolaAfter} alt="" />
                <img className="viewport-img" src={bathroomBefore} alt="" />
                <img className="viewport-img" src={bathroomAfter} alt="" />
                <img className="viewport-img" src={bathroomTwoBefore} alt="" />
                <img className="viewport-img" src={bathroomTwoAfter} alt="" />
                <img className="viewport-img" src={showerOneMobile} alt="" />
                <img className="viewport-img" src={deckAtMoms} alt="" />
              </div>

              <ArrowRightIcon
                className="w-4 md:w-8 text-black bg-white rounded-full bg-opacity-50 hover:cursor-pointer z-10 absolute top-1/2 right-2 transform -translate-y-1/2"
                onClick={goToNextSlide}
              />
            </div>
          </div>
          {isAboveMd ? (
            ""
          ) : (
            <div className="flex justify-center my-auto">
              <AnchorLink
                onClick={() => setSelectedPage("contact")}
                href="#contact"
                className="cursor-pointer contact font-sarabun text-[1.5rem] text-white bg-light-blue hover:bg-darker-blue rounded-lg px-2 transition-all duration-200"
              >
                contact us
              </AnchorLink>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Gallery
