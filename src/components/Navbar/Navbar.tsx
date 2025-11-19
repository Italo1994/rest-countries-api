import { ReactNode } from "react";

interface NavbarProps {
    children?: ReactNode;
}

export function Navbar({children}: NavbarProps) {
    return (
        <nav className="flex justify-between bg-white  items-center px-15 h-[5rem] w-full shadow-lg">
            {children}
        </nav>
    )
}