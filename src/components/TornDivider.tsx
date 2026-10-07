import React from "react";
import Image from "next/image";

type DividerType =
  | "olive-to-cream"
  | "cream-to-olive"
  | "olive-to-cream-2"
  | "cream-to-olive-2"
  | "olive-to-cream-3"
  | "cream-to-dark"
  | "dark-to-cream";

interface TornDividerProps {
  type: DividerType;
  className?: string;
}

const dividerMap: Record<DividerType, string> = {
  "olive-to-cream": "/images/tear_olive_to_cream.png",
  "cream-to-olive": "/images/tear_cream_to_olive.png",
  "olive-to-cream-2": "/images/tear_olive_to_cream_2.png",
  "cream-to-olive-2": "/images/tear_cream_to_olive_2.png",
  "olive-to-cream-3": "/images/tear_olive_to_cream_3.png",
  "cream-to-dark": "/images/tear_cream_to_dark.png",
  "dark-to-cream": "/images/tear_dark_to_cream.png",
};

export default function TornDivider({ type, className = "" }: TornDividerProps) {
  const src = dividerMap[type];

  return (
    <div
      className={`relative w-full overflow-hidden leading-none select-none z-10 -my-1 ${className}`}
      aria-hidden="true"
    >
      <img
        src={src}
        alt=""
        className="w-full h-auto min-h-[40px] max-h-[110px] object-fill sm:object-cover pointer-events-none drop-shadow-sm"
      />
    </div>
  );
}
