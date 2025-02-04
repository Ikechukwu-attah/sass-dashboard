"use client";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "./AuthProvider";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useContext(AuthContext);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!auth) {
      console.error("AuthContext is not available.");
      setError("Authentication error.");
      return;
    }

    console.log("Trying to login with:", email, password);

    if (auth.login(email, password)) {
      console.log("Login successful, redirecting...");
      router.push("/dashboard"); // ✅ Redirect immediately after login
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-200 text-center">
          Login
        </h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mt-4 border rounded dark:bg-gray-700 dark:text-white"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mt-4 border rounded dark:bg-gray-700 dark:text-white"
        />
        <button
          type="submit"
          className="w-full mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
      <p className="text-center text-gray-600 dark:text-gray-300 mt-4">
        Don't have an account?{" "}
        <a href="/signup" className="text-blue-500 hover:underline">
          Sign Up
        </a>
      </p>
    </div>
  );
};

export default LoginForm;
