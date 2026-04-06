import { useState } from "react";
import {
  BadgeCheck,
  Lock,
  ShieldCheck,
  SquareArrowOutUpRight,
  X,
} from "lucide-react";

const checkoutData = {
  verification: {
    phoneMask: "+910000000000",
    helperText:
      "We need your phone number so we can inform you about any delay or problem.",
  },
  order: {
    title: "Product Title Here",
    image: "/images/Rectangle.png",
    salePrice: 10,
    oldPrice: 18,
    subtotal: 3,
    deliveryCharge: 1,
    savings: 3,
    total: 45,
  },
};

function Checkout() {
  // TODO: Replace with verification and cart data from backend checkout endpoint.
  const [code, setCode] = useState(["", "", "", ""]);

  function handleCodeChange(index, value) {
    const sanitizedValue = value.replace(/\D/g, "").slice(0, 1);
    const nextCode = [...code];
    nextCode[index] = sanitizedValue;
    setCode(nextCode);
  }

  return (
    <main className="bg-white py-8">
      <div className="flex justify-center gap-10">
        <section className="w-182 rounded-[42px] bg-[#F4F9F3] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
          <div className="border-b border-[#D2D6D3] px-4 pt-12 pb-6 sm:px-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
                1
              </span>
              <h2 className="text-[30px] font-normal text-[#162C4A]">
                Phone Number Verification
              </h2>
            </div>

            <p className="mb-8 text-[16px] text-black/60">
              {checkoutData.verification.helperText}
            </p>

            <div className="mb-13 flex flex-wrap items-center gap-2 text-[16px] text-black/55">
              <span>4 digits code send your phone</span>
              <span className="text-[#44C538]">
                {checkoutData.verification.phoneMask}
              </span>
              <button
                type="button"
                className="ml-2 rounded bg-black px-4 py-2 text-[19px] font-semibold text-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] cursor-pointer"
              >
                Edit
              </button>
            </div>

            <div className="mb-4">
              <div className="mb-3">
                <span className="text-[17px] text-black/65 tracking-[8%]">Enter Code:</span>
              </div>
              <div className="flex items-center gap-3">
                {code.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    inputMode="numeric"
                    value={digit}
                    onChange={(event) =>
                      handleCodeChange(index, event.target.value)
                    }
                    className="h-12.5 w-11.25 rounded-[5px] border border-black/50 bg-white text-center text-base outline-none"
                  />
                ))}
                <button
                  type="button"
                  className="w-24.75 h-12.75 rounded-[5px] bg-black text-[23px] font-semibold text-white shadow-[0_4px_4px_rgba(0,0,0,0.5)] cursor-pointer"
                >
                  Next
                </button>
              </div>
              <button type="button" className="text-sm text-black/55 mt-3">
                Resend Code
              </button>
            </div>
          </div>

          {[
            { id: 2, title: "Delivery Address" },
            { id: 3, title: "Delivery Time & Date" },
            { id: 4, title: "Payment" },
          ].map((step) => (
            <div
              key={step.id}
              className="border-b border-[#D2D6D3] px-4 py-8 last:border-b-0 sm:px-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
                  {step.id}
                </span>
                <h3 className="text-[34px] font-medium text-[#1C3355] sm:text-[36px]">
                  {step.title}
                </h3>
              </div>
            </div>
          ))}
        </section>

        <aside className="space-y-5">
          <section className="overflow-hidden rounded-[24px] border border-[#D2D6D3] bg-[#EDF0EC] shadow-[0_2px_3px_rgba(0,0,0,0.15)]">
            <header className="border-b border-[#D2D6D3] px-5 py-5 text-center text-[38px] font-semibold text-[#1C3355]">
              Order Summary
            </header>

            <div className="border-b border-[#D2D6D3] px-5 py-6">
              <div className="flex items-start gap-4">
                <img
                  src={checkoutData.order.image}
                  alt={checkoutData.order.title}
                  className="h-21 w-21 rounded-xl border border-[#ADB4AD] object-cover"
                />
                <div className="flex-1">
                  <h4 className="mb-2 text-[30px] text-[#1A1A1A]">
                    {checkoutData.order.title}
                  </h4>
                  <div className="flex items-center gap-3">
                    <span className="text-[36px] font-semibold text-red-600">
                      ${checkoutData.order.salePrice}
                    </span>
                    <span className="text-[30px] text-black/45 line-through">
                      ${checkoutData.order.oldPrice}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="Remove item"
                  className="text-black/55"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="border-b border-[#D2D6D3] px-5 py-5 text-[31px] text-black/58">
              <div className="mb-3 flex items-center justify-between">
                <span>Bryto Super Market</span>
                <span>${checkoutData.order.subtotal.toFixed(1)}</span>
              </div>
              <div className="mb-3 flex items-center justify-between">
                <span>Delivery Charges</span>
                <span>${checkoutData.order.deliveryCharge.toFixed(1)}</span>
              </div>
              <div className="mb-4 flex items-center justify-between">
                <span>Total Saving</span>
                <span>${checkoutData.order.savings.toFixed(1)}</span>
              </div>
              <div className="flex items-center justify-between border-t border-[#D2D6D3] pt-3 text-[33px] font-semibold text-[#111111]">
                <span>Total</span>
                <span className="text-red-600">
                  ${checkoutData.order.total}
                </span>
              </div>
            </div>

            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 px-5 py-5 text-[31px] font-medium text-[#111111]"
            >
              <Lock className="h-5 w-5" />
              <span>Secure checkout</span>
            </button>
          </section>

          <section className="rounded-[24px] border border-[#D2D6D3] bg-[#EDF0EC] px-5 py-8 text-center text-[35px] text-[#111111] shadow-[0_2px_3px_rgba(0,0,0,0.15)]">
            Have a promocode?
          </section>

          <section className="overflow-hidden rounded-[24px] border border-[#D2D6D3] bg-[#EDF0EC] shadow-[0_2px_3px_rgba(0,0,0,0.15)]">
            <div className="flex items-center gap-3 border-b border-[#D2D6D3] px-5 py-8 text-[31px] text-black/65">
              <SquareArrowOutUpRight className="h-5 w-5 text-black" />
              <span>100% Replacement Guarantee</span>
            </div>
            <div className="flex items-center gap-3 border-b border-[#D2D6D3] px-5 py-8 text-[31px] text-black/65">
              <ShieldCheck className="h-5 w-5 text-black" />
              <span>100% Genuine Products</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-8 text-[31px] text-black/65">
              <BadgeCheck className="h-5 w-5 text-black" />
              <span>Secure Payments</span>
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
}

export default Checkout;
