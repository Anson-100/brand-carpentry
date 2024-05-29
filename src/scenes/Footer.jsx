import AnchorLink from "react-anchor-link-smooth-scroll"

const Footer = ({ setSelectedPage }) => {
  return (
    <footer className="text-gray-200 pt-10">
      {" "}
      {/* Added flex, items-center, and justify-center to vertically center content */}
      <div className="flex flex-col h-full items-center justify-center text-center gap-4 w-full bg-zinc-950">
        {" "}
        {/* Ensured full width and centered alignment */}
        <AnchorLink
          onClick={() => setSelectedPage("home")}
          href="#home"
          className="z-10 w-full bg-zinc-800 hover:bg-zinc-700 font-montserrat py-3 text-gray-400 hover:text-gray-300"
        >
          back to top
        </AnchorLink>
        <div className="pb-6">
          <h1 className="text-3xl font-montserrat text-gray-100 py-2">
            Cotter Carpentry
          </h1>
          <p className="font-heebo text-md text-gray-300">
            ©2024 Cotter Carpentry. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
