import SideBar from "@/components/Sidebar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="bg-white w-[1200px]">
      <div>
        <div>
          <SideBar />
        </div>
        <div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
