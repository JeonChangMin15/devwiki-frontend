import React from "react";
import { NavBar } from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      <main className="pt-20">{children}</main>
    </>
  );
};

export default Layout;
