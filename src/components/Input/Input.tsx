
interface InputProps {
    onChange?: (e: any) => void;
}

export function Input({onChange}: InputProps) {
    return (
        <input type="text" className="p-4 mb-15 lg:w-[30rem] bg-white outline-white shadow-lg rounded-md" placeholder="Search for a country" onChange={onChange} />
    )
}