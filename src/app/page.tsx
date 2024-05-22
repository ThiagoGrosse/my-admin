"use client";

import { Main } from "@/components/main";
import { SideBar } from "@/components/sidebar";
import { MenuShowProvider } from "@/contexts/menuSidebarContext";
import { UserProvider } from "@/contexts/userContext";

export default function Home() {
    return (
        <UserProvider>
            <MenuShowProvider>
                <SideBar />
                <Main />
            </MenuShowProvider>
        </UserProvider>
    );
}
