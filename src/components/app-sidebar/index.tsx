"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "React Hooks实践",
    url: "",
    children: [
      { title: "state", url: "/todolist" },
      { title: "reducer", url: "/todolist-reducer" },
      { title: "reducer和context", url: "/todolist-all" },
      { title: "test", url: "/test" },
    ],
  },
];

export default function AppSidebar() {
  const pathname = usePathname();

  // 只通过点击控制展开
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const handleParentClick = (title: string) => {
    setOpenMenus((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const hasChildren = !!item.children?.length;
                const isOpen = openMenus[item.title] || false;

                // 只给当前路径对应菜单加粗，不给父菜单加粗
                const isActive = pathname === item.url;

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      onClick={(e) => {
                        if (hasChildren) {
                          e.preventDefault(); // 阻止跳转，改为展开收起
                          handleParentClick(item.title);
                        }
                      }}
                      asChild
                    >
                      <Link
                        href={item.url}
                        className={`flex items-center ${
                          isActive ? "font-bold" : ""
                        }`}
                      >
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>

                    {hasChildren && isOpen && (
                      <SidebarMenu>
                        {item.children!.map((child) => {
                          const isChildActive = pathname === child.url;
                          return (
                            <SidebarMenuItem key={child.title}>
                              <SidebarMenuButton asChild>
                                <Link
                                  href={child.url}
                                  className={`block pl-6 ${
                                    isChildActive ? "font-bold" : ""
                                  }`}
                                >
                                  {child.title}
                                </Link>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          );
                        })}
                      </SidebarMenu>
                    )}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
