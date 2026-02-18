
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
    <article className="relative w-full max-w-90 rounded-[29px] border border-[#034932] bg-white">
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#44C538] px-6 py-2 text-[12px] font-medium text-white sm:text-[13px]">
          Most Popular
        </div>
      )}

      <div className="rounded-tl-[29px] rounded-tr-[29px] bg-[rgba(143,141,141,0.1)] px-4 py-6 text-center">
        <h3 className="pt-4 text-xl font-semibold sm:pt-5 sm:text-2xl">{title}</h3>
      </div>

      <div className="px-6 py-6 text-center">
        <h2 className="mb-2 text-[40px] font-semibold sm:mb-3 sm:text-5xl">
          ${price}
          <span className="text-sm font-normal text-black/60 sm:text-base">/months</span>
        </h2>

        <p className="mb-5 text-sm text-black/60">
          Perfect for testing your store idea
        </p>

        <ul className="space-y-3 text-sm text-left">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              {feature.included ? (
                <img src="/check.png" alt="check" className="h-5 w-5 object-contain" />
              ) : (
                <img src="/circle-x.png" alt="x" className="h-5 w-5 object-contain" />
              )}
              {feature.text}
            </li>
          ))}
        </ul>

        <button className="mt-8 h-12 w-full rounded-full bg-[#44C538] text-[13px] font-bold text-white transition hover:opacity-90 sm:h-13.25">
          GET STARTED FOR FREE
        </button>
      </div>
    </article>
  );
}
