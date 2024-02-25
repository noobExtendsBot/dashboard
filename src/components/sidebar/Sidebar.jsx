import React from "react";
import {
  Home,
  Timeline,
  TrendingUp,
  Person,
  AttachMoney,
  StackedBarChart,
  MailOutline,
  ChatBubbleOutline,
  Work,
  Error,
} from "@mui/icons-material";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar m-3 bg-white text-gray-800 text-base sm:text-lg md:text-xl lg:text-1xl xl:text-2xl">
      <div className="sidebarWrapper">
        <div className="sidebarMenu mb-10">
          <h3 className="sidebarTitle text-lg font-semibold p-4">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active flex items-center p-4 cursor-pointer">
              <Home className="mr-2" />
              Home
            </li>
            <li className="sidebarListItem flex items-center p-4 cursor-pointer">
              <Timeline className="mr-2" /> Analytics
            </li>
            <li className="sidebarListItem flex items-center p-4 cursor-pointer">
              <TrendingUp className="mr-2" /> Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu mb-10">
          <h3 className="sidebarTitle text-lg font-semibold p-4">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem flex items-center p-4 cursor-pointer">
              <Person className="mr-2" />
              Users
            </li>
            <li className="sidebarListItem flex items-center p-4 cursor-pointer">
              <AttachMoney className="mr-2" /> Transactions
            </li>
            <li className="sidebarListItem flex items-center p-4 cursor-pointer">
              <StackedBarChart className="mr-2" /> Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu mb-10">
          <h3 className="sidebarTitle text-lg font-semibold p-4">
            Notifications
          </h3>
          <ul className="sidebarList">
            <li className="sidebarListItem flex items-center p-4 cursor-pointer">
              <MailOutline className="mr-2" />
              Mail
            </li>
            <li className="sidebarListItem flex items-center p-4 cursor-pointer">
              <Timeline className="mr-2" /> Feedback
            </li>
            <li className="sidebarListItem flex items-center p-4 cursor-pointer">
              <ChatBubbleOutline className="mr-2" /> Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu mb-10">
          <h3 className="sidebarTitle text-lg font-semibold p-4">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem flex items-center p-4 cursor-pointer">
              <Work className="mr-2" />
              Manage
            </li>
            <li className="sidebarListItem flex items-center p-4 cursor-pointer">
              <Timeline className="mr-2" /> Analytics
            </li>
            <li className="sidebarListItem flex items-center p-4 cursor-pointer">
              <Error className="mr-2" /> Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
