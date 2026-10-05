"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { CSSProperties, useCallback, useEffect, useRef, useState } from "react";

type Product = {
  id: string;
  name: string;
  src: string;
  imgStyle: CSSProperties;
  pricePerLb: string;
  price: string;
  originalPrice: string;
  stock: string;
};

const imgContain: CSSProperties = {
  left: "-8.25%",
  top: "-0.01%",
  width: "112.14%",
  height: "100%",
};

const imgCover: CSSProperties = {
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const base = {
  pricePerLb: "$2.71/lb",
  price: "$99.99",
  originalPrice: "$99.99",
  stock: "12 Left",
};

const CARD_WIDTH = 240;
const GAP = 24;

const products: Product[] = [
  {
    id: "p1",
    name: "This is product a",
    src: "https://www.figma.com/api/mcp/asset/f4ae701d-e1c2-4ee9-af97-d896d0032d41.png",
    imgStyle: imgContain,
    ...base,
  },
  {
    id: "p2",
    name: "This is product a",
    src: "https://www.figma.com/api/mcp/asset/8ce32d5d-a06f-4295-bf20-2b0eb1080120.png",
    imgStyle: imgCover,
    ...base,
  },
  {
    id: "p3",
    name: "This is product a",
    src: "https://www.figma.com/api/mcp/asset/8eff57a5-a414-47fa-a28d-883fbc39fcc5.png",
    imgStyle: imgCover,
    ...base,
  },
  {
    id: "p4",
    name: "This is product a",
    src: "https://www.figma.com/api/mcp/asset/4bf9d928-4cc2-4ece-adc9-3ae37fe70898.png",
    imgStyle: {
      left: "19.87%",
      top: "1.7%",
      width: "65.23%",
      height: "97.87%",
    },
    ...base,
  },
  {
    id: "p5",
    name: "This is product a",
    src: "https://www.figma.com/api/mcp/asset/f4ae701d-e1c2-4ee9-af97-d896d0032d41.png",
    imgStyle: imgContain,
    ...base,
  },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <article
      className="flex shrink-0 flex-col gap-4"
      style={{ width: CARD_WIDTH }}
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-[32px] bg-primary-50">
        <div
          className="absolute h-[64.2%] w-[85.8%] overflow-hidden"
          style={{
            left: "calc(50% - 4.6%)",
            top: "calc(50% + 0.4%)",
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={product.name}
            src={product.src}
            className="absolute max-w-none"
            style={product.imgStyle}
            loading="lazy"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="h-6 text-[16px] font-medium leading-[22px] tracking-[0.1px]">
          {product.name}
        </p>
        <div className="flex flex-col">
          <p className="text-[14px] font-medium leading-5 tracking-[-0.1px]">
            {product.pricePerLb}
          </p>
          <div className="flex items-center gap-2 tracking-[0.1px]">
            <span className="text-[20px] font-semibold leading-8">
              {product.price}
            </span>
            <span className="text-[16px] font-medium leading-[22px] text-black/60">
              {product.originalPrice}
            </span>
          </div>
          <div className="flex items-center gap-3 font-inter text-[14px] font-medium leading-[1.7]">
            <span className="text-primary-600">{product.stock}</span>
            <span className="h-[13px] w-px bg-ink-100" />
            <span>{product.stock}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

function FreshnessBadge() {
  return (
    <div className="absolute right-0 top-0 hidden h-[162px] w-[302px] rounded-bl-[32px] bg-primary-900 p-5 text-white lg:block">
      <div className="flex items-center gap-2 text-[14px] leading-5">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="1.6"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" strokeLinejoin="round" />
        </svg>
        Freshness Guarantee
      </div>
      <p className="mt-3 text-[28px] font-semibold leading-10 tracking-[0.3px]">
        Weekly sold 1k+
      </p>
      <button
        type="button"
        className="mt-2 flex items-center gap-1 rounded-full bg-primary-50 px-3 py-2 text-[12px] font-semibold text-ink"
      >
        View More <ArrowRight className="size-4" />
      </button>
    </div>
  );
}

type ArrowNavProps = {
  canPrev: boolean;
  canNext: boolean;
  onScroll: (dir: 1 | -1) => void;
};

function ArrowViewAll({ canPrev, canNext, onScroll }: ArrowNavProps) {
  return (
    <div className="hidden items-center gap-4 sm:flex">
      <button
        type="button"
        aria-label="Previous"
        disabled={!canPrev}
        onClick={() => onScroll(-1)}
        className="rounded-full border border-ink-100 bg-white p-3 disabled:bg-ink-50 disabled:opacity-60"
      >
        <ArrowLeft className="block size-6" />
      </button>
      <button
        type="button"
        aria-label="Next"
        disabled={!canNext}
        onClick={() => onScroll(1)}
        className="rounded-full border border-ink-100 bg-white p-3 disabled:bg-ink-50 disabled:opacity-60"
      >
        <ArrowRight className="block size-6" />
      </button>
    </div>
  );
}

const TrendingStoreFavorites = ({ showFreshnessGuarantee = false }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateButtons = useCallback(() => {
    const el = rowRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 0);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    updateButtons();
    const el = rowRef.current;
    el?.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);
    return () => {
      el?.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, [updateButtons]);

  const scrollByCard = (dir: 1 | -1) => {
    rowRef.current?.scrollBy({
      left: dir * (CARD_WIDTH + GAP),
      behavior: "smooth",
    });
  };

  return (
    <div className="mx-auto max-w-[1280px] overflow-hidden">
      <section
        className="relative mt-20 max-w-[1280px] rounded-[32px] border border-ink-100 bg-white p-6"
        data-carousel
      >
        <div className="flex h-11 items-center justify-between">
          <h2 className="text-2xl font-semibold leading-8">
            Trending Store Favorites
          </h2>
          <button className="flex h-11 items-center gap-1 rounded-[32px] border border-primary-600 px-5 text-[14px] font-semibold">
            View All <ArrowRight className="block size-6" />
          </button>
        </div>
        <div className="mt-6 flex items-center justify-between gap-6">
          <div
            className="flex max-w-[640px] flex-wrap gap-3"
            data-chips="fixed"
          >
            <button className="h-9 w-[98px] text-[13px] font-medium rounded-[32px] border border-ink-100 bg-white">
              Fresh bakery
            </button>
            <button className="h-9 w-[98px] text-[13px] font-medium rounded-[32px] border border-ink-100 bg-white">
              Fresh bakery
            </button>
            <button className="h-9 w-[98px] text-[13px] font-medium rounded-[32px] border border-primary-600 bg-white">
              Fresh bakery
            </button>
            <button className="h-9 w-[98px] text-[13px] font-medium rounded-[32px] border border-ink-100 bg-white">
              Fresh bakery
            </button>
            <button className="h-9 w-[98px] text-[13px] font-medium rounded-[32px] border border-ink-100 bg-white">
              Fresh bakery
            </button>
            <button className="h-9 w-[98px] text-[13px] font-medium rounded-[32px] border border-ink-100 bg-white">
              Fresh bakery
            </button>
            <button className="h-9 w-[98px] text-[13px] font-medium rounded-[32px] border border-ink-100 bg-white">
              Fresh bakery
            </button>
            <button className="h-9 w-[98px] text-[13px] font-medium rounded-[32px] border border-ink-100 bg-white">
              Fresh bakery
            </button>
            <button className="h-9 w-[98px] text-[13px] font-medium rounded-[32px] border border-ink-100 bg-white">
              Fresh bakery
            </button>
            <button className="h-9 w-[98px] text-[13px] font-medium rounded-[32px] border border-ink-100 bg-white">
              Fresh bakery
            </button>
          </div>

          {showFreshnessGuarantee ? (
            <FreshnessBadge />
          ) : (
            <ArrowViewAll
              canPrev={canPrev}
              canNext={canNext}
              onScroll={scrollByCard}
            />
          )}
        </div>
        <div
          ref={rowRef}
          className="mt-6 flex gap-6 overflow-x-auto [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default TrendingStoreFavorites;
