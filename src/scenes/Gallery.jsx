import { motion } from "framer-motion"
import useMediaQuery from "../hooks/useMediaQuery"
import React from "react"

import AnchorLink from "react-anchor-link-smooth-scroll"
import Carousel from "../components/Carousel"

const Gallery = ({}) => {
  const isAboveMd = useMediaQuery("(min-width: 768px)")

  return (
    <section id="gallery" className="pt-20 md:pt-24 h-[100svh]">
      <div className="h-full py-4">
        <div className="border-2 border-gold rounded-xl p-3 bg-white h-full flex flex-col">
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
              <p className="text-darker-blue text-center text-[2rem] se:text-[2rem] font-bold font-heebo">
                Gallery
              </p>
              <p className="text-black text-center mb-6 font-heebo text-[1rem] se:text-[1.2rem]">
                Here are some photos of our superb craftsmanship.
              </p>
            </motion.div>
          </div>

          <Carousel />
        </div>
      </div>
    </section>
  )
}

export default Gallery
