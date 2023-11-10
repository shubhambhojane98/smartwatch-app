import React from "react";

const Sidebar = () => {
  return (
    <div className="w-60 h-2/4 text-white bg-gray-500">
      <ul className="p-4 text-center">
        <li className="py-2">Create Product</li>
        <li className="py-2 px-2">Manage Products</li>
        <li className="py-2">Manage Order</li>
      </ul>
    </div>
  );
};

export default Sidebar;
