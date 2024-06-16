import Sidebar from "@/components/Sidebar";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getUser } from "../actions/product.actions";
import { redirect } from "next/navigation";

const AdminLayout = async ({ children }) => {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  const user = await getUser(email);

  return (
    <div>
      {user?.role === 1 ? (
        <div className="flex flex-row m-5 my-40">
          <div className="">
            <Sidebar />
          </div>
          <div className="w-full">{children}</div>
        </div>
      ) : (
        redirect("/login")
      )}
    </div>
  );
};

export default AdminLayout;
