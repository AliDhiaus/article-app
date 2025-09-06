"use client";
import React, { useEffect, useState, useMemo } from "react";
import { api } from "../../../lib/api";
import { CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { ArrowRight, Tag } from "lucide-react";
import PaginationWrapper from "@/components/PaginationWrapper";
import Search from "@/components/Search";
import { FilterCompo } from "@/components/FilterCompo";
import { useDebounce } from "@/hooks/useDebounce";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const debouncedSearch = useDebounce(search, 400);
  const perPage = 9;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [articlesRes, categoriesRes] = await Promise.all([
          api.get("/articles"),
          api.get("/categories"),
        ]);
        setArticles(articlesRes.data.data);
        setCategories(categoriesRes.data.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const filteredArticles = useMemo(() => {
    let data = articles;

    if (selectedCategory !== "all") {
      data = data.filter((a) => a.category.id === selectedCategory);
    }

    if (debouncedSearch.trim()) {
      data = data.filter((a) =>
        a.title.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
    }

    return data;
  }, [articles, selectedCategory, debouncedSearch]);

  const totalPages = Math.ceil(filteredArticles.length / perPage);
  const paginatedArticles = filteredArticles.slice(
    (page - 1) * perPage,
    page * perPage
  );

  return (
    <div className="px-6">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Artikel & Kategori
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          Jelajahi artikel terbaru berdasarkan kategori & pencarian.
        </p>
      </header>

      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-8">
        <FilterCompo
          value={selectedCategory}
          onChange={(val) => {
            setSelectedCategory(val);
            setPage(1);
          }}
          categories={categories}
        />
        <Search
          labelSearch="Search by title..."
          onSearch={(value) => {
            setSearch(value);
            setPage(1);
          }}
        />
      </div>

      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-4">
        {paginatedArticles.map((item) => (
          <div
            key={item.id}
            className="flex flex-col space-y-2 overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 bg-white group border"
          >
            <div className="relative">
              {item.imageUrl ? (
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-52 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="h-52 w-full bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
                  No Image
                </div>
              )}
              <span className="absolute top-3 left-3 flex items-center gap-1 px-3 py-1 bg-indigo-600 text-white text-xs font-medium rounded-full shadow-md">
                <Tag size={14} /> {item.category.name}
              </span>
            </div>

            <CardHeader className="">
              <h2 className="text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-indigo-600 transition-colors duration-300">
                {item.title}
              </h2>
            </CardHeader>

            <CardContent className="flex-1 space-y-2">
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                {item.content}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                {formatDate(item.createdAt)}
              </p>
            </CardContent>

            <CardFooter className="flex justify-between items-center mb-4">
              <span className="text-sm text-slate-500">
                By {item.user.username}
              </span>
              <Button
                variant="ghost"
                size="sm"
                className="group-hover:bg-blue-50 group-hover:text-blue-600"
              >
                <Link href={`/user/article/view/${item.id}`} className="flex items-center">
                  Baca
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </Button>
            </CardFooter>
          </div>
        ))}
      </div>

      <PaginationWrapper current={page} total={totalPages} onChange={setPage} />
    </div>
  );
};

export default Page;
