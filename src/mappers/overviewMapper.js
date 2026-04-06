import { OVERVIEW_FALLBACK } from "../constants/overviewFallback"

function asText(value, fallback) {
  return typeof value === "string" && value.trim() ? value : fallback
}

function asNumber(value, fallback) {
  return Number.isFinite(Number(value)) ? Number(value) : fallback
}

export function mapOverviewResponse(payload) {
  const data = payload?.data ?? payload ?? {}

  return {
    greetingName: asText(data.greetingName ?? data.greeting_name, OVERVIEW_FALLBACK.greetingName),
    rewards: {
      title: asText(data.rewards?.title, OVERVIEW_FALLBACK.rewards.title),
      count: asNumber(data.rewards?.count ?? data.rewards_count, OVERVIEW_FALLBACK.rewards.count),
      badges: Array.isArray(data.rewards?.badges) && data.rewards.badges.length
        ? data.rewards.badges
        : OVERVIEW_FALLBACK.rewards.badges,
      detailLabel: asText(data.rewards?.detailLabel ?? data.rewards?.detail_label, OVERVIEW_FALLBACK.rewards.detailLabel),
    },
    orders: {
      title: asText(data.orders?.title, OVERVIEW_FALLBACK.orders.title),
      recentPurchases: asNumber(
        data.orders?.recentPurchases ?? data.orders?.recent_purchases,
        OVERVIEW_FALLBACK.orders.recentPurchases,
      ),
      itemsCount: asNumber(data.orders?.itemsCount ?? data.orders?.items_count, OVERVIEW_FALLBACK.orders.itemsCount),
      status: asText(data.orders?.status, OVERVIEW_FALLBACK.orders.status),
      totalAmount: asText(data.orders?.totalAmount ?? data.orders?.total_amount, OVERVIEW_FALLBACK.orders.totalAmount),
      detailLabel: asText(data.orders?.detailLabel ?? data.orders?.detail_label, OVERVIEW_FALLBACK.orders.detailLabel),
    },
    wallet: {
      title: asText(data.wallet?.title, OVERVIEW_FALLBACK.wallet.title),
      credits: asNumber(data.wallet?.credits, OVERVIEW_FALLBACK.wallet.credits),
      paymentMethodLabel: asText(
        data.wallet?.paymentMethodLabel ?? data.wallet?.payment_method_label,
        OVERVIEW_FALLBACK.wallet.paymentMethodLabel,
      ),
      pointEarningLabel: asText(
        data.wallet?.pointEarningLabel ?? data.wallet?.point_earning_label,
        OVERVIEW_FALLBACK.wallet.pointEarningLabel,
      ),
      activeUsers: asNumber(data.wallet?.activeUsers ?? data.wallet?.active_users, OVERVIEW_FALLBACK.wallet.activeUsers),
      detailLabel: asText(data.wallet?.detailLabel ?? data.wallet?.detail_label, OVERVIEW_FALLBACK.wallet.detailLabel),
    },
  }
}

