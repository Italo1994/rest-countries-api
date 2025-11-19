import { ReactNode } from "react";

interface ContainerCountryProps {
    children?: ReactNode;
}

export function ContainerCountry({children}: ContainerCountryProps) {
    return (
        <div className="w-full grid lg:grid-cols-4 gap-10">
            {children}
        </div>
    )
}