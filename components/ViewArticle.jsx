"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { api } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { Loader } from "lucide-react";
import { dummyArticles } from "@/lib/dummy-data";

const ViewArticle = () => {
  const params = useParams();
  const articleId = params.id;
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/articles/${articleId}`);
        setArticle(response.data);
      } catch (err) {
        console.error(err);
        const dummy = dummyArticles.find((a) => a.id === articleId);
        setArticle(dummy);
      } finally {
        setLoading(false)
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="w-12 h-12 animate-spin text-gray-500" />
      </div>
    );
  }

  return (
    <>
      <h1 className="text-3xl text-center font-bold mb-6">View Article</h1>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{article.title}</CardTitle>
        </CardHeader>

        <CardContent className="space-y-2">
          {article.imageUrl && (
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-auto object-cover rounded-md"
            />
          )}
          <div
            className="p-2 bg-gray-100 rounded"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          <div className="text-sm text-gray-500">
            <span>Category: {article.category?.name}</span> |{" "}
            <span>Author: {article.user?.username}</span> |{" "}
            <span>
              Created at: {formatDate(article.createdAt)}
            </span>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ViewArticle;
