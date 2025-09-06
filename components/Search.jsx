"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";

const Search = ({ onSearch, labelSearch }) => {
  return (
    <div>
      <Input
        id="search"
        type="text"
        placeholder={labelSearch}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
