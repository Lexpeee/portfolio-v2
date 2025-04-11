"use client";
import LandingCategory from "@/components/Cards/LandingCategory";
import {
  AtSign,
  ChevronRight,
  Github,
  Instagram,
  Moon,
  Sun,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const [isProceeded, setIsProceeded] = useState(false);
  const [displayCartoonPhoto, setDisplayCartoonPhoto] = useState(false);
  const [displayProfileTip, setDisplayProfileTip] = useState(true);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prevState) => !prevState);
    document.body.classList.toggle("dark-mode");
  }, [isDarkMode])
  
  useEffect(() => {
    if (typeof window !== undefined) { 
      setIsDarkMode(window && window?.matchMedia('(prefers-color-scheme: dark)').matches)
    }
  }, [typeof window])

  return (
    <div className="h-full flex flex-col m-auto justify-center items-center gap-8">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="relative">
          {displayProfileTip && (
            <div
              onClick={() => setDisplayProfileTip(false)}
              className="absolute -top-4 -right-16 bg-gray-500 rounded-full p-1 px-2 whitespace-nowrap animate-pulse"
            >
              <span className="text-sm">Click me to change</span>
            </div>
          )}
          <img
            src={`images/${
              displayCartoonPhoto ? "notion-face-alex.png" : "profile.jpg"
            }`}
            className="w-48 h-48 md:w-32 md:h-32 rounded-full ring-4 ring-red-500 object-cover duration-500"
            onClick={() => setDisplayCartoonPhoto((prevState) => !prevState)}
          />
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <p className="text-lg select-none font-extralight">Hi! I am</p>
            <p className="text-3xl md:text-5xl select-none font-bold">
              John Alexis Pineda
            </p>
            <div className="flex flex-row justify-between">
              <p className="text-xl select-none">@lexpeee</p>
              <div className="flex flex-row gap-2">
                <Github />
                <Instagram />
                <AtSign />
                {isDarkMode ? (
                  <Moon onClick={toggleDarkMode} />
                ) : (
                  <Sun onClick={toggleDarkMode} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {isProceeded ? (
        <>
          {/* CONTENT */}
          <div className="flex flex-col md:flex-row items-center gap-2">
            <LandingCategory
              text={"Software Developer"}
              imageSrc={"/images/ai-person-software.jpeg"}
            />
            <LandingCategory
              text={"Graphic Designer"}
              imageSrc={"/images/ai-person-drawing.jpeg"}
            />
            <LandingCategory
              text={"Video Editor"}
              imageSrc={"/images/ai-person-cat.jpeg"}
            />
            <LandingCategory
              text={"Photographer"}
              imageSrc={"/images/ai-person-camera.jpeg"}
            />
            <LandingCategory
              text={"Dropshipping"}
              imageSrc={"/images/ai-person-dropshipping.jpeg"}
            />
          </div>

          {/* FOOTER */}
          <div className="flex flex-row items-center gap-4">
            <span>About me</span>
            <span>Experiences</span>
          </div>
        </>
      ) : (
        <>
          <span
            className="flex flex-row items-center gap-2 border-2 border-red-500 px-4 py-2 rounded-full"
            onClick={() => setIsProceeded(true)}
          >
            Proceed <ChevronRight />
          </span>
        </>
      )}
    </div>
  );
}
