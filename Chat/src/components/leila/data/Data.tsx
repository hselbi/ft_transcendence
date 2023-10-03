import { TbFriends } from "react-icons/tb";
import { BiHomeAlt2 } from "react-icons/bi";
import { FiUser, FiLogOut } from "react-icons/fi";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineMessage, AiOutlineSetting } from "react-icons/ai";
// import {MdInsights} from "react-icons/md"
// import {RiCouponLine} from "react-icons/ri"
// import {AiOutlineSetting} from "react-icons/ai"
// import {BsFolder, BsWallet2} from "react-icons/bs"
// import { constants } from "buffer"
// import { text } from "stream/consumers"

export const datas = [
  {
    id: 1,
    icon: <BiHomeAlt2 />,
    text: "Dashboard",
    path: "/",
  },
  {
    id: 2,
    icon: <FiUser />,
    text: "User Profile",
    path: "/profile",
  },
  {
    id: 3,
    icon: <TbFriends />,
    text: "Friends",
    path: "/friends",
  },
  {
    id: 4,
    icon: <IoGameControllerOutline />,
    text: "Game",
    path: "game",
  },
  {
    id: 5,
    icon: <AiOutlineMessage />,
    text: "Messages",
    path: "/messages",
  },
  {
    id: 6,
    icon: <AiOutlineSetting />,
    text: "Setting",
    path: "/setting",
  },
  {
    id: 7,
    icon: <FiLogOut />,
    text: "Logout",
    path: "/login",
  },
];
