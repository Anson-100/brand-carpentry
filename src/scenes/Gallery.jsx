import { motion } from "framer-motion"
import useMediaQuery from "../hooks/useMediaQuery"
import React from "react"

import AnchorLink from "react-anchor-link-smooth-scroll"
import Carousel from "../components/Carousel"

const Gallery = ({}) => {
  const isAboveSs = useMediaQuery("(min-width: 480px)")
  const isLandscapeMobile = useMediaQuery(
    "(max-height: 440px) and (orientation: landscape)"
  )

  return (
    <section id="gallery" className="h-[100svh]">
      <div className="h-full pt-20 pb-10 w-full m-auto">
        <div className="flex flex-col h-full rounded-md">
          <div className="py-4 bg-zinc-900 rounded-full mx-auto mb-4 px-12">
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
              <p className="text-shadow text-gray-100 text-center text-xl md:text-2xl font-bold font-heebo landscape-mobile:text-xl">
                Gallery
              </p>
            </motion.div>
          </div>
          <p className="text-gray-600 text-center mb-4 landscape-mobile:hidden w-5/6 mx-auto md:w-auto">
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
          {!isLandscapeMobile ? (
            <div className="md:w-5/6 m-auto">
              <Carousel />
            </div>
          ) : (
            <div className="carousel w-5/6 mx-auto my-auto flex flex-col gap-2 justify-center items-center bg-zinc-800 rounded-lg p-4 text-base font-heebo">
              <p>
                Rotate your phone to view the images or check out our{" "}
                <a
                  href="https://www.facebook.com/profile.php?id=100090189408489"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Facebook
                </a>{" "}
                page
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Gallery
