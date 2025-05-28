import { Children } from "react";

export default function Container ({children} : {children: React.ReactNode}) {
    return (
        <div className="container mx-auto justify-center px-4 md:px-10 max-w-screen">
            {children}
        </div>
    )
}