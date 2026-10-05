"use client";

const CATS = [
  ["Bread", "🍞"],
  ["Cheese", "🧀"],
  ["Alcohol", "🍷"],
  ["Yogurt", "🥛"],
  ["Fruits", "🍎"],
  ["Watermelon", "🍉"],
  ["Snacks", "🍿"],
  ["Cake", "🍰"],
  ["Candy", "🍬"],
  ["Vegetables", "🥕"],
  ["Fruits", "🍓"],
  ["Cans", "🥫"],
  ["Fruits", "🍊"],
];

const CategoryList = () => {
  return (
    <div className="mx-auto max-w-[1280px] overflow-hidden">
      <nav className="mt-[26px]" aria-label="Categories">
        <ul id="categories" className="no-scrollbar flex gap-3 p-3">
          {CATS.map(([name, emoji], i) => (
            <li
              key={`${name}-${i}`}
              className={`${i === CATS.length - 1 ? "opacity-70" : ""} shrink-0`}
            >
              <a
                href="#"
                className="flex h-10 items-center gap-1 rounded-[32px] bg-ink-50 py-2 pl-2 pr-4"
              >
                <span className="flex size-[26px] items-center justify-center rounded-full bg-ink-100 text-[14px] leading-none">
                  {emoji}
                </span>
                <span className="text-[14px] font-medium leading-5 tracking-[-0.1px]">
                  {name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default CategoryList;
