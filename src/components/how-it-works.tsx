"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Wrapper from "./global/wrapper";
import ScheduleVisitModal from "./schedulevisit-dialog";

export default function MasterpiecesSection() {
  const [hoverImage, setHoverImage] = useState<number | null>(null);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageReveal = {
    initial: { scale: 1.05, opacity: 0.8 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  // Gallery items with specific layout dimensions
  const galleryItems = [
    {
      id: "main",
      src: "/images/2.avif",
      alt: "Luxury Villa Exterior",
      width: 900,
      height: 600,
      className:
        "w-full md:w-[450px] h-[220px] rounded-[40px] overflow-hidden shadow-lg",
    },
    {
      id: "long",
      src: "/images/1.avif",
      alt: "Modern Interior Design",
      width: 500,
      height: 300,
      className: "w-[220px] h-[90px] rounded-full overflow-hidden shadow-md",
    },
    {
      id: "circle",
      src: "/images/3.avif",
      alt: "Elegant Pool Area",
      width: 400,
      height: 400,
      className: "w-[80px] h-[100px] rounded-[80px] overflow-hidden shadow-md",
    },
    {
      id: "small",
      src: "/images/4.avif",
      alt: "Premium Living Space",
      width: 300,
      height: 300,
      className: "w-[100px] h-[100px] rounded-[40px] overflow-hidden shadow-md",
    },
  ];

  return (
    <>
      <div className="relative">
        {/* Wrapper with content and gradient overlay */}
        <Wrapper className="relative py-16 md:py-24 bg-transparent">
          {/* Gradient background inside wrapper */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "white",
            }}
          />

          {/* Gradient at top inside wrapper */}
          <div
            className="absolute top-0 left-0 right-0 h-48 md:h-72 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, #FFF9EE 0%, #FFF9EE 60%, transparent 100%)",
              zIndex: 0,
            }}
          />

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
            {/* LEFT SIDE */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col justify-center"
            >
              <motion.p
                variants={fadeIn}
                className="text-lg font-mediumx` uppercase  tracking-[0.2em] mb-4 mt-6 text-black"
              >
                Our Projects
              </motion.p>

              <motion.div variants={fadeIn} className="my-3">
                <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-[#3A3A3A] font-medium">
                  Our select
                </h2>
                <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-[#D4AF66] mt-1 font-medium">
                  Masterpieces
                </h2>
              </motion.div>

              <motion.p
                variants={fadeIn}
                className="mt-8 text-gray-600 font-sans leading-relaxed max-w-md text-base"
              >
                Explore our portfolio of premium developments, each crafted with
                precision, innovative architecture, and uncompromising attention
                to detail.
              </motion.p>

              {/* CUSTOM GALLERY LAYOUT */}
              <motion.div
                variants={fadeIn}
                className="w-full flex flex-col md:flex-row items-center mt-12 gap-8"
              >
                {/* LEFT BIG IMAGE */}
                <motion.div
                  className={galleryItems[0].className}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onHoverStart={() => setHoverImage(0)}
                  onHoverEnd={() => setHoverImage(null)}
                >
                  <Image
                    src={galleryItems[0].src}
                    alt={galleryItems[0].alt}
                    width={galleryItems[0].width}
                    height={galleryItems[0].height}
                    className="w-full h-full object-cover transition-transform duration-700"
                    style={{
                      transform: hoverImage === 0 ? "scale(1.1)" : "scale(1)",
                      filter:
                        hoverImage === 0 ? "brightness(1.1)" : "brightness(1)",
                    }}
                  />
                </motion.div>

                {/* RIGHT SIDE IMAGES */}
                <div className="flex flex-col gap-6">
                  {/* TOP RIGHT LONG IMAGE */}
                  <motion.div
                    className={galleryItems[1].className}
                    whileHover={{ y: -5, scale: 1.02 }}
                    onHoverStart={() => setHoverImage(1)}
                    onHoverEnd={() => setHoverImage(null)}
                  >
                    <Image
                      src={galleryItems[1].src}
                      alt={galleryItems[1].alt}
                      width={galleryItems[1].width}
                      height={galleryItems[1].height}
                      className="w-full h-full object-cover transition-transform duration-700"
                      style={{
                        transform: hoverImage === 1 ? "scale(1.1)" : "scale(1)",
                        filter:
                          hoverImage === 1
                            ? "brightness(1.1)"
                            : "brightness(1)",
                      }}
                    />
                  </motion.div>

                  {/* BOTTOM ROW 2 IMAGES */}
                  <div className="flex items-center gap-6">
                    {/* CIRCLE IMAGE */}
                    <motion.div
                      className={galleryItems[2].className}
                      whileHover={{ y: -5, scale: 1.05 }}
                      onHoverStart={() => setHoverImage(2)}
                      onHoverEnd={() => setHoverImage(null)}
                    >
                      <Image
                        src={galleryItems[2].src}
                        alt={galleryItems[2].alt}
                        width={galleryItems[2].width}
                        height={galleryItems[2].height}
                        className="w-full h-full object-cover transition-transform duration-700"
                        style={{
                          transform:
                            hoverImage === 2 ? "scale(1.1)" : "scale(1)",
                          filter:
                            hoverImage === 2
                              ? "brightness(1.1)"
                              : "brightness(1)",
                        }}
                      />
                    </motion.div>

                    {/* SMALL RECTANGLE */}
                    <motion.div
                      className={galleryItems[3].className}
                      whileHover={{ y: -5, scale: 1.05 }}
                      onHoverStart={() => setHoverImage(3)}
                      onHoverEnd={() => setHoverImage(null)}
                    >
                      <Image
                        src={galleryItems[3].src}
                        alt={galleryItems[3].alt}
                        width={galleryItems[3].width}
                        height={galleryItems[3].height}
                        className="w-full h-full object-cover transition-transform duration-700"
                        style={{
                          transform:
                            hoverImage === 3 ? "scale(1.1)" : "scale(1)",
                          filter:
                            hoverImage === 3
                              ? "brightness(1.1)"
                              : "brightness(1)",
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* BUTTON */}
              <motion.button
                variants={fadeIn}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(212, 175, 102, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsScheduleModalOpen(true)}
                className="mt-12 bg-gradient-to-r from-[#E3C677] to-[#B89640] text-black text-base font-medium px-9 py-4 rounded-full shadow-md self-start"
              >
                Schedule a Visit
              </motion.button>
            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              className="relative lg:pl-8"
            >
              {/* Main Image Container with Border */}
              <motion.div variants={imageReveal} className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-5 -left-5 w-[70%] h-[70%] border-t-2 border-l-2 border-[#D4AF66] rounded-tl-xl z-0"></div>
                <div className="absolute -bottom-5 -right-5 w-[70%] h-[70%] border-b-2 border-r-2 border-[#D4AF66] rounded-br-xl z-0"></div>

                {/* Main Image */}
                <div className="rounded-3xl overflow-hidden shadow-xl relative z-10">
                  <Image
                    src="/images/4.avif"
                    alt="Amor - Premium Luxury Villas"
                    width={800}
                    height={600}
                    priority
                    quality={90}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1500"
                  />
                </div>
              </motion.div>

              {/* Project Details */}
              <motion.div
                variants={fadeIn}
                className="mt-12 z-50 gap-6 flex flex-row justify-between items-center w-full"
              >
                {/* Left side - Project Name */}
                <div className="flex flex-col">
                  <Image
                    src={"/logo/Amor.png"}
                    alt={"Amor"}
                    width={168}
                    height={168}
                    loading="lazy"
                    className="aspect-square shrink-0 rounded-md object-cover"
                  />
                </div>

                {/* Vertical Line */}
                <div className="h-28 w-[2px] bg-gray-400 mx-2"></div>

                {/* Right side - Specifications */}
                <div className="flex font-sans flex-col items-center text-gray-700 tracking-wide text-xs">
                  <p className="font-medium">
                    <span>2BHK</span>
                    <span className="mx-2">•</span>
                    <span>3BHK</span>
                    <span className="mx-2">•</span>
                    <span>4BHK</span>
                  </p>
                  <p className="font-extralight text-lg uppercase font-sans tracking-[0.15em] mt-2">
                    LUXURY VILLAS
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Wrapper>
      </div>

      {/* Schedule Visit Modal */}
      <ScheduleVisitModal
        open={isScheduleModalOpen}
        onClose={() => setIsScheduleModalOpen(false)}
      />
    </>
  );
}
