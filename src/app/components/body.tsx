import { ReactNode } from "react"


interface Props {
    children: ReactNode;
}

const Body = ({children}:Props) => {
    return (
        <div className="text-black flex flex-row h-screen items-center gap-x-5">
            {children}
        </div>
    )
}

export default Body