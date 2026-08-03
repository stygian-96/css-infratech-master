"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Coins } from "lucide-react";

export default function TrustedSection() {
  return (
    <section className="w-full py-28 px-6 md:px-16 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-[#d7b56d]"></div>
        <div className="absolute bottom-20 right-40 w-80 h-80 rounded-full bg-[#d7b56d]"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
        {/* LEFT TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-1.5 bg-[#d7b56d]/10 rounded-full mb-5">
            <p className="text-[#d7b56d] font-medium text-sm">
              OUR TRUSTED PARTNERS
            </p>
          </div>

          {/* HEADING */}
          <h2 className="text-6xl md:text-7xl mt-5 font-light leading-tight text-[#333] mb-5">
            Trusted by
            <span className="block text-[#d7b56d] font-normal mt-1">
              the Best
            </span>
          </h2>

          <p className="text-base font-sans text-gray-600 mb-14 max-w-md">
            Our Promise to our homebuyers is to deliver exceptional quality and
            value in every project we undertake.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 rounded-xl bg-white shadow-sm border border-gray-100"
            >
              <div className="flex items-center mb-3">
                <div className="p-2.5 bg-[#d7b56d]/10 rounded-lg mr-3">
                  <Coins className="text-[#d7b56d] text-xl" />
                </div>
                <h3 className="font-semibold text-[#d7b56d] text-sm">
                  Easy Financing
                </h3>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 rounded-xl bg-white shadow-sm border border-gray-100"
            >
              <div className="flex items-center mb-3">
                <div className="p-2.5 bg-[#d7b56d]/10 rounded-lg mr-3">
                  <Clock className="text-[#d7b56d] text-xl" />
                </div>
                <h3 className="font-semibold text-sm text-[#d7b56d]">
                  Timely Delivery
                </h3>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full relative"
        >
          <div className="absolute -top-5 -left-5 right-5 bottom-5 bg-[#d7b56d]/10 rounded-xl -z-10"></div>

          <Image
            src="/images/amor.avif"
            width={900}
            height={600}
            alt="partner-image"
            className="w-full h-auto rounded-xl object-cover shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}