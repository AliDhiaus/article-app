"use client";
import React from 'react'
import Link from 'next/link'
import ViewArticle from '@/components/ViewArticle'
import { ArrowLeft } from 'lucide-react';

const page = () => {
  return (
    <div className="min-h-screen p-10">
      <Link
        href="/"
        className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </Link>
      <ViewArticle />
    </div>
  )
}

export default page