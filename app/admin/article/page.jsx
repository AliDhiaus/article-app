"use client";
import React, { useEffect, useState, useMemo } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Loader, Plus } from "lucide-react";
import { api, apiAuth } from "@/lib/api";
import TableData from "@/components/TableData";
import { labelArticle } from "@/lib/label-tabel";
import Search from "@/components/Search";
import { FilterCompo } from "@/components/FilterCompo";
import PaginationWrapper from "@/components/PaginationWrapper";
import { useRouter } from "next/navigation";
import { useDebounce } from "@/hooks/useDebounce";
import Swal from "sweetalert2";

const Page = () => {
  const [article, setArticle] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [current, setCurrent] = useState(1);
  const rowsPerPage = 5;
  const router = useRouter();

  const debouncedSearch = useDebounce(query, 400);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [articleRes, categoryRes] = await Promise.all([
          api.get("/articles"),
          api.get("/categories"),
        ]);

        setArticle(articleRes.data.data);
        setCategories(categoryRes.data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    setToken(Cookies.get("token"));
  }, []);

  const filtered = useMemo(() => {
    return article.filter((a) => {
      const matchCategory =
        selectedCategory === "all" || a.category.id === selectedCategory;
      const matchSearch = a.title
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [article, selectedCategory, debouncedSearch]);

  const totalPages = Math.ceil(filtered.length / rowsPerPage);
  const currentRows = filtered.slice(
    (current - 1) * rowsPerPage,
    current * rowsPerPage
  );

  const handleView = (id) => {
    router.push(`/admin/article/view/${id}`);
  };

  const handleEdit = (id) => {
    router.push(`/admin/article/edit/${id}`);
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
        await apiAuth(token).delete(`/articles/${id}`);
        setArticle((prev) => prev.filter((item) => item.id !== id));

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
      <div className="border-b-2">
        <h1 className="text-2xl font-bold">Manajemen Artikel</h1>
        <p className="text-gray-500 pb-2">
          Kelola artikel, kategori, dan konten terbaru dengan mudah.
        </p>
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
              setQuery(value);
              setCurrent(1);
            }}
          />
          <FilterCompo
            categories={categories}
            value={selectedCategory}
            onChange={setSelectedCategory}
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
          current={current}
          total={totalPages}
          onChange={setCurrent}
        />
      </div>
    </div>
  );
};

export default Page;
