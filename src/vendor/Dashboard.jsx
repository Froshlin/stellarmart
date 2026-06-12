import { useState, useEffect } from "react";
import { VENDOR_DASHBOARD_FALLBACK } from "../constants/vendorDashboardFallback";
import { getVendorDashboardData } from "../services/vendorDashboardService";

function Dashboard() {
  const [dashboard, setDashboard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function loadDashboard() {
      try {
        const data = await getVendorDashboardData(controller.signal);
        setDashboard(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error);
          setDashboard(VENDOR_DASHBOARD_FALLBACK);
        }
      } finally {
        setIsLoading(false);
      }
    }

    loadDashboard();
    return () => controller.abort();
  }, []);

  if (isLoading || !dashboard) {
    return <div className="text-lg text-[#455148]">Loading dashboard...</div>;
  }

  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[31px] font-bold text-[#455148]">Dashboard</h2>
          <p className="text-[16px] text-black/60 mt-1">Here's what's happening with your store today</p>
        </div>
        <div className="bg-[#FFC107] text-black px-4 py-2 rounded-md font-medium text-[14px]">
          This Week
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-[#e0e0e0] p-4 shadow-sm">
          <p className="text-[14px] text-black/60 mb-2">Total Sales</p>
          <p className="text-[28px] font-bold text-[#111111]">{dashboard.stats.totalSales}</p>
          <p className="text-[12px] text-black/50 mt-2">{dashboard.stats.salesTodayLabel}</p>
        </div>

        <div className="bg-white rounded-lg border border-[#e0e0e0] p-4 shadow-sm">
          <p className="text-[14px] text-black/60 mb-2">Orders</p>
          <p className="text-[28px] font-bold text-[#111111]">{dashboard.stats.orders}</p>
          <p className="text-[12px] text-black/50 mt-2">{dashboard.stats.ordersThisWeekLabel}</p>
        </div>

        <div className="bg-white rounded-lg border border-[#e0e0e0] p-4 shadow-sm">
          <p className="text-[14px] text-black/60 mb-2">Product Sold</p>
          <p className="text-[28px] font-bold text-[#111111]">{dashboard.stats.productSold}</p>
          <p className="text-[12px] text-black/50 mt-2">{dashboard.stats.productSoldLabel}</p>
        </div>

        <div className="bg-white rounded-lg border border-[#e0e0e0] p-4 shadow-sm">
          <p className="text-[14px] text-black/60 mb-2">Total Customers</p>
          <p className="text-[28px] font-bold text-[#111111]">{dashboard.stats.totalCustomers}</p>
          <p className="text-[12px] text-black/50 mt-2">{dashboard.stats.customersAddedLabel}</p>
        </div>
      </div>

      {/* Sales Overview & Metrics */}
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 bg-white rounded-lg border border-[#e0e0e0] p-6 shadow-sm">
          <h3 className="text-[18px] font-bold mb-6">Sales Overview</h3>
          <div className="h-64 flex items-center justify-center bg-[#f5f5f5] rounded">
            <p className="text-black/40">Chart placeholder</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-lg border border-[#e0e0e0] p-4 shadow-sm">
            <p className="text-[14px] text-black/60 mb-2">Total Revenue</p>
            <p className="text-[24px] font-bold text-[#111111]">{dashboard.metrics.totalRevenue}</p>
          </div>

          <div className="bg-white rounded-lg border border-[#e0e0e0] p-4 shadow-sm">
            <p className="text-[14px] text-black/60 mb-2">Total Expenses</p>
            <p className="text-[24px] font-bold text-[#111111]">{dashboard.metrics.totalExpenses}</p>
          </div>

          <div className="bg-white rounded-lg border border-[#e0e0e0] p-4 shadow-sm">
            <p className="text-[14px] text-black/60 mb-2">Net Earnings</p>
            <p className="text-[24px] font-bold text-green-600">{dashboard.metrics.netEarnings}</p>
          </div>
        </div>
      </div>

      {/* Order Status Chart */}
      <div className="bg-white rounded-lg border border-[#e0e0e0] p-6 shadow-sm">
        <h3 className="text-[18px] font-bold mb-6">ORDER STATUS</h3>
        <div className="flex gap-8">
          <div className="flex-1 h-64 flex items-center justify-center bg-[#f5f5f5] rounded">
            <p className="text-black/40">Pie chart placeholder</p>
          </div>
          <div className="space-y-3">
            {dashboard.orderStatus.map((status) => (
              <div key={status.id} className="flex items-center gap-3">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: status.color }}
                ></span>
                <span className="text-[14px] text-black/70">{status.label}</span>
                <span className="text-[14px] font-semibold text-[#111111] ml-auto">
                  {status.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inventory Alerts */}
      <div className="bg-white rounded-lg border border-[#e0e0e0] p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-[18px] font-bold">Inventory Alerts</h3>
          <a href="#" className="text-green-600 text-[14px] font-medium hover:underline">
            View all inventory &gt;
          </a>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {dashboard.inventoryAlerts.map((alert) => (
            <div key={alert.id} className="bg-white border border-[#e0e0e0] rounded-lg p-4 text-center">
              <img src={alert.image} alt={alert.name} className="w-16 h-16 mx-auto mb-3 rounded" />
              <p className="font-semibold text-[14px] mb-2">{alert.name}</p>
              <p className="text-[12px] text-black/60 mb-3">{alert.sku}</p>
              <p className="text-red-600 text-[12px] font-bold mb-2">{alert.status}</p>
              <p className="text-[12px] text-green-600 font-medium">{alert.stock}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg border border-[#e0e0e0] p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-[18px] font-bold">Recent Orders</h3>
          <a href="#" className="text-green-600 text-[14px] font-medium hover:underline">
            View all orders &gt;
          </a>
        </div>
        <table className="w-full text-[14px]">
          <thead className="border-b border-[#e0e0e0]">
            <tr className="text-left text-black/60">
              <th className="pb-3 font-semibold">ORDER ID</th>
              <th className="pb-3 font-semibold">CUSTOMER</th>
              <th className="pb-3 font-semibold">AMOUNT</th>
              <th className="pb-3 font-semibold">STATUS</th>
              <th className="pb-3 font-semibold">DATE</th>
            </tr>
          </thead>
          <tbody>
            {dashboard.recentOrders.map((order) => (
              <tr key={order.id} className="border-b border-[#e0e0e0] hover:bg-[#f9f9f9]">
                <td className="py-4 font-semibold text-[#111111]">{order.orderId}</td>
                <td className="py-4 text-black/70">{order.customer}</td>
                <td className="py-4 font-semibold">{order.amount}</td>
                <td className="py-4">
                  <span
                    className={`px-3 py-1 rounded text-[12px] font-medium ${
                      order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : order.status === "Confirmed"
                        ? "bg-blue-100 text-blue-800"
                        : order.status === "Shipped"
                        ? "bg-purple-100 text-purple-800"
                        : order.status === "Delivered"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-4 text-black/70">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Top Products */}
      <div className="bg-white rounded-lg border border-[#e0e0e0] p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-[18px] font-bold">Top products</h3>
          <a href="#" className="text-green-600 text-[14px] font-medium hover:underline">
            View all product &gt;
          </a>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {dashboard.topProducts.map((product) => (
            <div key={product.id} className="border border-[#e0e0e0] rounded-lg p-4">
              <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded mb-3" />
              <p className="font-semibold text-[14px] mb-2">{product.name}</p>
              <p className="text-[12px] text-black/60 mb-3">{product.sold} sold</p>
              <p className="text-[16px] font-bold text-[#111111]">{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-white border border-[#e0e0e0] rounded-lg p-4 text-center hover:shadow-md cursor-pointer transition">
          <div className="w-16 h-16 mx-auto mb-3 rounded-lg bg-green-50 flex items-center justify-center">
            <span className="text-[24px]">➕</span>
          </div>
          <p className="font-semibold text-[14px] mb-2">Add New Product</p>
          <p className="text-[12px] text-black/60 mb-3">Expand your store by adding new products</p>
          <a href="#" className="text-green-600 text-[12px] font-medium hover:underline">
            Add Product &gt;
          </a>
        </div>

        <div className="bg-white border border-[#e0e0e0] rounded-lg p-4 text-center hover:shadow-md cursor-pointer transition">
          <div className="w-16 h-16 mx-auto mb-3 rounded-lg bg-blue-50 flex items-center justify-center">
            <span className="text-[24px]">📋</span>
          </div>
          <p className="font-semibold text-[14px] mb-2">Manage Orders</p>
          <p className="text-[12px] text-black/60 mb-3">Process and manage your customer orders</p>
          <a href="#" className="text-green-600 text-[12px] font-medium hover:underline">
            View Orders &gt;
          </a>
        </div>

        <div className="bg-white border border-[#e0e0e0] rounded-lg p-4 text-center hover:shadow-md cursor-pointer transition">
          <div className="w-16 h-16 mx-auto mb-3 rounded-lg bg-yellow-50 flex items-center justify-center">
            <span className="text-[24px]">📊</span>
          </div>
          <p className="font-semibold text-[14px] mb-2">Track Earnings</p>
          <p className="text-[12px] text-black/60 mb-3">Monitor your earnings and payouts</p>
          <a href="#" className="text-green-600 text-[12px] font-medium hover:underline">
            View Earnings &gt;
          </a>
        </div>

        <div className="bg-white border border-[#e0e0e0] rounded-lg p-4 text-center hover:shadow-md cursor-pointer transition">
          <div className="w-16 h-16 mx-auto mb-3 rounded-lg bg-purple-50 flex items-center justify-center">
            <span className="text-[24px]">⚙️</span>
          </div>
          <p className="font-semibold text-[14px] mb-2">Store Settings</p>
          <p className="text-[12px] text-black/60 mb-3">Manage your store preferences</p>
          <a href="#" className="text-green-600 text-[12px] font-medium hover:underline">
            Go to settings &gt;
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
