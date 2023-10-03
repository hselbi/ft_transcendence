"use client";
import React, { useState, Fragment } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
// import { name } from "../Data/Dataname";
import { Popover, Transition } from "@headlessui/react";
// import SearchbarData from "../data/SideBarData";

function Searchbar() {
  const [activeSearch, setActiveSearch] = useState([]);
  return (
    <header className="flex items-center justify-between p-4 space-x-2 ">
      <h1 className=" text-white text-3xl lg:ml-32 font-PalanquinDark font-bold">
        Ping Pong{" "}
      </h1>

      {/* <SearchbarData /> */}

      <div className="relative inline-flex w-fit mt-3 hidden sm:block">
        <Popover className="relative flex justify-center items-center">
          {({ open }) => (
            <>
              <div
                className={`absolute mr-32 bottom-auto left-auto right-2 top-1 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full ${
                  open ? "" : "bg-[#C85151]"
                } p-1.5 text-xs`}
              ></div>

              <Popover.Button className="">
                <div className="flex  mr-32 items-center justify-center rounded-full bg-[#322f49da] active:bg-[#3f3c5cda] p-3 text-center text-white shadow-lg dark:text-gray-200">
                  <IoNotifications />
                </div>
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-500"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-28 w-80 -ml-72 text-white">
                  <strong className=" flex justify-center">Notification</strong>
                  <div className="flex justify-center items-center bg-[#35324bda] rounded-3xl w-full p-5 shadow-2xl">
                    this is the panel
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </header>
  );
}
export default Searchbar;
