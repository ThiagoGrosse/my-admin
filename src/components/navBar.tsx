import { FormSearch } from "./headerComponents/formSearch";

export const NavBar = () => {
    return (
        <nav className='fixed top-0 right-0 left-0 bg-gray-900 w-full h-20'>
            <FormSearch />
        </nav>
    );
};
