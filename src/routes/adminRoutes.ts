import { FileEdit, FileText, LayoutDashboard } from "lucide-react";

export const adminRoutes = [
  {
    title: "Analytics",
    url: "/admin-dashboard/analytics",
    icon: LayoutDashboard,
  },
  {
    title: "Create New Blog",
    url: "/admin-dashboard/create-blog",
    icon: FileEdit,
  },
  {
    title: "All blogs",
    url: "/admin-dashboard/all-blogs",
    icon: FileText,
  },
];
