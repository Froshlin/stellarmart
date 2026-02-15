import { CircleUser, Search } from 'lucide-react';
import { useState } from 'react'

const navLinks = [
  { id: 1, label: "Home", active: true },
  { id: 2, label: "New Products" },
  { id: 3, label: "Featured Products" },
  { id: 4, label: "Blog", dropdown: true },
  { id: 5, label: "Pages", dropdown: true },
  { id: 6, label: "Contact Us" },
];


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between px-6 py-8 border-b border-[#44C538]">

      {/* Logo */}
      <a href="/" >
        <img src="/brand-logo.png" alt="logo" className="" />
      </a>

      {/* Nav Links */}
      <div className="flex items-center gap-10">
        <ul className="flex items-center gap-6 text-[15px] font-medium">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`flex items-center gap-1 cursor-pointer ${
                link.active
                  ? "bg-white border px-2 py-0 text-[15px] font-normal"
                  : "hover:text-black"
              }`}
            >
              {link.label}
              {link.dropdown && (
                <span className="text-xs">
                  <img src="/menu-arrow.png" alt="doown-arrow" />
                </span>
              )}
            </li>
          ))}
        </ul>
         {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search for products"
            className="px-4 pr-10 py-2 rounded-full bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] w-64 h-9 border-none outline-none text-[15px]"
          />
          <Search
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4 cursor-pointer"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6 relative">
        {/* Cart Icon */}
        <div className="relative cursor-pointer text-xl">
          🛒
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
            3
          </span>
        </div>

        {/* User Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className=" flex items-center gap-0.5 text-xl cursor-pointer"
          >
          <CircleUser className='w-7.5 h-7.5'/>
          <img src="/profile-arrow.png" alt="down-angle-arrow" className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}/>
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white shadow-md rounded-md py-2">
              <a
                href="/signup"
                className="block px-4 py-2 hover:bg-[#44C538] hover:text-white text-xs font-medium"
              >
                Sign Up
              </a>
              <a
                href="/signin"
                className="block px-4 py-2 hover:bg-[#44C538] hover:text-white text-xs font-medium"
              >
                Sign In
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
    </>
  )
}

export default Navbar
