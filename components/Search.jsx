"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const Search = ({ onSearch, labelSearch }) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <SearchIcon className="text-gray-500"/>
      </div>
      <Input
        id="search"
        type="text"
        placeholder={labelSearch}
        onChange={(e) => onSearch(e.target.value)}
        className="pl-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md"
      />
    </div>
  );
};

export default Search;
