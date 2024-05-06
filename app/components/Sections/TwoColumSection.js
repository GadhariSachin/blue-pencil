import Image from "next/image";
import React from "react";
import { Button } from "../common";

function ColumLayout({ data = {} }) {
  return (
    <div className="flex justify-center items-center my-[40px] md:my-[80px]">
      <div class="container grid grid-cols-1 lg:grid-cols-2 items-center">
        <div class="md:py-[100px] py-[60px] order-last md:mt-0 mt-[40px] flex flex-col items-center px-[24px] md:items-start justify-center ">
          <h2 class="text-headingBg leading-[48px] text-[36px] font-medium">
            {data?.heading || ""}
          </h2>
          <div class="mt-[20px] mb-[30px]">
            {data.content?.map((content, index) => (
              <p
                class="text-muted text-[18px] leading-[30px] mt-5"
                key={`content-${index}`}
              >
                {content}
              </p>
            ))}
            <div className="flex justify-center items-center">
              {Object.keys(data.btn || {}).length > 0 && (
                <Button variant={data.btn.variant} classes="btn-dark mt-10">
                  {data.btn.btnText}
                </Button>
              )}
            </div>
          </div>
        </div>
        {data?.imageUrl && (
          <div className="flex justify-center items-center">
            <Image
              src={data?.imageUrl}
              alt={data?.heading}
              width={480}
              height={315}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ColumLayout;
