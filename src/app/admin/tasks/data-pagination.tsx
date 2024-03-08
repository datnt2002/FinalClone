import React from "react";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  ChevronsRight,
  ChevronsLeft,
  ChevronLeft,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Table } from "@tanstack/react-table";
import { ITask } from "@/types";

interface DataTablePaginationProps {
  table: Table<ITask>;
}
const TablePaginationData = ({ table }: DataTablePaginationProps) => {
  return (
    <div className="flex flex-1 justify-between items-center">
      <div className="flex flex-1 items-center gap-2 text-right">
        <h1 className="font-medium text-sm">Rows per page</h1>
        <Select
          value={`${table.getState().pagination.pageSize}`}
          onValueChange={(value) => {
            table.setPageSize(Number(value));
          }}
        >
          <SelectTrigger className="w-auto">
            <SelectValue
              placeholder={table.getState().pagination.pageSize}
              defaultValue={table.getState().pagination.pageSize}
            />
          </SelectTrigger>
          <SelectContent className="">
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="20">20</SelectItem>
            <SelectItem value="30">30</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <h1 className="font-medium text-sm basis-1/4 text-right">
        Page {table.getState().pagination.pageIndex + 1} Of{" "}
        {table.getPageCount()}
      </h1>
      <div className="flex flex-1 items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.firstPage()}
          className="px-1"
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronsLeft className="text-muted-foreground" />
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          className="px-1"
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeft className="text-muted-foreground" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="px-1"
        >
          <ChevronRight className="text-muted-foreground" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.lastPage()}
          className="px-1"
          disabled={!table.getCanNextPage()}
        >
          <ChevronsRight className="text-muted-foreground" />
        </Button>
      </div>
    </div>
  );
};

export default TablePaginationData;
