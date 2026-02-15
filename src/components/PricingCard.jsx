import { Check, CircleX, } from "lucide-react";

const features = [
  { text: "Up to 50 products", included: true },
  { text: "Basic store customization", included: true },
  { text: "2.9% + $0.30 per transaction", included: true },
  { text: "Up to 100 products", included: false },
  { text: "Advanced store customization", included: false },
  { text: "Lower transaction fees", included: false },
];

export default function PricingCard({ title, price, popular }) {
  return (
    <div className="relative w-72 rounded-[29px] border border-[#034932] bg-white">
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#44C538] text-white text-[13px] font-medium px-6.5 py-2.5 rounded-full">
          Most Popular
        </div>
      )}

      <div className="bg-[rgba(143,141,141,0.1)] rounded-tr-[29px] rounded-tl-[29px] text-center py-6">
        <h3 className="text-2xl font-semibold pt-5">{title}</h3>
      </div>

      <div className="px-6 py-6 text-center">
        <h2 className="text-5xl font-semibold mb-3">
          ${price}
          <span className="text-[16px] font-normal text-black opacity-46">/months</span>
        </h2>

        <p className="text-sm text-black opacity-46 mb-5">
          Perfect for testing your store idea
        </p>

        <ul className="space-y-3 text-sm text-left">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              {feature.included ? (
                <img src="/check.png" alt="check"/>
              ) : (
                <img src="/circle-x.png" alt="x" />
              )}
              {feature.text}
            </li>
          ))}
        </ul>

        <button className="mt-8 w-58 h-13.25 bg-[#44C538] text-white rounded-full text-[13px] font-bold hover:opacity-90 transition cursor-pointer">
          GET STARTED FOR FREE
        </button>
      </div>
    </div>
  );
}
