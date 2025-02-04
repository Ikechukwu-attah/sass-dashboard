"use client";
import { FiUser } from "react-icons/fi";

interface User {
  id: number;
  name: string;
  email: string;
  role: "User" | "Admin";
  status: "Active" | "Inactive";
}

const UserProfileModal = ({
  user,
  setSelectedUser,
}: {
  user: User;
  setSelectedUser: (user: null) => void;
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center">
          <FiUser className="mr-2" /> User Profile
        </h2>
        <p className="mb-2">
          <strong>Name:</strong> {user.name}
        </p>
        <p className="mb-2">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="mb-2">
          <strong>Role:</strong> {user.role}
        </p>
        <p className="mb-4">
          <strong>Status:</strong> {user.status}
        </p>
        <button
          onClick={() => setSelectedUser(null)}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default UserProfileModal;
