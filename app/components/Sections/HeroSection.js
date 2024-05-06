import Image from "next/image";
import React from "react";
import { Button } from "../common";

function HeroSection() {
  return (
    <div className="overflow-hidden lg:px-[120px] px-[40px]">
      <div className="container grid grid-cols-1 lg:grid-cols-2">
        <div className="lg:py-[140px] py-[60px] lg:order-first order-last md:mt-0 mt-[40px] z-[2]">
          <h1 className="text-[#091133] leading-[66px] font-medium text-[50px] md:block hidden">
            Introduce Your Product <br /> Quickly & Effectively
          </h1>
          <h2 className="text-[#091133] leading-[40px] text-[36px] font-medium md:hidden block ">
            Introduce Your Product Quickly & Effectively
          </h2>
          <div className="mt-[20px] mb-[30px]">
            <p className="text-[#505F98] text-[18px] leading-[30px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <p className="text-[#505F98] text-[18px] mt-4 leading-[30px]">
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
          </div>
          <div class="flex flex-wrap justify-center items-center gap-4 mt-[24px] md:mt-[64px] md:justify-start">
            <Button variant="btn-dark" classes="w-[100%] md:w-[189px]">
              Purchase UI Kit
            </Button>
            <Button variant="btn-outlined" classes="w-[100%] md:w-[189px]">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="w-[1000px] h-[800px] absolute top-0 right-0 lg:block hidden">
        <Image src="/heroSectionBg.png" alt="Hero Image" width={1000} height={800} style={{
          height: "-webkit-fill-available"
        }}/>
      </div>
    </div>
  );
}

export default HeroSection;
