import { useMenuShow } from "@/contexts/menuSidebarContext";
import { useEffect } from "react";
import {
    FaBoxesStacked,
    FaChartPie,
    FaCreditCard,
    FaGears,
} from "react-icons/fa6";

export const NavBar = () => {
    const showMenuCtx = useMenuShow();

    const sideBarShow = showMenuCtx?.sideBarShow;

    const handleClicked = (id: string) => {
        document
            .querySelector(`[dataType="${id}"]`)
            ?.classList.toggle("hidden");
    };

    return (
        <nav className='w-full flex-grow flex-shrink basis-auto'>
            <ul>
                <li className='rounded-md my-4 shadow-md shadow-gray-800 border border-gray-800 hover:border-white/30 hover:shadow-white/30'>
                    <a href='#' className='flex items-center py-2 px-6'>
                        <FaChartPie className='size-7' />
                        <span
                            className={`${
                                sideBarShow ? "opacity-100" : "opacity-0"
                            } absolute left-24 transition-opacity duration-500`}>
                            Home
                        </span>
                    </a>
                </li>

                <li className='w-full rounded-md my-4 shadow-md shadow-gray-800 border border-gray-800 hover:border-white/30 hover:shadow-white/30'>
                    <button
                        id='btnProducts'
                        className='w-full flex items-center py-2 px-6'
                        onClick={(e) => handleClicked(e.currentTarget.id)}>
                        <FaBoxesStacked className='size-7' />
                        <span
                            className={`${
                                sideBarShow ? "opacity-100" : "opacity-0"
                            } absolute left-24 transition-opacity duration-500`}>
                            Produtos
                        </span>
                    </button>
                </li>
                <div
                    className='hidden items-end justify-end text-end'
                    datatype='btnProducts'>
                    <ul
                        className={`text-sm py-2 px-4 rounded-md ${
                            !sideBarShow
                                ? `bg-white text-gray-600 w-52 ml-2 absolute top-32 z-10
                            after:absolute after:w-0 after:h-0 
                            after:border-l-[20px] after:border-r-transparent
                            after:border-r-[20px] after:border-l-transparent
                            after:border-t-[20px] after:border-t-white
                            after:bottom-[-20px] after:left-[10%]
                            `
                                : `bg-gray-800/40 text-gray-400`
                        }`}>
                        <li
                            className={`py-2 ${
                                !sideBarShow
                                    ? "hover:text-black hover:font-bold"
                                    : "hover:text-white hover:font-bold"
                            }`}>
                            <a href='#'>Lista de Produtos</a>
                        </li>
                        <li
                            className={`py-2 ${
                                !sideBarShow
                                    ? "hover:text-black hover:font-bold"
                                    : "hover:text-white hover:font-bold"
                            }`}>
                            <a href='#'>Estoque</a>
                        </li>
                    </ul>
                </div>

                <li className='rounded-md my-4 shadow-md shadow-gray-800 border border-gray-800 hover:border-white/30 hover:shadow-white/30'>
                    <button
                        id='btnSales'
                        className='w-full flex items-center py-2 px-6'
                        onClick={(e) => handleClicked(e.currentTarget.id)}>
                        <FaCreditCard className='size-7' />
                        <span
                            className={`${
                                sideBarShow ? "opacity-100" : "opacity-0"
                            } absolute left-24 transition-opacity duration-500`}>
                            Vendas
                        </span>
                    </button>
                </li>
                <div
                    className='hidden items-end justify-end text-end'
                    datatype='btnSales'>
                    <ul className={`text-sm py-2 px-4 rounded-md ${
                            !sideBarShow
                                ? `bg-white text-gray-600 w-52 ml-2 absolute top-48
                            after:absolute after:w-0 after:h-0 
                            after:border-l-[20px] after:border-r-transparent
                            after:border-r-[20px] after:border-l-transparent
                            after:border-t-[20px] after:border-t-white
                            after:bottom-[-20px] after:left-[10%]
                            `
                                : `bg-gray-800/40 text-gray-400`
                        }`}>
                        <li
                            className={`py-2 ${
                                !sideBarShow
                                    ? "hover:text-black hover:font-bold"
                                    : "hover:text-white hover:font-bold"
                            }`}>
                            <a href='#'>Lista de Pedidos</a>
                        </li>
                        <li
                            className={`py-2 ${
                                !sideBarShow
                                    ? "hover:text-black hover:font-bold"
                                    : "hover:text-white hover:font-bold"
                            }`}>
                            <a href='#'>Clientes</a>
                        </li>
                    </ul>
                </div>

                <li className='rounded-md my-4 shadow-md shadow-gray-800 border border-gray-800 hover:border-white/30 hover:shadow-white/30'>
                    <a href='#' className='flex items-center py-2 px-6'>
                        <FaGears className='size-7' />
                        <span
                            className={`${
                                sideBarShow ? "opacity-100" : "opacity-0"
                            } absolute left-24 transition-opacity duration-500`}>
                            Configurações
                        </span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};
