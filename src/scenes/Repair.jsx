// SERVICES CODE-----------------------------------------------------------------------------------------------------------------------------------------------------------``

;<div>
  {" "}
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
    variants={{
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    }}
  >
    <p className="text-darker-blue text-center mb-3 text-[3rem] font-bold">
      Services
    </p>
    <p className="text-black text-center mb-3 font-heebo text-[1.2rem]">
      Check out some of the cool stuff we do!
    </p>
  </motion.div>
</div>
{
  isDesktop ? (
    <div className="skillbox grid grid-cols-4 grid-rows-2 gap-4 font-heebo text-[1.5rem] text-black text-center p-4 rounded-lg">
      <div className="skills">
        {" "}
        <Square3Stack3DIcon className="tile-icon" />
        <p className="tile-name">Flooring</p>{" "}
        <p className="tile-info h-[60%]">Tile</p>
      </div>

      <div className="skills">
        <ViewColumnsIcon className="tile-icon" />
        <p className="tile-name">Cabinets</p>
        <p className="tile-info">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi illum
          doloremque tempore laborum soluta.
        </p>
      </div>
      <div className="skills">
        <SparklesIcon className="tile-icon" />
        <p className="tile-name">Remodels</p>
        <p className="tile-info">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi illum
          doloremque tempore laborum soluta.
        </p>
      </div>
      <div className="skills">
        <PuzzlePieceIcon className="tile-icon" />
        <p className="tile-name">Drywall Repair</p>
        <p className="tile-info">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi illum
          doloremque tempore laborum soluta.
        </p>
      </div>
      <div className="skills">
        <VariableIcon className="tile-icon" />
        <p className="tile-name">Trim</p>
        <p className="tile-info">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi illum
          doloremque tempore laborum soluta.
        </p>
      </div>
      <div className="skills">
        <VariableIcon className="tile-icon" />
        <p className="tile-name">Doors</p>
        <p className="tile-info">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi illum
          doloremque tempore laborum soluta.
        </p>
      </div>
      <div className="skills">
        <VariableIcon className="tile-icon" />
        <p className="tile-name">Decks & Pergolas</p>
        <p className="tile-info">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi illum
          doloremque tempore laborum soluta.
        </p>
      </div>
      <div className="skills">
        <VariableIcon className="tile-icon" />
        <p className="tile-name">Siding</p>
        <p className="tile-info">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi illum
          doloremque tempore laborum soluta.
        </p>
      </div>
    </div>
  ) : (
    // MOBILE TILE SECTION
    <div className="skillbox grid grid-cols-2 grid-rows-4 gap-4 p-4 rounded-lg">
      <div
        onClick={() => handleTouch("tile1")}
        className={`skills-mobile ${tileStates["tile1"] ? "active" : ""}`}
      >
        {" "}
        <Square3Stack3DIcon className="tile-icon-mobile" />
        <p className="tile-name-mobile">Flooring</p>{" "}
        <p className="tile-info-mobile">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div
        onClick={() => handleTouch("tile2")}
        className={`skills-mobile ${tileStates["tile2"] ? "active" : ""}`}
      >
        {" "}
        <ViewColumnsIcon className="tile-icon-mobile" />
        <p className="tile-name-mobile">Cabinets</p>{" "}
        <p className="tile-info-mobile">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div
        onClick={() => handleTouch("tile3")}
        className={`skills-mobile ${tileStates["tile3"] ? "active" : ""}`}
      >
        {" "}
        <SparklesIcon className="tile-icon-mobile" />
        <p className="tile-name-mobile">Remodels</p>{" "}
        <p className="tile-info-mobile">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div
        onClick={() => handleTouch("tile4")}
        className={`skills-mobile ${tileStates["tile4"] ? "active" : ""}`}
      >
        {" "}
        <PuzzlePieceIcon className="tile-icon-mobile" />
        <p className="tile-name-mobile">Drywall Repair</p>{" "}
        <p className="tile-info-mobile">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div
        onClick={() => handleTouch("tile5")}
        className={`skills-mobile ${tileStates["tile5"] ? "active" : ""}`}
      >
        {" "}
        <VariableIcon className="tile-icon-mobile" />
        <p className="tile-name-mobile">Trim</p>{" "}
        <p className="tile-info-mobile">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div
        onClick={() => handleTouch("tile6")}
        className={`skills-mobile ${tileStates["tile6"] ? "active" : ""}`}
      >
        {" "}
        <VariableIcon className="tile-icon-mobile" />
        <p className="tile-name-mobile">Doors</p>{" "}
        <p className="tile-info-mobile">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div
        onClick={() => handleTouch("tile7")}
        className={`skills-mobile ${tileStates["tile7"] ? "active" : ""}`}
      >
        {" "}
        <VariableIcon className="tile-icon-mobile" />
        <p className="tile-name-mobile">Decks</p>{" "}
        <p className="tile-info-mobile">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div
        onClick={() => handleTouch("tile8")}
        className={`skills-mobile ${tileStates["tile8"] ? "active" : ""}`}
      >
        {" "}
        <VariableIcon className="tile-icon-mobile" />
        <p className="tile-name-mobile">Siding</p>{" "}
        <p className="tile-info-mobile">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  )
}

// ABOUT CODE-----------------------------------------------------------------------------------------------------------------------------------------------------------``
;<div className="">
  {isAboveLarge ? (
    <div className="mx-auto my-auto w-5/6 border-2 border-gold rounded-xl p-5 bg-white">
      <div className="flex items-center gap-8 w-5/6">
        <div className="m-auto w-2/3">
          <p className="text-[3rem] font-bold text-darker-blue">About Us</p>
          <p className="text-[1.2rem] text-darker-blue font-heebo text-justify my-5">
            Welcome to Cotter Construction. We service the Bradenton/Sarasota
            area of central Florida but are willing to travel a little further
            if the money is right. There is no shortage of people who do crappy
            work around here and finding someone you can trust is a hassle.
            However, if you are reading this consider yourself extremely
            fortunate because you can always trust us to get shit done fast and
            get shit done right. Contact Cotter Construction today!{" "}
          </p>
          <AnchorLink
            onClick={() => setSelectedPage("contact")}
            href="#contact"
            className="contact font-sarabun text-[1.5rem] text-white bg-light-blue hover:bg-darker-blue rounded-lg px-2 transition-all active:translate-y-[1px] duration-200"
          >
            contact us
          </AnchorLink>
        </div>
        <div className="w-1/3">
          <img
            src={jacked}
            alt="Isaac Jacked Cotter"
            className="rounded-lg ml-auto border-2 border-gold"
          />
        </div>
      </div>
    </div>
  ) : (
    // MOBILE VIEW
    <div className="flex flex-col mx-auto w-5/6 mt-8 border-2 border-gold rounded-xl p-5 bg-white">
      <p className="text-[3rem] font-bold text-center mb-3 text-darker-blue">
        About Us
      </p>
      <div>
        <img
          src={jackedMobile}
          alt="Isaac Jacked Cotter"
          className="rounded-lg m-auto h-[180px]"
        />
      </div>
      <div className="m-auto text-center">
        <p className="text-[1.2rem] text-black font-heebo text-justify mb-3">
          Welcome to Cotter Construction. We service the Bradenton/Sarasota area
          of central Florida but are willing to travel a little further if the
          money is right. There is no shortage of people who do crappy work
          around here and finding someone you can trust is a hassle. However, if
          you are reading this consider yourself extremely fortunate because you
          can always trust us to get shit done fast and get shit done right.
          Contact Cotter Construction today!{" "}
        </p>
        <AnchorLink
          onClick={() => setSelectedPage("contact")}
          href="#contact"
          className="contact font-sarabun text-[1.5rem] text-white bg-light-blue rounded-lg my-2 px-2 transition-all duration-300"
        >
          contact us
        </AnchorLink>
      </div>
    </div>
  )}
</div>
l
// CONTACT CODE------------------------------------------------------------------------------------------------------------------------------------

<div className=" mx-auto flex-grow flex flex-col w-5/6">
        <div className="border-2 border-gold rounded-xl p-5 bg-white my-8 mb-4 md:mb-8 w-full flex-grow flex flex-col">
          <p className="text-darker-blue text-center text-[3rem] font-bold mb-3">
            Contact Us
          </p>
          {isAboveLarge ? (
            <div>
              <div className="flex items-center mx-auto gap-8">
                <div className="flex-1 flex flex-col justify-between">
                  <p className="text-black text-justify font-heebo text-[1.2rem] ">
                    We are always happy to help so hit us up day or night! Just
                    kidding. We have lives too so please use common sense with
                    the timing of your inquiries. We are in high demand and are
                    likely booked at least a few weeks in advance so don't delay
                    if you are serious about getting a job done the right way.
                    We look forward to hearing from you and thank you for
                    choosing Cotter Carpentry!
                  </p>
                  <p className="text-black text-[2rem] text-center">
                    941-504-8392
                  </p>
                  <p className="text-black text-center font-great-vibes text-[2.5rem] xl:text-[3rem]">
                    Thank you for choosing Cotter Carpentry!
                  </p>
                </div>

                <div className="basis-1/2">
                  <img
                    src={overhead}
                    alt=""
                    className="rounded-lg ml-auto border-2 border-gold"
                  />
                </div>
              </div>
            </div>
          ) : (
            
              <p className="text-black text-justify font-heebo text-[1.2rem] flex-grow">
                We are always happy to help so hit us up day or night! Just
                kidding. We have lives too so please use common sense with the
                timing of your inquiries. We are in high demand and are likely
                booked at least a few weeks in advance so don't delay if you are
                serious about getting a job done the right way. We look forward
                to hearing from you and thank you for choosing Cotter Carpentry!
              </p>
              <div className="">
                <p className="text-black text-[2rem] text-center">
                  941-504-8392
                </p>
                <div className="flex justify-center gap-2">
                  <a
                    href="tel:+1234567890"
                    className="icon bg-cyberspace rounded-lg p-3"
                  >
                    <PhoneIcon className=" text-phone-green w-[2rem]" />
                  </a>
                  <a
                    href="tel:+1234567890"
                    className="icon bg-cyberspace rounded-lg p-3"
                  >
                    <ChatBubbleOvalLeftEllipsisIcon className="text-white w-[2rem]" />
                  </a>
                </div>
              </div>
            
          )}
        </div>
      </div>
      <footer className="h-32 w-full bg-grayer">
        <div className="w-10/12 m-auto">
          <div className="md:flex justify-center md:justify-between text-center">
            <p className="font-sarabun font-semibold text-2xl">
              Cotter Carpentry
            </p>
            <p className="font-sarabun text-md">
              Anson Hunnell ©2023. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
      