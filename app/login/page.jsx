"use client";
import React, { useState } from "react";
import Cookies from "js-cookie";
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
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { loginSchema } from "@/lib/schemas";
import ButtonSubmit from "@/components/ButtonSubmit";
import { api } from "@/lib/api";

const LoginPage = () => {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/auth/login", data);
      Swal.fire({
        icon: "success",
        title: "Login berhasil",
        text: "Anda akan diarahkan ke halaman utama...",
        showConfirmButton: false,
        timer: 1500,
      });
      
      Cookies.set("token", response.data.token, { path: "/" });
      Cookies.set("role", response.data.role, { path: "/" });

      if (response.data.role === "Admin") {
        router.push("/admin/dashboard");
      } else {
        router.push("/user/home");
      }

    } catch (err) {
      console.log(err)
      Swal.fire({
        icon: "error",
        title: "Login gagal",
        text:
          err.response?.data?.message || "Terjadi kesalahan, coba lagi nanti.",
      });
    } 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
          Login
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 text-center">
          Enter your credentials to access your account
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
                      placeholder="Enter your username"
                      {...field}
                      className="mt-1"
                    />
                  </FormControl>
                  <FormDescription>Your account username.</FormDescription>
                  <FormMessage />
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
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        {...field}
                        className="mt-1 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex">
              <ButtonSubmit isSubmit={form.formState.isSubmitting} />
            </div>
          </form>
        </ShadcnForm>

        <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            Register
          </a>
        </p>
        <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
          <a
            href="/forgot-password"
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            Forgot password?
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
