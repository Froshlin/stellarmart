import { Outlet } from "react-router-dom";
import VendorSidebar from "../components/VendorSidebar";

function VendorLayout() {
  return (
    <main className="w-full bg-white">
      <div className="flex w-full gap-6 pl-6 pr-6 py-6">
        <VendorSidebar />
        <section className="w-full min-h-screen">
          <Outlet />
        </section>
      </div>
    </main>
  );
}

export default VendorLayout;
