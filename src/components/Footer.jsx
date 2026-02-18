function Footer() {
  return (
    <footer className="mt-10 bg-[#44C538] pt-12 text-white md:pt-14">
      <div className="mx-auto w-full max-w-360 border-y border-[#D9D9D9]/70 px-4 py-8 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.2fr] lg:gap-8">
          <div>
            <img
              src="/footer-logo.png"
              alt="logo"
              className="mb-5 h-auto w-42.5 object-contain sm:w-47.5"
            />

            <p className="mb-8 max-w-130 text-base font-normal leading-7 sm:text-lg sm:leading-8 md:text-xl md:leading-9">
              Helping businesses create online storefronts quickly and reach a wider audience for increased sales.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <img src="/IG.PNG" alt="instagram" className="cursor-pointer" />
              <img src="/X.PNG" alt="twitter" className="cursor-pointer" />
              <img src="/FB.PNG" alt="facebook" className="cursor-pointer" />
              <img src="/LINKED.PNG" alt="linkedin" className="cursor-pointer" />
              <img src="/google.PNG" alt="google" className="cursor-pointer" />
              <img src="/pinterest.PNG" alt="pinterest" className="cursor-pointer" />
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="mb-4 text-xl font-bold sm:text-[22px]">Useful Links</h3>
            <ul className="flex flex-col space-y-4 text-[15px] sm:space-y-5 sm:text-base">
              <li><a href="/" className="cursor-pointer hover:underline">FAQ</a></li>
              <li><a href="/" className="cursor-pointer hover:underline">Offers</a></li>
              <li><a href="/" className="cursor-pointer hover:underline">Blog</a></li>
              <li><a href="/" className="cursor-pointer hover:underline">About Us</a></li>
              <li><a href="/" className="cursor-pointer hover:underline">Contact us</a></li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="mb-4 text-xl font-bold sm:text-[22px]">For Customers</h3>
            <ul className="flex flex-col space-y-4 text-[15px] sm:space-y-5 sm:text-base">
              <li><a href="/" className="cursor-pointer hover:underline">Browse Stores</a></li>
              <li><a href="/" className="cursor-pointer hover:underline">Track Order</a></li>
              <li><a href="/" className="cursor-pointer hover:underline">Help Center</a></li>
              <li><a href="/" className="cursor-pointer hover:underline">Returns & Refunds</a></li>
              <li>
                <a href="/" className="flex items-center gap-2 hover:underline">
                  <img src="phone.png" alt="phone" className="h-4 w-4 object-contain" />
                  +2347067577855
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="mb-4 text-xl font-bold sm:text-[22px]">Payment Method</h3>
            <img src="/payment.png" alt="payment-methods" className="mb-6 h-auto w-full max-w-65 object-contain" />

            <h3 className="mb-3 text-lg font-semibold">News Letter</h3>
            <div className="relative flex h-12 w-full max-w-70 items-center rounded bg-black">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-full w-full bg-black pl-3 pr-12 text-sm text-white outline-none placeholder:text-white/70"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 px-3 py-2">
                <img src="newsletter.png" alt="newsletter-icon" className="h-5 w-5 object-contain" />
              </button>
            </div>

            <a href="/" className="mt-4 flex items-center gap-2 text-sm hover:underline">
              <img src="mail.png" alt="mail" className="h-4 w-4 object-contain" />
              info@stellarmart.com
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-360 flex-col items-start justify-between gap-3 px-4 py-5 text-sm text-white/60 sm:px-6 md:flex-row md:items-center md:px-8">
        <p>&copy; 2025 Stellarmart Marketplace. All rights reserved.</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a href="/" className="cursor-pointer hover:underline">Privacy Policy</a>
          <a href="/" className="cursor-pointer hover:underline">Terms Of Service</a>
          <a href="/" className="cursor-pointer hover:underline">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
