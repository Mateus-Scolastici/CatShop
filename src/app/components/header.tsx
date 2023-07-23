import { ReactNode } from "react"

interface Props {
    children: ReactNode;
}

const Header = ({children}:Props) => {
    return (
        <header className="text-white flex h-20 items-center gap-x-5 px-10">
            {children}
        </header>
    )
}

export default Header