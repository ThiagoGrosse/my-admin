import { useMenuShow } from "@/contexts/menuSidebarContext";
import { useUser } from "@/contexts/userContext";

export const UserMenu = () => {
    const userCtx = useUser();
    const menuCtx = useMenuShow();

    return (
        <div>
            <img
                className='w-16 h16 mx-auto rounded-full object-cover hover:scale-105 ease-linear duration-300 border-2 border-gray-400'
                src={userCtx?.imageUrl}
                alt={userCtx?.firstName + " " + userCtx?.lastName}
            />
            <div className='mt-4 max-h-40 truncate'>
                {menuCtx?.sideBarShow == false
                    ? userCtx?.firstName
                    : `${userCtx?.firstName} ${userCtx?.lastName}`}
            </div>
        </div>
    );
};
