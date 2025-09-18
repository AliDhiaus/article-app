"use client";
import React, { useMemo, useState } from "react";
import CardArtikel from "@/components/CardArtikel";
import { FilterCompo } from "@/components/FilterCompo";
import Search from "@/components/Search";
import { useFavorites } from "@/hooks/useFavorite";
import { dummyArticles, dummyCategories } from "@/lib/dummy-data";
import PaginationWrapper from "@/components/PaginationWrapper";
import Link from "next/link";

export default function Home() {
  const { toggleFavorite, isFavorite } = useFavorites();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  
  const handleSearch = (value) => {
    setSearch(value);
    setPage(1);
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    setSearch("");
    setPage(1);
  };

  const filteredArticles = useMemo(() => {
    let data = dummyArticles;

    if (search.trim()) {
      data = data.filter((a) =>
        a.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedCategory !== "all") {
      data = data.filter((a) => a.category.id === selectedCategory);
    }
    
    return data;
  }, [search, selectedCategory]);

  const totalPages = Math.ceil(filteredArticles.length / 9);
  const paginatedArticles = filteredArticles.slice((page - 1) * 9, page * 9);

  return (
    <div className="font-sans min-h-screen p-8">
      <header className="mb-12 flex flex-col items-center text-center gap-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-10 rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-md">
          Selamat Datang di Blog App
        </h1>
        <p className="text-lg md:text-xl drop-shadow-sm">
          Aplikasi blog sederhana yang dibuat dengan Next.js dan Tailwind CSS.
        </p>
        <p className="text-sm italic text-white/80">
          Anda sedang masuk sebagai tamu.
        </p>
        <Link
          href="/login"
          className="mt-4 inline-block bg-white text-purple-600 font-semibold px-6 py-2 rounded-full shadow-md hover:bg-purple-50 transition-colors"
        >
          Login
        </Link>
      </header>

      <section className="mb-8 flex justify-between">
        <Search onSearch={handleSearch} labelSearch="Cari artikel..." />
        <FilterCompo onChange={handleCategoryChange} value={selectedCategory} categories={dummyCategories} />
      </section>

      <section>
        <CardArtikel paginatedArticles={paginatedArticles} toggleFavorite={toggleFavorite} isFavorite={isFavorite} isGuest={true}/>
        <PaginationWrapper total={totalPages} current={page} onChange={(page) => setPage(page)} />
      </section>
    </div>
  );
}
