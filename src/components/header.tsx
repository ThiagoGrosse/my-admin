import { NavBar } from "./navBar";
import { SideBar } from "./sidebar";

export const Header = () => {
    return (
        <header className='max-h-14 flex'>
            <SideBar />
            <NavBar />
        </header>
    );
};
