import { Navigate, Route, Routes } from "react-router-dom"
import HeroSection from "../components/HeroSection"
import Pricing from "../components/Pricing"
import StoreCard from "../components/StoreCard"
import AppLayout from "../layouts/AppLayout"
import ProfileLayout from "../layouts/ProfileLayout"
import VendorLayout from "../layouts/VendorLayout"
import Checkout from "../pages/Checkout"
import MyAddress from "../profile/MyAddress"
import MyLocation from "../profile/MyLocation"
import MyOrders from "../profile/MyOrders"
import MyRewards from "../profile/MyRewards"
import MyWallet from "../profile/MyWallet"
import MyWishlist from "../profile/MyWishlist"
import Overview from "../profile/Overview"
import {
  Dashboard,
  MyOrders as VendorMyOrders,
  MyRewards as VendorMyRewards,
  Product,
  AddProduct,
  Inventory,
  Payouts,
  Earnings,
  Customers,
  Reviews,
  ProfileSettings,
  Marketing,
} from "../vendor"

function HomePage() {
  return (
    <>
      <HeroSection />
      <StoreCard />
      <Pricing />
    </>
  )
}

function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<ProfileLayout />}>
          <Route index element={<Navigate to="overview" replace />} />
          <Route path="overview" element={<Overview />} />
          <Route path="orders" element={<MyOrders />} />
          <Route path="rewards" element={<MyRewards />} />
          <Route path="wallet" element={<MyWallet />} />
          <Route path="wishlist" element={<MyWishlist />} />
          <Route path="address" element={<MyAddress />} />
          <Route path="location" element={<MyLocation />} />
        </Route>
        <Route path="/vendor" element={<VendorLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<VendorMyOrders />} />
          <Route path="rewards" element={<VendorMyRewards />} />
          <Route path="product" element={<Product />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="payouts" element={<Payouts />} />
          <Route path="earnings" element={<Earnings />} />
          <Route path="customers" element={<Customers />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="settings" element={<ProfileSettings />} />
          <Route path="marketing" element={<Marketing />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
