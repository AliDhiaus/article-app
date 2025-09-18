"use client";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ButtonSubmit from "@/components/ButtonSubmit";
import FormArticle from "@/components/forms/FormArticle";
import { useParams, useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { apiAuth, apiFile } from "@/lib/api";
import { articleSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateArticle } from "@/app/redux/slices/DataSlice";
import { useDispatch } from "react-redux";
import PreviewModal from "@/components/PreviewModal";

const EditArticlePage = () => {
  const params = useParams();
  const articleId = params.id;
  const router = useRouter();
  const dispatch = useDispatch();

  const [previewData, setPreviewData] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [hasPreviewed, setHasPreviewed] = useState(false);

  const form = useForm({
    resolver: zodResolver(articleSchema),
    defaultValues: {
      title: "",
      content: "",
      categoryId: "",
      image: undefined,
    },
  });

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await apiAuth.get(`/articles/${articleId}`);
        const data = response.data;
        form.reset({
          title: data.title,
          content: data.content,
          categoryId: data.categoryId,
          image: undefined,
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

  const handlePreview = () => {
    const values = form.getValues();
    const imagePreview = values.image ? URL.createObjectURL(values.image) : values.imageUrl;

    setPreviewData({
      ...values,
      imageUrl: imagePreview,
    });

    setIsPreviewOpen(true);
    setHasPreviewed(true);
  };

  const onSubmit = async (data) => {
    if(!hasPreviewed) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Mohon pratinjau artikel terlebih dahulu sebelum submit.",
      })
      return;
    }
    try {
      await dispatch(updateArticle({ id: articleId, data })).unwrap();
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Artikel berhasil diupdate!",
        showConfirmButton: false,
        timer: 2000,
      });
      router.push("/admin/article");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err.message || "Terjadi kesalahan saat update artikel",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="border-b-2 pb-2 mb-4">
        <h1 className="text-2xl font-bold">Form Edit Artikel</h1>
        <p className="text-gray-500 text-sm">
          Lengkapi formulir di bawah ini untuk menambahkan artikel baru.
        </p>
      </div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormArticle form={form} />
          <div className="mt-4 flex gap-4">
            <button
              type="button"
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              onClick={handlePreview}
            >
              Preview
            </button>
            <ButtonSubmit isSubmit={form.formState.isSubmitting} />
          </div>
        </form>
      </FormProvider>
      {previewData && (
        <PreviewModal
          previewData={previewData}
          open={isPreviewOpen}
          setOpen={setIsPreviewOpen}
        />
      )}
    </div>
  );
};

export default EditArticlePage;
