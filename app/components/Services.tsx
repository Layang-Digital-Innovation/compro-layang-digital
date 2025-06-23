import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

import service1 from "app/assets/Open source-bro.svg"
import service2 from "app/assets/App development-bro.svg"
import service3 from "app/assets/Interaction Design-pana.svg"
import service4 from "app/assets/tech company-amico.svg"
import { useTranslation } from "react-i18next";


const serviceImages = [service1, service2, service3, service4];


export default function Services() {

  const {t} = useTranslation();
  const services = t("services", { returnObjects: true }) as {
    header : string;
    subtitle : string;
    button : string;
    service : {
      name : string;
      description : string;
    }[]
  }


  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ top: 0, height: 0 });

  useEffect(() => {
    if (tabRefs.current[activeIndex]) {
      const el = tabRefs.current[activeIndex];
      setIndicatorStyle({
        top: el.offsetTop,
        height: el.offsetHeight,
      });
    }
  }, [activeIndex]);

  return (
    <section id="services" className="container mx-auto px-6 md:px-12 lg:px-20 py-16">
      <div className="flex flex-wrap md:flex-auto justify-between">
        <div className="max-w-xl">
          <h1 className="text-3xl font-aileron font-semibold">{services.header}</h1>
          <p className="text-gray-600 mt-2">
           {services.subtitle}
          </p>
        </div>
        <Button className="self-center my-6 md:my-0">{services.button}</Button>
      </div>

      <div className="flex flex-col md:flex-row gap-6 py-8">
        {/* Tabs Left with Active Indicator */}
        <div className="relative w-full md:w-1/3">
          {/* Active Indicator */}
          <motion.div
            className="absolute left-0 w-[4px] bg-blue-600 rounded-full"
            initial={false}
            animate={{ top: indicatorStyle.top, height: indicatorStyle.height }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />

          <div
            className="flex flex-col gap-4 pl-4 border-l-2 border-gray-200"
            ref={containerRef}
          >
            {services.service.map((item, index) => (
              <div
                key={index}
                ref={(el) => void (tabRefs.current[index] = el)}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer px-4 py-2 transition-all ${
                  index === activeIndex ? "bg-blue-50" : ""
                }`}
              >
                <h2
                  className={`text-lg font-medium transition-all duration-300 ${
                    index === activeIndex ? "text-blue-700 font-semibold" : ""
                  }`}
                >
                  {item.name}
                </h2>
                {index === activeIndex && (
                  <p className="text-sm text-gray-600 mt-2">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content Right */}
        <div className="w-full md:w-2/3">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-md border border-t-5 border-t-[#068D9D]"
            >
              <h3 className="text-2xl font-bold mb-4">
                {services.service[activeIndex].name}
              </h3>
              <p className="text-gray-600 mb-6">
                {services.service[activeIndex].description}
              </p>
              <img
                src={serviceImages[activeIndex]}
                alt={services.service[activeIndex].name}
                className="w-full h-[300px] object-contain rounded-md"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
