"use client";

const SearchIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#b6349a"
    strokeWidth="1.8"
    strokeLinecap="round"
  >
    <circle cx="11" cy="11" r="7.5" />
    <path d="m20.5 20.5-4-4" />
  </svg>
);

const CartIcon = ({ size = 16, color = "#b6349a" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 4h2l2.4 11.2a1 1 0 0 0 1 .8h8.8a1 1 0 0 0 1-.8L20 8H6" />
    <circle cx="9" cy="20" r="1.2" />
    <circle cx="17" cy="20" r="1.2" />
  </svg>
);

const Header = () => {
  return (
    <div className="mx-auto max-w-[1280px] overflow-hidden">
      <header className="flex h-[84px] items-center justify-between gap-4 border-b border-ink-50 bg-white">
        {/* ซ้าย */}
        <div className="flex shrink-0 items-center gap-5">
          <a href="#" className="flex items-center gap-2" aria-label="EasyMart">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="#b6349a" />
              <path
                d="M9 11h14M9 16h10M12 21h11"
                stroke="#fff"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-xl font-bold tracking-tight text-primary-600">
              EasyMart
            </span>
          </a>
          <div className="hidden items-center gap-2 lg:flex">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0d0c0d"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            <span className="text-[14px] font-medium leading-5 tracking-[-0.1px] text-ink-800">
              10115 New York
            </span>
          </div>
        </div>

        {/* กลาง */}
        <div className="hidden min-w-0 flex-1 justify-center xl:flex">
          <div className="flex w-full max-w-[458px] items-center gap-2 rounded-[32px] border border-ink-50 bg-white p-4 shadow-search">
            <span className="flex rounded-full bg-primary-50 p-1.5">
              <SearchIcon />
            </span>
            <input
              className="min-w-0 flex-1 bg-transparent font-inter text-[14px] leading-[1.7] text-ink-800 outline-none placeholder:text-ink-800"
              placeholder="Search by"
            />
          </div>
        </div>

        {/* ขวา */}
        <div className="flex shrink-0 items-center gap-5">
          <button className="flex items-center gap-2 rounded-[39px] border border-primary-50 bg-primary-50 py-1.5 pl-1.5 pr-3">
            <span className="flex h-7 w-10 items-center justify-center gap-[2px] rounded-[32px] bg-white p-1.5">
              <CartIcon />
              <span className="font-inter text-[12px] font-semibold leading-[1.35] tracking-[-0.2px] text-primary-600">
                14
              </span>
            </span>
            <span className="font-inter text-[14px] font-medium leading-[1.35] tracking-[-0.2px]">
              Cart
            </span>
          </button>
          <button className="flex items-center justify-center gap-2 rounded-[39px] border border-primary-600 px-8 py-3 text-[14px] font-semibold leading-[18px] text-[#111]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0d0c0d"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <circle cx="9" cy="8" r="3.5" />
              <path d="M2.5 20c0-3.6 3-6 6.5-6s6.5 2.4 6.5 6" />
              <path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14.4c2 .7 3.5 2.6 3.5 5.6" />
            </svg>
            Login
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
