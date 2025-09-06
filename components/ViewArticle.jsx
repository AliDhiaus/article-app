"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { api } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";

const ViewArticle = () => {
  const params = useParams();
  const articleId = params.id;
  const [article, setArticle] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/articles/${articleId}`);
        setArticle(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
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
          <p>{article.content}</p>
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
