import React from "react";
import FeaturedInfo from "../../featuredInfo/FeaturedInfo";

import "./home.css";
import Chart from "../../chart/Chart";
import { userData } from "../../../dummyData";
import WidgetSmall from "../../WidgetSmall/WidgetSmall";
import WidgetLarge from "../../WidgetLarge/WidgetLarge";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active Users"
      />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
};

export default Home;
