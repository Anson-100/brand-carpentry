import { useState, useEffect } from "react"
import useMediaQuery from "../hooks/useMediaQuery"
import {
  ViewColumnsIcon,
  Square3Stack3DIcon,
  SparklesIcon,
  PuzzlePieceIcon,
  ViewfinderCircleIcon,
  HomeIcon,
  VariableIcon,
} from "@heroicons/react/24/outline"

const Services = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const [tileTouch, setTileTouch] = useState(false)

  const handleTouch = () => {
    if (tileTouch) {
      setTileTouch(false)
    } else {
      setTileTouch(true)
      setTimeout(() => setTileTouch(false), 5000)
    }
  }

  return (
    <section id="services">
      <div>
        <div>
          {" "}
          <p className="text-darker-blue text-center my-5 text-[3rem] font-bold">
            Services
          </p>
        </div>
        {isDesktop ? (
          <div className="grid grid-cols-4 grid-rows-2 gap-4 font-heebo text-[1.5rem] text-black text-center bg-grayish p-4 rounded-lg">
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
              <p className="tile-name">Bathroom Remodels</p>
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
          <div className="grid grid-cols-2 grid-rows-4 gap-4 bg-grayish p-4 rounded-lg">
            <div
              className={`skills-mobile ${tileTouch ? "active" : ""}`}
              onClick={handleTouch}
            >
              {" "}
              <Square3Stack3DIcon className="tile-icon-mobile" />
              <p className="tile-name-mobile">Flooring</p>{" "}
              <p className="tile-info-mobile">Tile</p>
            </div>
            <div className="skills-mobile">1,2</div>
            <div className="skills-mobile">1,3</div>
            <div className="skills-mobile">1,4</div>
            <div className="skills-mobile">2,1</div>
            <div className="skills-mobile">2,2</div>
            <div className="skills-mobile">2,3</div>
            <div className="skills-mobile">2,4</div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Services
