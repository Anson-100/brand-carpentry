import {
  PhoneIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/solid"

const Contact = () => {
  return (
    <section
      id="contact"
      className="pt-16 md:pt-24 flex flex-col min-h-screen "
    >
      <div className=" mx-auto flex-grow flex flex-col w-5/6">
        <div className="border-2 border-gold rounded-xl p-3 bg-white my-8 mb-4 w-full flex-grow flex flex-col">
          <p className="text-darker-blue text-center text-[3rem] font-bold mb-3">
            Contact Us
          </p>
          <p className="text-black text-justify font-heebo text-[1.2rem] flex-grow">
            We are always happy to help so hit us up day or night! Just kidding.
            We have lives too so please use common sense with the timing of your
            inquiries. We are in high demand and are likely booked at least a
            few weeks in advance so don't delay if you are serious about getting
            a job done the right way. We look forward to hearing from you and
            thank you for choosing Cotter Carpentry!
          </p>
          <div className="">
            <p className="text-black text-[2rem] text-center">941 504 8392</p>
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
        </div>
      </div>
      <footer className="h-32 w-full bg-grayer">
        <div className="w-10/12 m-auto">
          <div className="md:flex justify-center md:justify-between text-center">
            <p className="font-sarabun font-semibold text-2xl text-darker-blue">
              Cotter Carpentry
            </p>
            <p className="font-sarabun text-md text-darker-blue">
              Anson Hunnell ©2023. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Contact
