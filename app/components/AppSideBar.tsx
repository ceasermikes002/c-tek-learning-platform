"use client";

import { 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  Calendar, 
  MessageSquare, 
  Bell, 
  Settings, 
  User,
  Bookmark,
  GraduationCap,
  BarChart,
  FileText,
  DollarSign
} from "lucide-react";
import { useSession } from "next-auth/react";
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

export function AppSidebar() {
  const { data: session } = useSession();
  console.log(session);
  const pathname = usePathname();
  const isLearner = session?.user?.role === "LEARNER";

  const learnerItems = [
    {
      group: "Learning",
      items: [
        {
          title: "Dashboard",
          url: "/dashboard",
          icon: LayoutDashboard,
        },
        {
          title: "My Courses",
          url: "/my-courses", 
          icon: BookOpen,
        },
        {
          title: "Find Mentors",
          url: "/mentors",
          icon: Users,
        },
        {
          title: "Class Schedule",
          url: "/schedule",
          icon: Calendar,
        },
      ]
    },
    {
      group: "Resources",
      items: [
        {
          title: "Messages",
          url: "/messages",
          icon: MessageSquare,
        },
        {
          title: "Saved Courses",
          url: "/saved",
          icon: Bookmark,
        },
      ]
    }
  ];

  const mentorItems = [
    {
      group: "Teaching",
      items: [
        {
          title: "Dashboard",
          url: "/dashboard",
          icon: LayoutDashboard,
        },
        {
          title: "My Students",
          url: "/my-students",
          icon: Users,
        },
        {
          title: "Course Management",
          url: "/course-management",
          icon: BookOpen,
        },
        {
          title: "Teaching Schedule", 
          url: "/schedule",
          icon: Calendar,
        },
      ]
    },
    {
      group: "Business",
      items: [
        {
          title: "Messages",
          url: "/messages",
          icon: MessageSquare,
        },
        {
          title: "Analytics",
          url: "/analytics",
          icon: BarChart,
        },
        {
          title: "Earnings",
          url: "/earnings",
          icon: DollarSign,
        },
        {
          title: "Resources",
          url: "/resources",
          icon: FileText,
        }
      ]
    }
  ];

  const commonItems = [
    {
      group: "Account",
      items: [
        {
          title: "Notifications",
          url: "/notifications",
          icon: Bell,
        },
        {
          title: "Profile",
          url: "/dashboard/profile",
          icon: User,
        },
        {
          title: "Settings",
          url: "/dashboard/settings",
          icon: Settings,
        }
      ]
    }
  ];

  const menuGroups = [...(isLearner ? learnerItems : mentorItems), ...commonItems];

  return (
    <Sidebar className="border-r border-gray-200 bg-white">
      <SidebarContent>
        <div className="p-4">
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="w-8 h-8 text-[#f79920]" />
            <span className="text-xl font-bold">EduPlatform</span>
          </Link>
        </div>
        {menuGroups.map((group, index) => (
          <SidebarGroup key={index}>
            <SidebarGroupLabel className="px-4 py-2 text-sm font-medium text-gray-500">
              {group.group}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                        pathname === item.url
                          ? "bg-[#f79920] bg-opacity-10 text-[#f79920]"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <Link href={item.url}>
                        <div className="flex items-center space-x-3">
                          <item.icon className="w-5 h-5" />
                          <span>{item.title}</span>
                        </div>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
