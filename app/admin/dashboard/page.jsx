"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, Layers, Loader } from "lucide-react";
import { api, apiAuth } from "@/lib/api";
import { formatDate } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const DashboardPage = () => {
  const [category, setCategory] = useState([]);
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [articleRes, categoryRes] = await Promise.all([
          api.get("/articles"),
          api.get("/categories"),
        ]);
        setCategory(categoryRes.data);
        setArticle(articleRes.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const activyArtikel = article.data
    ? [...article.data].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      )
    : [];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="w-12 h-12 animate-spin text-gray-500" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-500">Ringkasan aktivitas dan data penting.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="shadow-md">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Articles</CardTitle>
            <FileText className="h-6 w-6 text-green-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{article.total}</p>
            <p className="text-sm text-gray-500">Total artikel saat ini.</p>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Categories</CardTitle>
            <Layers className="h-6 w-6 text-purple-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{category.totalData}</p>
            <p className="text-sm text-gray-500">Semua kategori aktif</p>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-md p-2">
        <div>
          <CardTitle>Artikel Terbaru</CardTitle>
        </div>
        <div>
          <div className="hidden md:block w-full">
            <Table className="w-full table-fixed border">
              <TableHeader className="bg-gray-100 dark:bg-gray-800">
                <TableRow>
                  <TableHead className="w-12 text-center text-xs sm:text-sm px-2 py-3 border">
                    No
                  </TableHead>
                  <TableHead className="text-xs sm:text-sm px-2 py-3 border truncate">
                    Judul
                  </TableHead>
                  <TableHead className="w-24 text-xs sm:text-sm px-2 py-3 border truncate">
                    Penulis
                  </TableHead>
                  <TableHead className="w-20 text-xs sm:text-sm px-2 py-3 border truncate">
                    Tanggal
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activyArtikel?.slice(0, 5).map((item, i) => (
                  <TableRow key={item.id}>
                    <TableCell className="text-center text-xs sm:text-sm px-2 py-3 border">
                      {i + 1}
                    </TableCell>
                    <TableCell
                      className="text-xs sm:text-sm px-2 py-3 border truncate"
                      title={item.title}
                    >
                      {item.title}
                    </TableCell>
                    <TableCell
                      className="text-xs sm:text-sm px-2 py-3 border truncate"
                      title={item.user.username}
                    >
                      {item.user.username}
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm px-2 py-3 border">
                      {formatDate(item.createdAt)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="md:hidden space-y-4">
            {activyArtikel?.slice(0, 5).map((item, i) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-lg border p-4 shadow-sm"
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    #{i + 1}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {formatDate(item.createdAt)}
                  </span>
                </div>

                <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2 line-clamp-2 leading-tight">
                  {item.title}
                </h4>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Penulis:
                  </span>
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                    {item.user.username}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {(!activyArtikel || activyArtikel.length === 0) && (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              <p className="text-sm">Belum ada artikel tersedia</p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default DashboardPage;
