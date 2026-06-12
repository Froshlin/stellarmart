import {
  FaBox,
  FaShoppingBag,
  FaGift,
  FaPlus,
  FaWarehouse,
  FaMoneyBillWave,
  FaChartLine,
  FaUsers,
  FaStar,
  FaCog,
  FaBullhorn,
  FaSignOutAlt,
} from "react-icons/fa";
import { TbLayoutDashboard } from "react-icons/tb";

export const VENDOR_MENU_ITEMS = [
  {
    name: "Dashboard",
    icon: TbLayoutDashboard,
    link: "/vendor/dashboard",
  },
  {
    name: "My Orders",
    icon: FaShoppingBag,
    link: "/vendor/orders",
  },
  {
    name: "My Rewards",
    icon: FaGift,
    link: "/vendor/rewards",
  },
  {
    name: "Product",
    icon: FaBox,
    link: "/vendor/product",
  },
  {
    name: "Add Product",
    icon: FaPlus,
    link: "/vendor/add-product",
  },
  {
    name: "Inventory",
    icon: FaWarehouse,
    link: "/vendor/inventory",
  },
  {
    name: "Payouts",
    icon: FaMoneyBillWave,
    link: "/vendor/payouts",
  },
  {
    name: "Earnings",
    icon: FaChartLine,
    link: "/vendor/earnings",
  },
  {
    name: "Customers",
    icon: FaUsers,
    link: "/vendor/customers",
  },
  {
    name: "Reviews",
    icon: FaStar,
    link: "/vendor/reviews",
  },
  {
    name: "Profile Settings",
    icon: FaCog,
    link: "/vendor/settings",
  },
  {
    name: "Marketing",
    icon: FaBullhorn,
    link: "/vendor/marketing",
  },
  {
    name: "Logout",
    icon: FaSignOutAlt,
    link: "/",
  },
];
