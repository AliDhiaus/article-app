"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import TableData from "@/components/TableData";
import Search from "@/components/Search";
import ButtonSubmit from "@/components/ButtonSubmit";
import FormCategory from "@/components/forms/FormCategory";
import { labelCategory } from "@/lib/label-tabel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PaginationWrapper from "@/components/PaginationWrapper";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { categorySchema } from "@/lib/schemas";
import { api, apiAuth } from "@/lib/api";
import { Loader } from "lucide-react";

const page = () => {
  const form = useForm({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: "",
    },
  });

  const [editingCategory, setEditingCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [token, setToken] = useState(null);
  const [current, setCurrent] = useState(1);
  const [isSubmit, setIsSubmit] = useState(false);
  const rowsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/categories");
        setCategories(response.data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    setToken(Cookies.get("token"));
  }, []);

  const filteredCategories = categories.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCategories.length / rowsPerPage);
  const currentRows = filteredCategories.slice(
    (current - 1) * rowsPerPage,
    current * rowsPerPage
  );

  const onSubmit = async (data) => {
    setIsSubmit(true);
    try {
      if (editingCategory) {
        await apiAuth(token).put(`/categories/${editingCategory.id}`, data);

        setCategories((prev) =>
          prev.map((item) =>
            item.id === editingCategory.id ? { ...item, ...data } : item
          )
        );

        Swal.fire({
          icon: "success",
          title: "Category berhasil diupdate",
          timer: 2000,
        });

        setEditingCategory(null);
        form.reset({ name: "" });
      } else {
        const response = await apiAuth(token).post("/categories", data);

        setCategories((prev) => [...prev, response.data]);

        Swal.fire({
          icon: "success",
          title: "Category berhasil ditambahkan",
          timer: 2000,
        });

        form.reset({ name: "" });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `Terjadi Kelasalahan : ${err}`,
        timer: 2000,
      });
    } finally {
      setIsSubmit(false);
    }
  };

  const handleEdit = async (id) => {
    const category = categories.find((c) => c.id === id);
    if (!category) return;
    setEditingCategory(category);
    form.reset({
      name: category.name,
    });
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Data kategori akan dihapus secara permanen!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    });

    if (result.isConfirmed) {
      try {
        await apiAuth(token).delete(`/categories/${id}`);

        setCategories((prev) => prev.filter((item) => item.id !== id));

        Swal.fire({
          icon: "success",
          title: "Terhapus!",
          text: "Kategori berhasil dihapus.",
          timer: 2000,
        });
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: `Terjadi kesalahan: ${err}`,
          timer: 2000,
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
    <div className="flex flex-col gap-4">
      <div className="border-b-2">
        <h1 className="text-2xl font-bold">Manajemen Categori</h1>
        <p className="text-gray-500 pb-2">Kelola data kategori dengan mudah.</p>
      </div>
      <Card className="flex-1">
        <CardHeader>
          <CardTitle className="border-b-2 pb-2">
            {editingCategory ? "Form Edit Category" : "Form Add Category"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormCategory form={form} />
              <div className="flex gap-4 mt-4">
                {editingCategory && (
                  <Button
                    type="button"
                    onClick={() => {
                      setEditingCategory(null);
                      form.reset({ name: "" });
                    }}
                    className="flex-1 py-3 font-semibold rounded-lg shadow-md bg-gray-300 text-gray-700 hover:bg-gray-400 transition"
                  >
                    Cancel
                  </Button>
                )}
                <ButtonSubmit isSubmit={isSubmit} />
              </div>
            </form>
          </FormProvider>
        </CardContent>
      </Card>
      <Card className="flex-2">
        <CardHeader className="flex justify-between items-center">
          <CardTitle>Category List</CardTitle>
          <Search
            labelSearch="Search by name..."
            onSearch={(value) => {
              setQuery(value);
              setCurrent(1);
            }}
          />
        </CardHeader>
        <CardContent>
          <TableData
            rows={currentRows}
            columns={labelCategory}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
          <PaginationWrapper
            current={current}
            total={totalPages}
            onChange={setCurrent}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
