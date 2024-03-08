"use client";

import { ITask, labels, priorities, statuses } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const toUpperCaseFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const columns: ColumnDef<ITask>[] = [
  {
    accessorKey: "check",
    header: () => <Checkbox id="checkBox" />,
    cell: ({ row }) => {
      return <Checkbox id={row.original.id} />;
    },
  },
  {
    accessorKey: "id",
    header: () => <div className="font-bold">Task</div>,
  },
  {
    accessorKey: "title",
    header: () => <div className="font-bold">Title</div>,
    cell: ({ row }) => {
      return (
        <div>
          <span className="border rounded-md px-2 py-1 font-medium mr-1">
            {toUpperCaseFirstLetter(row.original.label)}
          </span>
          <span className="font-medium max-w-[500px] truncate">
            {row.original.title}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: () => <div className="font-bold">Status</div>,
    cell: ({ row }) => {
      const status = statuses.find((status) => {
        return status.value === row.original.status;
      });
      if (!status) {
        return null;
      }
      return (
        <div className="flex items-center">
          <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          {status?.label}
        </div>
      );
    },
  },
  {
    accessorKey: "priority",
    header: () => <div className="font-bold">Priority</div>,
    cell: ({ row }) => {
      const priority = priorities.find((prior) => {
        return prior.value === row.original.priority;
      });
      if (!priority) {
        return null;
      }
      return (
        <div className="flex items-center">
          <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          {priority?.label}
        </div>
      );
    },
  },
  {
    id: "actions",

    cell: ({ row }) => {
      const task = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Make a copy</DropdownMenuItem>
            <DropdownMenuItem>Favorite</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Labels</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuRadioGroup value={task.label}>
                    {labels.map((label) => {
                      return (
                        <DropdownMenuRadioItem
                          key={label.value}
                          value={label.value}
                        >
                          {label.label}
                        </DropdownMenuRadioItem>
                      );
                    })}
                  </DropdownMenuRadioGroup>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>

            <DropdownMenuSeparator />
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
