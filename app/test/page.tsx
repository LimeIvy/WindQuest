import React from "react";
import { GameLogo } from "@/components/game-logo";

const page = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden"
      style={{ backgroundColor: "#251A41" }}
    >
      {/* 装飾的な風の要素 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-24 h-24 bg-primary/5 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <GameLogo />

      <div className="mt-16 max-w-2xl text-center w-[50%] relative z-10">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-lg opacity-75"></div>
        <div className="relative bg-[#251A41]/80 backdrop-blur-sm p-8 rounded-xl  shadow-2xl ">
          <p className="text-2xl leading-relaxed text-primary-foreground/90">
            Wind Questは、
            <span className="font-semibold text-accent">TailwindCSS</span>
            を楽しく勉強するためのWebアプリです。
            <br />
            様々なQuestに挑戦してレベルを上げたり、自分でQuestを作成したり、　　友達の作ったQuestを遊んだり...
            <br />
            <span className="italic text-accent animate-pulse inline-block mt-5">
              TailwindCSSを楽しく学ぼう!!
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
