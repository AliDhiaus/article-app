import { Content } from "@radix-ui/react-menubar";

const { z } = require("zod");

export const registerSchema = z.object({
  username: z.string().min(3, "Username minimal 3 karakter"),
  password: z
    .string()
    .min(6, "Password minimal 6 karakter")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
      "Password harus mengandung huruf besar, huruf kecil, angka, dan simbol"
    ),
  role: z.enum(["Admin", "User"], { required_error: "Silakan pilih role" }),
});

export const loginSchema = z.object({
  username: z.string().min(3, "Username minimal 3 karakter"),
  password: z
    .string()
    .min(3, "Password minimal 6 karakter")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
      "Password harus mengandung huruf besar, huruf kecil, angka, dan simbol"
    ),
});

export const categorySchema = z.object({
    name: z.string().min(3, "Username minimal 3 karakter"),
})

export const articleSchema = z.object({
  title: z.string().min(3, "Judul minimal 3 karakter"),
  content: z
    .string()
    .min(3, "Konten minimal 3 karakter")
    .max(255, "Konten maksimal 255 karakter"),
  categoryId: z.string().nonempty("Kategori harus dipilih"),
  image: z
    .instanceof(File)
    .optional()
    .refine(
      (file) =>
        !file || ["image/png", "image/jpeg", "image/jpg", "image/svg+xml"].includes(file.type),
      { message: "Hanya menerima file PNG, JPG, JPEG, atau SVG" }
    ),
});