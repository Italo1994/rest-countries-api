import { ReactNode } from "react";

interface ContainerProps {
    children?: ReactNode;
}

export function Container({children}: ContainerProps) {
    return (
        <div className="w-full pl-15 pr-15 pt-[5rem] pb-[5rem]">
            {children}
        </div>
    )
}