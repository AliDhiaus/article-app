"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Eye, Pencil, Trash } from "lucide-react";
import { formatDate, getValueTabel } from "@/lib/utils";

const TableData = ({ columns = [], rows = [], onView, onEdit, onDelete }) => {
  return (
    <Table className="min-w-full">
      <TableHeader className="bg-gray-100 dark:bg-gray-800">
        <TableRow>
          <TableHead className="w-16 text-center">No</TableHead>
          {columns.map((col, idx) => (
            <TableHead key={idx} className="min-w-32 max-w-xs">
              {col.label}
            </TableHead>
          ))}
          <TableHead className="w-32 text-center sticky right-0">
            Aksi
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row, i) => (
          <TableRow key={row.id}>
            <TableCell className="text-center">{i + 1}</TableCell>
            {columns.map((col, index) => {
              const value = getValueTabel(row, col.field); 
              const displayValue =
                col.field === "createdAt" ? formatDate(value) : value;

              return (
                <TableCell
                  key={index}
                  className="font-medium min-w-32 max-w-[10rem] text-wrap truncate"
                  title={displayValue}
                >
                  {displayValue}
                </TableCell>
              );
            })}
            <TableCell className="w-32 text-center space-x-1 sticky right-0">
              {onView && (
                <Button
                  variant="outline"
                  size="sm"
                  className="p-2 h-8 w-8 rounded-full"
                  onClick={() => onView(row.id)}
                >
                  <Eye className="h-4 w-4" />
                </Button>
              )}
              {onEdit && (
                <Button
                  variant="outline"
                  size="sm"
                  className="p-2 h-8 w-8 rounded-full"
                  onClick={() => onEdit(row.id)}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
              )}
              {onDelete && (
                <Button
                  variant="destructive"
                  size="sm"
                  className="p-2 h-8 w-8 rounded-full"
                  onClick={() => onDelete(row.id)}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableData;
