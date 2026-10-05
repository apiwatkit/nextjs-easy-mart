"use client";

import Image from "next/image";

const IMG_A = "/images/banner-a.png";
const IMG_B = "/images/banner-b.png";

const Ph = ({ className = "" }: { className?: string }) => (
  <div className={`shrink-0 bg-[#f8f8f8] ${className}`} />
);

type ImgCardProps = {
  src: string;
  className?: string;
  overlay?: string;
  sizes?: string;
};

const ImgCard = ({ src, className = "", overlay, sizes }: ImgCardProps) => (
  <div className={`relative shrink-0 overflow-hidden ${className}`}>
    <Image alt="" src={src} fill sizes={sizes} className="object-cover" />
    {overlay && <div className={`absolute inset-0 ${overlay}`} />}
  </div>
);

export default function Banners() {
  return (
    <div className="mx-auto max-w-[1280px] overflow-hidden">
      <section className="mt-8" aria-label="Banners">
        {/* Desktop */}
        <div className="hidden flex-col gap-4 overflow-hidden rounded-3xl xl:flex">
          <div className="flex shrink-0 gap-4">
            <Ph className="h-[248px] w-[422px] rounded-[32px]" />
            <Ph className="h-[248px] w-[568px] rounded-[32px]" />
            <Ph className="h-[248px] w-[422px] rounded-[32px]" />
            <ImgCard
              src={IMG_A}
              sizes="308px"
              className="h-[248px] w-[308px] rounded-[32px]"
              overlay="bg-white/[0.12]"
            />
          </div>

          <div className="flex w-[1437px] shrink-0 gap-4">
            <Ph className="h-[248px] w-[276px] rounded-[32px]" />
            <Ph className="h-[248px] w-[853px] rounded-[32px]" />
            <Ph className="h-[248px] w-[276px] rounded-[32px]" />
            <ImgCard
              src={IMG_B}
              sizes="276px"
              className="h-[248px] w-[276px] rounded-[32px]"
              overlay="bg-gradient-to-b from-white/0 to-white/[0.32]"
            />
            <div className="h-[248px] w-[276px] shrink-0 rounded-[32px] bg-[#d9d9d9]/[0.24]" />
          </div>
        </div>

        {/* Mobile / Tablet */}
        <div className="grid grid-cols-2 gap-3 xl:hidden">
          <Ph className="h-36 rounded-3xl md:h-48" />
          <Ph className="h-36 rounded-3xl md:h-48" />
          <ImgCard
            src={IMG_A}
            sizes="(max-width: 1280px) 50vw, 308px"
            className="h-36 rounded-3xl md:h-48"
          />
          <ImgCard
            src={IMG_B}
            sizes="(max-width: 1280px) 50vw, 276px"
            className="h-36 rounded-3xl md:h-48"
          />
        </div>
      </section>
    </div>
  );
}
