import { useState } from "react"
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid"
import useMediaQuery from "../hooks/useMediaQuery"
import imageSources from "../modules/imageSources"

const Carousel = ({}) => {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = Math.ceil(imageSources.length / 2)

  const goToPrevSlide = () => {
    setCurrentSlide(current => (current > 0 ? current - 1 : current))
  }

  const goToNextSlide = () => {
    setCurrentSlide(current =>
      current < totalSlides - 1 ? current + 1 : current
    )
  }

  return (
    <div className="carousel overflow-hidden flex mx-auto border-2 border-gold rounded-xl relative h-auto">
      {currentSlide > 0 && (
        <ArrowLeftIcon
          className="w-6 md:w-8 text-black bg-white rounded-full bg-opacity-50 hover:cursor-pointer z-10 absolute top-1/2 left-2 transform -translate-y-1/2"
          onClick={goToPrevSlide}
        />
      )}

      <div
        className="slides flex h-auto relative"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {imageSources.map((image, index) => (
          <div
            key={index}
            className={`flex-shrink-0 ${
              isDesktop ? "w-1/2" : "w-full"
            } h-full relative`}
          >
            <img className="object-cover" src={image.src} alt={image.alt} />
            <div className="absolute inset-0 flex flex-col justify-end items-center p-4">
              <div className="bg-black p-2 rounded-lg bg-opacity-60">
                <p className="text-white text-center">{image.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {currentSlide < totalSlides - 1 && (
        <ArrowRightIcon
          className="w-6 md:w-8 text-black bg-white rounded-full bg-opacity-50 hover:cursor-pointer z-10 absolute top-1/2 right-2 transform -translate-y-1/2"
          onClick={goToNextSlide}
        />
      )}
    </div>
  )
}

export default Carousel
