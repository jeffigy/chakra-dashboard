import Navbar from "components/Navbar/Navbar";
import Sidebar from "components/Sidebar/Sidebar";
import React from "react";
type LayoutProps = {
  children: React.ReactNode;
};
export default function Layout() {
  return (
    <>
      <Sidebar />
      <Navbar />
      <main>body component</main>
    </>
  );
}
