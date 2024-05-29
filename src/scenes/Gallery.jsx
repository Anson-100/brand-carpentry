import { motion } from "framer-motion"
import useMediaQuery from "../hooks/useMediaQuery"
import React from "react"

import AnchorLink from "react-anchor-link-smooth-scroll"
import Carousel from "../components/Carousel"

const Gallery = ({}) => {
  const isAboveSs = useMediaQuery("(min-width: 480px)")

  return (
    <section id="gallery" className="h-[100svh]">
      <div className="h-full pt-20 pb-10 w-full m-auto">
        <div className="flex flex-col h-full rounded-md">
          {" "}
          {/* <div className="carousel py-4 bg-zinc-900 mb-4">
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
              <p className="text-shadow text-gray-100 text-center text-2xl md:text-3xl font-bold font-heebo ">
                Services
              </p>

              <p className="text-gray-400 text-center">
                Check out some of the cool stuff we do! We are both{" "}
                <span className="text-gray-50">licensed and insured.</span>
              </p>
            </motion.div>
          </div> */}
          <div className="carousel py-4 bg-zinc-900 rounded-full mx-auto mb-4 px-12">
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
                Gallery
              </p>
            </motion.div>
          </div>{" "}
          <p className="text-gray-600 text-center mb-4 landscape-mobile:hidden">
            Just a few photos of our quality craftsmanship. Check out our {""}
            <a
              href="https://www.facebook.com/profile.php?id=100090189408489"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Facebook
            </a>
            {""} page for more images!
          </p>
          {/* <div className="pb-8 w-5/6 mx-auto">
            {" "}
            <p className="text-shadow text-gray-800 text-center text-3xl font-bold font-heebo pb-4">
              Gallery
            </p>
            <p className="text-gray-700 text-center pb-4">
              Here are some photos of our quality craftsmanship!
            </p>
          </div> */}
          <div className="md:w-5/6 m-auto">
            {/* {isAboveSs ? "" : <div className="w-full h-4 accent-div"></div>} */}
            <Carousel />
            {/* {isAboveSs ? "" : <div className="w-full h-12 accent-div"></div>} */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
