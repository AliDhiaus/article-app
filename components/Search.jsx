"use client";
import React from "react";
import { Input } from "@/components/ui/input";

const Search = ({ onSearch, labelSearch }) => {
  return (
    <div>
      <Input
        id="search"
        type="text"
        placeholder={labelSearch}
        onChange={(e) => onSearch(e.target.value)}
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md"
      />
    </div>
  );
};

export default Search;
