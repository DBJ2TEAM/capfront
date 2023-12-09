import React, { FC } from "react"
import { Navbar } from "../organisms/Navbar";

interface LayoutProps {
    children: React.ReactNode;
  }
  

export const Layout: FC<LayoutProps> = ({children}) => {
    return (
        <main>
            <Navbar />
            {children}
        </main>
    )

}