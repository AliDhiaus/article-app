import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { api } from "@/lib/api";

const FormArticle = ({ form }) => {
  const [category, setCategory] = useState([]);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/categories");
        setCategory(response.data.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gray-800 dark:text-gray-100 font-semibold">
              Judul Artikel
            </FormLabel>
            <FormControl>
              <Input
                placeholder="Masukkan judul artikel"
                {...field}
                className="mt-1 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </FormControl>
            <FormMessage className="text-sm text-red-500" />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="content"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gray-800 dark:text-gray-100 font-semibold">
              Konten
            </FormLabel>
            <FormControl>
              <Textarea
                placeholder="Tulis isi artikel..."
                {...field}
                className="mt-1 min-h-[120px] rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </FormControl>
            <FormMessage className="text-sm text-red-500" />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="categoryId"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gray-800 dark:text-gray-100 font-semibold">
              Kategori
            </FormLabel>
            <FormControl>
              <Select value={field.value || ""} onValueChange={field.onChange}>
                <SelectTrigger className="w-full rounded-lg focus:ring-2 focus:ring-blue-500">
                  <SelectValue placeholder="Pilih kategori" />
                </SelectTrigger>
                <SelectContent>
                  {category.map((item) => (
                    <SelectItem key={item.id} value={item.id || 0}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage className="text-sm text-red-500" />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="image"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gray-800 dark:text-gray-100 font-semibold">
              Gambar Artikel
            </FormLabel>
            <FormControl>
              <Input
                type="file"
                accept="image/*"
                className="rounded-lg focus:ring-2 focus:ring-blue-500"
                onChange={(e) => {
                  const file = e.target.files[0];
                  field.onChange(file);
                  if (file) {
                    setPreview(URL.createObjectURL(file));
                  } else {
                    setPreview(null);
                  }
                }}
              />
            </FormControl>

            {(preview || form.getValues("imageUrl")) && (
              <div className="mt-3">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                  Preview Gambar:
                </p>
                <img
                  src={preview || form.getValues("imageUrl")}
                  alt="Preview"
                  className="h-40 w-auto rounded-lg border object-cover"
                />
              </div>
            )}

            <FormMessage className="text-sm text-red-500" />
          </FormItem>
        )}
      />
    </div>
  );
};

export default FormArticle;
