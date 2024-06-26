import { FaArrowLeft, FaArrowRight, FaBars } from "react-icons/fa6";

import { useEffect } from "react";
import { useMenuShow } from "@/contexts/menuSidebarContext";
import { UserMenu } from "./userMenu";
import { NavBar } from "./navBar";

export const SideBar = () => {
    const showMenuCtx = useMenuShow();

    useEffect(() => {
        if (window.innerWidth < 640) {
            showMenuCtx?.setMobileScreen(true);
            showMenuCtx?.setSidebarScreen(false);
        } else {
            showMenuCtx?.setMobileScreen(false);
            showMenuCtx?.setSidebarScreen(true);
        }
    });

    const menuMobile = showMenuCtx?.menuMobile;
    const mobileScreen = showMenuCtx?.mobileScreen;
    const sideBarShow = showMenuCtx?.sideBarShow;

    const handleSidebarToogle = () => {
        showMenuCtx?.setSideBarShow(!showMenuCtx?.sideBarShow);
    };

    const handleMenuMobileToogle = () => {
        showMenuCtx?.setMenuMobile(!showMenuCtx.menuMobile);
    };

    return (
        <>
            <div className='fixed top-5 left-5'>
                <button
                    type='button'
                    className='flex justify-center items-center w-20 md:hidden'
                    onClick={handleMenuMobileToogle}>
                    <FaBars />

                    <span className='text-lg font-bold ml-2'>Menu</span>
                </button>
            </div>
            <aside
                className={`
                ${!menuMobile ? "hidden" : "block"} 
                ${mobileScreen && "w-full"}
                ${!sideBarShow ? "w-24" : "w-60"}
                h-full fixed top-0 md:flex md:border-r border-gray-600 flex-col items-center px-3 py-10 transition-all duration-300 bg-black`}>
                <header className='w-full mb-4 text-center'>
                    <UserMenu />
                </header>

                <NavBar />
                {menuMobile && mobileScreen && (
                    <div className='flex w-full'>
                        <button
                            type='button'
                            className='mx-auto my-16 border border-gray-400 rounded-md py-2 px-4'
                            onClick={handleMenuMobileToogle}>
                            Fechar
                        </button>
                    </div>
                )}
                {!menuMobile && (
                    <button
                        type='button'
                        className='p-4 rounded-full shadow-md shadow-gray-800 border border-gray-800 hover:border-white/30 hover:shadow-white/30'
                        onClick={handleSidebarToogle}>
                        {sideBarShow && <FaArrowLeft />}
                        {!sideBarShow && <FaArrowRight />}
                    </button>
                )}
            </aside>
        </>
    );
};
