import { useEffect, useState } from "react";
import { FaGift, FaShoppingBag, FaWallet } from "react-icons/fa";
import { TbArrowsMinimize } from "react-icons/tb";
import { OVERVIEW_FALLBACK } from "../constants/overviewFallback";
import { getOverviewData } from "../services/overviewService";

function Overview() {
  const [overview, setOverview] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function loadOverview() {
      try {
        const data = await getOverviewData(controller.signal);
        setOverview(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error);
          setOverview(OVERVIEW_FALLBACK);
        }
      } finally {
        setIsLoading(false);
      }
    }

    loadOverview();
    return () => controller.abort();
  }, []);

  if (isLoading || !overview) {
    return <div className="text-lg text-[#455148]">Loading overview...</div>;
  }

  return (
    <div className="w-full">
      <div className="mb-5 flex items-center gap-2 text-[31px] font-bold">
        <TbArrowsMinimize className="text-[26px]" />
        <h2>Overview</h2>
      </div>
      <h3 className="mb-5 text-[36px] font-medium text-black/75">
        Hi! {overview.greetingName}
      </h3>

      <div className="flex gap-6">
        <article className="rounded-md border border-[#b8c8b6] bg-[#44C5381F] shadow-sm">
          <header className="flex items-center gap-3 border-b border-[#b8c8b6] px-4 py-3 text-[21px] font-bold">
            <FaGift className="text-[26px]" />
            <span>{overview.rewards.title}</span>
          </header>
          <div className="px-4 pt-4 pb-6.5">
            <p className="mb-4 text-[29px] font-normal text-[#111111]">
              {overview.rewards.count} Rewards
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {overview.rewards.badges.map((badge, index) => (
                <span
                  key={`${badge}-${index}`}
                  className={`px-2 py-1 text-[17px] font-medium ${
                    badge === "+more" ? "text-[#2f3a31]" : "bg-black text-white"
                  }`}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <footer className="border-t border-[#b8c8b6] px-4 py-4 text-[19px] font-medium text-black/72">
            <a href="">{overview.rewards.detailLabel}</a>
          </footer>
        </article>

        <article className="flex-1 rounded-md border border-[#b8c8b6] bg-[#44C5381F] shadow-sm">
          <header className="flex items-center gap-3 border-b border-[#b8c8b6] px-4 py-3 text-[21px] font-bold">
            <FaShoppingBag className="text-[26px]" />
            <span>{overview.orders.title}</span>
          </header>
          <div className="px-4 py-4">
            <p className="mb-8 text-[29px] font-normal ">
              {overview.orders.recentPurchases} Recently Purchases
            </p>
            <div className="flex items-center justify-between text-[19px]">
              <span className="text-[19px] font-medium text-black/82">
                {overview.orders.itemsCount} items
              </span>
              <span className="text-red-600">{overview.orders.status}</span>
              <span>{overview.orders.totalAmount}</span>
            </div>
          </div>
          <footer className="border-t border-[#b8c8b6] px-4 py-4 text-[19px] font-medium text-black/72">
            <a href="">{overview.orders.detailLabel}</a>
          </footer>
        </article>
      </div>

      <article className="mt-6 rounded-md border border-[#b8c8b6] bg-[#44C5381F] shadow-sm">
        <header className="flex items-center gap-3 border-b border-[#b8c8b6] px-4 py-3 text-[21px] font-bold">
          <FaWallet className="text-[26px]" />
          <span>{overview.wallet.title}</span>
        </header>
        <div className="px-4 py-5">
          <p className="mb-5 text-[44px] font-normal text-[#111111]">
            Credits ${overview.wallet.credits}
          </p>
          <div className="flex flex-wrap items-center justify-between gap-4 text-[33px] text-[#3f4c40]">
            <div className="space-y-3 text-[21px]">
              <p className="flex items-center gap-3">
                <FaWallet className="text-[#111111]" />
                <span>{overview.wallet.paymentMethodLabel}</span>
              </p>
              <p className="flex items-center gap-3 text-[21px]">
                <FaShoppingBag className=" text-[#111111]" />
                <span>{overview.wallet.pointEarningLabel}</span>
              </p>
            </div>
            <p className="flex items-center gap-3 text-[21px]">
              <FaGift className=" text-[#111111]" />
              <span>{overview.wallet.activeUsers} Active users</span>
            </p>
          </div>
        </div>
        <footer className="border-t border-[#b8c8b6] px-4 py-4 text-[19px] text-black/72">
          <a href="">{overview.wallet.detailLabel}</a>
        </footer>
      </article>
    </div>
  );
}

export default Overview;
