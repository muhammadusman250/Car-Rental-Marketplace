// Header Component
import {
  Bell,
  Heart,
  Search,
  Settings,
  Settings2,
  UserCircle2Icon,
} from "lucide-react";
import React from "react";

const Header = () => {
  return (
    // Header Section
    <div className=" sm:flex sm:justify-evenly items-center py-5 ">
      <div className="flex gap-20 max-md:gap-5 max-xl:gap-14 max-sm:gap-8 max-sm:flex-col">
        {/* Logo */}
        <div className="flex items-center justify-between w-full sm:w-auto">
          <div className="text-[#3563E9] font-bold text-2xl max-sm:text-left max-sm:px-10">
            MORENT
          </div>
          <UserCircle2Icon className="text-[#596780] sm:hidden" />
        </div>
        {/* Search Bar */}
        <div className="flex justify-between border items-center px-5 rounded-3xl">
            <Search className="p-[1.5]" />
          <div className="">
            <input
              type="text"
              placeholder="Search something here"
              className="text-base py-2 sm:px-8"
            />
          </div>
          <div>
            <Settings2 className="p-[0.5]" />
          </div>
        </div>
      </div>
      {/* Wishlist, Notification & User Icon */}
      <div className="flex gap-7 max-sm:hidden">
        <Heart className=" text-[#596780]" />
        <Bell className=" text-[#596780]" />
        <Settings className=" text-[#596780]" />
        <UserCircle2Icon className="text-[#596780]" />
      </div>
    </div>
  );
};

export default Header;
