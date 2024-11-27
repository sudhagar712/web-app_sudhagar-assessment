import React from "react";
import { FaHandHoldingUsd } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = ({ toggleSidebar }) => {


const userName= "Sudhagar_msr"
const coins = 3000;


  return (
    <header className="shadow-lg font-inter fixed left-0 right-0 z-20 bg-white">
      <nav className="flex justify-between items-center py-4 px-4 md:px-8">
        {/*............................... menu icons........................................................ */}
        <button className="text-gray-500 md:hidden" onClick={toggleSidebar}>
          <RxHamburgerMenu size={25} />
        </button>
        <h1 className="hidden md:flex text-xl md:text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-[#668D12] to-[#ACC43F] bg-clip-text text-transparent uppercase">
          <i> rewadify</i>
        </h1>

        <h2 className="hidden md:flex text-[5px] md:text-[15px] lg:text-[20px] font-bold text-center ">
          Welcome, {userName}👋
        </h2>

        {/*......................................... User and Icons............................ */}
        <div>
          <ul className="flex items-center justify-center space-x-4 md:space-x-8">
            <li className="text-[10px] text-center md:text-[14px] font-medium bg-[#F2F8DF] px-3 py-1 rounded-full">
              XCoins: {coins}🪙
            </li>
            <li className="text-xl md:text-xl bg-[#F2F8DF] p-1 rounded-full">
              <FaHandHoldingUsd />
            </li>
            <li className="text-xl md:text-xl bg-[#F2F8DF] p-1 rounded-full">
              <IoIosNotifications />
            </li>
            <li className="text-xl md:text-xl bg-[#F2F8DF] p-1 rounded-full">
              <IoPerson />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
