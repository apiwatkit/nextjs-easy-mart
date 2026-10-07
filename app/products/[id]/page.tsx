import React from "react";

const ProductDetail = () => {
  return (
    <div className="mx-auto max-w-[1280px] overflow-hidden">
      <section className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,740px)_1fr] lg:gap-14 xl:gap-[88px]">
        <div className="relative aspect-[740/545] overflow-hidden rounded-[32px] border border-[#f4f0f0] bg-[#fdfdfd]">
          <img
            src="https://www.figma.com/api/mcp/asset/0b81a8aa-e323-4bab-935a-a395782027db.png"
            alt="Orange"
            className="absolute inset-x-0 top-0 h-[85%] w-full object-contain"
          />
        </div>

        <div className="flex max-w-[416px] flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-[28px] font-semibold leading-10 tracking-[0.3px]">
              Chosen Foods 100% Pure Avocado Oil Spray 4.7 oz
            </h1>
            <div>
              <p className="text-base font-medium text-[#494349]">$2.71/lb</p>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-semibold leading-[1.7]">
                  $99.99
                </span>
                <span className="text-base text-[#807681] line-through">
                  $99.99
                </span>
              </div>
              <p className="text-sm font-medium leading-[1.7] text-[#b6349a]">
                12 Left
              </p>
            </div>
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-[39px] bg-[#b6349a] px-8 py-3 text-lg font-semibold leading-6 text-white transition hover:bg-[#9e2a86] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b6349a] md:py-4"
            >
              <img
                src="https://www.figma.com/api/mcp/asset/ad22e8c8-c877-49f0-a003-e4b578d36ea7.svg"
                alt=""
                className="h-6 w-6"
              />
              Add To Cart
            </button>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-base font-medium text-[#686069]">
              About Product
            </p>
            <div className="flex items-center gap-3 text-base font-medium">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f8f7f8]">
                <img
                  src="https://www.figma.com/api/mcp/asset/31c1a144-0ee9-43dd-a045-4298a691dea0.svg"
                  alt=""
                  className="h-5 w-5"
                />
              </span>
              <span className="flex-1">Best Seller Product</span>
              <a
                href="#"
                className="flex items-center gap-2 text-xs font-semibold text-[#b6349a]"
              >
                View More
                <img
                  src="https://www.figma.com/api/mcp/asset/15b7b45f-72d1-422d-9d05-bbd7637bda6c.svg"
                  alt=""
                  className="h-4 w-4"
                />
              </a>
            </div>
            <div className="flex items-center gap-3 text-base font-medium">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f8f7f8]">
                <img
                  src="https://www.figma.com/api/mcp/asset/37a11ca5-90fc-475b-b7fa-e26132207028.svg"
                  alt=""
                  className="h-[18px] w-[18px]"
                />
              </span>
              <span>100% satisfaction guarantee</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 flex flex-col gap-8">
        <div className="flex flex-col gap-8 rounded-[32px] border border-[#f8f7f8] bg-[#fcfcfc] p-4 md:p-6 lg:flex-row lg:gap-16">
          <div className="flex flex-col gap-6 lg:w-[384px] lg:shrink-0">
            <div>
              <h2 className="text-[22px] font-semibold leading-[1.7]">
                Customer Reviews
              </h2>
              <p className="text-sm font-medium text-[#494349]">
                Average rating: 4.5 (5391)
              </p>
            </div>
            <ul className="flex flex-col gap-[9px]">
              <li className="flex items-center gap-4 text-sm">
                <span className="flex w-[34px] shrink-0 items-center gap-2 font-medium">
                  5{" "}
                  <svg className="h-4 w-4 text-[#686069]">
                    <use href="#star-line" />
                  </svg>
                </span>
                <span className="h-2 flex-1 overflow-hidden rounded-xl bg-[#f8f7f8]">
                  <span className="block h-2 w-[90%] rounded-full bg-[#b6349a]"></span>
                </span>
                <span className="w-[52px]">• 4.28K</span>
              </li>
              <li className="flex items-center gap-4 text-sm">
                <span className="flex w-[34px] shrink-0 items-center gap-2 font-medium">
                  4{" "}
                  <svg className="h-4 w-4 text-[#686069]">
                    <use href="#star-line" />
                  </svg>
                </span>
                <span className="h-2 flex-1 overflow-hidden rounded-xl bg-[#f8f7f8]">
                  <span className="block h-2 w-[77%] rounded-full bg-[#b6349a]"></span>
                </span>
                <span className="w-[52px]">• 4.28K</span>
              </li>
              <li className="flex items-center gap-4 text-sm">
                <span className="flex w-[34px] shrink-0 items-center gap-2 font-medium">
                  3{" "}
                  <svg className="h-4 w-4 text-[#686069]">
                    <use href="#star-line" />
                  </svg>
                </span>
                <span className="h-2 flex-1 overflow-hidden rounded-xl bg-[#f8f7f8]">
                  <span className="block h-2 w-[38%] rounded-full bg-[#b6349a]"></span>
                </span>
                <span className="w-[52px]">• 4.28K</span>
              </li>
              <li className="flex items-center gap-4 text-sm">
                <span className="flex w-[34px] shrink-0 items-center gap-2 font-medium">
                  2{" "}
                  <svg className="h-4 w-4 text-[#686069]">
                    <use href="#star-line" />
                  </svg>
                </span>
                <span className="h-2 flex-1 overflow-hidden rounded-xl bg-[#f8f7f8]">
                  <span className="block h-2 w-[42%] rounded-full bg-[#b6349a]"></span>
                </span>
                <span className="w-[52px]">• 4.28K</span>
              </li>
              <li className="flex items-center gap-4 text-sm">
                <span className="flex w-[34px] shrink-0 items-center gap-2 font-medium">
                  1{" "}
                  <svg className="h-4 w-4 text-[#686069]">
                    <use href="#star-line" />
                  </svg>
                </span>
                <span className="h-2 flex-1 overflow-hidden rounded-xl bg-[#f8f7f8]">
                  <span className="block h-2 w-[18%] rounded-full bg-[#b6349a]"></span>
                </span>
                <span className="w-[52px]">• 4.28K</span>
              </li>
            </ul>
          </div>

          <div className="relative flex-1">
            <button
              type="button"
              className="absolute right-0 top-0 flex items-center gap-1 text-sm font-semibold text-[#b6349a]"
            >
              Recent
              <img
                src="https://www.figma.com/api/mcp/asset/c1a2e637-befd-4daf-b3e9-c5fa135f558e.svg"
                alt=""
                className="h-[14px] w-[14px]"
              />
            </button>
            <h2 className="mb-6 text-[22px] font-semibold leading-[1.7]">
              Reviews
            </h2>

            <div className="flex flex-col gap-4">
              <article className="flex flex-col gap-1">
                <h3 className="text-sm font-medium leading-[1.7]">
                  Perfect Combination!!
                </h3>
                <div className="flex gap-1">
                  <svg className="h-4 w-4 text-orange-500">
                    <use href="#star-fill" />
                  </svg>
                  <svg className="h-4 w-4 text-orange-500">
                    <use href="#star-fill" />
                  </svg>
                  <svg className="h-4 w-4 text-orange-500">
                    <use href="#star-fill" />
                  </svg>
                  <svg className="h-4 w-4 text-orange-500">
                    <use href="#star-fill" />
                  </svg>
                  <svg className="h-4 w-4 text-[#686069]">
                    <use href="#star-line" />
                  </svg>
                </div>
                <p className="text-[13px] leading-[1.7] text-[#494349]">
                  This review was collected as part of a promotion.] I forgot to
                  post my photos from my review! So here is my review again. A
                  perfect combination of softness, strength, and proper friction
                  to make any user leaving clean and spotless!! I have been
                  purchasing for years and Angel Soft isn't too thick where you
                  think you are using a towel and it's not too thin leaving you
                  with unexpected tears during use!! Some say I have an addition
                  to Angel Soft, I say it's dedication for a great product!! See
                  the attached photos from my last purchase!
                </p>
              </article>

              <article className="flex flex-col gap-1">
                <h3 className="text-sm font-medium leading-[1.7]">
                  Perfect Combination!!
                </h3>
                <div className="flex gap-1">
                  <svg className="h-4 w-4 text-orange-500">
                    <use href="#star-fill" />
                  </svg>
                  <svg className="h-4 w-4 text-orange-500">
                    <use href="#star-fill" />
                  </svg>
                  <svg className="h-4 w-4 text-orange-500">
                    <use href="#star-fill" />
                  </svg>
                  <svg className="h-4 w-4 text-orange-500">
                    <use href="#star-fill" />
                  </svg>
                  <svg className="h-4 w-4 text-[#686069]">
                    <use href="#star-line" />
                  </svg>
                </div>
                <p className="text-[13px] leading-[1.7] text-[#494349]">
                  This review was collected as part of a promotion.] I forgot to
                  post my photos from my review! So here is my review again. A
                  perfect combination of softness, strength, and proper friction
                  to make any user leaving clean and spotless!! I have been
                  purchasing for years and Angel Soft isn't too thick where you
                  think you are using a towel and it's not too thin leaving you
                  with unexpected tears during use!! Some say I have an addition
                  to Angel Soft, I say it's dedication for a great product!! See
                  the attached photos from my last purchase!
                </p>
              </article>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <details open className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold leading-[1.7] [&::-webkit-details-marker]:hidden">
              Details
              <svg className="h-6 w-6 transition-transform group-open:rotate-180">
                <use href="#chevron-down" />
              </svg>
            </summary>
            <p className="mt-4 text-sm leading-[1.7] text-[#494349]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. U
            </p>
          </details>
          <hr className="border-[#ece9ec]" />
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold leading-[1.7] [&::-webkit-details-marker]:hidden">
              Conservation and storage
              <svg className="h-6 w-6 transition-transform group-open:rotate-180">
                <use href="#chevron-down" />
              </svg>
            </summary>
            <p className="mt-4 text-sm leading-[1.7] text-[#494349]">
              Store in a cool, dry place away from direct sunlight.
            </p>
          </details>
          <hr className="border-[#ece9ec]" />
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold leading-[1.7] [&::-webkit-details-marker]:hidden">
              Ingredients
              <svg className="h-6 w-6 transition-transform group-open:rotate-180">
                <use href="#chevron-down" />
              </svg>
            </summary>
            <p className="mt-4 text-sm leading-[1.7] text-[#494349]">
              100% pure avocado oil.
            </p>
          </details>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="mb-4 text-2xl font-semibold leading-[1.7]">
          Recommendations
        </h2>
        <div className="-mx-4 flex gap-6 overflow-x-auto px-4 pb-2 lg:mx-0 lg:px-0">
          <article className="flex w-[240px] shrink-0 flex-col gap-4">
            <div className="flex h-[240px] w-[240px] items-center justify-center overflow-hidden rounded-[32px] bg-white">
              <img
                src="https://www.figma.com/api/mcp/asset/8e7fd992-9aee-4f0d-b5ad-a47b23181394.png"
                alt="Apple"
                className="h-[154px] w-[206px] object-contain"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-base font-medium tracking-[0.1px]">Apple</h3>
              <div>
                <p className="text-sm font-medium tracking-[-0.1px]">
                  $2.26 per each
                </p>
                <div className="flex items-center gap-2">
                  <b className="text-xl font-semibold leading-8">$99.99</b>
                  <span className="text-base font-medium text-black/60">
                    $99.99
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm font-medium">
                  <span className="text-[#b6349a]">12 Left</span>
                  <i className="h-[13px] w-px bg-[#686069]/40"></i>
                  <span>12 Left</span>
                </div>
              </div>
            </div>
          </article>

          <article className="flex w-[240px] shrink-0 flex-col gap-4">
            <div className="flex h-[240px] w-[240px] items-center justify-center overflow-hidden rounded-[32px] bg-white">
              <img
                src="https://www.figma.com/api/mcp/asset/c420fe6d-7e16-4ba5-96e6-d0d12e1a5d49.png"
                alt="Fresh Strawberries"
                className="h-[154px] w-[206px] object-contain"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-base font-medium tracking-[0.1px]">
                Fresh Strawberries
              </h3>
              <div>
                <p className="text-sm font-medium tracking-[-0.1px]">
                  $2.71/lb
                </p>
                <div className="flex items-center gap-2">
                  <b className="text-xl font-semibold leading-8">$99.99</b>
                  <span className="text-base font-medium text-black/60">
                    $99.99
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm font-medium">
                  <span className="text-[#b6349a]">12 Left</span>
                  <i className="h-[13px] w-px bg-[#686069]/40"></i>
                  <span>12 Left</span>
                </div>
              </div>
            </div>
          </article>

          <article className="flex w-[240px] shrink-0 flex-col gap-4">
            <div className="flex h-[240px] w-[240px] items-center justify-center overflow-hidden rounded-[32px] bg-white">
              <img
                src="https://www.figma.com/api/mcp/asset/698bfcc0-efe3-477e-885e-e6d27405ad73.png"
                alt="Fresh Strawberries"
                className="h-[154px] w-[206px] object-contain"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-base font-medium tracking-[0.1px]">
                Fresh Strawberries
              </h3>
              <div>
                <p className="text-sm font-medium tracking-[-0.1px]">
                  $2.71/lb
                </p>
                <div className="flex items-center gap-2">
                  <b className="text-xl font-semibold leading-8">$99.99</b>
                  <span className="text-base font-medium text-black/60">
                    $99.99
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm font-medium">
                  <span className="text-[#b6349a]">12 Left</span>
                  <i className="h-[13px] w-px bg-[#686069]/40"></i>
                  <span>12 Left</span>
                </div>
              </div>
            </div>
          </article>

          <article className="flex w-[240px] shrink-0 flex-col gap-4">
            <div className="flex h-[240px] w-[240px] items-center justify-center overflow-hidden rounded-[32px] bg-white">
              <img
                src="https://www.figma.com/api/mcp/asset/05a8dbb8-6e76-4eb2-a271-beafa5982e5d.png"
                alt="Red Seedless Grapes"
                className="h-[154px] w-[206px] object-contain"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-base font-medium tracking-[0.1px]">
                Red Seedless Grapes
              </h3>
              <div>
                <p className="text-sm font-medium tracking-[-0.1px]">
                  $2.83 / lb
                </p>
                <div className="flex items-center gap-2">
                  <b className="text-xl font-semibold leading-8">$99.99</b>
                  <span className="text-base font-medium text-black/60">
                    $99.99
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm font-medium">
                  <span className="text-[#b6349a]">12 Left</span>
                  <i className="h-[13px] w-px bg-[#686069]/40"></i>
                  <span>12 Left</span>
                </div>
              </div>
            </div>
          </article>

          <article className="flex w-[240px] shrink-0 flex-col gap-4">
            <div className="flex h-[240px] w-[240px] items-center justify-center overflow-hidden rounded-[32px] bg-white">
              <img
                src="https://www.figma.com/api/mcp/asset/5fdeb920-0179-4e82-b99a-47cf8f664e0f.png"
                alt="D'Anjou Pear"
                className="h-[154px] w-[206px] object-contain"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-base font-medium tracking-[0.1px]">
                D'Anjou Pear
              </h3>
              <div>
                <p className="text-sm font-medium tracking-[-0.1px]">
                  $2.26 / lb
                </p>
                <div className="flex items-center gap-2">
                  <b className="text-xl font-semibold leading-8">$99.99</b>
                  <span className="text-base font-medium text-black/60">
                    $99.99
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm font-medium">
                  <span className="text-[#b6349a]">12 Left</span>
                  <i className="h-[13px] w-px bg-[#686069]/40"></i>
                  <span>12 Left</span>
                </div>
              </div>
            </div>
          </article>

          <article className="flex w-[240px] shrink-0 flex-col gap-4">
            <div className="relative flex h-[240px] w-[240px] items-center justify-center overflow-hidden rounded-[32px] bg-white">
              <img
                src="https://www.figma.com/api/mcp/asset/dbfb8607-09f1-4f5d-bad2-ff1457afc223.png"
                alt="Product"
                className="h-[154px] w-[206px] object-contain"
              />
              <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#b6349a] text-white">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="m5 12 5 5 9-10" />
                </svg>
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-base font-medium tracking-[0.1px]">
                This is product a
              </h3>
              <div>
                <p className="text-sm font-medium tracking-[-0.1px]">
                  $2.71/lb
                </p>
                <div className="flex items-center gap-2">
                  <b className="text-xl font-semibold leading-8">$99.99</b>
                  <span className="text-base font-medium text-black/60">
                    $99.99
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm font-medium">
                  <span className="text-[#b6349a]">12 Left</span>
                  <i className="h-[13px] w-px bg-[#686069]/40"></i>
                  <span>12 Left</span>
                </div>
              </div>
            </div>
          </article>

          <article className="flex w-[240px] shrink-0 flex-col gap-4">
            <div className="flex h-[240px] w-[240px] items-center justify-center overflow-hidden rounded-[32px] bg-white">
              <img
                src="https://www.figma.com/api/mcp/asset/0b81a8aa-e323-4bab-935a-a395782027db.png"
                alt="Product"
                className="h-[154px] w-[206px] object-contain"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-base font-medium tracking-[0.1px]">
                This is product a
              </h3>
              <div>
                <p className="text-sm font-medium tracking-[-0.1px]">
                  $2.71/lb
                </p>
                <div className="flex items-center gap-2">
                  <b className="text-xl font-semibold leading-8">$99.99</b>
                  <span className="text-base font-medium text-black/60">
                    $99.99
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm font-medium">
                  <span className="text-[#b6349a]">12 Left</span>
                  <i className="h-[13px] w-px bg-[#686069]/40"></i>
                  <span>12 Left</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
