import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

const PaginationWrapper = ({ current, total, onChange }) => {
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <Pagination className="mt-2">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => current > 1 && onChange(current - 1)}
          />
        </PaginationItem>
        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              onClick={() => onChange(page)}
              className={current === page ? "font-bold" : ""}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          {total > pages.length && <PaginationEllipsis />}
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            onClick={() => current < total && onChange(current + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationWrapper;
