import { useMenuShow } from "@/contexts/menuSidebarContext";

export const Main = () => {
    const showMenu = useMenuShow();

    const sideBarShow = showMenu?.sideBarShow;
    const mobileScreen = showMenu?.mobileScreen;
    const sidebarScreen = showMenu?.sidebarScreen;

    return (
        <main
            className={`${sideBarShow && sidebarScreen && "ml-64 mt-5"}
            ${!sideBarShow && sidebarScreen && "ml-28 mt-5"}
            ${mobileScreen && "ml-5 mt-16"}
             mr-5 bg-blue-500 transition-all duration-300`}>
            <h1>teste</h1>
        </main>
    );
};
