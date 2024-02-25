import SideBar from "@/components/Sidebar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="bg-white w-[1200px] mx-auto">
      <div className="flex flex-row">
        <div>
          <SideBar />
        </div>
        <div className="flex-1 border border-[#E1E4E8]">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
