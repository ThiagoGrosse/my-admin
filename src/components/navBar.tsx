import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import { useMenuShow } from "@/contexts/menuSidebarContext";

export const NavBar = () => {
    const showMenuCtx = useMenuShow();

    const menuMobile = showMenuCtx?.menuMobile;
    const mobileScreen = showMenuCtx?.mobileScreen;
    const sideBarShow = showMenuCtx?.sideBarShow;

    return (
        <nav className='w-full flex-grow flex-shrink basis-auto'>
            <ul>
                <li className='group w-full flex item-center text-sm text-gray-400 rounded-md hover:text-white shadow my-2 shadow-gray-600 hover:shadow-white'>
                    <CIcon
                        icon={icon.cilHome}
                        className='w-6 mr-4 m-4 fill-white'
                    />
                    <a
                        href='#'
                        className={`${
                            sideBarShow ? "opacity-100" : "opacity-0"
                        } py-4 transition-opacity ease-out duration-500 absolute left-16 rigth-0`}>
                        Home
                    </a>
                </li>

                <li className='group w-full flex item-center text-sm text-gray-400 rounded-md hover:text-white shadow my-2 shadow-gray-600 hover:shadow-white'>
                    <CIcon
                        icon={icon.cilChartPie}
                        className='w-6 mr-4 m-4 fill-white'
                    />
                    <a
                        href='#'
                        className={`${
                            sideBarShow ? "opacity-100" : "opacity-0"
                        } py-4 transition-opacity ease-out duration-500 absolute left-16 rigth-0`}>
                        Chart
                    </a>
                </li>

                <li className='group w-full flex item-center text-sm text-gray-400 rounded-md hover:text-white shadow my-2 shadow-gray-600 hover:shadow-white'>
                    <CIcon
                        icon={icon.cilChatBubble}
                        className='w-6 mr-4 m-4 fill-white'
                    />
                    <a
                        href='#'
                        className={`${
                            sideBarShow ? "opacity-100" : "opacity-0"
                        } py-4 transition-opacity ease-out duration-500 absolute left-16 rigth-0`}>
                        Message
                    </a>
                </li>

                <li className='group w-full flex item-center text-sm text-gray-400 rounded-md hover:text-white shadow my-2 shadow-gray-600 hover:shadow-white'>
                    <CIcon
                        icon={icon.cilCog}
                        className=' w-6 mr-4 m-4 fill-white'
                    />
                    <a
                        href='#'
                        className={`${
                            sideBarShow ? "opacity-100" : "opacity-0"
                        } py-4 transition-opacity ease-out duration-500 absolute left-16 rigth-0`}>
                        Configurations
                    </a>
                </li>
            </ul>
        </nav>
    );
};
