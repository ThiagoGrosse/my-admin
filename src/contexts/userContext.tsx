import { UserData } from "@/data/user";
import { UserType } from "@/types/userType";
import { ReactNode, useContext } from "react";
import { createContext } from "react";

export const UserContext = createContext<UserType>(UserData);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    return (
        <UserContext.Provider value={UserData}>{children}</UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
