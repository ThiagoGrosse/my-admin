"use client";

import { SideBar } from "@/components/sidebar";
import { MenuShowProvider } from "@/contexts/menuSidebarContext";
import { UserProvider } from "@/contexts/userContext";

export default function Home() {
    return (
        <UserProvider>
            <MenuShowProvider>
                <SideBar />
                <main className='mx-6 mt-20 md:ml-64'>
                    <h1>main</h1>
                </main>
            </MenuShowProvider>
        </UserProvider>
    );
}
