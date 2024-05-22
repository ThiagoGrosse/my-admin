"use client";

import { useState } from "react";
import { SideBar } from "@/components/sidebar";

export default function Home() {

    return (
        <>
            <SideBar />
            <main className='mx-6 mt-20 md:ml-64'>
                <h1>main</h1>
            </main>
        </>
    );
}
