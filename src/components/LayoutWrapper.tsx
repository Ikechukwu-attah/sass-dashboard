"use client";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname(); // ✅ Works correctly in this Client Component

  // Hide sidebar/navbar on login & signup pages
  const isAuthPage = pathname === "/login" || pathname === "/signup";

  return (
    <ThemeProviderWrapper>
      <div className="flex">
        {!isAuthPage && <Sidebar />}
        <div className="flex flex-col flex-1">
          {!isAuthPage && <Navbar />}
          <main
            className={`p-6 ${
              isAuthPage ? "flex items-center justify-center h-screen" : ""
            }`}
          >
            {children}
          </main>
        </div>
      </div>
    </ThemeProviderWrapper>
  );
};

export default LayoutWrapper;
