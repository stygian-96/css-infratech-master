import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimationContainer from "./global/animation-container";
import Wrapper from "./global/wrapper";
import { Button } from "./ui/button";
import { FlickeringGrid } from "./ui/flickering-grid";
import SectionBadge from "./ui/section-badge";

const HIGHLIGHTS = [
  {
    icon: "/icons/shield.svg",
    label: "Secure Platform",
  },
  {
    icon: "/icons/clock.svg",
    label: "Real-time Updates",
  },
  {
    icon: "/icons/magicpen.svg",
    label: "Smart Features",
  },
];

const CTA = () => {
  return (
    <div>
      <div className="flex rounded-b-[70px] z-10 flex-col bg-white items-center text-center relative gap-4 py-20 lg:py-32 overflow-hidden ">
        <AnimationContainer
          animation="scaleUp"
          delay={0.2}
          className="w-full mx-auto"
        >
          <div className="absolute -top-1/2 inset-x-0 mx-auto bg-foreground/50 rounded-full size-1/2 blur-[4rem] lg:blur-[10rem]"></div>
        </AnimationContainer>

        <AnimationContainer animation="scaleUp" delay={0.3}>
          <div className="absolute top-0 w-4/5 mx-auto inset-x-0 h-px bg-gradient-to-r from-foreground/0 via-foreground/50 to-foreground/0"></div>
        </AnimationContainer>

        <AnimationContainer animation="scaleUp" delay={0.2}>
          <FlickeringGrid
            className="absolute inset-0 -z-10 h-full w-[120%]"
            squareSize={4}
            gridGap={6}
            color="#525252"
            maxOpacity={0.2}
            flickerChance={0.1}
            height={800}
          />
        </AnimationContainer>

        <div className="flex flex-col items-center justify-center w-full z-30">
          <AnimationContainer animation="fadeUp" delay={0.3}>
            <SectionBadge title="Start now" />
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.55}>
            <div className="mt-10 mb-8 max-w-xl">
              <blockquote className="relative">
                <div className="absolute -top-6 left-0 text-5xl text-primary opacity-30">
                  "
                </div>
                <p className="italic text-lg md:text-xl lg:text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-primary to-neutral-700">
                  A house is made of bricks and beams. A home is made of hopes
                  and dreams.
                  <span className="block text-xl mt-1 font-medium">
                    We Build Your Home
                  </span>
                </p>
                <div className="absolute -bottom-6 right-0 text-5xl text-primary opacity-30">
                  "
                </div>
              </blockquote>
              <div className="flex justify-center mt-4">
                <div className="h-px w-16 bg-gradient-to-r from-primary/20 via-primary to-primary/20"></div>
              </div>
              <p className="text-lg font-medium mt-3 text-neutral-600">
                CEO, CCS Infratech
              </p>
            </div>
          </AnimationContainer>
        </div>
      </div>
    </div>
  );
};

export default CTA;
