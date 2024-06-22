// DesktopTile.js
import React from "react"

const DesktopTile = ({ imgSrc, title, description }) => {
  return (
    <div
      className="skills bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${imgSrc})` }}
    >
      <div className="tile-name backdrop-blur-md">
        <p>{title}</p>
        <div className="h-[1px] w-full mb-2 bg-gray-400"></div>
        <p className="tile-info">{description}</p>
      </div>
    </div>
  )
}

export default DesktopTile
