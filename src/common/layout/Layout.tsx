import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { NavBar } from "./Navbar";
import { BottomNav } from "./BottomNav";
import { Footer } from "./Footer";

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
      <main className="pt-24 px-5 lg:px-80 dark:bg-black dark:text-white">
        {children}
      </main>
      <BottomNav setIsSidebarOpen={setIsSidebarOpen} />
      <Footer />
    </div>
  );
};

export default Layout;
