import { ArrowRight } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const [grabAllInput, setGrabAllInput] = useState({
    name: "",
    email: "",
    services: "",
    description: "",
  });

  const handleInputsChange = (e) => {
    const { name, value } = e.target;

    setGrabAllInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const arrowRef = useRef();

  const tl = useRef(null);

  const handleMouseEnter = () => {
    tl.current = gsap.timeline({ repeat: -1, yoyo: true });
    tl.current.to(arrowRef.current, {
      x: 6,
      duration: 1,
      ease: "power1.inOut",
    });
  };
  const handleMouseOut = () => {
    if (tl.current) {
      tl.current.kill();
      gsap.to(arrowRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power1.inOut",
      });
    }
  };

  const [getTime, setGetTime] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date();

      const formatted = time
        .toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
        .split("/")
        .join("-");
      setGetTime(formatted);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const service_id = "service_ud6atmo";
    const template_id = "template_ukq3k6c";
    const public_key = "koca2LZr0Ivgsa47i";

    const templateParams = {
      from_name: grabAllInput.name,
      from_email: grabAllInput.email,
      to_name: "oyedelesulaiman@gmail.com",
      message: grabAllInput.description,
      selected_service: grabAllInput.services,
    };

    emailjs
      .send(service_id, template_id, templateParams, public_key)
      .then((resp) => {
        console.log("Email sent successfully", resp);
        setGrabAllInput({
          name: "",
          email: "",
          services: "",
          description: "",
        });
      })
      .catch((error) => {
        console.error("Error sending email", error);
      });
  };

  return (
    <section id="contact" className="w-full bg-[#e5e5e5] mt-40 mb-16 ">
      {/* <!-- Contact Information --> */}

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className=" flex items-start gap-10 flex-col justify-between py-10 px-6 md:px-0 ">
          <div className="relative">
            <h2 className="text-[#242736] text-[26px] md:text-[26.8px] lg:text-[32px] font-600 font-bold tracking-wider font-['Space_Grotesk']">
              <span className="block ml-[120px]">Want to work with me?</span>
              <span className="block">I'd love to hear from you!</span>
            </h2>
            <p className="absolute top-0 left-0 text-[#ec5c29] text-[16px]">
              Contact
            </p>
          </div>

          {/*  */}
          <div className="">
            <div className="text-[16px] text-[#808080]">
              Local time:
              <br />
              <span
                data-clock="CET"
                className="text-span text-[#808080] text-[16px] font-bold"
              >
                {getTime}
              </span>
              , CET
            </div>
          </div>

          {/*  */}
        </div>

        <div className="px-10 py-20 bg-[#161616] rounded-lg text-[#ddd]">
          <form onSubmit={handleSubmit} className="space-y-6 w-full">
            {/* <!-- Name and Email --> */}
            <div className="flex items-center gap-6 lg:flex-row flex-col w-full  ">
              <div className="flex flex-col flex-1 w-full md:min-w-0 gap-2">
                <label
                  htmlFor="name"
                  className="text-[#dae1e4] text-[12px] md:text-[14px]"
                >
                  Name
                </label>
                <input
                  value={grabAllInput.name}
                  onChange={handleInputsChange}
                  className="border active:border-orange-600 outline-none placeholder:text-gray-600 border-[#525252] bg-transparent rounded-[8px] py-3 pl-3 font-200 "
                  name="name"
                  placeholder="example"
                  type="text"
                  id="name"
                  required
                />
              </div>

              <div className="flex flex-col flex-1 w-full md:min-w-0 gap-2">
                <label
                  htmlFor="email"
                  className="text-[#dae1e4] text-[12px] md:text-[14px]"
                >
                  E-mail
                </label>
                <input
                  value={grabAllInput.email}
                  onChange={handleInputsChange}
                  className="border active:border-orange-600 outline-none border-[#525252] bg-transparent placeholder:text-gray-600 rounded-[8px] py-3 pl-3 font-200 "
                  name="email"
                  placeholder="example@gmail.com"
                  type="email"
                  id="email"
                  required
                />
              </div>
            </div>

            {/* <!-- Budget and Services --> */}
            <div className="w-full flex ">
              <div className="flex flex-col gap-2 w-full">
                <label
                  htmlFor="services"
                  className="text-[#dae1e4] text-[12px] md:text-[14px]"
                >
                  Services
                </label>
                <select
                  value={grabAllInput.services}
                  onChange={handleInputsChange}
                  id="services"
                  name="services"
                  required
                  className="border active:border-orange-600 placeholder:text-gray-600 outline-none px-6 border-[#525252] bg-transparent rounded-[8px] py-3 pl-3 font-200"
                >
                  <option value="" disabled selected>
                    Select a service
                  </option>
                  <option value="API / Backend Integration">
                    Web Development /UI Implementation
                  </option>
                  <option value="API / Backend Integration">
                    API / Backend Integration
                  </option>
                  <option value="Optimizing performance">
                    Optimizing performance
                  </option>
                  <option value="Consulting / Collaboration">
                    Consulting / Collaboration
                  </option>
                </select>
              </div>
            </div>

            {/* <!-- Project Description --> */}
            <div className="w-full flex flex-col gap-2">
              <label
                htmlFor="description"
                className="text-[14px] text-[#dae1e4] "
              >
                Project description
              </label>
              <textarea
                value={grabAllInput.description}
                onChange={handleInputsChange}
                id="description"
                name="description"
                placeholder="Hello sulaiman, can you help me with... my goals and timeline are... and this is what i want..."
                required
                className="border h-30 active:border-orange-600 placeholder:text-gray-600 outline-none px-6 border-[#525252] bg-transparent rounded-[8px] py-3 pl-3 font-200"
              ></textarea>
            </div>

            {/* <!-- Checkbox --> */}
           

            {/* <!-- Submit Button --> */}
            <div className="flex  items-center justify-between">
              <button
                type="submit"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseOut}
                className="cursor-pointer py-[8px] px-5 flex items-center gap-4 rounded-md font-semibold bg-[#ec5c29] "
              >
                send
                <ArrowRight size={18} ref={arrowRef} />
              </button>

              <div className="">
                <p className="text-[14px] text-[#797979] ">
                  Hate Contact forms?
                </p>
                <div className="">
                  <a
                    target="_blank"
                    href="mailto:oyedelesulaiman@gmail.com?subject=Hello&body=Hi, I would like to get in touch with you."
                    className="text-[#aaaaaa] font-bold text-[14px]"
                  >
                    oyedelesulaiman@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
