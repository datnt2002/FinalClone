import DashBoard from "@/components/dashboardAdmin/DashBoard";
import DashBoardHeader from "@/components/dashboardAdmin/DashBoardHeader";
import { Separator } from "@/components/ui/separator";
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
