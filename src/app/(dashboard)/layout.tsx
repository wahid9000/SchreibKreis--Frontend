import { AppSidebar } from "@/components/layout/AppSidebar";
import Link from "next/link";
import { CircleUserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Button asChild variant="ghost" size="icon" aria-label="Open profile">
            <Link href="/profile">
              <CircleUserRound className="size-5" />
            </Link>
          </Button>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {children}
          <div className="min-h-screen flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
