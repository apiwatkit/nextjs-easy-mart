"use client";

import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

type ApiProduct = {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  stock: number;
  thumbnail: string;
};

type Product = {
  id: number;
  name: string;
  src: string;
  price: string;
  originalPrice: string;
  stock: number;
};

const CARD_WIDTH = 240;
const GAP = 24;

function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <article
        className="flex shrink-0 flex-col gap-4"
        style={{ width: CARD_WIDTH }}
      >
        <div className="relative aspect-square w-full overflow-hidden rounded-[32px] bg-primary-50">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={product.name}
            src={product.src}
            className="absolute inset-0 size-full object-contain p-6"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col gap-4">
          <p className="h-6 truncate text-[16px] font-medium leading-[22px] tracking-[0.1px]">
            {product.name}
          </p>
          <div className="flex flex-col">
            <div className="flex items-center gap-2 tracking-[0.1px]">
              <span className="text-[20px] font-semibold leading-8">
                {product.price}
              </span>
              <span className="text-[16px] font-medium leading-[22px] text-black/60 line-through">
                {product.originalPrice}
              </span>
            </div>
            <span className="font-inter text-[14px] font-medium leading-[1.7] text-primary-600">
              {product.stock} Left
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

const BestSeller = () => {
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

  const { data, isLoading, error } = useQuery<
    { products: Product[]; total: number },
    Error
  >({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("https://dummyjson.com/products?limit=5");
      if (!res.ok) throw new Error("Failed to fetch");
      const json: { products: ApiProduct[]; total: number } = await res.json();

      return {
        total: json.total,
        products: json.products.map((p) => ({
          id: p.id,
          name: p.title,
          src: p.thumbnail,
          price: `$${p.price.toFixed(2)}`,
          originalPrice: `$${(p.price / (1 - p.discountPercentage / 100)).toFixed(2)}`,
          stock: p.stock,
        })),
      };
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const products = data?.products ?? [];
  const total = data?.total ?? 0;

  return (
    <div className="mx-auto max-w-[1280px] overflow-hidden">
      <section className="mt-[73px]">
        <div className="flex items-center gap-6">
          <h2 className="flex-1 text-[20px] font-semibold leading-6 tracking-[0.1px]">
            Best Seller
          </h2>
          <div className="flex items-center gap-6">
            <button
              type="button"
              className="flex items-center justify-center gap-1 rounded-[32px] border border-primary-600 bg-white px-5 py-2.5 font-inter text-[14px] font-semibold leading-[1.7]"
            >
              View All ({total})
              <ArrowRight className="size-5" />
            </button>
            <div className="hidden items-center gap-4 sm:flex">
              <button
                type="button"
                aria-label="Previous"
                disabled={!canPrev}
                onClick={() => scrollByCard(-1)}
                className="rounded-full border border-ink-100 bg-white p-3 disabled:bg-ink-50 disabled:opacity-60"
              >
                <ArrowLeft className="block size-6" />
              </button>
              <button
                type="button"
                aria-label="Next"
                disabled={!canNext}
                onClick={() => scrollByCard(1)}
                className="rounded-full border border-ink-100 bg-white p-3 disabled:bg-ink-50 disabled:opacity-60"
              >
                <ArrowRight className="block size-6" />
              </button>
            </div>
          </div>
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

export default BestSeller;
