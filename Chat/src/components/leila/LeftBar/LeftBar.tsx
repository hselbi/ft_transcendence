import React, { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
// import Logo from "./Logo";
import SidebarData from "../data/SideBarData";

const LeftBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex w-40 h-full">
      <div className="w-full flex -mt-28 px-6 ">
        <div className="w-full h-full flex items-center justify-center text-sm lg:text-xl ">
          <div className={`${toggle ? "w-[5.8rem]" : ""} sidebar-container`}>
            <BiChevronLeft toggle={toggle} />
            <SidebarData toggle={toggle} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LeftBar;
