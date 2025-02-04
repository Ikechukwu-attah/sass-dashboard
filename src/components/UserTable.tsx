"use client";
import { useState } from "react";
import { FiPlus, FiChevronDown, FiChevronUp } from "react-icons/fi";
import UserRow from "./UserRow";
import UserSearch from "./UserSearch";
import UserPagination from "./UserPagination";
import UserProfileModal from "./UserProfileModal";

// Define a User type
interface User {
  id: number;
  name: string;
  email: string;
  role: "User" | "Admin";
  status: "Active" | "Inactive";
}

// Sample user data
const usersData: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 4,
    name: "Sarah White",
    email: "sarah@example.com",
    role: "User",
    status: "Active",
  },
];

const loggedInUserRole: User["role"] = "Admin"; // Change to "User" to test restrictions

const UserTable = () => {
  const [users, setUsers] = useState<User[]>(usersData);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof User;
    direction: "asc" | "desc";
  } | null>(null);

  // Sorting function
  const handleSort = (key: keyof User) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig?.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sortedUsers = [...users].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setUsers(sortedUsers);
  };

  // Filter users based on search query
  let filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get users for the current page
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 shadow rounded-lg overflow-x-auto">
      {/* Search & Add User */}
      <div className="flex justify-between items-center mb-4">
        <UserSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        {loggedInUserRole === "Admin" && (
          <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center space-x-2 hover:bg-blue-600">
            <FiPlus />
            <span>Add User</span>
          </button>
        )}
      </div>

      {/* User Table */}
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            {["name", "email", "role", "status"].map((key) => (
              <th
                key={key}
                className="p-3 text-gray-600 dark:text-gray-300 whitespace-nowrap text-sm font-medium"
                onClick={() => handleSort(key as keyof User)}
              >
                <div className="flex items-center space-x-1 cursor-pointer">
                  <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                  {sortConfig?.key === key &&
                    (sortConfig.direction === "asc" ? (
                      <FiChevronUp />
                    ) : (
                      <FiChevronDown />
                    ))}
                </div>
              </th>
            ))}
            {loggedInUserRole === "Admin" && (
              <th className="p-3 text-gray-600 dark:text-gray-300 whitespace-nowrap text-sm font-medium">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <UserRow
              key={user.id}
              user={user}
              loggedInUserRole={loggedInUserRole}
              setSelectedUser={setSelectedUser}
            />
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <UserPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={Math.ceil(filteredUsers.length / usersPerPage)}
      />

      {/* User Profile Modal */}
      {selectedUser && (
        <UserProfileModal
          user={selectedUser}
          setSelectedUser={setSelectedUser}
        />
      )}
    </div>
  );
};

export default UserTable;
