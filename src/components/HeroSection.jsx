function HeroSection() {
  return (
    <section className="px-4 pt-8 sm:px-6 md:px-8 md:pt-12">
      <div className="mx-auto flex w-full max-w-360 flex-col">
        <div className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-[#DBEAFE] px-4 py-2 sm:px-5 sm:py-3">
          <img src="/lightning.png" alt="lightning" className="h-5 w-5 object-contain" />
          <h3 className="text-sm font-bold text-[#034932] sm:text-base md:text-[20px]">
            Launch Your Store in 5 Minutes
          </h3>
        </div>

        <div className="mt-8 flex flex-col gap-10 lg:mt-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-1 flex-col items-start justify-center gap-5 md:gap-6">
            <h1 className="text-[36px] font-bold leading-tight sm:text-[46px] md:text-[56px] lg:text-[71px] lg:leading-20.5">
              Turn Your Business Into an
              <span className="text-[#3B82F6]"> Online Marketplace</span>
            </h1>

            <p className="mt-1 text-base font-normal leading-7 text-[#1f2937] sm:text-lg sm:leading-8 md:mt-2 md:text-xl lg:text-2xl lg:leading-10.25">
              Stellarmart provides everything you need to create, manage, and grow your own e-commerce store. No coding required.
            </p>

            <div className="mt-2 flex w-full flex-col gap-3 sm:mt-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
              <button className="h-14 w-full rounded-[14px] bg-[#44C538] px-6 text-sm font-semibold text-white sm:h-16.5 sm:w-55 sm:rounded-[18px]">
                START FREE TRIAL
              </button>
              <button className="flex h-14 w-full items-center justify-center gap-2 rounded-[14px] border border-[#034932] bg-transparent px-6 text-base font-semibold text-[#034932] sm:h-16.5 sm:w-47.5 sm:rounded-[18px] sm:text-lg">
                <img src="/play.png" alt="play" className="h-5 w-5 object-contain" />
                Watch Demo
              </button>
            </div>

            <div className="mt-1 flex items-center gap-3 sm:gap-4">
              <img src="/colour mix.PNG" alt="coloured-circle" className="h-10 w-auto sm:h-12" />
              <div className="flex flex-col">
                <h3 className="text-base font-bold sm:text-lg md:text-xl">
                  <span className="text-[#3B82F6]">2,500+</span> stores launched
                </h3>
                <p className="text-sm font-normal text-black/70 sm:text-base">
                  Join successful businesses on Stellarmart
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-1 justify-center lg:justify-end">
            <img
              src="/hero-img.PNG"
              alt="hero"
              className="h-auto w-full max-w-130 sm:max-w-155 lg:max-w-185"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
