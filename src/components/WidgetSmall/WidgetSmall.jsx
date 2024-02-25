import React from "react";
import { Visibility } from "@mui/icons-material";
import "./widgetSmall.css";

const WidgetSmall = () => {
  return (
    <div className="widgetSmall">
      <span className="widgetSmallTitle">New Members</span>
      <ul className="widgetSmallList">
        <li className="widgetSmallItem">
          <img
            src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            alt="userProfile"
            className="widgetSmallImg"
          />
          <div className="widgetSmallUser">
            <div className="widgetSmallUsername">Jane Doe</div>
            <div className="widgetSmallUserTitle">Software Engineer</div>
          </div>
          <button className="widgetSmallButton">
            <Visibility className="widgetSmallIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallItem">
          <img
            src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            alt="userProfile"
            className="widgetSmallImg"
          />
          <div className="widgetSmallUser">
            <div className="widgetSmallUsername">Jane Doe</div>
            <div className="widgetSmallUserTitle">Software Engineer</div>
          </div>
          <button className="widgetSmallButton bg-blue">
            <Visibility className="widgetSmallIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallItem">
          <img
            src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            alt="userProfile"
            className="widgetSmallImg"
          />
          <div className="widgetSmallUser">
            <div className="widgetSmallUsername">Jane Doe</div>
            <div className="widgetSmallUserTitle">Software Engineer</div>
          </div>
          <button className="widgetSmallButton bg-blue">
            <Visibility className="widgetSmallIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallItem">
          <img
            src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            alt="userProfile"
            className="widgetSmallImg"
          />
          <div className="widgetSmallUser">
            <div className="widgetSmallUsername">Jane Doe</div>
            <div className="widgetSmallUserTitle">Software Engineer</div>
          </div>
          <button className="widgetSmallButton bg-blue">
            <Visibility className="widgetSmallIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallItem">
          <img
            src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            alt="userProfile"
            className="widgetSmallImg"
          />
          <div className="widgetSmallUser">
            <div className="widgetSmallUsername">Jane Doe</div>
            <div className="widgetSmallUserTitle">Software Engineer</div>
          </div>
          <button className="widgetSmallButton bg-blue">
            <Visibility className="widgetSmallIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSmall;
