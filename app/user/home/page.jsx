"use client";
import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "@/components/Navbar";
import { CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Star, Loader } from "lucide-react";
import { formatDate } from "@/lib/utils";
import PaginationWrapper from "@/components/PaginationWrapper";
import Search from "@/components/Search";
import { FilterCompo } from "@/components/FilterCompo";
import { useDebounce } from "@/hooks/useDebounce";
import Link from "next/link";
import {
  fetchArticlesAndCategories,
  setSelectedCategory,
  setSearch,
  setPage,
} from "@/app/redux/slices/DataSlice";
import { useFavorites } from "@/hooks/useFavorite";

const Page = () => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const dispatch = useDispatch();
  const { articles, categories, selectedCategory, search, page } = useSelector(
    (state) => state.data
  );
  const loading = useSelector((state) => state.ui.loading);
  const debouncedSearch = useDebounce(search, 400);
  const perPage = 9;

  useEffect(() => {
    dispatch(fetchArticlesAndCategories());
  }, [dispatch]);

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

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="w-12 h-12 animate-spin" />
      </div>
    );
  }

  return (
    <>
      <div
        className="flex flex-col justify-center items-center text-center gap-2  
             p-4 text-white inset-0 bg-black/50"
        style={{
          backgroundImage: "url('/images/metaverse.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
        <p className="text-sm">Blog genzet</p>
        <h1 className="text-3xl">The Journal : Design Resources</h1>
        <h1 className="text-3xl">Iterviews, and Indeustry News</h1>
        <p className="text-sm">Your daily dose of design insights!</p>
        <div className="flex items-center space-x-4">
          <Search
            labelSearch="Cari Artikel..."
            onSearch={(value) => dispatch(setSearch(value))}
          />

          <FilterCompo
            categories={categories}
            selected={selectedCategory}
            onChange={(id) => dispatch(setSelectedCategory(id))}
          />
        </div>
      </div>
      <div className="px-6">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6 mt-6">
          {paginatedArticles.map((item) => (
            <div
              key={item.id}
              className="flex flex-col space-y-2 overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 bg-white dark:bg-slate-900 dark:text-white border group"
            >
              <div className="relative isolate">
                {item.imageUrl ? (
                  <Link href={`home/article/${item.id}`} className="block">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="h-52 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                ) : (
                  <Link
                    href={`home/article/${item.id}`}
                    className="h-52 w-full bg-gray-100 flex items-center justify-center text-gray-400 text-sm dark:bg-slate-800"
                  >
                    No Image
                  </Link>
                )}

                <div className="absolute p-2 top-0 right-0">
                  <button
                    onClick={() => toggleFavorite(item.id)}
                    className="p-2 rounded-full bg-white shadow hover:bg-pink-50"
                  >
                    <Star
                      size={18}
                      fill={isFavorite(item.id) ? "currentColor" : "none"}
                      className={`transition-colors ${
                        isFavorite(item.id) ? "text-red-500" : "text-gray-500"
                      }`}
                    />
                  </button>
                </div>
              </div>

              <Link
                href={`home/article/${item.id}`}
                className="flex flex-col p-4"
              >
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                  {formatDate(item.createdAt)}
                </p>
                <h2 className="text-lg font-semibold line-clamp-2 group-hover:text-indigo-600 transition-colors duration-300">
                  {item.title}
                </h2>
                <div
                  className="prose prose-sm max-w-none line-clamp-3 mt-2 text-gray-700 dark:text-gray-300"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />

                <div className="mt-4">
                  <p className="bg-blue-50 px-2 py-1 font-semibold rounded-full text-xs text-blue-600 dark:bg-blue-950 dark:text-blue-400 w-fit">
                    {item.category.name}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <PaginationWrapper
          totalPages={totalPages}
          currentPage={page}
          onPageChange={(p) => dispatch(setPage(p))}
        />
      </div>
    </>
  );
};

export default Page;
