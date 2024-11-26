import React from "react";
import sidelogo from "../assets/images/dasboardlogo.png"
import { RiDashboardLine } from "react-icons/ri";
import { PiVan } from "react-icons/pi";
import { BiCartAdd } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";



const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-md">
      {/* Logo Section */}
      <div className="flex flex-col items-center py-4 border-b">
        <h1 className="text-3xl font-bold text-green-600 mb-8 ">
          <em>REWARDIFY</em>
        </h1>

        <div className="mt-4">
          <img
            src={sidelogo}
            alt="Store"
            className="rounded-lg w-20 h-20 object-cover"
          />
        </div>
        <h2 className="mt-2 font-medium">Kannan departmental</h2>
        <p className="text-gray-500 text-sm">Shop ID: 123456789</p>
      </div>

      {/* Navigation Section */}
      <div className="mt-4">
        <ul className="space-y-5">
          <li className="px-6 py-2 text-sm text-gray-700 hover:bg-green-100 hover:text-green-600 cursor-pointer flex items-center">
            <span className="material-icons mr-3">
              <RiDashboardLine className="text-black text-4xl" />
            </span>
            <span className="text-black font-[600] leading-[19.36px] text-[16px]">Dashboard</span>
          </li>
          <li className="px-6 py-2 text-sm text-gray-700 hover:bg-green-100 hover:text-green-600 cursor-pointer flex items-center">
            <span className="material-icons mr-3"><PiVan  className="text-black text-4xl"/></span>   <span className="text-black font-[600] leading-[19.36px] text-[16px]">Order</span>
          </li>
          <li className="px-6 py-2 text-sm text-gray-700 hover:bg-green-100 hover:text-green-600 cursor-pointer flex items-center">
            <span className="material-icons mr-3"><BiCartAdd  className="text-black text-4xl"/></span>   <span className="text-black font-[600] leading-[19.36px] text-[16px]">My Products</span>
          </li>
          <li className="px-6 py-2 text-sm text-gray-700 hover:bg-green-100 hover:text-green-600 cursor-pointer flex items-center">
            <span className="material-icons mr-3"><FaRegUser className="text-black text-4xl" /></span>   <span className="text-black font-[600] leading-[19.36px] text-[16px]">Profile</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
