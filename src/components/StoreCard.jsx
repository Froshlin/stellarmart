import React from 'react'

const cardData = [
  {
    id: 1,
    image: "/images/cart icon.PNG",
    title: "Sign Up",
    description: "Create your Stellarmart account with email or social login."
  },
  {
    id: 2,
    image: "/images/icon2.PNG",
    title: "Customize Store",
    description: "Choose template, colors, and upload your logo."
  },
  {
    id: 3,
    image: "/images/icon3.PNG",
    title: "Add Products",
    description: "Upload product catalog with images, prices, and inventory."
  },
  {
    id: 4,
    image: "/icon4.PNG",
    title: "Go Live",
    description: "Publish your store and start accepting orders immediately"
  }
]

function StoreCard() {
  return (
    <section className="px-4 py-10 sm:px-6 md:px-8 md:py-14">
      <div className="mx-auto w-full max-w-360">
        <div className="mx-auto max-w-245 text-center">
          <h1 className="text-[34px] font-bold leading-tight sm:text-[44px] md:text-[56px] lg:text-[71px] lg:leading-21.5">
            Create Your Store in 4 Simple Steps
          </h1>
          <p className="mt-4 text-sm font-normal text-[#034932] sm:text-base md:text-lg">
            Get your own branded e-commerce store ready to accept orders in less than 10 minutes.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-8">
          {cardData.map((card) => (
            <article
              key={card.id}
              className="min-h-70 rounded-[17px] bg-[#F1F5F9] p-6 text-center shadow-[0px_4px_4px_rgba(0,0,0,0.25)] sm:min-h-75"
            >
              <img
                src={card.image}
                alt={card.title}
                className="mx-auto mb-5 h-14 w-14 object-contain sm:mb-6 sm:h-16 sm:w-16"
              />
              <h3 className="mb-3 text-xl font-semibold leading-tight sm:text-2xl">
                {card.title}
              </h3>
              <p className="text-sm font-normal leading-6 text-[#6b7280]">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StoreCard;
