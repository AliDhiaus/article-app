"use client";
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import ButtonSubmit from "@/components/ButtonSubmit";
import FormArticle from "@/components/forms/FormArticle";
import { useParams, useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { apiAuth, apiFile } from "@/lib/api";
import { articleSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";

const EditArticlePage = () => {
  const params = useParams();
  const articleId = params.id;
  const router = useRouter();
  
  const form = useForm({
    resolver: zodResolver(articleSchema),
    defaultValues: {
      title: "",
      content: "",
      categoryId: "",
      image: null,
    },
  });

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const token = Cookies.get("token");
        const response = await apiAuth(token).get(`/articles/${articleId}`);
        const data = response.data;
        form.reset({
          title: data.title,
          content: data.content,
          categoryId: data.categoryId,
          image: null,
          imageUrl: data.imageUrl,
        });
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: err.data,
        });
      }
    };

    if (articleId) fetchArticle();
  }, [articleId]);

  const onSubmit = async (data) => {
    let imageUrl = null;

    try {
      const token = Cookies.get("token");

      if (data.image instanceof File) {
        const formData = new FormData();
        formData.append("image", data.image);
        const uploadRes = await apiFile(token).post("/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        imageUrl = uploadRes.data.imageUrl;
      }

      const payload = {
        title: data.title,
        content: data.content,
        categoryId: data.categoryId,
      };

      if (imageUrl) {
        payload.imageUrl = imageUrl; 
      }

      await apiAuth(token).put(`/articles/${articleId}`, payload);

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Artikel berhasil diupdate!",
        showConfirmButton: false,
        timer: 2000,
      });

      router.push("/admin/article");
    } catch (err) {
      console.error("Update failed:", err.response?.data || err.message);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `${err.response?.data?.message || err.message}`,
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="border-b-2 pb-2 mb-4">
        <h1 className="text-2xl font-bold">Edit Artikel</h1>
        <p className="text-gray-500 text-sm">
          Lengkapi formulir di bawah ini untuk menambahkan artikel baru.
        </p>
      </div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormArticle form={form} />
          <div className="mt-4 flex">
            <ButtonSubmit isSubmit={form.formState.isSubmitting} />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default EditArticlePage;
