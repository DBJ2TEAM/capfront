import React, { FC } from "react"
import { Navbar } from "../organisms/Navbar";

interface LayoutProps {
    children: React.ReactNode;
  }
  

export const Layout: FC<LayoutProps> = ({children}) => {
    return (
        <>
            <Navbar />
            <main>
            </main>
        </>
    )

}