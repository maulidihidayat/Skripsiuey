import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import { Button } from "./ui/Button";
import { AnimatedShinyText } from "./ui/animated-shiny-text";
import { Badge } from "./ui/badge";

const Mainscroll = () => {
  return (
    <div
      id="home"
      className="flex flex-col inset-0 overflow-hidden relative z-1"
    >
      <ContainerScroll
        titleComponent={
          <>
            <div className="flex items-center justify-center gap-10 md:gap-40">
              <div className="flex-col space-y-8">
                <div className="flex items-center justify-start gap-2">
                  <Badge
                    variant="outline"
                    className="-top-0 py-1 px-3 font-medium hover:animate-bounce cursor-default relative gap-1.5 rounded-full bg-gradient-to-r from-sky-400/30 to-sky-400/20"
                  >
                    <span
                      className="size-1.5 rounded-full bg-emerald-500"
                      aria-hidden="true"
                    ></span>
                    <AnimatedShinyText>Kabinet Zeta</AnimatedShinyText>
                  </Badge>
                </div>
                <h1 className="text-2xl text-left relative md:text-4xl font-semibold text-black dark:text-white items-center">
                  Hmps Pendidikan Informatika
                  <br />
                  <span className="left-3/9 top-2/6 md:top-1/5 rotate-6 absolute bg-primary text-sm md:text-3xl cursor-default hover:rotate-12 transition-transform text-white pb-1 md:pb-2 px-2 md:px-3">
                    Universitas
                  </span>
                  <span className="text-4xl text-left md:text-[6rem] font-bold mt-1 leading-none">
                    Hamzanwadi
                  </span>
                  <span className="text-[35px] text-left block md:text-[22px] font-normal text-black dark:text-white py-4">
                    Yuk cari tau tentang kami!
                  </span>
                </h1>
              </div>
              <Image
                src={`/mainlogo.png`}
                alt="hero"
                height={300}
                width={300}
                className="mx-auto rounded-2xl object-cover max-w-auto h-full object-center"
                draggable={false}
              />
            </div>
          </>
        }
        children={undefined}
      ></ContainerScroll>
    </div>
  );
};

export default Mainscroll;
