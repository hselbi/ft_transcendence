// import React from "react";
import { datas } from "./Data";
import { Link, useRoutes} from "react-router-dom";
import React, { useCallback, useState } from "react";

interface SidebarDataProps {
  toggle: boolean;
}
const SidebarData: React.FC<SidebarDataProps> = ({ toggle }) => {
  const [activeSection, setActiveSection] = useState("Dashboard");
  const logoutUser = useCallback(()=>{
    localStorage.removeItem("sidebar");
  }, [])
  const handleLogout = () => {
    localStorage.removeItem("sidebar")
  };
  return (
    <div className="">
      {datas.map((data) => {
        return (
          <div
            className={`${
              toggle ? "" : ""
            }  last:absolute left-5  bottom-4 group`}
            key={data.id}
          >
            <Link
              to={data.path}
              onClick={() => setActiveSection(data.text)}
              className={`${data.text === activeSection && 'bg-gradient-to-br from-[#f78562] to-[#ce502a] text-white'} "lg:mr-8 text-lg lg:text-[1.7rem] sidebar text-[#7B7987] hover:text-white "`}
            >
              {data.icon}
            </Link>
                <span className=" block sidebar-tooltip group-hover:scale-100">{data.text}</span>
          </div>
        );
      })}
    </div>
  );
};

export default SidebarData;