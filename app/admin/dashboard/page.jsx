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
        setLoading(false)
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

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Artikel Terbaru</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table className="w-full text-sm text-left border">
              <TableHeader className="bg-gray-100 dark:bg-gray-800">
                <TableRow>
                  <TableHead className="px-4 py-2 border">No</TableHead>
                  <TableHead className="px-4 py-2 border">Judul</TableHead>
                  <TableHead className="px-4 py-2 border">Penulis</TableHead>
                  <TableHead className="px-4 py-2 border">Tanggal</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activyArtikel?.slice(0, 5).map((item, i) => (
                  <TableRow key={item.id}>
                    <TableCell className="px-4 py-2 border">{++i}</TableCell>
                    <TableCell className="px-4 py-2 border w-full text-wrap truncate">
                      {item.title}
                    </TableCell>
                    <TableCell className="px-4 py-2 border">
                      {item.user.username}
                    </TableCell>
                    <TableCell className="px-4 py-2 border">
                      {formatDate(item.createdAt)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardPage;
