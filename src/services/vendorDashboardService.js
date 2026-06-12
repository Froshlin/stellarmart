import { VENDOR_DASHBOARD_FALLBACK } from "../constants/vendorDashboardFallback";

export async function getVendorDashboardData(signal) {
  try {
    const response = await fetch("/api/vendor/dashboard", { signal });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    if (error.name === "AbortError") {
      throw error;
    }
    console.error("Failed to fetch vendor dashboard data:", error);
    return VENDOR_DASHBOARD_FALLBACK;
  }
}
