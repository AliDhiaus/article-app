import React from "react";
import Link from "next/link";
import { Star } from "lucide-react";
import { formatDate } from "@/lib/utils";

const CardArtikel = ({ paginatedArticles, toggleFavorite, isFavorite, isGuest }) => {
  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6 mt-6">
      {paginatedArticles.map((item) => (
        <div
          key={item.id}
          className="flex flex-col space-y-2 overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 bg-white dark:bg-slate-900 dark:text-white border group"
        >
          <div className="relative isolate">
            {item.imageUrl ? (
              <Link href={isGuest ? `/guest/${item.id}` : `home/article/${item.id}`} className="block">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-52 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
            ) : (
              <Link
                href={`home/article/${item.id}`}
                className="h-52 w-full bg-gray-100 flex items-center justify-center text-gray-400 text-sm dark:bg-slate-800"
              >
                No Image
              </Link>
            )}

            <div className="absolute p-2 top-0 right-0">
              <button
                onClick={() => toggleFavorite(item.id)}
                className="p-2 rounded-full bg-white shadow hover:bg-pink-50"
              >
                <Star
                  size={18}
                  fill={isFavorite(item.id) ? "currentColor" : "none"}
                  className={`transition-colors ${
                    isFavorite(item.id) ? "text-red-500" : "text-gray-500"
                  }`}
                />
              </button>
            </div>
          </div>

          <Link href={`home/article/${item.id}`} className="flex flex-col p-4">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
              {formatDate(item.createdAt)}
            </p>
            <h2 className="text-lg font-semibold line-clamp-2 group-hover:text-indigo-600 transition-colors duration-300">
              {item.title}
            </h2>
            <div
              className="prose prose-sm max-w-none line-clamp-3 mt-2 text-gray-700 dark:text-gray-300"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />

            <div className="mt-4">
              <p className="bg-blue-50 px-2 py-1 font-semibold rounded-full text-xs text-blue-600 dark:bg-blue-950 dark:text-blue-400 w-fit">
                {item.category.name}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CardArtikel;
