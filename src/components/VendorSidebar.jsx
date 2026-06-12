import { NavLink } from "react-router-dom";
import { VENDOR_MENU_ITEMS } from "../constants/vendorMenuItems";

function VendorSidebar() {
  return (
    <aside className="w-56 sticky top-6 h-fit">
      {/* Vendor Profile Card */}
      <div className="bg-white border border-[#E5E7EB] rounded-lg p-6 mb-6 text-center">
        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center overflow-hidden">
          <img 
            src="https://via.placeholder.com/96" 
            alt="Green Fresh Farms" 
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-[18px] font-bold text-[#111111] mb-1">Green Fresh Farms</h3>
        <p className="text-[14px] text-[#656464]">Vendor ID: VEN12456</p>
      </div>

      {/* Menu Items */}
      <ul className="bg-white border border-[#E5E7EB] rounded-lg overflow-hidden">
        {VENDOR_MENU_ITEMS.map((item, index) => {
          return (
            <li key={index} className="border-b border-[#E5E7EB] last:border-b-0">
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-5 py-4 text-[16px] font-medium transition-all ${
                    isActive
                      ? "bg-[#F1F5F9] text-[#44C538]"
                      : "text-[#656464] hover:bg-[#F9F9F9]"
                  }`
                }
              >
                <item.icon className="text-[20px]" />
                <span>{item.name}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default VendorSidebar;
