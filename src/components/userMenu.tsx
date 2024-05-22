import { useUser } from "@/contexts/userContext";

export const UserMenu = () => {
    const userCtx = useUser();

    return (
        <div>
            <img
                className='w-16 h16 mx-auto rounded-full object-cover hover:scale-105 ease-linear duration-300 border-2 border-gray-400'
                src={userCtx?.imageUrl}
                alt={userCtx?.name}
            />
            <div className='my-2 max-h-40 truncate'>{userCtx?.name}</div>
        </div>
    );
};
