import { useState, useRef } from "react"
import useMediaQuery from "../hooks/useMediaQuery"
import {
  ViewColumnsIcon,
  Square3Stack3DIcon,
  SparklesIcon,
  VariableIcon,
} from "@heroicons/react/24/outline"

import { CubeIcon, PuzzlePieceIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"

const Services = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const [tileStates, setTileStates] = useState({})
  const tileTimeouts = useRef({})

  const handleTouch = tileId => {
    const anyTileActive = Object.values(tileStates).some(
      state => state === true
    )

    if (tileTimeouts.current[tileId]) {
      clearTimeout(tileTimeouts.current[tileId])
    }

    if (!anyTileActive || tileStates[tileId]) {
      setTileStates({
        ...tileStates,
        [tileId]: !tileStates[tileId],
      })

      if (!tileStates[tileId]) {
        tileTimeouts.current[tileId] = setTimeout(() => {
          setTileStates(prevStates => ({
            ...prevStates,
            [tileId]: false,
          }))
        }, 5000)
      }
    }
  }

  return (
    <section id="services" className="pt-20 md:pt-24 h-screen">
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
              <p className="text-darker-blue text-center text-[2rem] se:text-[2.5rem] font-bold font-heebo">
                Services
              </p>
              <p className="text-black text-center mb-6 font-heebo text-[1rem] se:text-[1.2rem]">
                Check out some of the cool stuff we do! We are both licensed and
                insured.
              </p>
            </motion.div>
          </div>
          {isDesktop ? (
            <div className="skillbox grid grid-cols-2 grid-rows-4 sm:grid-cols-4 sm:grid-rows-2 flex-grow gap-4 text-black">
              <div className="skills">
                <CubeIcon className="tile-icon" />
                <p className="tile-name">Decks/Pergolas</p>
                <p className="tile-info">
                  Expert installation of stylish decks and pergolas to enhance
                  your outdoor living space.
                </p>
              </div>
              <div className="skills">
                <SparklesIcon className="tile-icon" />
                <p className="tile-name">Remodels</p>
                <p className="tile-info">
                  Transform your kitchen, bathroom, and more with our top-notch
                  remodeling services.
                </p>
              </div>
              <div className="skills">
                <PuzzlePieceIcon className="tile-icon" />
                <p className="tile-name">Home Repair</p>
                <p className="tile-info">
                  Comprehensive home repairs, tackling everything from leaky
                  roofs to creaky floors.
                </p>
              </div>
              <div className="skills"></div>
              <div className="skills"></div>
              <div className="skills"></div>
              <div className="skills"></div>
              <div className="skills"></div>
            </div>
          ) : (
            <div className="skillbox grid grid-cols-2 grid-rows-4 sm:grid-cols-4 sm:grid-rows-2 flex-grow gap-4 text-black">
              <div
                onClick={() => handleTouch("tile1")}
                className={`skills-mobile ${
                  tileStates["tile1"] ? "active" : ""
                }`}
              >
                <CubeIcon className="tile-icon-mobile" />
                <p className="tile-name-mobile">decks/pergolas</p>
                <p className="tile-info-mobile">
                  Expert installation of stylish decks and pergolas to enhance
                  your outdoor living space.
                </p>
              </div>
              <div
                onClick={() => handleTouch("tile2")}
                className={`skills-mobile ${
                  tileStates["tile2"] ? "active" : ""
                }`}
              >
                <SparklesIcon className="tile-icon-mobile" />
                <p className="tile-name-mobile">Remodels</p>
                <p className="tile-info-mobile">
                  Transform your kitchen, bathroom, and more with our top-notch
                  remodeling services.
                </p>
              </div>
              <div
                onClick={() => handleTouch("tile3")}
                className={`skills-mobile ${
                  tileStates["tile3"] ? "active" : ""
                }`}
              >
                <PuzzlePieceIcon className="tile-icon-mobile" />
                <p className="tile-name-mobile">Home Repair</p>
                <p className="tile-info-mobile">
                  Comprehensive home repairs, tackling everything from leaky
                  roofs to creaky floors.
                </p>
              </div>
              <div className="skills"></div>
              <div className="skills"></div>
              <div className="skills"></div>
              <div className="skills"></div>
              <div className="skills"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Services
