import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Navbar from "./components/Navbar"
import Landing from "./scenes/Landing"

function App() {
  return (
    <div className="app bg-white">
      <Navbar />
      <Landing />
    </div>
  )
}

export default App
