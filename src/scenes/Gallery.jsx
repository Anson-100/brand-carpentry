import { motion } from "framer-motion"
import Carousel from "../components/Carousel"
import deckOne from "../assets/deck 1.jpg"
import deckTwo from "../assets/deck 2.jpg"

const images = [deckOne, deckTwo]

const Gallery = () => {
  return (
    <section id="gallery" className="pt-20 md:pt-24 h-screen">
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
                Gallery
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
