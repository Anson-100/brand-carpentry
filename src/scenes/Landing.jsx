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
          <p className="slogan text-[150px] font-heebo">WE GET SHIT DONE.</p>
        </div>
        <button className="contact font-sarabun text-[2rem] text-gold bg-white rounded-lg px-2 hover:text-black transition-all duration-300">
          contact us
        </button>
      </div>
    </section>
  )
}

export default Landing
