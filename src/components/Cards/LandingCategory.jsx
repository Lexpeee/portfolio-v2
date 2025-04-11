"use client";
import { useRef, useState } from "react";

const LandingCategory = ({ imageSrc, text }) => {
  const ref = useRef();

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseOver={() => {
        ref.current.style.transform = "translateY(-16px)";
        setIsHovered(true);
      }}
      onMouseOut={() => {
        ref.current.style.transform = "translateY(0px)";
        setIsHovered(false);
      }}
      className={
        "h-24 md:h-104 w-70 md:w-24 overflow-hidden duration-500 relative select-none cursor-pointer"
      }
    >
      <img
        src={imageSrc}
        alt="Mountains"
        className={`h-full w-full absolute grayscale ${
          isHovered ? "grayscale-0 opacity-50" : "opacity-100 "
        } duration-500 select-none object-cover`}
      />
      {text && (
        <div className="w-full h-full flex items-center justify-center relative whitespace-nowrap">
          <span
            className={`text-xl rotate-0 md:rotate-270 z-10 bottom-0 right-0 uppercase font-bold duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
          >
            {text}
          </span>
        </div>
      )}
    </div>
  );
};

export default LandingCategory;
