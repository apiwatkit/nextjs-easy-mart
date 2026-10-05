// components/Footer.tsx
import Link from "next/link";

type FooterLink = { label: string; href: string };
type FooterColumn = { title: string; links: FooterLink[]; className?: string };

const columns: FooterColumn[] = [
  {
    title: "About",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Branches", href: "/branches" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "FAQs", href: "/faqs" },
      { label: "Recipes", href: "/recipes" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Help & Support",
    links: [
      { label: "Terms of Privacy", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Security", href: "/security" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Social",
    className: "lg:ml-[52px]",
    links: [
      { label: "Facebook", href: "https://facebook.com" },
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Twitter", href: "https://twitter.com" },
    ],
  },
];

const isExternal = (href: string) => /^https?:\/\//.test(href);

export default function Footer() {
  return (
    <footer className="mt-20 bg-white px-4 pb-12 pt-20 md:px-10 xl:px-20">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10 lg:flex-row lg:gap-[140px]">
        <Link href="/" aria-label="EmaStudio home" className="shrink-0">
          <svg
            width="50"
            height="50"
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden="true"
          >
            <rect width="32" height="32" rx="8" fill="#b6349a" />
            <path
              d="M9 11h14M9 16h10M12 21h11"
              stroke="#fff"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          </svg>
        </Link>

        <div className="grid flex-1 grid-cols-2 gap-10 sm:grid-cols-3 lg:flex lg:gap-[52px]">
          {columns.map(({ title, links, className = "" }) => (
            <div
              key={title}
              className={`flex flex-col gap-4 lg:w-[134px] ${className}`}
            >
              <h3 className="text-[14px] font-semibold leading-6 text-footerHead">
                {title}
              </h3>
              <ul className="flex list-none flex-col gap-3 text-[14px] leading-5 tracking-[-0.1px] text-muted">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="transition-colors hover:text-footerHead"
                      {...(isExternal(href) && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-8 text-center text-[14px] leading-5 tracking-[-0.1px] text-muted">
        All rights reserved.© {new Date().getFullYear()} EmaStudio
      </p>
    </footer>
  );
}
