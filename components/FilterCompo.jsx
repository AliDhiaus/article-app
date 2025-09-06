import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export const FilterCompo = ({ value, onChange, categories }) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder="Pilih kategori" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">Semua Kategori</SelectItem>
        {categories.map((cat) => (
          <SelectItem key={cat.id} value={cat.id || 0}>
            {cat.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};