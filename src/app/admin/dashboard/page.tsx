import DashBoard from "src/components/dashboardAdmin/DashBoard";
import DashBoardHeader from "src/components/dashboardAdmin/DashBoardHeader";
import { Separator } from "src/components/ui/separator";
import React from "react";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className="w-full">
      <DashBoardHeader />
      <Separator className="" />
      <DashBoard />
    </div>
  );
};

export default Dashboard;
