import { motion } from "framer-motion"
import useMediaQuery from "../hooks/useMediaQuery"
import overhead from "../assets/overhead 1.jpg"
import overheadMobile from "../assets/overhead mobile.jpg"
import {
  PhoneIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/solid"

const Contact = () => {
  const isAboveMd = useMediaQuery("(min-width: 768px)")
  const isAboveSmallPhone = useMediaQuery(
    "(min-height: 700px) and (min-width:360px)"
  )
  return (
    <section id="contact" className="pt-16 md:pt-24 h-[100svh]">
      <div className="h-full pt-8 md:pt-4 pb-4 flex flex-col gap-4">
        <div className="border-2 border-gold rounded-xl p-3 bg-white flex flex-col flex-grow w-5/6 mx-auto h-full">
          {isAboveMd ? (
            <div className="my-auto">
              <div className="flex gap-4 flex-grow">
                <div className="flex-1 flex flex-col justify-between">
                  <div>
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
                      <p className="text-darker-blue text-center text-[2rem] se:text-[2.5rem] font-bold font-heebo">
                        Contact Us
                      </p>
                    </motion.div>
                  </div>
                  <p className="text-black text-justify font-heebo text-[1rem] lg:w-5/6 lg:mx-auto">
                    We are always happy to help so hit us up day or night! Just
                    kidding. We have lives too so please use common sense with
                    the timing of your inquiries. We are in high demand and
                    likely booked at least a few weeks in advance so don't delay
                    if you are serious about getting a job done the right way.
                    We look forward to hearing from you!
                  </p>
                  <p className="text-black text-[1.5rem] md:text-[2rem] text-center">
                    941-504-8392
                  </p>
                  <p className="text-black text-center font-great-vibes text-[2rem] md:text-[2.5rem] xl:text-[3rem]">
                    Thank you for choosing Cotter Carpentry!
                  </p>
                </div>
                <div className="flex-1 flex items-center">
                  <img
                    src={overhead}
                    alt=""
                    className="rounded-lg ml-auto border-2 border-gold"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col h-full">
              {" "}
              <div>
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
                  <p className="text-darker-blue text-center text-[2rem] font-bold font-heebo">
                    Contact Us
                  </p>
                </motion.div>
              </div>
              <div className="">
                {" "}
                <p className="text-black text-justify font-heebo text-[1rem] lg:w-5/6 lg:mx-auto">
                  We are in high demand and likely booked at least a few weeks
                  in advance so don't delay if you are serious about getting a
                  job done the right way. We look forward to hearing from you!
                </p>
              </div>
              {isAboveSmallPhone ? (
                <div className="flex-1 flex items-center flex-grow">
                  <img
                    src={overheadMobile}
                    alt=""
                    className="rounded-lg ml-auto border-2 border-gold"
                  />
                </div>
              ) : (
                <div className="flex-grow"></div>
              )}
              <div>
                <p className="text-black text-center font-great-vibes text-[2rem] md:text-[2.5rem] xl:text-[3rem]">
                  Thank you for choosing Cotter Carpentry!
                </p>
                <p className="text-black text-[1.5rem] md:text-[2rem] text-center">
                  941-504-8392
                </p>
                <div className="flex justify-center gap-2">
                  <a
                    href="tel:9415048392"
                    className="icon bg-cyberspace rounded-lg p-3"
                  >
                    <PhoneIcon className=" text-phone-green w-[2rem]" />
                  </a>
                  <a
                    href="tel:9415048392"
                    className="icon bg-cyberspace rounded-lg p-3"
                  >
                    <ChatBubbleOvalLeftEllipsisIcon className="text-white w-[2rem]" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* <footer className="md:h-32 w-full bg-grayer">
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
        </footer> */}
      </div>
    </section>
  )
}

export default Contact
