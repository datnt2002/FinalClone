import { payments } from "@/types";
import React from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";

type Props = {};

const TaskTable = (props: Props) => {
  const data = payments;
  return (
    <div className="p-10 w-full">
      <div className="mb-10">
        <h1 className="font-bold text-3xl">Welcome back</h1>
        <h1 className="text-xl">Heres a list of your tasks for this month!</h1>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default TaskTable;
