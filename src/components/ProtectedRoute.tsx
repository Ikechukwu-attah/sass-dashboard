"use client";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "./AuthProvider";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const auth = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!auth?.user) {
      router.push("/login");
    }
  }, [auth, router]);

  return <>{auth?.user ? children : null}</>;
};

export default ProtectedRoute;
