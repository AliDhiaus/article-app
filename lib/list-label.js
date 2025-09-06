import { Folder, Home, Newspaper } from "lucide-react"

export const listNavUser = [
    {
        path: "/user/home",
        label: "Home",
    },
    {
        path: "/user/article",
        label: "Article",
    },
]

export const listNavAdmin = [
    {
        path: "/admin/dashboard",
        label: "Dashboard",
        icon: <Home className="w-5 h-5"/>,
    },
    {
        path: "/admin/article",
        label: "Article",
        icon: <Newspaper className="w-5 h-5"/>,
    },
    {
        path: "/admin/category",
        label: "Category",
        icon: <Folder className="w-5 h-5"/>
    }
] 
