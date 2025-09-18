import { Newspaper, Tag } from "lucide-react"

export const listNavAdmin = [
    {
        path: "/admin/article",
        label: "Article",
        icon: <Newspaper className="w-5 h-5"/>,
    },
    {
        path: "/admin/category",
        label: "Category",
        icon: <Tag className="w-5 h-5"/>
    }
] 
