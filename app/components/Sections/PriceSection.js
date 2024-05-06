import React from "react";
import { Button } from "../common";

function PriceSection() {
  return (
    <div className="relative overflow-hidden lg:px-[120px] px-[40px] pt-[60px] md:pt-[180px] pricing-background">
      <div className="container flex items-center justify-center mx-auto w-full py-[60px] md:py-[100px]">
        <div className="text-center max-w-[600px]">
          <h2 className="text-headingBg leading-[48px] text-[36px] font-medium">
            A Price To Suit Everyone
          </h2>
          <p className="text-[#6F7CB2] leading-[26px] mt-[10px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus{" "}
          </p>
          <div className="pt-[20px] pb-[40px]">
            <h1 className="text-priceTextBg text-[50px]">$40</h1>
            <p className="text-logoBg pt-[5px]">UI Design Kit</p>
          </div>
          <div>
            <p className="text-[#5D6970] text-[14px]">See, One price. Simple.</p>
            <Button  variant="btn-dark" classes="mt-[15px] w-[189px]">
              Purchase UI Kit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceSection;
