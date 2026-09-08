import * as React from "react";
import Link from "next/link";
import {
  FileEdit,
  FileText,
  LayoutDashboard,
  LucideProps,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

export type NavigationItem = {
  title: string;
  url: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  badge?: string | number;
};

const data = {
  primaryNav: [
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
  ],
  managementNav: [{ title: "Settings", url: "/settings", icon: Settings }],
};

function NavigationItems({
  items,
}: {
  items: (typeof data.primaryNav)[number][];
}) {
  return (
    <SidebarMenu>
      {items.map((item: NavigationItem) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild tooltip={item.title}>
            <Link href={item.url}>
              <item.icon />
              <span>{item.title}</span>
            </Link>
          </SidebarMenuButton>
          {item.badge ? (
            <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
          ) : null}
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}

const brand = {
  name: "Schreibkreis",
  description: "Writer workspace",
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="border-b">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard">
                <span className="flex size-8 items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground">
                  S
                </span>
                <span className="flex min-w-0 flex-col text-left">
                  <span className="truncate font-semibold">{brand.name}</span>
                  <span className="truncate text-xs text-muted-foreground">
                    {brand.description}
                  </span>
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarGroupContent>
            <NavigationItems items={data.primaryNav} />
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Manage</SidebarGroupLabel>
          <SidebarGroupContent>
            <NavigationItems items={data.managementNav} />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/">
                <span className="size-2 rounded-full bg-emerald-500" />
                <span>View live site</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
