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
              <p className="text-darker-blue text-center text-[2.5rem] font-bold font-heebo">
                Services
              </p>
              <p className="text-black text-center mb-6 font-heebo text-[1.2rem]">
                Check out some of the cool stuff we do! We are both licensed and
                insured.
              </p>
            </motion.div>
          </div>
          <div className="skillbox grid grid-cols-2 grid-rows-4 sm:grid-cols-4 sm:grid-rows-2 flex-grow gap-4">
            <div className="skills"></div>
            <div className="skills"></div>
            <div className="skills"></div>
            <div className="skills"></div>
            <div className="skills"></div>
            <div className="skills"></div>
            <div className="skills"></div>
            <div className="skills"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
