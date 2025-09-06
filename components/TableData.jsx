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
    <div className="w-full">
      <div className="hidden md:block overflow-x-auto">
        <Table className="w-full">
          <TableHeader className="bg-gray-100 dark:bg-gray-800">
            <TableRow>
              <TableHead className="w-16 text-center">No</TableHead>
              {columns.map((col, idx) => (
                <TableHead key={idx} className="min-w-32">
                  {col.label}
                </TableHead>
              ))}
              <TableHead className="w-32 text-center">Aksi</TableHead>
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
                      className="font-medium max-w-[200px] truncate"
                      title={displayValue}
                    >
                      {displayValue}
                    </TableCell>
                  );
                })}
                <TableCell className="text-center">
                  <div className="flex justify-center gap-1">
                    {onView && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="p-2 h-8 w-8"
                        onClick={() => onView(row.id)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    )}
                    {onEdit && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="p-2 h-8 w-8"
                        onClick={() => onEdit(row.id)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                    )}
                    {onDelete && (
                      <Button
                        variant="destructive"
                        size="sm"
                        className="p-2 h-8 w-8"
                        onClick={() => onDelete(row.id)}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="md:hidden space-y-4">
        {rows.map((row, i) => (
          <div
            key={row.id}
            className="bg-white dark:bg-gray-800 rounded-lg border p-4 shadow-sm"
          >
            <div className="flex justify-between items-start mb-3">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                #{i + 1}
              </span>
              <div className="flex gap-1">
                {onView && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="p-2 h-8 w-8"
                    onClick={() => onView(row.id)}
                  >
                    <Eye className="h-3 w-3" />
                  </Button>
                )}
                {onEdit && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="p-2 h-8 w-8"
                    onClick={() => onEdit(row.id)}
                  >
                    <Pencil className="h-3 w-3" />
                  </Button>
                )}
                {onDelete && (
                  <Button
                    variant="destructive"
                    size="sm"
                    className="p-2 h-8 w-8"
                    onClick={() => onDelete(row.id)}
                  >
                    <Trash className="h-3 w-3" />
                  </Button>
                )}
              </div>
            </div>
            
            <div className="space-y-2">
              {columns.map((col, index) => {
                const value = getValueTabel(row, col.field);
                const displayValue =
                  col.field === "createdAt" ? formatDate(value) : value;

                return (
                  <div key={index} className="flex flex-col">
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                      {col.label}
                    </span>
                    <span className="text-sm text-gray-900 dark:text-gray-100 break-words">
                      {displayValue || '-'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {rows.length === 0 && (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          Tidak ada data untuk ditampilkan
        </div>
      )}
    </div>
  );
};

export default TableData;