import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu,SidebarMenuItem} from "../ui/sidebar";
import { ChevronDown } from "lucide-react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

export const AppSidebar: React.FC = () => {
    return (
        <Sidebar>
            <SidebarHeader className="mt-17">
                <span className="font-bold text-gray-400">APP EXPLORER</span>
                <Collapsible defaultOpen className="group/collapsible">
                    <SidebarGroup>
                        <SidebarGroupLabel render={<CollapsibleTrigger />}>
                            Help
                            <ChevronDown className="ml-auto transition-transform group-data-open/collapsible:rotate-180" />
                        </SidebarGroupLabel>
                        <CollapsibleContent>
                            <SidebarGroupContent >
                                <SidebarMenu>
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <SidebarMenuItem key={index}>
                                            <li>item-{index}</li>
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