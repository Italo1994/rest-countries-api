import { ReactNode } from "react"

interface CardProps {
    title?: string;
    children?: ReactNode;
    onClick?: () => void;
}

export function Card({children, onClick}: CardProps) {
    return (
        <div className="lg:w-[20rem] lg:h-[22rem] rounded-md shadow-lg cursor-pointer" onClick={onClick ? () => onClick() : undefined}>{children}</div>
    )
}

export function CardHeader({children}: CardProps) {
    return (
        <div className="w-full h-[50%]">{children}</div>
    )
}

export function CardTitle({title}: CardProps) {
    return (
        <h1 className="font-bold text-[1.15rem] mt-2">{title}</h1>
    )
}

export function CardDescription({children}: CardProps) {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-5">{children}</div>
    )
}

