import PricingCard from "./PricingCard";

const plans = [
  {
    title: "Starter",
    price: 0,
    popular: true,
  },
  {
    title: "Growth",
    price: 29,
    popular: true,
  },
  {
    title: "Intermidiate",
    price: 55,
    popular: true,
  },
  {
    title: "PRO",
    price: 90,
    popular: true,
  },
];

function Pricing() {
  return (
    <section className="px-4 py-10 sm:px-6 md:px-8 md:py-14">
      <div className="mx-auto w-full max-w-360">
        <div className="text-center">
          <div className="my-8 flex justify-center sm:my-10 md:my-12">
            <img
              src="dashboard.png"
              alt="dashboard"
            />
          </div>
          <h1 className="text-[32px] font-bold text-[#44C538] sm:text-[40px] md:text-[48px]">
            Simple, Transparent Pricing
          </h1>
          <p className="mx-auto mt-3 max-w-170 text-sm font-normal leading-6 text-black/60 sm:text-base sm:leading-7">
            Start free, then grow with your business. No hidden fees.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 justify-items-center gap-6 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
