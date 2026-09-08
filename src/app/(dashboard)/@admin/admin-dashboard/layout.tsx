import { redirect } from "next/navigation";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = { role: "admin" }; //TODO: Replace with actual user info

  if (user.role !== "admin") {
    redirect("/dashboard");
  }

  return children;
}
