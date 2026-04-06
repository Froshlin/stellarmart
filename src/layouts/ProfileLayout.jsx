import { Outlet } from "react-router-dom"
import ProfileHeaderCard from "../components/ProfileHeaderCard"
import SidebarMenu from "../components/SidebarMenu"

function ProfileLayout() {
  return (
    <main className="w-full bg-white">
      <ProfileHeaderCard />
      <div className="flex w-full gap-6 pl-14 pr-2 py-6">
        <SidebarMenu />
        <section className="w-full min-h-80 p-4">
          <Outlet />
        </section>
      </div>
    </main>
  )
}

export default ProfileLayout

