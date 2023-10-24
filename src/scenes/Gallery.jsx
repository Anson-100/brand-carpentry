import { useState } from "react"
import Carousel from "../components/Carousel"
import deckOne from "../assets/deck 1.jpg"
import deckTwo from "../assets/deck 2.jpg"

const images = [deckOne, deckTwo]

const Gallery = () => {
  return (
    <section id="gallery">
      <div>
        <p className="text-darker-blue text-center mt-5 text-[3rem] font-bold">
          Gallery
        </p>
        <div className="gallery-section flex items-center">
          <div className="m-auto">
            <Carousel images={images} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
