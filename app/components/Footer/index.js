import React from "react";

import FacebookIcon from "../svgs/FacebookIcon";
import LinkedInIcon from "../svgs/LinkedInIcon";
import TwitterIcon from "../svgs/TwitterIcon";
import YoutubeIcon from "../svgs/YoutubeIcon";
import InstagramIcon from "../svgs/InstagramIcon";

import { LINKS } from "@/app/utils/constants";
import Link from "next/link";
import { Button, Logo } from "../common";

function Footer(props) {
  return (
    <div className="relative overflow-hidden bg-[#E7ECFF] lg:px-[120px] px-[40px]">
      <div>
        <div className="flex items-center py-[50px] lg:flex-row flex-col justify-between">
          <p className="text-[#939EA4] order-1 lg:order-1">©2023 Yourcompany</p>
          <div className="md:mt-0 mt-[20px] flex-grow-1 order-2 lg:order-2">
            <Logo />
          </div>
          <div className="order-3 lg:order-3 md:mt-0 mt-[20px]">
            <Button variant="btn-dark">Purchase now</Button>
          </div>
        </div>
        <div className="border-bottom mb-[40px]"></div>
      </div>

      <div className="flex flex-wrap justify-between items-center border-t-2 border-disabled py-[40px] gap-[20px]">
        <div className="flex gap-[40px] order-1 lg:order-1">
          {LINKS.map((linkItem, index) => (
            <Link
              href={linkItem.link}
              key={`nav-${index}`}
              className="text-[14px] text-[#929ECC]"
            >
              {linkItem.text}
            </Link>
          ))}
        </div>
        <div className="flex md:gap-[20px] gap-[40px] order-2 lg:order-2 justify-between">
          <FacebookIcon />
          <LinkedInIcon />
          <TwitterIcon />
          <YoutubeIcon />
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
}

export default Footer;
