import { useState, useEffect } from "react"
import useMediaQuery from "../hooks/useMediaQuery"
import {
  ViewColumnsIcon,
  Square3Stack3DIcon,
  SparklesIcon,
  PuzzlePieceIcon,
  VariableIcon,
} from "@heroicons/react/24/outline"
import { motion } from "framer-motion"

const Services = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const [tileStates, setTileStates] = useState({})

  const handleTouch = tileId => {
    const anyTileActive = Object.values(tileStates).some(
      state => state === true
    )

    if (!anyTileActive || tileStates[tileId]) {
      setTileStates({
        ...tileStates,
        [tileId]: !tileStates[tileId],
      })

      if (!tileStates[tileId]) {
        setTimeout(() => {
          setTileStates(prevStates => ({
            ...prevStates,
            [tileId]: false,
          }))
        }, 5000)
      }
    }
  }

  return (
    <section id="services" className="pt-16 md:pt-24">
      <div className="border-2 border-gold rounded-xl p-3 bg-white mt-8 flex flex-col">
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
            <p className="text-darker-blue text-center mb-3 text-[3rem] font-bold">
              Services
            </p>
            <p className="text-black text-center mb-3 font-heebo text-[1.2rem]">
              Check out some of the cool stuff we do!
            </p>
          </motion.div>
        </div>
        {isDesktop ? (
          <div className="skillbox grid grid-cols-4 grid-rows-2 gap-4 font-heebo text-[1.5rem] text-black text-center p-4 rounded-lg">
            <div className="skills">
              {" "}
              <Square3Stack3DIcon className="tile-icon" />
              <p className="tile-name">Flooring</p>{" "}
              <p className="tile-info h-[60%]">Tile</p>
            </div>

            <div className="skills">
              <ViewColumnsIcon className="tile-icon" />
              <p className="tile-name">Cabinets</p>
              <p className="tile-info">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                illum doloremque tempore laborum soluta.
              </p>
            </div>
            <div className="skills">
              <SparklesIcon className="tile-icon" />
              <p className="tile-name">Remodels</p>
              <p className="tile-info">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                illum doloremque tempore laborum soluta.
              </p>
            </div>
            <div className="skills">
              <PuzzlePieceIcon className="tile-icon" />
              <p className="tile-name">Drywall Repair</p>
              <p className="tile-info">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                illum doloremque tempore laborum soluta.
              </p>
            </div>
            <div className="skills">
              <VariableIcon className="tile-icon" />
              <p className="tile-name">Trim</p>
              <p className="tile-info">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                illum doloremque tempore laborum soluta.
              </p>
            </div>
            <div className="skills">
              <VariableIcon className="tile-icon" />
              <p className="tile-name">Doors</p>
              <p className="tile-info">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                illum doloremque tempore laborum soluta.
              </p>
            </div>
            <div className="skills">
              <VariableIcon className="tile-icon" />
              <p className="tile-name">Decks & Pergolas</p>
              <p className="tile-info">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                illum doloremque tempore laborum soluta.
              </p>
            </div>
            <div className="skills">
              <VariableIcon className="tile-icon" />
              <p className="tile-name">Siding</p>
              <p className="tile-info">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                illum doloremque tempore laborum soluta.
              </p>
            </div>
          </div>
        ) : (
          // MOBILE TILE SECTION
          <div className="skillbox grid grid-cols-2 grid-rows-4 gap-4 p-4 rounded-lg">
            <div
              onClick={() => handleTouch("tile1")}
              className={`skills-mobile ${tileStates["tile1"] ? "active" : ""}`}
            >
              {" "}
              <Square3Stack3DIcon className="tile-icon-mobile" />
              <p className="tile-name-mobile">Flooring</p>{" "}
              <p className="tile-info-mobile">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>

            <div
              onClick={() => handleTouch("tile2")}
              className={`skills-mobile ${tileStates["tile2"] ? "active" : ""}`}
            >
              {" "}
              <ViewColumnsIcon className="tile-icon-mobile" />
              <p className="tile-name-mobile">Cabinets</p>{" "}
              <p className="tile-info-mobile">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div
              onClick={() => handleTouch("tile3")}
              className={`skills-mobile ${tileStates["tile3"] ? "active" : ""}`}
            >
              {" "}
              <SparklesIcon className="tile-icon-mobile" />
              <p className="tile-name-mobile">Remodels</p>{" "}
              <p className="tile-info-mobile">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div
              onClick={() => handleTouch("tile4")}
              className={`skills-mobile ${tileStates["tile4"] ? "active" : ""}`}
            >
              {" "}
              <PuzzlePieceIcon className="tile-icon-mobile" />
              <p className="tile-name-mobile">Drywall Repair</p>{" "}
              <p className="tile-info-mobile">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div
              onClick={() => handleTouch("tile5")}
              className={`skills-mobile ${tileStates["tile5"] ? "active" : ""}`}
            >
              {" "}
              <VariableIcon className="tile-icon-mobile" />
              <p className="tile-name-mobile">Trim</p>{" "}
              <p className="tile-info-mobile">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div
              onClick={() => handleTouch("tile6")}
              className={`skills-mobile ${tileStates["tile6"] ? "active" : ""}`}
            >
              {" "}
              <VariableIcon className="tile-icon-mobile" />
              <p className="tile-name-mobile">Doors</p>{" "}
              <p className="tile-info-mobile">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div
              onClick={() => handleTouch("tile7")}
              className={`skills-mobile ${tileStates["tile7"] ? "active" : ""}`}
            >
              {" "}
              <VariableIcon className="tile-icon-mobile" />
              <p className="tile-name-mobile">Decks</p>{" "}
              <p className="tile-info-mobile">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div
              onClick={() => handleTouch("tile8")}
              className={`skills-mobile ${tileStates["tile8"] ? "active" : ""}`}
            >
              {" "}
              <VariableIcon className="tile-icon-mobile" />
              <p className="tile-name-mobile">Siding</p>{" "}
              <p className="tile-info-mobile">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Services
