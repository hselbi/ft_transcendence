import React, { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
// import Logo from "./Logo";
import RightbarData from "../data/SideBarData";
// import Arcane from "../../img/Arcane.png";
import { TiGroup } from "react-icons/ti";
import { faker } from "@faker-js/faker";
// import ProfileCard from "./ProfileCard";


function Rightbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex w-40 h-full hidden lg:block mt-20">
      <div className="w-full flex -mt-32 px-6">
        <div className="w-full h-full flex items-center justify-center text-gray-900 text-xl">
          <div className={`${toggle ? "w-[5.8rem]" : ""} rightbar-container `}>
            <div className="group">
              <img
                className="w-14 h-14 p-1 rounded-full ring-2 ring-gray-300 dark:ring-[#FE754D] "
                src={faker.image.avatar()}
                alt="Bordered avatar"
              />
              <span className="profile-card group-hover:scale-100">
                ProfilCard
                {/* <ProfileCard /> */}
              </span>
            </div>
            <div className="flex text-white items-center justify-center mt-8 text-[1.7rem]">
              <TiGroup />
            </div>
            <RightbarData toggle={toggle} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Rightbar;
