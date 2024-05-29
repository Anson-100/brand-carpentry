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
    <div className="carousel flex m-auto xs:rounded-md relative xs:w-3/4 se-mobile:w-1/4 landscape-mobile:w-1/2 ">
      {" "}
      {currentSlide > 0 && (
        <div
          className=" text-gray-200 rounded-md p-2 font-montserrat font-semibold shadow-4 bg-zinc-900 hover:bg-zinc-700 cursor-pointer z-10 absolute left-8 -bottom-8 xs:bottom-1/2 xs:-left-6 landscape-mobile:-left-20"
          onClick={goToPrevSlide}
        >
          <ArrowLeftIcon className="w-8" />
        </div>
      )}{" "}
      <div></div>
      <div className=" overflow-hidden flex xs:rounded-md relative h-auto">
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
              <img
                className="object-cover border-opacity-50"
                src={image.src}
                alt={image.alt}
              />
              <div className="absolute inset-0 flex flex-col justify-end items-center p-4">
                <div className="bg-black p-2 rounded-lg bg-opacity-60">
                  <p className="text-white text-center">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>{" "}
      {currentSlide < totalSlides - 1 && (
        <div
          className=" text-gray-200 rounded-md p-2 font-montserrat font-semibold shadow-4 bg-zinc-900 hover:bg-zinc-700 cursor-pointer z-10 absolute right-8 -bottom-8 xs:bottom-1/2 xs:-right-6 landscape-mobile:-right-20"
          onClick={goToNextSlide}
        >
          <ArrowRightIcon className="w-8" />
        </div>
      )}{" "}
    </div>
  )
}

export default Carousel
