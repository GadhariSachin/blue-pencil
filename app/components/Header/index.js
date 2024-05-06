"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";

import OutsideClickHandler from "react-outside-click-handler";
import { Button, Logo } from "../common";
import { LINKS } from "@/app/utils/constants";


function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="md:block hidden">
        <div className="flex h-[100px] justify-between items-center mx-[120px]">
          <div className="flex gap-[40px] z-[2]">
            {LINKS.map((linkItem, index) => (
              <Link
                href={linkItem.link}
                key={`nav-${index}`}
                className="text-[14px] text-muted cursor-pointer"
              >
                {linkItem.text}
              </Link>
            ))}
          </div>
          <Logo />
          <div className="z-[2]">
            <Button classes="btn-dark">Buy Now</Button>
          </div>
        </div>
      </div>
      <div className="flex h-[60px] justify-between items-center lg:mx-[120px] mx-[40px] relative md:hidden">
        <Logo />
        <button
          className="hamburger hamburger--collapse-r md:hidden"
          onClick={toggleDropdown}
        >
          {isOpen ? <MenuOpenOutlinedIcon /> : <MenuOutlinedIcon />}
          <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
            {isOpen && (
              <div
                ref={dropdownRef}
                className="dropdown absolute right-0 top-full mt-2 py-2 w-[250px] shadow-md rounded-md bg-white z-50 text-center transition-all border border-top"
              >
                <ul className="mx-[20px] py-[10px]">
                  {LINKS.map((linkItem, index) => (
                    <Link
                      href={linkItem.link}
                      key={`nav-${index}`}
                      className="text-[14px] text-muted cursor-pointer"
                    >
                      <li className="text-muted hover:text-blue-700 border-b py-4">
                        {linkItem.text}
                      </li>
                    </Link>
                  ))}
                </ul>
                <div className="z-[2] py-4">
                  <Button classes="btn-dark">Buy Now</Button>
                </div>
              </div>
            )}
          </OutsideClickHandler>
        </button>
      </div>
    </>
  );
}

export default Header;
