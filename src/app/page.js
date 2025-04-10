"use client"
import LandingCategory from "@/components/Cards/LandingCategory";
import { AtSign, Github, Instagram } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [displayCartoonPhoto, setDisplayCartoonPhoto ]= useState(false)
  
  return (
    <div className="h-full flex flex-col m-auto items-center justify-center gap-8">
      {/* HEADER */}
      <div className="flex flex-row gap-8" onClick={() => setDisplayCartoonPhoto(prevState => !prevState)}>
        <img src={`images/${displayCartoonPhoto ? "notion-face-alex.png" : "profile.jpg"}`} className="w-32 h-32 rounded-full ring-4 ring-red-500 object-cover duration-500" />
        <div className="flex flex-row">
          <div className="flex flex-col">
            <p className="text-lg select-none font-extralight">Hi! I am</p>
            <p className="text-3xl md:text-5xl select-none font-bold">John Alexis Pineda</p>
            <div className="flex flex-row justify-between">
              <p className="text-xl select-none">@lexpeee</p>
              <div className="flex flex-row gap-2">
                  <Github />
                  <Instagram />
                  <AtSign />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col md:flex-row items-center gap-2">
        <LandingCategory text={"Software Developer"} imageSrc={"/images/ai-person-software.jpeg"} />
        <LandingCategory text={"Graphic Designer"} imageSrc={"/images/ai-person-drawing.jpeg"} />
        <LandingCategory text={"Video Editor"} imageSrc={"/images/ai-person-cat.jpeg"} />
        <LandingCategory text={"Photographer"} imageSrc={"/images/ai-person-camera.jpeg"} />
        <LandingCategory text={"Dropshipping"} imageSrc={"/images/ai-person-dropshipping.jpeg"} />
      </div>

      {/* FOOTER */}
      <div className="flex flex-row items-center gap-4">
        <span>About me</span>
        <span>Resume</span>
      </div>
    </div>
  );
}
