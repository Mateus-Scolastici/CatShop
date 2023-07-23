import { ReactNode } from "react"


interface Props {
    children: ReactNode;
}

const Shop = ({children}:Props) => {
    return (
        <div className="text-black flex flex-wrap h-full items-center gap-x-5">
            {children}
        </div>
    )
}

export default Shop