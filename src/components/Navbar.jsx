import { CircleUser, Search } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { id: 1, label: "Home", active: true },
  { id: 2, label: "New Products" },
  { id: 3, label: "Featured Products" },
  { id: 4, label: "Blog", dropdown: true },
  { id: 5, label: "Pages", dropdown: true },
  { id: 6, label: "Contact Us" },
];

function Navbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#44C538] bg-white px-4 py-4 sm:px-6 md:px-8">
        <div className="mx-auto flex w-full max-w-360 items-center justify-between">
          <a href="/" className="shrink-0">
            <img
              src="/brand-logo.png"
              alt="logo"
              className="h-auto w-37.5 object-contain sm:w-42.5"
            />
          </a>

          <div className="hidden flex-1 items-center justify-center px-6 lg:flex">
            <div className="flex items-center gap-6 xl:gap-8">
              <ul className="flex items-center gap-4 text-[15px] font-medium xl:gap-5">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`flex cursor-pointer items-center gap-1 whitespace-nowrap ${
                      link.active
                        ? "rounded border border-[#44C538]/40 bg-white px-2 py-1 font-normal"
                        : "hover:text-black"
                    }`}
                  >
                    {link.label}
                    {link.dropdown && (
                      <span className="text-xs">
                        <img src="/menu-arrow.png" alt="down-arrow" />
                      </span>
                    )}
                  </li>
                ))}
              </ul>

              <div className="relative hidden lg:block">
                <input
                  type="text"
                  placeholder="Search for products"
                  className="h-10 w-52.5 rounded-full bg-white px-4 pr-10 text-[14px] shadow-[0_4px_4px_rgba(0,0,0,0.15)] outline-none xl:w-57.5"
                />
                <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-5 lg:flex">
            <div className="relative cursor-pointer">
              <img src="/navbar-cart.png" alt="cart" className="h-7 w-7 object-contain" />
              <span className="absolute -right-2 -top-2 rounded-full bg-red-500 px-1 text-xs text-white">
                3
              </span>
            </div>

            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex cursor-pointer items-center gap-1"
              >
                <CircleUser className="h-7 w-7" />
                <img
                  src="/profile-arrow.png"
                  alt="down-angle-arrow"
                  className={`transition-transform ${isProfileOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-32 rounded-md bg-white py-2 shadow-md">
                  <a
                    href="/signup"
                    className="block px-4 py-2 text-xs font-medium hover:bg-[#44C538] hover:text-white"
                  >
                    Sign Up
                  </a>
                  <a
                    href="/signin"
                    className="block px-4 py-2 text-xs font-medium hover:bg-[#44C538] hover:text-white"
                  >
                    Sign In
                  </a>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`absolute h-0.5 w-6 bg-[#034932] transition-transform duration-300 ${
                isMenuOpen ? "rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 bg-[#034932] transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 bg-[#034932] transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>
      </header>

      <div className="h-18.5 sm:h-19.5 md:h-20.5" />

      <div
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed right-0 top-0 z-40 h-full w-[82%] max-w-85 bg-white px-6 pb-8 pt-24 shadow-xl transition-transform duration-300 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-5 text-base font-medium text-[#034932]">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="flex items-center justify-between border-b border-gray-200 pb-3"
            >
              <a href="/" onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </a>
              {link.dropdown && (
                <img src="/menu-arrow.png" alt="down-arrow" className="h-4 w-4 object-contain" />
              )}
            </li>
          ))}
        </ul>

        <div className="mt-8 border-t border-gray-200 pt-6">
          <div className="mb-5 flex items-center gap-2 text-[#034932]">
            <img src="/navbar-cart.png" alt="cart" className="h-6 w-6 object-contain" />
            <span>Cart (3)</span>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href="/signup"
              className="rounded-full bg-[#44C538] px-4 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </a>
            <a
              href="/signin"
              className="rounded-full border border-[#034932] px-4 py-3 text-center text-sm font-semibold text-[#034932]"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
