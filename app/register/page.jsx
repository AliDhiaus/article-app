"use client";
import React from "react";
import {
  Form as ShadcnForm,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import {registerSchema} from "../../lib/schemas";
import { api } from "@/lib/api";

const RegisterPage = () => {
  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      password: "",
      role: "User",
    },
  });
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/auth/register", data);
      Swal.fire({
        icon: "success",
        title: "Registrasi berhasil",
        text: "Akun Anda berhasil dibuat!",
        showConfirmButton: false,
        timer: 2000,
      });
      router.push("/login");
    } catch (err) {
      const errorData = err.response?.data?.error || "";
      if (errorData.includes("Unique constraint failed")) {
        Swal.fire({
          icon: "warning",
          title: "Username sudah digunakan",
          text: "Silakan coba dengan username lain.",
        });
        form.setValue("username", ""); 
      } else {
        Swal.fire({
          icon: "error",
          title: "Registrasi gagal",
          text:
            err.response?.data?.message ||
            "Terjadi kesalahan, coba lagi nanti.",
        });
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
          Create Account
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 text-center">
          Fill in the information below to create your account
        </p>

        <ShadcnForm {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 dark:text-gray-200 font-medium">
                    Username
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter username"
                      {...field}
                      className="mt-1"
                    />
                  </FormControl>
                  <FormDescription>Your public display name.</FormDescription>
                  <FormMessage>
                    {form.formState.errors.username?.message}
                  </FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 dark:text-gray-200 font-medium">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter password"
                      {...field}
                      className="mt-1"
                    />
                  </FormControl>
                  <FormDescription>Minimum 6 unik characters.</FormDescription>
                  <FormMessage>
                    {form.formState.errors.password?.message}
                  </FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 dark:text-gray-200 font-medium">
                    Role
                  </FormLabel>
                  <FormControl>
                    <div className="flex space-x-4 mt-2">
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          value="User"
                          checked={field.value === "User"}
                          onChange={() => field.onChange("User")}
                        />
                        <span>User</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          value="Admin"
                          checked={field.value === "Admin"}
                          onChange={() => field.onChange("Admin")}
                        />
                        <span>Admin</span>
                      </label>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 transition"
            >
              Register
            </Button>
          </form>
        </ShadcnForm>

        <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
