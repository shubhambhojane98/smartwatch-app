import Sidebar from "@/components/Sidebar";
import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex flex-row m-5 my-40 h-screen">
      <div className="">
        <Sidebar />
      </div>
      {children}
    </div>
  );
};

export default AdminLayout;
