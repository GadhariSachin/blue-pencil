import React from "react";
import CardIcon from "../svgs/CardIcon";

function Card({title = "", content = ""}) {
  return (
    <div className="md:w-fit w-full flex flex-col items-center md:items-start justify-center">
      <CardIcon />
      <h4 className="md:my-[20px] my-[10px] text-headingBg text-[16px] font-medium">{title}</h4>
      <p className="text-[#5D6970] text-[12px] text-center md:text-start">
        {content}
      </p>
    </div>
  );
}

export default Card;
