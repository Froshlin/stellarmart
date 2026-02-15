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
    <>
      <div className="text-center">
        <div className="flex justify-center my-12">
          <img src="dashboard.png" alt="dashboard" />
        </div>
        <h1 className="font-bold text-[40px] text-[#44C538]">
          Simple, Transparent Pricing
        </h1>
        <p className="font-normal text-[16px] leading-12 opacity-46">
          Start free, then grow with your business. No hidden fees.
        </p>
      </div>
      <section className="py-20 flex justify-center gap-8 flex-wrap">
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </section>
    </>
  );
}

export default Pricing;
