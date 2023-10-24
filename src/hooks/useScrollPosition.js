import { useState, useEffect } from "react"

const useScrollPosition = (fadePoints, fadeIn = false) => {
  const [fadeClasses, setFadeClasses] = useState(
    Array(fadePoints.length).fill(fadeIn ? "opacity-0" : "opacity-100")
  )

  useEffect(() => {
    const handleScroll = () => {
      setFadeClasses(
        fadePoints.map(point => {
          if (fadeIn) {
            return window.scrollY > point ? "opacity-100" : "opacity-0"
          } else {
            return window.scrollY > point ? "opacity-0" : "opacity-100"
          }
        })
      )
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [fadePoints, fadeIn])

  return fadeClasses
}

export default useScrollPosition
