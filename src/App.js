import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Navbar from "./components/Navbar"
import Landing from "./scenes/Landing"
import Services from "./scenes/Services"
import About from "./scenes/About"
import Gallery from "./scenes/Gallery"
import Contact from "./scenes/Contact"
import LineGradient from "./components/LineGradient"
import Footer from "./scenes/Footer"
import useMediaQuery from "./hooks/useMediaQuery"
import useScrollPosition from "./hooks/useScrollPosition"

function App() {
  const [selectedPage, setSelectedPage] = useState("home")
  const [isTopOfPage, setIsTopOfPage] = useState(true)
  const isDesktop = useMediaQuery("(min-width: 1060px)")

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
    <div className="app">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div
        id="LANDING"
        className="md:h-full"
        style={{
          backgroundPosition: `center ${-parallaxShift}px`,
          filter: "saturate(140%)",
        }}
      >
        {" "}
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("home")}
        >
          {" "}
          <Landing
            isTopOfPage={isTopOfPage}
            setSelectedPage={setSelectedPage}
          />
        </motion.div>
      </div>
      <LineGradient />
      <div className="h-full w-5/6 m-auto">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("services")}
        >
          <Services />
        </motion.div>
      </div>
      <LineGradient />

      <div className="h-full w-5/6 m-auto">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("gallery")}
        >
          <Gallery />
        </motion.div>
      </div>
      <LineGradient />

      <div className="h-full w-5/6 m-auto">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("about")}
        >
          <About setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      <LineGradient />

      <div className="h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("contact")}
        >
          <Contact />
        </motion.div>
      </div>
    </div>
  )
}

export default App
