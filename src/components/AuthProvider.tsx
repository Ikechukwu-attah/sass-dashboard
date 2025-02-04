"use client";
import { createContext, useEffect, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";

interface User {
  email: string;
  password: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

// Ensure we correctly define and provide the AuthContext
export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  // Check local storage for logged-in user on mount
  useEffect(() => {
    const storedUser = JSON.parse(
      localStorage.getItem("loggedInUser") || "null"
    );
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Login function
  const login = (email: string, password: string) => {
    console.log("Attempting login for:", email, password);

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = users.find(
      (u: User) => u.email === email && u.password === password
    );

    if (foundUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
      setUser(foundUser);
      router.push("/dashboard"); // Redirect after login
      return true;
    }

    return false;
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    router.push("/login"); // Redirect after logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
