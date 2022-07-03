import React from "react";
import Nav from "./Nav";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen overflow-hidden flex">
      <Nav />
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default Layout;
