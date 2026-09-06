import { Navbar } from "@/components/common/Navbar";
import { Button } from "@/components/ui/button"

import {
    Avatar,
    AvatarFallback,
} from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";

import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { AppSidebar } from "../common/AppSidebar";
import { Bell, BellDot, BellRing } from "lucide-react";
import { useState } from "react";
import { Outlet } from "react-router-dom";


export default function AppLayout(
    // { children }: { children: React.ReactNode }
) {
    const [toggleBell, setToggleBell] = useState(true);
    const Profile = () => (
        <Avatar size="lg">
            <AvatarFallback>UH</AvatarFallback>
        </Avatar>
    );

    return (
        <div className="flex flex-col h-screen">
            <Navbar >
                <DropdownMenu>
                    <div className="mr-12">
                        {toggleBell ? <BellRing /> : <Bell />}
                    </div>
                    <DropdownMenuTrigger render={
                        <Button variant="ghost" size="icon" className="rounded-full">
                            <Profile />
                        </Button>
                    } />
                    <DropdownMenuContent align="end">
                        <DropdownMenuGroup>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>Sign Out</DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </Navbar>

            <SidebarProvider className="flex-1 min-h-0">
                <AppSidebar />
                <div className="flex-1 min-w-0 overflow-auto">
                    <div className="p-4">
                        <Outlet />
                    </div>
                </div>
            </SidebarProvider>
        </div>
    )
}