"use client";
import React, { useState } from "react";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import FormArticle from "@/components/forms/FormArticle";
import { FormProvider, useForm } from "react-hook-form";
import ButtonSubmit from "@/components/ButtonSubmit";
import { useRouter } from "next/navigation";
import { apiAuth, apiFile } from "@/lib/api";
import { articleSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import PreviewModal from "@/components/PreviewModal";
import { useDispatch } from "react-redux";
import { addArticle } from "@/app/redux/slices/DataSlice";

const Page = () => {
  const form = useForm({
    resolver: zodResolver(articleSchema),
    defaultValues: {
      title: "",
      content: "",
      categoryId: "",
      image: null,
    },
  });
  const dispatch = useDispatch();
  const [previewData, setPreviewData] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [hasPreviewed, setHasPreviewed] = useState(false);
  const router = useRouter();

  const handlePreview = () => {
    const values = form.getValues();
    const imagePreview = values.image ? URL.createObjectURL(values.image) : null;

    setPreviewData({
      ...values,
      imageUrl: imagePreview,
    });

    setIsPreviewOpen(true); 
    setHasPreviewed(true);
  };

  const onSubmit = async (data) => {
    let imageUrl = null;
    if (!hasPreviewed) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Mohon pratinjau artikel terlebih dahulu sebelum submit.",
      })
      return
    }
    try {
      console.log(data)
      await dispatch(addArticle(data)).unwrap();
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
        <h1 className="text-2xl font-bold">Form Tambah Artikel</h1>
        <p className="text-gray-500 text-sm">
          Lengkapi formulir di bawah ini untuk menambahkan artikel baru.
        </p>
      </div>

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormArticle form={form} />

          <div className="mt-4 flex gap-2">
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

export default Page;
