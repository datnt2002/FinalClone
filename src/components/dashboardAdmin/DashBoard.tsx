import React from "react";
import DatePickerDashboard from "./DatePickerDashboard";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Props = {};

const DashBoard = (props: Props) => {
  return (
    <div className="p-10">
      <div className="flex justify-between mb-6">
        <h1 className="font-bold text-4xl">Dashboard</h1>
        <div className="flex gap-2">
          <DatePickerDashboard />
          <Button>Download</Button>
        </div>
      </div>
      <Tabs defaultValue="account" className="">
        <TabsList>
          <TabsTrigger value="account">Overview</TabsTrigger>
          <TabsTrigger disabled value="password">
            Password
          </TabsTrigger>
          <TabsTrigger disabled value="account1">
            Account
          </TabsTrigger>
          <TabsTrigger disabled value="password1">
            Password
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default DashBoard;
