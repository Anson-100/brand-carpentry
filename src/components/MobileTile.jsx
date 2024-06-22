// MobileTile.js
import React from "react"

const MobileTile = ({ imgSrc, title, description, onClick, isActive }) => {
  return (
    <div
      className={`skills-mobile ${
        isActive ? "active" : ""
      } bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: `url(${imgSrc})` }}
      onClick={onClick}
    >
      <div className="tile-name-mobile backdrop-blur-md">
        <p>{title}</p>
        <div className="h-[1px] w-full mb-2 bg-gray-400"></div>
        <p className="tile-info-mobile">{description}</p>
      </div>
    </div>
  )
}

export default MobileTile
