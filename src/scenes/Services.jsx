import { useState, useRef, useEffect } from "react"
import useMediaQuery from "../hooks/useMediaQuery"
import { CheckIcon } from "@heroicons/react/24/outline"
import { motion } from "framer-motion"

// IMAGE IMPORTS
import Painting from "../assets/services-paint.png"
import Window from "../assets/services-window.png"
import Pergola from "../assets/services-pergola.png"
import Concrete from "../assets/services-concrete.png"
import Repair from "../assets/services-repair.png"
import Remodel from "../assets/services-remodel.png"
import Hedge from "../assets/services-hedge.png"
import Tile from "../assets/services-tile.png"
import Bathroom from "../assets/services-bathroom.png"
import Kitchen from "../assets/services-kitchen.png"
import Floor from "../assets/services-floor.png"

const Services = () => {
  const isAboveSm = useMediaQuery("(min-width: 768px)")
  const isLandscapeMobile = useMediaQuery(
    "(max-height: 440px) and (orientation: landscape)"
  )

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

  useEffect(() => {
    const handleClickOutside = event => {
      const clickedElement = event.target

      // If the clicked element is not a tile or a child of a tile, reset all tile states
      if (!clickedElement.closest(".skills-mobile")) {
        setTileStates({})
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <section id="services" className="h-[100svh] ">
      <div className="h-full pt-20 pb-10">
        <div className="h-full flex flex-col">
          <div className="scene-header py-4 bg-zinc-900 rounded-full m-auto mb-4 px-12">
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
              <p className="text-gray-100 text-center text-xl md:text-2xl font-bold font-heebo landscape-mobile:text-xl">
                Services
              </p>
            </motion.div>
          </div>{" "}
          <p className="text-gray-600 text-center mb-4 se:hidden landscape-mobile:hidden">
            Check out some of the cool stuff we do! We are both{" "}
            <span className="text-gray-700">licensed and insured.</span>
          </p>
          {isAboveSm && !isLandscapeMobile ? (
            // DESKTOP TILES==============================================================================
            <div className="rounded-lg skillbox xl:py-8 md:px-8 grid grid-cols-2 grid-rows-4 sm:grid-cols-4 sm:grid-rows-2 flex-grow gap-4 md:gap-8 text-gray-100 xl:w-5/6 xl:m-auto">
              <div
                className="skills bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${Pergola})` }}
              >
                <div className="tile-name backdrop-blur-md">
                  {" "}
                  <p>Decks/Pergolas</p>
                  <div className="h-[1px] w-full mb-2 bg-gray-400"></div>
                  <p className="tile-info">Enhance your outdoor living space</p>
                </div>
              </div>
              <div
                className="skills bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${Bathroom})` }}
              >
                <div className="tile-name backdrop-blur-md">
                  <p>Bathrooms</p>
                  <div className="h-[1px] w-full mb-2 bg-gray-400"></div>
                  <p className="tile-info">
                    Expert installation of vanity, showers, and more
                  </p>
                </div>
              </div>

              <div
                className="skills bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${Kitchen})` }}
              >
                <div className="tile-name backdrop-blur-md">
                  <p>Kitchens</p>
                  <div className="h-[1px] w-full mb-2 bg-gray-400"></div>
                  <p className="tile-info">Comprehensive home repairs</p>
                </div>
              </div>

              <div
                className="skills bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${Painting})` }}
              >
                <div className="tile-name backdrop-blur-md">
                  <p>Painting</p>
                  <div className="h-[1px] w-full mb-2 bg-gray-400"></div>
                  <p className="tile-info">
                    Expert interior and exterior painting services
                  </p>
                </div>
              </div>

              <div
                className="skills bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${Tile})` }}
              >
                <div className="tile-name backdrop-blur-md">
                  <p>Tile</p>
                  <div className="h-[1px] w-full mb-2 bg-gray-400"></div>
                  <p className="tile-info">
                    Backsplashes, floors, showers, and more!
                  </p>
                </div>
              </div>

              <div
                className="skills bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${Window})` }}
              >
                <div className="tile-name backdrop-blur-md">
                  <p>Windows</p>
                  <div className="h-[1px] w-full mb-2 bg-gray-400"></div>
                  <p className="tile-info">
                    See the world clearly and lower your utility bill!
                  </p>
                </div>
              </div>

              <div
                className="skills bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${Floor})` }}
              >
                <div className="tile-name backdrop-blur-md">
                  <p>Floors</p>
                  <div className="h-[1px] w-full mb-2 bg-gray-400"></div>
                  <p className="tile-info">
                    Floating floors, tile floors, hardwood, etc.{" "}
                  </p>
                </div>
              </div>

              <div
                className="skills bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${Remodel})` }}
              >
                <div className="tile-name backdrop-blur-md">
                  <p>Remodels</p>
                  <div className="h-[1px] w-full mb-2 bg-gray-400"></div>
                  <p className="tile-info">Update your living space</p>
                </div>
              </div>
            </div>
          ) : (
            // MOBILE TILES=====================================================
            <div className="h-full ">
              {!isLandscapeMobile ? (
                <div className="h-full grid grid-cols-2 grid-rows-4 sm:grid-cols-4 sm:grid-rows-2 flex-grow gap-3 landscape-mobile:gap-1 text-gray-100">
                  <div
                    style={{ backgroundImage: `url(${Pergola})` }}
                    onClick={() => handleTouch("tile1")}
                    className={`skills-mobile left ${
                      tileStates["tile1"] ? "active" : ""
                    }`}
                  >
                    <div className="tile-name-mobile backdrop-blur-md">
                      <p>Decks/Pergolas</p>
                      <div className="h-[1px] w-full mb-2 bg-gray-400"></div>
                      <p className="tile-info-mobile">
                        Enhance your outdoor living space
                      </p>
                    </div>
                  </div>
                  <div
                    style={{ backgroundImage: `url(${Bathroom})` }}
                    onClick={() => handleTouch("tile2")}
                    className={`skills-mobile right ${
                      tileStates["tile2"] ? "active" : ""
                    }`}
                  >
                    <div className="tile-name-mobile backdrop-blur-md">
                      <p>Bathrooms</p>
                      <div className="h-[1px] w-full mb-2 bg-gray-400"></div>
                      <p className="tile-info-mobile">
                        Expert installation of vanity, showers, and more
                      </p>
                    </div>
                  </div>
                  <div
                    style={{ backgroundImage: `url(${Kitchen})` }}
                    onClick={() => handleTouch("tile3")}
                    className={`skills-mobile left ${
                      tileStates["tile3"] ? "active" : ""
                    }`}
                  >
                    <div className="tile-name-mobile backdrop-blur-md">
                      <p>Kitchens</p>
                      <div className="h-[1px] w-full mb-2 bg-gray-400"></div>
                      <p className="tile-info-mobile">Update your kitchen </p>
                    </div>
                  </div>
                  <div
                    style={{ backgroundImage: `url(${Painting})` }}
                    onClick={() => handleTouch("tile4")}
                    className={`skills-mobile right ${
                      tileStates["tile4"] ? "active" : ""
                    }`}
                  >
                    <div className="tile-name-mobile backdrop-blur-md">
                      <p>Painting</p>
                      <div className="h-[1px] w-full mb-2 bg-gray-400"></div>
                      <p className="tile-info-mobile">
                        Expert interior and exterior painting services
                      </p>
                    </div>
                  </div>
                  <div
                    style={{ backgroundImage: `url(${Tile})` }}
                    onClick={() => handleTouch("tile5")}
                    className={`skills-mobile left ${
                      tileStates["tile5"] ? "active" : ""
                    }`}
                  >
                    <div className="tile-name-mobile backdrop-blur-md">
                      <p>Tile</p>
                      <div className="h-[1px] w-full mb-2 bg-gray-400"></div>
                      <p className="tile-info-mobile">
                        Backsplashes, floors, showers, and more!
                      </p>
                    </div>
                  </div>
                  <div
                    style={{ backgroundImage: `url(${Window})` }}
                    onClick={() => handleTouch("tile6")}
                    className={`skills-mobile right ${
                      tileStates["tile6"] ? "active" : ""
                    }`}
                  >
                    <div className="tile-name-mobile backdrop-blur-md">
                      <p>Windows</p>
                      <div className="h-[1px] w-full mb-2 bg-gray-400"></div>
                      <p className="tile-info-mobile">
                        See the world clearly and lower your utility bill!
                      </p>
                    </div>
                  </div>
                  <div
                    style={{ backgroundImage: `url(${Floor})` }}
                    onClick={() => handleTouch("tile7")}
                    className={`skills-mobile left ${
                      tileStates["tile7"] ? "active" : ""
                    }`}
                  >
                    <div className="tile-name-mobile backdrop-blur-md">
                      <p>Floor Installation</p>
                      <div className="h-[1px] w-full mb-2 bg-gray-400"></div>
                      <p className="tile-info-mobile">
                        Floating floors, tile floors, hardwood, etc.
                      </p>
                    </div>
                  </div>
                  <div
                    style={{ backgroundImage: `url(${Remodel})` }}
                    onClick={() => handleTouch("tile8")}
                    className={`skills-mobile right ${
                      tileStates["tile8"] ? "active" : ""
                    }`}
                  >
                    <div className="tile-name-mobile backdrop-blur-md">
                      <p>Remodels</p>
                      <div className="h-[1px] w-full mb-2 bg-gray-400"></div>
                      <p className="tile-info-mobile">
                        Update your living space
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="carousel w-full flex flex-col gap-2 justify-center items-center bg-zinc-800 rounded-lg p-4 text-base font-heebo">
                  <div className="grid grid-cols-4 grid-rows-2 w-full gap-2">
                    <div className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-green-500" />
                      <p>Decks</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-green-500" />
                      <p>Bathrooms</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-green-500" />
                      <p>Kitchens</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-green-500" />
                      <p>Painting</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-green-500" />
                      <p>Tile</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-green-500" />
                      <p>Windows</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-green-500" />
                      <p>Floors</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-green-500" />
                      <p>Remodels</p>
                    </div>
                  </div>
                  <div>And More!</div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Services
