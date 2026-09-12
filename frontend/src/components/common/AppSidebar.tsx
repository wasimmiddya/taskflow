import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu,SidebarMenuItem} from "../ui/sidebar";
import { ChevronDown } from "lucide-react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Link } from "react-router-dom";

export const AppSidebar: React.FC = () => {
    const menuItems = [
        { id: 1, name: 'Policy Management', uri: '/admin/permission' },
        { id: 2, name: 'User Management', uri: '/admin/user' }
    ]
    return (
        <Sidebar>
            <SidebarHeader className="mt-17">
                {/* <span className="font-bold text-gray-400">APP EXPLORER</span> */}
                <Collapsible defaultOpen className="group/collapsible">
                    <SidebarGroup>
                        <SidebarGroupLabel className="text-lg" render={<CollapsibleTrigger />}>
                            Admin Explorer
                            <ChevronDown className="ml-auto transition-transform group-data-open/collapsible:rotate-180" />
                        </SidebarGroupLabel>
                        <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                            <SidebarGroupContent className="mt-1 rounded-lg border border-sidebar-border/60 bg-sidebar-accent/30 p-1">
                                <SidebarMenu>
                                    {menuItems.map((mnu, _) => (
                                        <SidebarMenuItem key={mnu.id}>
                                            <Link
                                                to={mnu.uri}
                                                className="flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-sidebar-foreground/75 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring"
                                            >
                                                {mnu.name}
                                            </Link>
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </CollapsibleContent>
                    </SidebarGroup>
                </Collapsible>
            </SidebarHeader>
            <SidebarContent>
                {/* your nav groups */}
            </SidebarContent>
        </Sidebar>
    )
}