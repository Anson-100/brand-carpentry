import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import useMediaQuery from "../hooks/useMediaQuery"

import overhead from "../assets/overhead 1.jpg"
import overheadMobile from "../assets/overhead mobile.jpg"
import AnchorLink from "react-anchor-link-smooth-scroll"
import {
  PhoneIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/solid"

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm()

  const onSubmit = async e => {
    console.log("~ e", e)
    const isValid = await trigger()
    if (!isValid) {
      e.preventDefault()
    }
  }

  const isAboveMd = useMediaQuery("(min-width: 1200px)")
  const isMobile = useMediaQuery("(max-width: 440px)")
  const isLandscapeMobile = useMediaQuery(
    "(max-height: 440px) and (orientation: landscape)"
  )

  return (
    <section id="contact" className="contact h-[100svh]">
      <div className="h-full pt-20 pb-10 w-full m-auto">
        <div className="h-full flex flex-col">
          <div className="lg:flex md:justify-between gap-16 mt-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              className="basis-1/2 flex m-auto"
            >
              {/* HEADER============================================================================= */}
              <div className="flex flex-col gap-4 w-full">
                <div className="py-4 bg-zinc-950 rounded-full mb-4 px-12 max-w-max mx-auto lg:mx-0 ">
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
                    <p className=" text-gray-100 text-xl md:text-2xl font-bold font-heebo landscape-mobile:text-xl">
                      Contact Us
                    </p>
                  </motion.div>
                </div>
                {isAboveMd ? (
                  <p className="text-zinc-700 w-2/3 mx-auto lg:mx-0 font-heebo">
                    You are welcome to reach out to us via call, text, or by
                    sending us a message (response time is usually quicker with
                    call/text). We look forward to hearing from you!
                  </p>
                ) : (
                  ""
                )}
              </div>
            </motion.div>
            {/* CONTENT AND INFO=================================================================================== */}
            <div className="flex flex-col gap-4">
              {/* PHONE------------------ */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="se:mt-0 xs:mt-4 md:mt-0 bg-zinc-800 rounded-lg p-4 carousel flex justify-between items-center"
              >
                <p className="text-lg font-bold font-heebo landscape-mobile:text-lg">
                  Call or Text
                </p>
                <p className="text-lg font-heebo landscape-mobile:text-base">
                  {isMobile ? (
                    <a
                      href="tel:9415048392"
                      className="cursor-pointer underline"
                    >
                      (941) 504-8392
                    </a>
                  ) : (
                    "(941) 504-8392"
                  )}
                </p>
              </motion.div>
              {/* EMAIL--------------------- */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="basis-1/2  md:mt-0 bg-zinc-800 rounded-lg p-4 carousel"
              >
                {isLandscapeMobile ? (
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-bold font-heebo">Email</p>
                    <p className="font-heebo text-base">
                      rotate your phone to write an email
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-lg font-bold font-heebo mb-4">Email</p>
                    <form
                      target="_blank"
                      onSubmit={onSubmit}
                      action="https://formsubmit.co/ansonhunnell@gmail.com"
                      method="POST"
                    >
                      <input
                        className="form w-full rounded-md bg-zinc-100 font-semibold placeholder-opaque-black p-3 text-zinc-900"
                        type="text"
                        placeholder="NAME"
                        {...register("name", {
                          required: true,
                          maxLength: 100,
                        })}
                      />
                      {errors.name && (
                        <p className="text-red mt-1">
                          {errors.name.type === "required" &&
                            "This field is required."}
                          {errors.name.type === "maxLength" &&
                            "Max length is 100 char."}
                        </p>
                      )}
                      <input
                        className="form w-full rounded-md bg-zinc-100 font-semibold placeholder-opaque-black p-3 mt-5 text-zinc-900"
                        type="text"
                        placeholder="EMAIL"
                        {...register("email", {
                          required: true,
                          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        })}
                      />
                      {errors.email && (
                        <p className="text-red mt-1">
                          {errors.email.type === "required" &&
                            "This field is required."}
                          {errors.email.type === "pattern" &&
                            "Invalid email address."}
                        </p>
                      )}
                      <textarea
                        className="form w-full rounded-md bg-zinc-100 font-semibold placeholder-opaque-black p-3 mt-5 text-zinc-900"
                        name="message"
                        placeholder="MESSAGE"
                        rows="4"
                        cols="50"
                        {...register("message", {
                          required: true,
                          maxLength: 2000,
                        })}
                      />
                      {errors.message && (
                        <p className="text-red mt-1">
                          {errors.message.type === "required" &&
                            "This field is required."}
                          {errors.message.type === "maxLength" &&
                            "Max length is 2000 char."}
                        </p>
                      )}
                      <button
                        className="sunset-glow text-gray-900 bg-zinc-50 rounded-full py-3 px-12 text-base font-heebo shadow-4 hover:text-gray-50 hover:bg-gradient-sunset mt-4 w-full sm:w-auto"
                        type="submit"
                      >
                        Send Us A Message!
                      </button>
                    </form>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
