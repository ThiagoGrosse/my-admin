import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import { useEffect, useState } from "react";

export const SideBar = () => {
    const [sideBarShow, setSideBarShow] = useState<boolean>(false);
    const [menuMobile, setMenuMobile] = useState<boolean>(false);
    const [mobileScreen, setMobileScreen] = useState<boolean>(false);

    useEffect(() => {
        if (window.innerWidth < 400) {
            setMobileScreen(true);
        } else {
            setMobileScreen(false);
        }
    });

    const toggleMenuMobile = () => {
        mobileScreen && setMenuMobile(!menuMobile);
    };

    const toggleSideBar = () => {
        !mobileScreen && setSideBarShow(!sideBarShow);
    };

    return (
        <>
            <div className='fixed top-5 left-5'>
                <button
                    type='button'
                    className='flex justify-center items-center w-20 md:hidden'
                    onClick={toggleMenuMobile}>
                    <CIcon
                        icon={icon.cilHamburgerMenu}
                        className='fill-white w-6'
                    />
                    <span className='text-lg font-bold ml-2'>Menu</span>
                </button>
            </div>
            <aside
                className={`
                ${!menuMobile ? "hidden" : "block"} 
                ${mobileScreen && "w-full"}
                ${sideBarShow ? "w-20" : "w-52"}
                h-full fixed top-0 md:flex md:border-r border-gray-600 flex-col items-center px-3 py-10 transition-all duration-500 bg-black`}>
                <header className='w-full mb-4 text-center'>
                    <img
                        className='w-16 h16 mx-auto rounded-full object-cover hover:scale-105 ease-linear duration-300 border-2 border-gray-400'
                        src='https://media.licdn.com/dms/image/D4D03AQHhJSjrq3rGGA/profile-displayphoto-shrink_200_200/0/1715716539421?e=1721865600&v=beta&t=ObWAnUMIgpmQJZhCeMpHyrXbqFtjjiEu1ylrySkeBqc'
                        alt='Imagem do usuário'
                    />
                    <div className='my-2 max-h-40 truncate'>
                        Thiago Leandro Grosse
                    </div>
                </header>

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
                                    !sideBarShow ? "block" : "hidden"
                                } py-4`}>
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
                                    !sideBarShow ? "block" : "hidden"
                                } py-4`}>
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
                                    !sideBarShow ? "block" : "hidden"
                                } py-4`}>
                                Message
                            </a>
                        </li>

                        <li className='group w-full flex item-center text-sm text-gray-400 rounded-md hover:text-white shadow my-2 shadow-gray-600 hover:shadow-white'>
                            <CIcon
                                icon={icon.cilCog}
                                className='w-6 mr-4 m-4 fill-white'
                            />
                            <a
                                href='#'
                                className={`${
                                    !sideBarShow ? "block" : "hidden"
                                } py-4`}>
                                Configurations
                            </a>
                        </li>
                    </ul>
                </nav>
                {menuMobile && mobileScreen && (
                    <div className='flex w-full'>
                        <button
                            type='button'
                            className='mx-auto my-16 border border-gray-400 rounded-md py-2 px-4'
                            onClick={toggleMenuMobile}>
                            Fechar
                        </button>
                    </div>
                )}
                {!menuMobile && (
                    <button
                        type='button'
                        className='px-4 py-4 text-gray-400 shadow-md shadow-gray-600 rounded-full hover:shadow-white hover:text-white'
                        onClick={toggleSideBar}>
                        <CIcon
                            icon={
                                !sideBarShow
                                    ? icon.cilArrowThickFromRight
                                    : icon.cilArrowThickFromLeft
                            }
                            className='w-6'
                        />
                    </button>
                )}
            </aside>
        </>
    );
};
