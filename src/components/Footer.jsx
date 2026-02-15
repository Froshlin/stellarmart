

function Footer() {
  return (
    <>
      <footer className="bg-[#44C538] text-white pt-14 pb-6 mt-10 ">
      {/* Top Section */}
      <div className="px-10 py-8 mx-12 border-y border-[#D9D9D9]">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr]">

          {/* Column 1 */}
          <div>
            <img src="/footer-logo.png" alt="logo" className="mb-6" />

            <p className="text-2xl font-normal leading-10 mb-10">
              Helping businesses create online storefronts quickly and reach a wider audience for increased sales.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              <img src="/circle-1.png" alt="instagram" className="w-8 h-8 cursor-pointer" />
              <img src="/circle-2.png" alt="twitter" className="w-8 h-8 cursor-pointer" />
              <img src="/circle-3.png" alt="facebook" className="w-8 h-8 cursor-pointer" />
              <img src="/circle-4.png" alt="linkedin" className="w-8 h-8 cursor-pointer" />
              <img src="/circle-5.png" alt="pinterest" className="w-8 h-8 cursor-pointer" />
              <img src="/circle-6.png" alt="pinterest" className="w-8 h-8 cursor-pointer" />
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col ml-10">
            <h3 className="font-bold mb-5 text-[22px]">Useful Links</h3>
            <ul className="flex flex-col space-y-7 text-[16px]">
              <a href="/" className="hover:underline cursor-pointer">FAQ</a>
              <a href="/" className="hover:underline cursor-pointer">Offers</a>
              <a href="/" className="hover:underline cursor-pointer">Blog</a>
              <a href="/" className="hover:underline cursor-pointer">About Us</a>
              <a href="/" className="hover:underline cursor-pointer">Contact us</a>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col">
            <h3 className="font-bold mb-5 text-[22px]">For Customers</h3>
            <ul className="flex flex-col space-y-7 text-[16px]">
              <a href="/" className="hover:underline cursor-pointer">Browse Stores</a>
              <a href="/" className="hover:underline cursor-pointer">Track Order</a>
              <a href="/" className="hover:underline cursor-pointer">Help Center</a>
              <a href="/" className="hover:underline cursor-pointer">Returns & Refunds</a>
              <a href="/" className="flex items-center gap-2">
                <img src="phone.png" alt="phone" />
                +2347067577855
              </a>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col space-y-5">
            <h3 className="font-bold mb-5 text-[22px]">Payment Method</h3>

            <img
              src="/payment.png"
              alt="payment-methods"
              className="mb-6"
            />

            <h3 className="font-semibold mb-4 text-lg">News Letter</h3>

            <div className="flex items-center bg-black rounded relative w-[256px] h-13.75">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-black text-white pl-3 pr-14 py-2 w-full outline-none text-sm"
              />
              <button className="bg-transparent text-black px-3 py-2 absolute right-0 top-1/2 -translate-y-1/2">
                <img src="newsletter.png" alt="newsletter-icon" />
              </button>
            </div>

            <a href="/" className="flex items-center gap-2 mt-4 text-sm hover:underline">
              <img src="mail.png" alt="mail" />
              info@stellarmart.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="px-12 py-5 flex justify-between items-center text-sm opacity-50">
        <p>© 2025 Stellarmart Marketplace. All rights reserved.</p>

        <div className="flex gap-6">
          <a href="/" className="hover:underline cursor-pointer">Privacy Policy</a>
          <a href="/" className="hover:underline cursor-pointer">Terms Of Service</a>
          <a href="/" className="hover:underline cursor-pointer">Cookie Policy</a>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
