"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SignupForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullname || !email || !password) {
      setError("All fields are required");
      return;
    }

    // Retrieve stored users (ensure it's an array)
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Check if user already exists
    if (
      users.some(
        (user: any) =>
          user.email.trim().toLowerCase() === email.trim().toLowerCase()
      )
    ) {
      setError("User already exists. Try logging in.");
      return;
    }

    // Assign role based on the first registered user
    const role = users.length === 0 ? "Admin" : "User"; // First user becomes Admin

    // Store user (Password should be hashed in a real app)
    const newUser = { fullname, email, password, role };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    router.push("/login"); // Redirect to login after signup
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSignup}
        className="bg-white dark:bg-gray-800 p-6 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-200 text-center">
          Sign Up
        </h2>
        {error && <p className="text-red-500 text-center">{error}</p>}

        <input
          type="text"
          placeholder="Full Name"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          className="w-full p-2 mt-4 border rounded dark:bg-gray-700 dark:text-white"
        />
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
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
