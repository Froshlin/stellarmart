import { NavLink } from "react-router-dom"
import { PROFILE_MENU_ITEMS } from "../constants/profileMenuItems"

function SidebarMenu() {
    return (
        <aside className="mt-20">
            <ul className="w-105.5 rounded-md bg-[#44C5381F]">
                {PROFILE_MENU_ITEMS.map((item, index) => {
                    return (
                        <li
                            key={index}
                            className="border-b border-[#b8c8b6] last:border-b-0"
                        >
                            <NavLink
                                to={item.link}
                                className={({ isActive }) =>
                                    `flex items-center gap-4 px-4 py-5 text-base font-medium ${
                                        isActive
                                            ? "bg-[#FBBF24] text-white text-[29px] font-bold"
                                            : "text-[#111111] text-[28px] font-medium hover:bg-[#cddcc9]"
                                    } ${index === 0 ? "rounded-t-md" : ""}`
                                }
                            >
                                <item.icon className="text-[28px] font-medium" />
                                <span>{item.name}</span>
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}

export default SidebarMenu
