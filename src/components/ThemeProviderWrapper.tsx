"use client";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="opacity-0">{children}</div>; // Prevent hydration mismatch
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {children}
    </ThemeProvider>
  );
}
