import React, { useState } from "react";
import { frontendFAQs } from "../Data/Data";
import { Minus, Plus } from "lucide-react";

const Faq = () => {
  const [expanded, setExpanded] = useState(null);
  return (
    <div className="mx-auto container px-6 md:px-0">
      <div className="flex flex-col">
        <h2 className="text-[#242736] flex items-center justify-center text-[20px] md:text-[30px] lg:text-[40px] font-600 font-bold tracking-wider font-['Space_Grotesk']">
          Things i often get asked.
        </h2>
        {/* FAQ */}
        <div className="flex flex-col justify-center items-center gap-5 w-full ">
          {frontendFAQs.map((faq, index) => {
            const isOpen = expanded === index;
            return (
              <div
                key={index}
                className="flex flex-col justify-center w-full md:w-3/4 lg:w-2/4 gap-5 border border-[#cecece] rounded-md px-[24px] py-[16px]"
              >
                <div className="flex items-start flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      onClick={() => setExpanded(isOpen ? null : index)}
                      className="cursor-pointer"
                    >
                      {isOpen ? (
                        <div className="text-[#ec5c29]">
                          <Minus size={18} />
                        </div>
                      ) : (
                        <div className="text-[#ec5c29]">
                          <Plus size={18} />
                        </div>
                      )}
                    </div>
                    <p className="text-[#242736] font-bold">{faq.question}</p>
                  </div>

                  {/* Smooth dropdown transition */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen
                        ? "max-h-40 opacity-100 mt-[14px]"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-[#808080]">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
