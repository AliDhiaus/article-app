"use client";
import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "@/components/Navbar";
import { Loader } from "lucide-react";
import PaginationWrapper from "@/components/PaginationWrapper";
import Search from "@/components/Search";
import { FilterCompo } from "@/components/FilterCompo";
import { useDebounce } from "@/hooks/useDebounce";
import {
  fetchArticlesAndCategories,
  setSelectedCategory,
  setSearch,
  setPage,
} from "@/app/redux/slices/DataSlice";
import { useFavorites } from "@/hooks/useFavorite";
import CardArtikel from "@/components/CardArtikel";

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
        <CardArtikel paginatedArticles={paginatedArticles} toggleFavorite={toggleFavorite} isFavorite={isFavorite} isGuest={false}/>
        <PaginationWrapper
          total={totalPages}
          current={page}
          onChange={(p) => dispatch(setPage(p))}
        />
      </div>
    </>
  );
};

export default Page;
