import { MenuShowType } from "@/types/menuShowType";
import { ReactNode, createContext, useContext, useState } from "react";

export const MenuShowContext = createContext<MenuShowType | null>(null);

export const MenuShowProvider = ({ children }: { children: ReactNode }) => {
    const [sideBarShow, setSideBarShow] = useState<boolean>(true);
    const [menuMobile, setMenuMobile] = useState<boolean>(false);
    const [mobileScreen, setMobileScreen] = useState<boolean>(false);
    const [sidebarScreen, setSidebarScreen] = useState(true);

    return (
        <MenuShowContext.Provider
            value={{
                sideBarShow,
                setSideBarShow,
                menuMobile,
                setMenuMobile,
                mobileScreen,
                setMobileScreen,
                sidebarScreen,
                setSidebarScreen,
            }}>
            {children}
        </MenuShowContext.Provider>
    );
};

export const useMenuShow = () => useContext(MenuShowContext);
