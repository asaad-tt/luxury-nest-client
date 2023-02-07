import React from "react";
import Sidebar from "../Components/Dashboard/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="md:flex min-h-screen">
      <Sidebar />
      <div className="bg-red-500 flex-1">Content</div>
    </div>
  );
};

export default DashboardLayout;
