import bgDeck from "../assets/deck 1.jpg"

const Landing = () => {
  return (
    <section id="LANDING" className="h-full py-20 flex">
      <div className="h-5/6 m-auto flex justify-center flex-col items-center">
        <div>
          {" "}
          {/* <p className="text-lg font-heebo">
            Welcome to Cotter Construction. We service the Bradenton/Sarasota
            area of central Florida but are willing to travel a little further
            if the money is right. There is no shortage of people who do crappy
            work around here and trying to find someone you can trust is a
            hassle. If you are reading this consider yourself extremely
            fortunate because you can trust us to get shit done fast and get
            shit done right. Contact Cotter Construction today!
          </p> */}
          <p className="text-center slogan text-[65px] lg:text-[150px]  font-heebo">
            WE GET SHIT DONE.
          </p>
        </div>
        <button className="contact font-sarabun text-[1.5rem] bg-opacity-20 hover:bg-opacity-30 text-grayish bg-white rounded-lg px-2 transition-all duration-300">
          contact us
        </button>
      </div>
    </section>
  )
}

export default Landing
