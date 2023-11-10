// import { signOut } from "next-auth/react";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import AdminDashbaord from "@/components/AdminDashbaord";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);
  console.log("session", session.user.role);

  return (
    <div className="">
      <AdminDashbaord />
    </div>
  );
};

export default Dashboard;
