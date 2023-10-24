import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Navbar from "./components/Navbar"
import Landing from "./scenes/Landing"
import Services from "./scenes/Services"
import About from "./scenes/About"
import Gallery from "./scenes/Gallery"
import Contact from "./scenes/Contact"
import Footer from "./scenes/Footer"
import useMediaQuery from "./hooks/useMediaQuery"
import useScrollPosition from "./hooks/useScrollPosition"

function App() {
  const [selectedPage, setSelectedPage] = useState("home")
  const [isTopOfPage, setIsTopOfPage] = useState(true)
  const isDesktop = useMediaQuery("(min-width: 1060px)")

  console.log("App re-rendering")
  // USEEFFECT HOOK FOR TOP OF PAGE
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage("home")
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // USEEFFECT HOOK FOR PARALLAX EFFECT
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const parallaxShift = scrollY * 0.4

  const fadePoints = [300]
  const [fadeClass] = useScrollPosition(fadePoints, true)

  return (
    <div className="app bg-white">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div
        id="LANDING"
        className="h-full"
        style={{
          backgroundPosition: `center ${-parallaxShift}px`,
          filter: "saturate(140%)",
        }}
      >
        {" "}
        <Landing isTopOfPage={isTopOfPage} setSelectedPage={setSelectedPage} />
      </div>

      <div className="h-full w-5/6 mx-auto">
        <Services />
      </div>
      <div className="h-full">
        <Gallery />
      </div>
      <div className="h-full">
        <About />
      </div>
      <div className="h-full">
        <Contact />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  )
}

export default App
