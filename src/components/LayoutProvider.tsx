"use client";

import { usePathname } from "next/navigation";
import { Nav } from "@/components/Nav";
import Footer from "@/components/Footer";

const disableNavbar = ['login', 'admin', 'obral'];

export default function LayoutProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideLayout = disableNavbar.includes(pathname.split('/')[1]);

  return (
    <>
      {!hideLayout && <Nav />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}
