import { ReactNode } from "react"


interface Props {
    children: ReactNode;
}

const Shop = ({children}:Props) => {
    return (
        <div className="text-black flex flex-wrap justify-center h-full w-full mt-[20px] gap-x-[100px]">
            {children}
        </div>
    )
}

export default Shop