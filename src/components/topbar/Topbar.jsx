import React from "react";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

import "./Topbar.css";

export default function Topbar() {
  return (
    <div className="topbar bg-white-900 text-black">
      <div className="topbarWrapper flex flex-col sm:flex-row justify-between items-center px-4 py-2">
        <div className="topLeft mb-2 ml-4 sm:mb-0">
          <span className="logo text-3xl font-bold text-blue-800 cursor-pointer">
            REACT ADMIN
          </span>
        </div>
        <div className="topRight flex mr-4 text-gray-500">
          <div className="topbarIconContainer mt-2 mr-4 cursor-pointer">
            <NotificationsNone />
            <span className="topIconBadge p-2">2</span>
          </div>
          <div className="topbarIconContainer mt-2 mr-4 cursor-pointer">
            <Language />
            <span className="topIconBadge p-2">2</span>
          </div>
          <div className="topbarIconContainer mt-2 mr-4 cursor-pointer">
            <Settings />
          </div>
          <img
            className="profilePic rounded-full cursor-pointer"
            src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
}
