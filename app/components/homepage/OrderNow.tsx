type Product = {
  id: number;
  name: string;
  pricePerLb: string;
  price: string;
  originalPrice: string;
  stockLabel: string;
  stockLabelSecondary: string;
  image: string;
  imageAlt: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "This is product a",
    pricePerLb: "$2.71/lb",
    price: "$99.99",
    originalPrice: "$99.99",
    stockLabel: "12 Left",
    stockLabelSecondary: "12 Left",
    image:
      "https://www.figma.com/api/mcp/asset/f4ae701d-e1c2-4ee9-af97-d896d0032d41.png",
    imageAlt: "This is product a",
  },
  {
    id: 2,
    name: "This is product a",
    pricePerLb: "$2.71/lb",
    price: "$99.99",
    originalPrice: "$99.99",
    stockLabel: "12 Left",
    stockLabelSecondary: "12 Left",
    image:
      "https://www.figma.com/api/mcp/asset/f4ae701d-e1c2-4ee9-af97-d896d0032d41.png",
    imageAlt: "This is product a",
  },
  {
    id: 3,
    name: "This is product a",
    pricePerLb: "$2.71/lb",
    price: "$99.99",
    originalPrice: "$99.99",
    stockLabel: "12 Left",
    stockLabelSecondary: "12 Left",
    image:
      "https://www.figma.com/api/mcp/asset/f4ae701d-e1c2-4ee9-af97-d896d0032d41.png",
    imageAlt: "This is product a",
  },
];

function CheckBadge() {
  return (
    <span className="absolute right-3 top-3 flex size-7 items-center justify-center rounded-full bg-primary-600">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m5 12.5 4.5 4.5L19 7.5" />
      </svg>
    </span>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex w-[211px] shrink-0 flex-col gap-4">
      <div className="relative aspect-square w-full overflow-hidden rounded-[32px] bg-white">
        {/* กรอบรูป: ใช้ style เป็น object แทน string */}
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
            src={product.image}
            alt={product.imageAlt}
            loading="lazy"
            className="absolute max-w-none"
            style={{
              left: "-8.25%",
              top: "-0.01%",
              width: "112.14%",
              height: "100%",
            }}
          />
        </div>
        <CheckBadge />
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
            <span className="text-primary-600">{product.stockLabel}</span>
            <span className="h-[13px] w-px bg-ink-100" />
            <span>{product.stockLabelSecondary}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function OrderNow({ bg = "bg-primary-25" }) {
  return (
    <div className="mx-auto max-w-[1280px] overflow-hidden">
      <section
        className={`mb-[85px] mt-20 max-w-[1280px] rounded-[32px] p-4 md:p-10 ${bg}`}
      >
        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="no-scrollbar flex shrink-0 gap-6 overflow-x-auto lg:w-[721px]">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div>
            <p className="text-[14px] font-semibold leading-5 text-primary-600">
              Get 10% OFF On Your First Order
            </p>
            <h2 className="mt-2 text-[32px] font-semibold leading-[48px]">
              Order Now Your Grocery!
            </h2>
            <div
              className="mt-4 flex max-w-[420px] flex-wrap gap-3"
              data-chips="auto-big"
            >
              <button className="h-[38px] px-3 text-[16px] font-medium rounded-[32px] border border-ink-100 bg-white">
                Beef
              </button>
              <button className="h-[38px] px-3 text-[16px] font-medium rounded-[32px] border border-ink-100 bg-white">
                Rice
              </button>
              <button className="h-[38px] px-3 text-[16px] font-medium rounded-[32px] border border-ink-100 bg-white">
                Fresh bakery
              </button>
              <button className="h-[38px] px-3 text-[16px] font-medium rounded-[32px] border border-ink-100 bg-white">
                Fresh bakery
              </button>
              <button className="h-[38px] px-3 text-[16px] font-medium rounded-[32px] border border-ink-100 bg-white">
                Fresh bakery
              </button>
              <button className="h-[38px] px-3 text-[16px] font-medium rounded-[32px] border border-ink-100 bg-white">
                Fresh bakery
              </button>
              <button className="h-[38px] px-3 text-[16px] font-medium rounded-[32px] border border-ink-100 bg-white">
                Fresh bakery
              </button>
              <button className="h-[38px] px-3 text-[16px] font-medium rounded-[32px] border border-ink-100 bg-white">
                Fresh bakery
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
