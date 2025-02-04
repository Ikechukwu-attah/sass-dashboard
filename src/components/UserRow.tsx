"use client";
import { FiEdit, FiTrash } from "react-icons/fi";

interface User {
  id: number;
  name: string;
  email: string;
  role: "User" | "Admin";
  status: "Active" | "Inactive";
}

const UserRow = ({
  user,
  loggedInUserRole,
  setSelectedUser,
}: {
  user: User;
  loggedInUserRole: "User" | "Admin";
  setSelectedUser: (user: User) => void;
}) => {
  return (
    <tr className="border-b dark:border-gray-700">
      <td
        className="p-3 cursor-pointer text-blue-500 hover:underline"
        onClick={() => setSelectedUser(user)}
      >
        {user.name}
      </td>
      <td className="p-3">{user.email}</td>
      <td className="p-3">{user.role}</td>
      <td
        className={`p-3 ${
          user.status === "Active" ? "text-green-600" : "text-red-500"
        }`}
      >
        {user.status}
      </td>
      {loggedInUserRole === "Admin" && (
        <td className="p-3 flex space-x-2">
          <button className="text-blue-500 hover:text-blue-700">
            <FiEdit />
          </button>
          <button className="text-red-500 hover:text-red-700">
            <FiTrash />
          </button>
        </td>
      )}
    </tr>
  );
};

export default UserRow;
