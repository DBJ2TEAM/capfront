import React, { FC } from "react";
import { Navbar } from "../organisms/Navbar";
import { Banner } from "../molecules";
import Footer from "./Footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Banner />
      <main>{children}</main>
      <Footer />
    </>
  );
};