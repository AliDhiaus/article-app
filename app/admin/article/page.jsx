"use client";
import React, { useEffect, useMemo } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { Loader, Plus } from "lucide-react";
import TableData from "@/components/TableData";
import { labelArticle } from "@/lib/label-tabel";
import Search from "@/components/Search";
import { FilterCompo } from "@/components/FilterCompo";
import PaginationWrapper from "@/components/PaginationWrapper";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import {
  fetchArticlesAndCategories,
  setSelectedCategory,
  setSearch,
  setPage,
  deleteArticle,
} from "@/app/redux/slices/DataSlice";

const Page = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  
  const { articles, categories, selectedCategory, search, page } = useSelector(
    (state) => state.data
  );
  
  const loading = useSelector((state) => state.ui.loading);

  const rowsPerPage = 10;

  useEffect(() => {
    dispatch(fetchArticlesAndCategories());
  }, [dispatch]);

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const matchCategory =
        selectedCategory === "all" || String(a.category.id) === String(selectedCategory);
      const matchSearch = (a.title || "").toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [articles, selectedCategory, search]);

  const totalPages = Math.ceil(filtered.length / rowsPerPage);
  const currentRows = filtered.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handleView = (id) => {
    router.push(`/admin/article/${id}/view`);
  };

  const handleEdit = (id) => {
    router.push(`/admin/article/${id}/edit`);
  };

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Apakah kamu yakin?",
      text: "Data artikel ini akan dihapus permanen!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    });

    if (confirm.isConfirmed) {
      try {
        await dispatch(deleteArticle(id)).unwrap();
        Swal.fire({
          icon: "success",
          title: "Terhapus!",
          text: "Artikel berhasil dihapus.",
          showConfirmButton: false,
          timer: 2000,
        });
      } catch (err) {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "Gagal!",
          text: err.response?.data?.message || "Gagal menghapus artikel.",
        });
      }
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="w-12 h-12 animate-spin text-gray-500" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="border-b-2 p-2">
        <h1 className="text-2xl font-bold">Total Articles: {articles.length}</h1>
      </div>
      <div className="flex justify-between items-center">
        <Button
          asChild
          className="bg-blue-600 hover:bg-blue-900 px-4 py-2 dark:bg-blue-300"
        >
          <Link href="/admin/article/add">
            <Plus className="w-5 h-5" />
            <span className="hidden md:flex">Article</span>
          </Link>
        </Button>

        <div className="flex gap-2">
          <Search
            labelSearch="Search by title..."
            onSearch={(value) => {
              dispatch(setSearch(value));
              dispatch(setPage(1));
            }}
          />
          <FilterCompo
            categories={categories}
            value={selectedCategory}
            onChange={(val) => dispatch(setSelectedCategory(val))}
          />
        </div>
      </div>

      <div>
        <TableData
          columns={labelArticle}
          rows={currentRows}
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        <PaginationWrapper
          current={page}
          total={totalPages}
          onChange={(val) => dispatch(setPage(val))}
        />
      </div>
    </div>
  );
};

export default Page;
