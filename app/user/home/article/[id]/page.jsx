import ViewArticle from "@/components/ViewArticle";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-2xl p-6">
        <Link
          href="/user/home"
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
        <ViewArticle />
      </div>
    </div>
  );
};

export default page;
