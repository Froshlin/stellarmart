import { mapOverviewResponse } from "../mappers/overviewMapper"
import { OVERVIEW_FALLBACK } from "../constants/overviewFallback"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export async function getOverviewData(signal) {
  if (!API_BASE_URL) {
    return OVERVIEW_FALLBACK
  }

  const response = await fetch(`${API_BASE_URL}/profile/overview`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    signal,
  })

  if (!response.ok) {
    throw new Error("Failed to load overview data")
  }

  const payload = await response.json()
  return mapOverviewResponse(payload)
}

