import { Outlet } from "react-router-dom";
import VendorHeaderCard from "../components/VendorHeaderCard";
import VendorSidebar from "../components/VendorSidebar";

function VendorLayout() {
  return (
    <main className="w-full bg-white">
      <VendorHeaderCard />
      <div className="flex w-full gap-6 pl-14 pr-2 py-6">
        <VendorSidebar />
        <section className="w-full min-h-80 p-4">
          <Outlet />
        </section>
      </div>
    </main>
  );
}

export default VendorLayout;
