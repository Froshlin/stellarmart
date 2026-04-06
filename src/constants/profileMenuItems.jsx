import { FaGift, FaShoppingBag, FaWallet } from "react-icons/fa"
import { FaHeart } from "react-icons/fa6"
import { IoLocationSharp, IoLogOutSharp } from "react-icons/io5"
import { TbArrowsMinimize } from "react-icons/tb"

export const PROFILE_MENU_ITEMS = [
  {
    name: "Overview",
    icon: TbArrowsMinimize,
    link: "/profile/overview",
  },
  {
    name: "My Orders",
    icon: FaShoppingBag,
    link: "/profile/orders",
  },
  {
    name: "My Rewards",
    icon: FaGift,
    link: "/profile/rewards",
  },
  {
    name: "My Wallet",
    icon: FaWallet,
    link: "/profile/wallet",
  },
  {
    name: "Shipping Wishlist",
    icon: FaHeart,
    link: "/profile/wishlist",
  },
  {
    name: "My Address",
    icon: IoLocationSharp,
    link: "/profile/address",
  },
  {
    name: "Location",
    icon: IoLogOutSharp,
    link: "/profile/location",
  },
]

