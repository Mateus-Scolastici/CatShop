import { ReactNode } from "react"

interface Props {
    children: ReactNode;
}

const Product = ({children}:Props) => {
    return (
        <div className="text-white flex flex-col h-20 items-center px-10 gap-1.5 my-[120px]">
            {children}
        </div>
    )
}

export default Product