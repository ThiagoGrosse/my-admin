import { MenuShowType } from "@/types/menuShowType";
import { ReactNode, createContext, useContext, useState } from "react";

export const MenuShowContext = createContext<MenuShowType | null>(null);

export const MenuShowProvider = ({ children }: { children: ReactNode }) => {
    const [sideBarShow, setSideBarShow] = useState<boolean>(true);
    const [menuMobile, setMenuMobile] = useState<boolean>(false);
    const [mobileScreen, setMobileScreen] = useState<boolean>(false);

    return (
        <MenuShowContext.Provider
            value={{
                sideBarShow,
                setSideBarShow,
                menuMobile,
                setMenuMobile,
                mobileScreen,
                setMobileScreen,
            }}>
            {children}
        </MenuShowContext.Provider>
    );
};

export const useMenuShow = () => useContext(MenuShowContext);
