import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]


export function AppSidebar() {
  useGSAP(() => {
    gsap.fromTo(
      ".animate-sidebar",
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
      }
    )
  })
  return (
    <Sidebar variant="floating" collapsible="icon" className=" animate-sidebar  py-3 ">
      <SidebarContent className="rounded-lg">
        <SidebarGroup>
          <SidebarGroupLabel className="mt-2 mb-4 space-x-1 flex items-center baseline">
            <h1 className="text-3xl italic font-bold">RBAC</h1>
            <img className="h-10 w-10 rounded-full mix-blend-darken rotate-90" src="https://thumbs.dreamstime.com/b/rocket-logo-icon-design-template-340699309.jpg" alt="" />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton className="hover:bg-[#0285da]/40 font-medium text-black" asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
