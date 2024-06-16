import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-60   text-white bg-gray-500">
      <ul className="p-4 text-center">
        <Link
          className="focus-within:hover:bg-gray-300"
          href="/dashboard/addProduct"
        >
          <li className="py-2">Create Product</li>
        </Link>
        <Link href="/dashboard/manageProduct">
          <li className="py-2">Manage Products</li>
        </Link>
        <Link href="">
          <li className="py-2">Manage Order</li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
