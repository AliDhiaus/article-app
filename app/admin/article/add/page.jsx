"use client";
import React from "react";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import FormArticle from "@/components/forms/FormArticle";
import { FormProvider, useForm } from "react-hook-form";
import ButtonSubmit from "@/components/ButtonSubmit";
import { useRouter } from "next/navigation";
import { apiAuth, apiFile } from "@/lib/api";
import { articleSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";

const page = () => {
  const form = useForm({
    resolver: zodResolver(articleSchema),
    defaultValues: {
      title: "",
      content: "",
      categoryId: "",
      image: null,
    },
  });
  const router = useRouter();

  const onSubmit = async (data) => {
    let imageUrl = null;
    const token = Cookies.get("token");
    try {
      if (data.image) {
        const formData = new FormData();
        formData.append("image", data.image);
        const uploadRes = await apiFile(token).post("/upload", formData);
        imageUrl = uploadRes.data.imageUrl;
      }

      const response = await apiAuth(token).post("/articles", {
        title: data.title,
        content: data.content,
        categoryId: data.categoryId,
        imageUrl: imageUrl,
      });

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Article berhasil ditambahkan!",
        showConfirmButton: false,
        timer: 2000,
      });
      router.push("/admin/article");
    } catch (err) {
      console.error("Submit failed:", err.response?.data || err.message);
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
        <h1 className="text-2xl font-bold">Tambah Artikel</h1>
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

export default page;
