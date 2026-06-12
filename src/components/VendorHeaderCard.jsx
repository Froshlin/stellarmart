function VendorHeaderCard() {
  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-green-50 to-green-100 px-14 py-8">
      <div>
        <h1 className="text-[42px] font-bold text-[#111111]">Vendor Dashboard</h1>
        <p className="text-[16px] text-black/60 mt-2">Manage your store and products</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-[#44C538] flex items-center justify-center text-white text-[28px] font-bold">
          V
        </div>
      </div>
    </div>
  );
}

export default VendorHeaderCard;
