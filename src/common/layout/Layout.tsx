import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { NavBar } from "./Navbar";
import { BottomNav } from "./BottomNav";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative">
      {isSidebarOpen && (
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      )}
      <NavBar setIsSidebarOpen={setIsSidebarOpen} />
      <main className="pt-24 px-5 lg:px-40">{children}</main>
      <BottomNav setIsSidebarOpen={setIsSidebarOpen} />
    </div>
  );
};

export default Layout;
